import { logger } from './logger';
import { getConfig, loadLocalization } from './options';
import { initObserver, translateAll } from './translate';

export async function run()
{
	// @ts-ignore
	await import('./style.scss');

	// disabled if original translation enabled
	if (window.localization && Object.keys(window.localization).length) return;

	const config = getConfig();

	if (!config) return;

	logger.init('Bilingual', config.enableLogger);

	let {
		i18n,
	} = await loadLocalization(config.dirs, config.file);

	if (i18n)
	{
		await translateAll();

		initObserver();
	}
}
