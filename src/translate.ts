import { logger } from './logger';
import { config, EnumBilingualLocalizationOrder, i18n, i18nRegex, i18nScope, scopedSource } from './options';
import { htmlEncode, parseHtmlStringToElement } from './html';
import { EnumBiligualPlaceholder } from './const';
import { _gradioApp, querySelectorAll } from './dom';
import { EnumTranslateType, IDoTranslateCb, IElement, IEvent, IMutationRecord, IOptionsTranslateEl } from './types';
import { classListContains, isIgnoreTranslateNode } from './util';

const re_num = /^[\.\d]+$/;
const re_emoji = /[\p{Extended_Pictographic}\u{1F3FB}-\u{1F3FF}\u{1F9B0}-\u{1F9B3}]/u;

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

function doTranslate(el: IElement, source: string, type: EnumTranslateType, cb?: IDoTranslateCb, ...args)
{
	source = source.trim();

	if (!source.length || re_num.test(source)) return
	// if (re_emoji.test(source)) return

	let translation: string
	const scopes = scopedSource[source];

	if (scopes)
	{
		ESBUILD_DEBUG && logger.debug('doTranslate', 'scope', el, source, scopes);
		for (let scope of scopes)
		{
			if (el.parentElement.closest(scope))
			{
				translation = i18nScope[scope][source]
				break
			}
		}
	}

	translation ??= i18n[source] || checkRegex(source);

	if (!translation || source === translation)
	{
		if (el.textContent === EnumBiligualPlaceholder.will_be_replaced) el.textContent = source // restore original text if translation not exist
		if (classListContains(el.nextSibling, EnumBiligualPlaceholder.trans_wrapper)) el.nextSibling.remove() // remove exist translation if translation not exist
		return
	}

	const isTranslationIncludeSource = translation.startsWith(source);

	const isOriginalFirst = config.order === EnumBilingualLocalizationOrder.ORIGINAL_FIRST;

	/**
	 * for isOriginalFirst = true
	 */
	let translationOnly = translation;

	if (isOriginalFirst)
	{
		[source, translation] = [translation, source]
	}

	switch (type)
	{
		case EnumTranslateType.text:
			el.textContent = translationOnly
			break;

		case EnumTranslateType.element:

			if (isTranslationIncludeSource)
			{
				if (el.nodeType === 3)
				{
					el.nodeValue = translationOnly;
				}
				else if (htmlEncode(el.textContent) === el.innerHTML)
				{
					el.innerHTML = htmlEncode(translationOnly)
				}
				break;
			}

			const htmlEl = parseHtmlStringToElement(`<div class="${EnumBiligualPlaceholder.trans_wrapper}">${htmlEncode(translation)}<em class="${EnumBiligualPlaceholder.trans_source}">${htmlEncode(source)}</em></div>`)

			if (el.hasChildNodes())
			{
				const textNode = Array.from(el.childNodes).find(node =>
					node.nodeName === '#text' &&
					(node.textContent.trim() === source || node.textContent.trim() === EnumBiligualPlaceholder.will_be_replaced)
				)

				if (textNode)
				{
					textNode.textContent = ''
					if (classListContains(textNode.nextSibling, EnumBiligualPlaceholder.trans_wrapper)) textNode.nextSibling.remove()
					textNode.parentNode.insertBefore(htmlEl, textNode.nextSibling)
				}
			}
			else
			{
				el.textContent = ''
				if (classListContains(el.nextSibling, EnumBiligualPlaceholder.trans_wrapper)) el.nextSibling.remove()
				el.parentNode.insertBefore(htmlEl, el.nextSibling)
			}
			break;

		case EnumTranslateType.option:
			el.textContent = isTranslationIncludeSource ? translationOnly : `${translation} (${source})`
			break;

		case EnumTranslateType.title:
			el.title = isTranslationIncludeSource ? translationOnly : `${translation}\n${source}`
			break;

		case EnumTranslateType.placeholder:
			el.placeholder = isTranslationIncludeSource ? translationOnly : `${translation}\n\n${source}`
			break;

		default:
			return translationOnly
	}

	cb?.(el, isOriginalFirst ? translation : source, type, translationOnly, args);
}

/**
 * Translate element
 */
