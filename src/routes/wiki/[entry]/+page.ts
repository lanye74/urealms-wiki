import type {Component} from "svelte";



type ComponentModule = {
	default: Component;
};



const wikiPageModules = import.meta.glob("/src/lib/wiki/*.svelte", {
	eager: true // preload files; they don't need to be dynamically imported
}) as Record<string, ComponentModule>;



export async function load({params}) {
	const pageRequest = params.entry;
	const pagePath = `/src/lib/wiki/${pageRequest}.svelte`;

	const pageModule = wikiPageModules[pagePath];



	return {
		page: pageModule
	};
}
