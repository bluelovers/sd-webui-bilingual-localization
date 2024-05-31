import { IElement } from './types';
import { EnumBiligualPlaceholder, ignore_selector } from './const';

export function classListContains(node: IElement, className: string | EnumBiligualPlaceholder)
{
	return node?.classList?.contains(className)
}

export function isIgnoreTranslateNode(node: IElement)
{
	return node.matches?.(ignore_selector) || classListContains(node, EnumBiligualPlaceholder.trans_wrapper)
}
