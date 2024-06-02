/// <reference types="./global.webui.d.ts" preserve="true"/>

import './global.node22';
import './global.webui';
import './global.tsdx';

declare global {
	var opts: Record<string, any>;

	/**
	 * title from hints.js
	 */
	var titles: Record<string, string>;

	interface Window {
		/**
		 * original translation
		 */
		localization: any;
	}

	var ESBUILD_DEBUG: boolean

}

var ESBUILD_DEBUG: boolean
