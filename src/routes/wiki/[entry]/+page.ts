import type {Component} from "svelte";



export async function load({params}) {
	const pageRequest = params.entry;
	const pagePath = `/src/lib/wiki/${pageRequest}.svelte`;


	// TODO: this isn't how i would like it to be,
	// but it's more reliable than it was before. so whatever
	const clientPageRegistry = import.meta.glob("/src/lib/wiki/*.svelte", {
		eager: false,
		import: "default"
	}) as Record<string, () => Promise<Component>>;


	const wikiPagePromise = clientPageRegistry[pagePath];



	return {
		page: wikiPagePromise()
	};
}
