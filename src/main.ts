import { consoleDebug, logger, loggerShow } from './logger';
import { getConfig, loadLocalization } from './options';
import { initObserver, translateAll } from './translate';
import P from 'core-js-pure/actual/promise';

loggerShow.init('Bilingual', true);

export async function run()
{
	// @ts-ignore
	await import('./style.scss');

	// disabled if original translation enabled
	if (window.localization && Object.keys(window.localization).length) return;

	const config = getConfig();

	consoleDebug('config', config);

	if (!config) return;

	logger.init('Bilingual', config.enableLogger);

	let {
		i18n,
	} = await loadLocalization(config.dirs, config.file);

	if (i18n)
	{
		await translateAll();

		let { promise, resolve } = (P as typeof Promise).withResolvers();

		setTimeout(resolve, 5000);

		await promise.then(initObserver)
	}
}
