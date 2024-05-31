import { logger } from './logger';
import { config, EnumBilingualLocalizationOrder, i18n, i18nRegex, i18nScope, scopedSource } from './options';
import { htmlEncode, parseHtmlStringToElement } from './html';
import { EnumBiligualPlaceholder, ignore_selector } from './const';
import { _gradioApp, querySelectorAll } from './dom';
import { IElement, IMutationRecord } from './types';

const re_num = /^[\.\d]+$/;
const re_emoji = /[\p{Extended_Pictographic}\u{1F3FB}-\u{1F3FF}\u{1F9B0}-\u{1F9B3}]/u;

export const enum EnumTranslateType
{
	'text' = 'text',
	'element' = 'element',
	'option' = 'option',
	'title' = 'title',
	'placeholder' = 'placeholder',
}

function checkRegex(source: string)
{
	for (const [regex, value] of i18nRegex.entries())
	{
		if (regex.test(source))
		{
			logger.log('regex', regex, source, value)
			return source.replace(regex, value)
		}
	}
}

function doTranslate(el: IElement, source: string, type: EnumTranslateType)
{
	source = source.trim();

	if (!source?.length) return
	if (re_num.test(source)) return
	// if (re_emoji.test(source)) return

	let translation = i18n[source] || checkRegex(source),
		scopes = scopedSource[source]

	if (scopes)
	{
		logger.log('scope', el, source, scopes);
		for (let scope of scopes)
		{
			if (el.parentElement.closest(scope))
			{
				translation = i18nScope[scope][source]
				break
			}
		}
	}

	if (!translation || source === translation)
	{
		if (el.textContent === '__biligual__will_be_replaced__') el.textContent = source // restore original text if translation not exist
		if (el.nextSibling?.className === 'bilingual__trans_wrapper') el.nextSibling.remove() // remove exist translation if translation not exist
		return
	}

	if (config.order === EnumBilingualLocalizationOrder.ORIGINAL_FIRST)
	{
		[source, translation] = [translation, source]
	}

	switch (type)
	{
		case EnumTranslateType.text:
			el.textContent = translation
			break;

		case EnumTranslateType.element:
			const htmlStr = `<div class="bilingual__trans_wrapper">${htmlEncode(translation)}<em>${htmlEncode(source)}</em></div>`
			const htmlEl = parseHtmlStringToElement(htmlStr)
			if (el.hasChildNodes())
			{
				const textNode = Array.from(el.childNodes).find(node =>
					node.nodeName === '#text' &&
					(node.textContent.trim() === source || node.textContent.trim() === '__biligual__will_be_replaced__')
				)

				if (textNode)
				{
					textNode.textContent = ''
					if (textNode.nextSibling?.className === 'bilingual__trans_wrapper') textNode.nextSibling.remove()
					textNode.parentNode.insertBefore(htmlEl, textNode.nextSibling)
				}
			}
			else
			{
				el.textContent = ''
				if (el.nextSibling?.className === 'bilingual__trans_wrapper') el.nextSibling.remove()
				el.parentNode.insertBefore(htmlEl, el.nextSibling)
			}
			break;

		case EnumTranslateType.option:
			el.textContent = `${translation} (${source})`
			break;

		case EnumTranslateType.title:
			el.title = `${translation}\n${source}`
			break;

		case EnumTranslateType.placeholder:
			el.placeholder = `${translation}\n\n${source}`
			break;

		default:
			return translation
	}
}

/**
 * Translate element
 */
function translateEl(el: IElement, {
	deep = false,
	rich = false
} = {})
{
	if (!i18n) return // translation not ready.
	if (el.matches?.(ignore_selector)) return // ignore some elements.

	if (el.title)
	{
		doTranslate(el, el.title, EnumTranslateType.title)
	}

	if (el.placeholder)
	{
		doTranslate(el, el.placeholder, EnumTranslateType.placeholder)
	}

	if (el.tagName === 'OPTION')
	{
		doTranslate(el, el.textContent, EnumTranslateType.option)
	}

	if (deep || rich)
	{
		Array.from(el.childNodes).forEach(node =>
		{
			if (node.nodeName === '#text')
			{
				if (rich)
				{
					doTranslate(node, node.textContent, EnumTranslateType.text)
					return
				}

				if (deep)
				{
					doTranslate(node, node.textContent, EnumTranslateType.element)
				}
			}
			else if (node.childNodes.length > 0)
			{
				translateEl(node, { deep, rich })
			}
		})
	}
	else
	{
		doTranslate(el, el.textContent, EnumTranslateType.element)
	}
}

