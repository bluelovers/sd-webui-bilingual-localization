// @ts-ignore
import { glob } from 'fs/promises';
import { __ROOT, __ROOT_OUTPUT } from '../__root';
import { copy as copyFile } from 'fs-extra';
import { join } from 'path';

async function copy()
{
	for await (const file of glob([
		'./scripts/**/*',
		'./README*.md',
		'LICENSE',
		'./.github/workflows/build-output.yml',
		'./CHANGELOG.md',
		'./docs/**/*',
	], {
		cwd: __ROOT,
	}))
	{
		await copyFile(join(__ROOT, file), join(__ROOT_OUTPUT, file), {
			overwrite: true,
			preserveTimestamps: true,
		})
	}
}

export default copy()
