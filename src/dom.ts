import { IElement } from './types';

let app: ReturnType<typeof gradioApp>

export function _gradioApp()
{
	return app ??= gradioApp();
}

export function querySelectorAll(...args: Parameters<GradioAppHTMLElement["querySelectorAll"]> | [string[], ...any[]]): NodeListOf<IElement>
{
	// @ts-ignore
	return _gradioApp().querySelectorAll(...args)
}

export function querySelector(...args: Parameters<GradioAppHTMLElement["querySelector"]>)
{
	return _gradioApp().querySelector(...args) as any as IElement
}

export function existsWebuiOpts()
{
	return (typeof opts !== 'undefined' && (Object.keys(opts).length !== 0))
}

export function getWebuiOpts()
{
	return existsWebuiOpts() ? opts : {};
}
