export function htmlEncode(htmlStr: string)
{
	return htmlStr.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

export function parseHtmlStringToElement(htmlStr: string)
{
	const template = document.createElement('template')
	template.insertAdjacentHTML('afterbegin', htmlStr)
	return template.firstElementChild
}