/**
 * Translate page
 */
async function translatePage()
{
	logger.time('Full Page')
	querySelectorAll([
		"label span, fieldset span, button", // major label and button description text
		"textarea[placeholder], select, option", // text box placeholder and select element
		".transition > div > span:not([class])", ".label-wrap > span", // collapse panel added by extension
		".gradio-image>div.float", // image upload description
		".gradio-file>div.float", // file upload description
		".gradio-code>div.float", // code editor description
		"#modelmerger_interp_description .output-html", // model merger description
		"#modelmerger_interp_description .gradio-html", // model merger description
		"#lightboxModal span" // image preview lightbox
	])
		.forEach(el => translateEl(el, { deep: true }))

	querySelectorAll([
		'div[data-testid="image"] > div > div', // description of image upload panel
		'#extras_image_batch > div', //  description of extras image batch file upload panel
		".output-html:not(#footer), .gradio-html:not(#footer), .output-markdown, .gradio-markdown", // output html exclude footer
		'#dynamic-prompting' // dynamic-prompting extension
	])
		.forEach(el => translateEl(el, { rich: true }))

	logger.timeEnd('Full Page')
}

function delegateEvent(parent: ReturnType<typeof gradioApp>, eventType: string, selector: string, handler)
{
	parent.addEventListener(eventType, function (event)
	{
		let target = event.target as EventTarget & IElement;
		while (target !== parent)
		{
			if (target.matches(selector))
			{
				handler.call(target, event);
			}
			target = target.parentNode;
		}
	});
}

async function handleDropdown()
{
	// process gradio dropdown menu
	delegateEvent(_gradioApp(), 'mousedown', 'ul.options .item', function (event)
	{
		const { target } = event

		if (!target.classList.contains('item'))
		{
			// simulate click menu item
			target.closest('.item').dispatchEvent(new Event('mousedown', { bubbles: true }))
			return
		}

		const source = target.dataset.value
		const $labelEl = target?.closest('.wrap')?.querySelector('.wrap-inner .single-select') // the label element

		if (source && $labelEl)
		{
			$labelEl.title = titles?.[source] || '' // set title from hints.js
			$labelEl.textContent = EnumBiligualPlaceholder.will_be_replaced // marked as will be replaced
			doTranslate($labelEl, source, EnumTranslateType.element) // translate the label element
		}
	});
}

export async function translateAll()
{
	return Promise.allSettled([
		translatePage(),
		handleDropdown(),
	])
}

export function initObserver()
{
	let _count = 0

	// @ts-ignore
	const observer = new MutationObserver(async (mutations: IMutationRecord[]) =>
	{
		let _nodesCount = 0, _now = performance.now()

		for (const mutation of mutations)
		{
			if (mutation.type === 'characterData')
			{
				if (mutation.target?.parentElement?.parentElement?.tagName === 'LABEL')
				{
					translateEl(mutation.target)
				}
			}
			else if (mutation.type === 'attributes')
			{
				_nodesCount++
				translateEl(mutation.target)
			}
			else
			{
				mutation.addedNodes.forEach(node =>
				{
					if (node.classList?.contains(EnumBiligualPlaceholder.trans_wrapper)) return

					_nodesCount++
					if (node.nodeType === 1 && /(output|gradio)-(html|markdown)/.test(node.className))
					{
						translateEl(node, { rich: true })
					}
					else if (node.nodeType === 3)
					{
						doTranslate(node, node.textContent, EnumTranslateType.text)
					}
					else
					{
						translateEl(node, { deep: true })
					}
				})
			}
		}

		if (_nodesCount > 0)
		{
			logger.info(`UI Update #${_count++}: ${performance.now() - _now} ms, ${_nodesCount} nodes`, mutations)
		}
	})

	observer.observe(gradioApp(), {
		characterData: true,
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: ['title', 'placeholder']
	})

	return observer
}
