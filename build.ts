#!/usr/bin/env node

import { build } from 'esbuild'
import { join } from 'path'
import { copy } from 'esbuild-plugin-copy';
import { main as outfile_main } from './package.json';

import { sassPlugin } from 'esbuild-sass-plugin'
import { __ROOT, __ROOT_OUTPUT } from './test/__root';
import { glob } from 'fs/promises';
import { copy as copyFile } from 'fs-extra';

(async () => {
	console.log(`build`, __ROOT_OUTPUT)
	console.log(`outfile`, outfile_main)

	for await (const file of glob([
		'./scripts/**/*',
		'./README*.md',
		'LICENSE',
		'./.github/workflows/build-output.yml',
	], {
		cwd: __ROOT,
	}))
	{
		await copyFile(join(__ROOT, file), join(__ROOT_OUTPUT, file), {
			overwrite: true,
			preserveTimestamps: true,
		})
	}

	await build({
		entryPoints: [
			join(__ROOT, 'src/index.mts')
		],
		outfile: join(__ROOT_OUTPUT, 'javascript', outfile_main),
		bundle: true,
		plugins: [
			sassPlugin({
				//type: "css-text",
				type: "style",
			}),
		],
		platform: 'browser',
		treeShaking: true,
		sourcemap: true,
		// @ts-ignore
		//analyze: true,
		legalComments: 'none',
		allowOverwrite: true,
		minifySyntax: true,
		format: 'iife',
		minify: Boolean(process.env['ESBUILD_MINIFY']),
		jsxSideEffects: false,
	})
})();
