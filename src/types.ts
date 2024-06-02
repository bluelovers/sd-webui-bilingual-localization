import { ITSOverwrite } from 'ts-type/lib/type/record';

export type IChildNode = ChildNode & IElement;
export type IParentNode = ParentNode & IElement;

export type IElement = ITSOverwrite<(HTMLDivElement | HTMLInputElement), {
	/**
	 * Returns the children.
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/childNodes)
	 */
	readonly childNodes: NodeListOf<IChildNode>;
	/**
	 * Returns the first child.
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/firstChild)
	 */
	readonly firstChild: IChildNode | null;

	readonly nextSibling: IChildNode | null;

	readonly parentNode: IParentNode | null;

	placeholder: HTMLInputElement["placeholder"]

	matches(selectors: string[] | string): boolean;
}>;

export type INodeList = NodeListOf<IChildNode>

export type IMutationRecord = ITSOverwrite<MutationRecord, {
	readonly addedNodes: INodeList;
	readonly target: IChildNode;
}>

export type IEvent = ITSOverwrite<Event, {
	target: EventTarget & IElement
}>

export const enum EnumTranslateType
{
	'text' = 'text',
	'element' = 'element',
	'option' = 'option',
	'title' = 'title',
	'placeholder' = 'placeholder',
}

export type IDoTranslateCb = (
	el: IElement,
	source: string,
	type: EnumTranslateType,
	translation: string,
	opts?: unknown,
) => void;

export interface IOptionsTranslateEl
{
	deep?: boolean,
	rich?: boolean,

	addCount?(): void

	cb?: IDoTranslateCb
}
