/// <reference types="../global.webui.d.ts" preserve="true"/>

import { run } from './main'
import Promise from 'core-js-pure/actual/promise';
import { name } from '../package.json';

(async () => {

	function removeCallback(callbacks: Function[], cb: Function)
	{
		let idx: number;
		do
		{
			idx = callbacks.findIndex(v => cb);

			if (idx !== -1)
			{
				callbacks.splice(idx, 1);
			}

		} while (idx !== -1)
	}

	async function onAfterUiLoadedOnce(fn: Function)
	{
		let { promise, resolve, reject } = Promise.withResolvers();
		let timers: (number | NodeJS.Timeout)[] = [];

		let timer1 = setInterval(() =>
		{
			const loaded = (Object.keys(opts).length !== 0)

			if (loaded)
			{
				resolve();
			}
		}, 2000);

		if (typeof onOptionsChanged !== 'undefined')
		{
			onOptionsChanged?.(resolve);

			promise = promise.then(() => {
				if (typeof optionsChangedCallbacks !== 'undefined')
				{
					removeCallback(optionsChangedCallbacks, resolve)
				}
			})
		}
		else
		{
			document.addEventListener('DOMContentLoaded', () => {
				timers.push(setTimeout(resolve, 10000))
			})
		}

		timers.push(setTimeout(resolve, 15000));

		await promise
			.catch(e => console.error(name, `onAfterUiLoadedOnce`, {
				fn,
				resolve,
				promise,
			}, e))
			.then(() =>
			{
				try
				{
					clearInterval(timer1);
				}
				catch (e)
				{}

				for (let ti of timers)
				{
					try
					{
						clearTimeout(ti)
					}
					catch (e) {}
				}
			})
		;

		return fn();
	}

	return onAfterUiLoadedOnce(run);
})();
