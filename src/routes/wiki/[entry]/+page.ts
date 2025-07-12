import {clientPageRegistry} from "$utils/pageRegistry.js";



export async function load({params}) {
	const pageRequest = params.entry;
	const pagePath = `/src/lib/wiki/${pageRequest}.svelte`;

	const pageModule = clientPageRegistry[pagePath]();



	return {
		page: pageModule
	};
}
