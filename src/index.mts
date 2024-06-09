/// <reference types="../global.d.ts" preserve="true"/>

import { run } from './main'
import P from 'core-js-pure/actual/promise';
import { consoleError, consoleInfo, logger, consoleDebug } from './logger';
import { existsWebuiOpts, getWebuiOpts } from './dom';

(async () =>
{
	let loaded: boolean;

	const label = 'Bilingual';

	logger.init('Bilingual');

	consoleDebug(`${label}:init`);
	ESBUILD_DEBUG && consoleDebug(`${label}:debug mode enabled`);
	logger.time(`${label}:done`);

	function removeCallback(callbacks: Function[], cb: Function)
	{
		let idx: number;
		do
		{
			idx = callbacks.findIndex(v => v === cb);

			if (idx !== -1)
			{
				callbacks.splice(idx, 1);
			}

		}
		while (idx !== -1)
	}

	function onDOMContentLoaded(listener: Function)
	{
		logger.debug(`document.readyState`, document.readyState);
		if (document.readyState === "complete")
		{
			// @ts-ignore
			listener();
		}
		else
		{
			// @ts-ignore
			document.addEventListener("DOMContentLoaded", listener);
		}
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

		let isWebui = typeof onOptionsChanged !== 'undefined';

		if (isWebui)
		{
			onOptionsChanged(resolve);

			promise = promise
				.then(() =>
				{
					if (typeof optionsChangedCallbacks !== 'undefined')
					{
						removeCallback(optionsChangedCallbacks, resolve)
					}
				})
			;

			loaded ||= existsWebuiOpts()

			if (loaded)
			{
				delay = 0;

				onDOMContentLoaded(() => timers.push(setTimeout(resolve, 1000)))
			}
		}
		else
		{
			onDOMContentLoaded(() => timers.push(setTimeout(reject, 30000)))
		}

		let timer1 = delay && setInterval(async () =>
		{
			loaded ||= existsWebuiOpts();

			if (loaded)
			{
				// @ts-ignore
				resolve();
			}
		}, delay);

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
			opts: getWebuiOpts(),
		});

		if (loaded)
		{
			await fn();
		}

		return
	}

	await onAfterUiLoadedOnce(run);

	logger.timeEnd(`${label}:done`)
})();

