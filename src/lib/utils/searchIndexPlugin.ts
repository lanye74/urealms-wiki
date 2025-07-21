import type {Plugin} from "vite";



type SearchIndexPluginOptions = {};



export default function searchIndexPlugin(options?: SearchIndexPluginOptions): Plugin {
	// TODO: understand what this does!
	const virtualModuleId = "virtual:search-index";
	const resolvedVirtualModule = `\0${virtualModuleId}`;

	const wikiPageRegex = /src\/lib\/wiki\/.+\.svelte$/;



	const transformedContentIndex: {[fileName: string]: string} = {};

	return {
		name: "search-index-plugin",

		resolveId: (id) => {
			if(id === virtualModuleId) return resolvedVirtualModule;
		},

		// TODO: figure out how to make this run before svelte tickles it
		transform: (fileSource, filePath) => {
			const match = filePath.match(wikiPageRegex)?.[0];

			if(!match) return;

			const fileName = match.split("/").pop()!;

			transformedContentIndex[fileName] = fileSource;
		},

		load: (id) => {
			if(id === resolvedVirtualModule) return `export const registry = ${JSON.stringify(transformedContentIndex)}`;
		}
	};
}
