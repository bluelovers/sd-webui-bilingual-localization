/// <reference types="../global.d.ts" preserve="true"/>

import { run } from './main'
import P from 'core-js-pure/actual/promise';
import { consoleError, consoleInfo, logger } from './logger';
import { existsWebuiOpts } from './dom';

(async () =>
{
	let loaded: boolean;

	logger.init('Bilingual');

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

		}
		while (idx !== -1)
	}

	async function onAfterUiLoadedOnce(fn: Function)
	{
		let { promise, resolve, reject } = (P as typeof Promise).withResolvers();
		let timers: (number | NodeJS.Timeout)[] = [];

		promise
			.catch(e => {
				loaded ||= existsWebuiOpts();
				return Promise.reject(e)
			})
			.then(() =>
			{
				loaded ||= existsWebuiOpts();
			})
		;

		let delay = 10000;

		if (typeof onOptionsChanged !== 'undefined')
		{
			onOptionsChanged?.(resolve);

			promise = promise
				.then(() =>
				{
					if (typeof optionsChangedCallbacks !== 'undefined')
					{
						removeCallback(optionsChangedCallbacks, resolve)
					}
				})
			;

			delay = 2000;
		}
		else
		{
//			document.addEventListener('DOMContentLoaded', () => {
//				timers.push(setTimeout(resolve, 10000))
//			})
		}

		let timer1 = setInterval(async () =>
		{
			loaded ||= existsWebuiOpts();

			if (loaded)
			{
				// @ts-ignore
				resolve();
			}
		}, delay);

		timers.push(setTimeout(reject, 30000));

		await promise
			.catch(e => consoleError(`onAfterUiLoadedOnce:reject`, {
				loaded,
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
					catch (e)
					{}
				}
			})
		;

		(loaded ? consoleInfo : consoleError)(`onAfterUiLoadedOnce:executeCallbacks`, {
			loaded,
			fn,
		});

		if (loaded)
		{
			await fn();
		}

		return
	}

	return onAfterUiLoadedOnce(run);
})();
