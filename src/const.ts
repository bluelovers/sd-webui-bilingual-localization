export const ignore_selector = ([
	'.bilingual__trans_wrapper', // self
	'.resultsFlexContainer', // tag-autocomplete
	'#setting_sd_model_checkpoint select', // model checkpoint
	'#setting_sd_vae select', // vae model
	'#txt2img_styles, #img2txt_styles', // styles select
	'.extra-network-cards .card .actions .name', // extra network cards name
	'script, style, svg, g, path', // script / style / svg elements

	'#tags > #tags a',

	'.bilingual__trans_ignore',

	...[
		'svg',
		'canvas',

		'.bilingual__trans_source',
		'#txt2img_prompt_container',
		'#img2img_prompt_container',

		'#lobe_highlighter',
		'.shiki',

		`.${EnumBiligualPlaceholder.trans_ignore_deep}`,
		`.${EnumBiligualPlaceholder.trans_source}`,

		'.progress',
		'.progress-text',
		'.progressDiv',

		'#physton-prompt-all-in-one',
		'.physton-prompt',
	].map(v => `${v}, ${v} *`),

	// https://github.com/journey-ad/sd-webui-bilingual-localization/issues/30
	'.ace_line',
	'.ace_prompttoken',

] satisfies string[]).join(',')

export const enum EnumBiligualPlaceholder
{
	/**
	 * marked as will be replaced
	 */
	will_be_replaced = '__biligual__will_be_replaced__',

	trans_wrapper = 'bilingual__trans_wrapper',

	trans_source = 'bilingual__trans_source',

	/**
	 * only ignore cuuent node
	 */
	trans_ignore = 'bilingual__trans_ignore',
	/**
	 * ignore cuuent node, and all deep
	 */
	trans_ignore_deep = 'bilingual__trans_ignore_deep',
}
