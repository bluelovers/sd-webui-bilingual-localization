#!/usr/bin/env node

import { build } from 'esbuild'
import { join } from 'path'
import { main as outfile_main } from './package.json';

import { sassPlugin } from 'esbuild-sass-plugin'
import { __ROOT, __ROOT_OUTPUT, isWin } from './test/__root';
import './scripts/copy';

const ESBUILD_DEBUG = Boolean(process.env['ESBUILD_DEBUG'] ?? isWin);

(async () => {
	console.log(`build`, __ROOT_OUTPUT)
	console.log(`outfile`, outfile_main)



	await buildTarget({
		ESBUILD_DEBUG,
		outFileName: outfile_main,
	});

	if (!ESBUILD_DEBUG || true)
	{
		await buildTarget({
			ESBUILD_DEBUG: true,
			outFileName: outfile_main + '-dev.js',
		});
	}
})();

function buildTarget({
	ESBUILD_DEBUG,
	outFileName,
}: {
	ESBUILD_DEBUG: boolean,
	outFileName: string,
})
{
	const ESBUILD_MINIFY = Boolean(process.env['ESBUILD_MINIFY'] ?? !ESBUILD_DEBUG);

	return build({
		entryPoints: [
			join(__ROOT, 'src/index.mts')
		],
		outfile: join(__ROOT_OUTPUT, 'javascript', outFileName),
		bundle: true,
		plugins: [
			sassPlugin({
				//type: "css-text",
				type: "style",
			}),
		],
		platform: 'browser',
		treeShaking: true,
		sourcemap: ESBUILD_DEBUG ? 'both' : true,
		// @ts-ignore
		//analyze: true,
		legalComments: 'none',
		allowOverwrite: true,
		minifySyntax: true,
		format: 'iife',
		minify: ESBUILD_MINIFY,
		jsxSideEffects: false,
		define: {
			ESBUILD_DEBUG: ESBUILD_DEBUG.toString(),
		}
	})
}
