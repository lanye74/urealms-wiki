import type {Component} from "svelte";



const wikiPageModules = import.meta.glob("/src/lib/wiki/*.svelte", {
	eager: false, // don't preload files; this runs on the client
	import: "default"
}) as Record<string, () => Promise<Component>>;



export async function load({params}) {
	const pageRequest = params.entry;
	const pagePath = `/src/lib/wiki/${pageRequest}.svelte`;

	const pageModule = wikiPageModules[pagePath]();



	return {
		page: pageModule
	};
}
