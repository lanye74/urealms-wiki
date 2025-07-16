import type {WikiPageImport} from "$lib/types.js";
import {error} from "@sveltejs/kit";



// TODO: page cache

// maybe i should figure out how to directly import the file
// without vite getting mad at me and putting me through type hell??
const clientPageRegistry = import.meta.glob("/src/lib/wiki/*.svelte", {
	eager: false
}) as Record<string, () => Promise<WikiPageImport>>;



export async function load({params}) {
	const pageRequest = params.entry;
	const pagePath = `/src/lib/wiki/${pageRequest}.svelte`;


	if(!clientPageRegistry[pagePath]) {
		// TODO: error handle better
		error(404, "Wiki entry not found!");
	}


	const wikiPagePromise = clientPageRegistry[pagePath];

	return {
		page: wikiPagePromise()
	};
}
