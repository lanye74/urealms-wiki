import type {WikiPageImport} from "$lib/types.js";



export async function load({params}) {
	const pageRequest = params.entry;
	const pagePath = `/src/lib/wiki/${pageRequest}.svelte`;


	// TODO: this isn't how i would like it to be,
	// but it's more reliable than it was before. so whatever
	const clientPageRegistry = import.meta.glob("/src/lib/wiki/*.svelte", {
		eager: false
	}) as Record<string, () => Promise<WikiPageImport>>;


	const wikiPagePromise = clientPageRegistry[pagePath];



	return {
		page: wikiPagePromise()
	};
}
