/// <reference lib="dom" preserve="true" />

import 'stable-diffusion-webui-types';

declare global
{
	class Promise
	{
		static withResolvers(): { promise: Promise, resolve: function, reject: function };
	}
}

declare var opts: Record<string, any>;

