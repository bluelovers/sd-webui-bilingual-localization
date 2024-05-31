import { logger } from './logger';

export const i18nRegex = new Map()
export let i18nScope: Record<string, Record<string, string>> = {};
export let scopedSource: Record<string, string[]> = {};
export let i18n: Record<string, string> = null;

const regex_scope = /^##(?<scope>.+)##(?<skey>.+)$/ // ##scope##.skey

interface IDirs
{
	[lang: string]: string
}

export let config: ReturnType<typeof initConfig>;

/**
 * Load file
 */
function readFile(filePath: string)
{
	logger.info('readFile', `file=${filePath}`)

	return fetch(`file=${filePath}`, {
		method: 'GET',
	}).then(res => res.text())

//	let request = new XMLHttpRequest();
//	request.open("GET", `file=${filePath}`, false);
//	request.send(null);
//	return request.responseText;
}

function initLocalization()
{
	i18nRegex.clear();
	i18nScope = {};
	scopedSource = {};
	i18n = null;
}

export function getConfig()
{
	return config ??= initConfig();
}

export const enum EnumBilingualLocalizationOrder
{
	ORIGINAL_FIRST = "Original First"
}

function initConfig()
{
	let config = {
		enabled: opts["bilingual_localization_enabled"] as boolean,
		file: opts["bilingual_localization_file"] as string,
		dirs: opts["bilingual_localization_dirs"] as IDirs,
		order: opts["bilingual_localization_order"] as EnumBilingualLocalizationOrder,
		enableLogger: opts["bilingual_localization_logger"] as boolean
	}

	if (!config.enabled
		|| !config.file
		|| config.file === "None"
		|| !config.dirs
		// @ts-ignore
		|| config.dirs === "None"
	) return

	// @ts-ignore
	config.dirs = JSON.parse(config.dirs)

	return config;
}

export async function loadLocalization(dirs: IDirs, file: string)
{
	const responseText = await readFile(dirs[file])
		.then(value => {
			initLocalization();
			return value
		})
	;

	i18n = JSON.parse(responseText, (key, value) =>
	{
		// parse regex translations
		if (key.startsWith('@@'))
		{

			const regex = getRegex(key.slice(2))
			if (regex instanceof RegExp)
			{
				i18nRegex.set(regex, value)
			}
		}
		else if (regex_scope.test(key))
		{
			// parse scope translations
			let { scope, skey } = key.match(regex_scope).groups

			if (scope.startsWith('@'))
			{
				scope = scope.slice(1)
			}
			else
			{
				scope = '#' + scope
			}

			if (!scope.length)
			{
				return value
			}

			i18nScope[scope] ||= {}
			i18nScope[scope][skey] = value

			scopedSource[skey] ||= []
			scopedSource[skey].push(scope)
		}
		else
		{
			return value
		}
	})

	logger.group('Localization file loaded.')
	logger.log('i18n', i18n)
	logger.log('i18nRegex', i18nRegex)
	logger.log('i18nScope', i18nScope)
	logger.log('scopedSource', scopedSource)
	logger.groupEnd()

	return {
		i18n,
		i18nRegex,
		i18nScope,
		scopedSource,
	}
}

/**
 * get regex object from string
 */
function getRegex(regex: string)
{
	try
	{
		regex = regex.trim();
		let parts = regex.split('/');
		if (regex[0] !== '/' || parts.length < 3)
		{
			regex = regex.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); //escap common string
			return new RegExp(regex);
		}

		const option = parts[parts.length - 1];
		const lastIndex = regex.lastIndexOf('/');
		regex = regex.substring(1, lastIndex);
		return new RegExp(regex, option);
	}
	catch (e)
	{
		return null
	}
}