function translateEl(el: IElement, {
	deep = false,
	rich = false,
	addCount,
	cb,
}: IOptionsTranslateEl = {})
{
	if (isIgnoreTranslateNode(el)) return false // ignore some elements.

	addCount?.();

	if (el.title)
	{
		doTranslate(el, el.title, EnumTranslateType.title, cb)
	}

	if (el.placeholder)
	{
		doTranslate(el, el.placeholder, EnumTranslateType.placeholder, cb)
	}

	if (el.tagName === 'OPTION')
	{
		doTranslate(el, el.textContent, EnumTranslateType.option, cb)
	}

	if (deep || rich)
	{
		Array.from(el.childNodes).forEach(node =>
		{
			if (node.nodeName === '#text')
			{
				if (rich)
				{
					doTranslate(node, node.textContent, EnumTranslateType.text, cb)
					return
				}

				if (deep)
				{
					doTranslate(node, node.textContent, EnumTranslateType.element, cb)
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
		doTranslate(el, el.textContent, EnumTranslateType.element, cb)
	}
}

/**
 * Translate page
 */
async function translatePage()
{
	const label = 'translatePage';
	logger.debug(`${label}:start`);
	logger.time(`${label}:done`);
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

	logger.timeEnd(`${label}:done`)
}

function delegateEvent(parent: ReturnType<typeof gradioApp>, eventType: string, selector: string, handler: (evt: IEvent) => void)
{
	parent.addEventListener(eventType, function (event)
	{
		let target = event.target as IEvent["target"];

		if (target = target.closest(selector))
		{
			const label = 'handleDropdown:event';
			logger.debug(`${label}:start`, event);
			logger.time(`${label}:done`);

			handler.call(target, event as IEvent);

			logger.timeEnd(`${label}:done`)
		}

//		while (target !== parent)
//		{
//			if (target.matches(selector))
//			{
//				handler.call(target, event as IEvent);
//			}
//			target = target.parentNode;
//		}


	});
}

async function handleDropdown()
{
	const label = 'handleDropdown';
	logger.debug(`${label}:init`);

	// process gradio dropdown menu
	delegateEvent(_gradioApp(), 'mousedown', 'ul.options .item', function (event)
	{
		const { target } = event

		if (!classListContains(target, 'item'))
		{
			let item = target.closest('.item');

			logger.debug(label, `simulate click menu item`, {
				event,
				target,
				item,
			});

			// simulate click menu item
			item.dispatchEvent(new Event('mousedown', { bubbles: true }))
			return
		}

		const source = target.dataset['value']
		const $labelEl = target?.closest('.wrap')?.querySelector<IElement>('.wrap-inner .single-select') // the label element

		if (source && $labelEl)
		{
			const title = titles?.[source];
			if (title?.length && $labelEl.title !== title)
			{
				$labelEl.title = title
				// set title from hints.js
			}

			//$labelEl.textContent = EnumBiligualPlaceholder.will_be_replaced // marked as will be replaced
			doTranslate($labelEl, source, EnumTranslateType.element, (...argv) => {
				ESBUILD_DEBUG && logger.debug(label, 'doTranslate', argv)
			}) // translate the label element
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
	const label = 'initObserver:init';
	logger.debug(`${label}:start`);
	ESBUILD_DEBUG && logger.time(`${label}:done`);

	let _count = 0

	// @ts-ignore
	const observer = new MutationObserver((mutations: IMutationRecord[]) =>
	{
		let _nodesCount = 0, _now = performance.now()

		const addCount = () => _nodesCount;

		for (const mutation of mutations)
		{
			if (mutation.type === 'characterData')
			{
				const parent = mutation.target?.parentElement?.parentElement;
				if (parent?.tagName === 'LABEL')
				{
					translateEl(mutation.target, {
						addCount,
						cb(...argv)
						{
							logger.debug(label, `translateEl`, 'characterData', parent, argv);
						},
					})
				}
			}
			else if (mutation.type === 'attributes')
			{
				translateEl(mutation.target, {
					addCount,
					cb(...argv)
					{
						ESBUILD_DEBUG && logger.debug(label, `translateEl`, 'attributes', argv);
					},
				})
			}
			else
			{
				mutation.addedNodes.forEach(node =>
				{
					if (isIgnoreTranslateNode(node)) return

					_nodesCount++
					if (node.nodeType === 1 && /(output|gradio)-(html|markdown)/.test(node.className))
					{
						translateEl(node, {
							rich: true,
						})
					}
					else if (node.nodeType === 3)
					{
						doTranslate(node, node.textContent, EnumTranslateType.text)
					}
					else
					{
						translateEl(node, {
							deep: true,
						})
					}
				})
			}
		}

		if (_nodesCount > 0)
		{
			logger.info(`UI Update #${_count++}: ${performance.now() - _now} ms, ${_nodesCount} nodes`, mutations)
		}
	})

	observer.observe(_gradioApp(), {
		characterData: true,
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: ['title', 'placeholder']
	})

	ESBUILD_DEBUG && logger.timeEnd(`${label}:done`);

	return observer
}
