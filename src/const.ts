export const ignore_selector = [
	'.bilingual__trans_wrapper', // self
	'.resultsFlexContainer', // tag-autocomplete
	'#setting_sd_model_checkpoint select', // model checkpoint
	'#setting_sd_vae select', // vae model
	'#txt2img_styles, #img2txt_styles', // styles select
	'.extra-network-cards .card .actions .name', // extra network cards name
	'script, style, svg, g, path', // script / style / svg elements
]

export const enum EnumBiligualPlaceholder
{
	/**
	 * marked as will be replaced
	 */
	will_be_replaced = '__biligual__will_be_replaced__',

	trans_wrapper = 'bilingual__trans_wrapper'
}
