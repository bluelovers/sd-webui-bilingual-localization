import { IElement } from './types';
import { EnumBiligualPlaceholder } from './const';

export function classListContains(node: IElement, className: string | EnumBiligualPlaceholder)
{
	return node?.classList?.contains(className)
}
