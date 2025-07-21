import type {Plugin} from "vite";



type SearchIndexPluginOptions = {};



export default function searchIndexPlugin(options?: SearchIndexPluginOptions): Plugin {
	// TODO: understand what this does!
	const virtualModuleId = "virtual:search-index";
	const resolvedVirtualModule = `\0${virtualModuleId}`;

	const wikiPageRegex = /src\/lib\/wiki\/.+\.svelte$/;



	const pageSourceIndex: {[fileName: string]: string} = {};

	return {
		name: "search-index-plugin",

		resolveId: (id) => {
			if(id === virtualModuleId) return resolvedVirtualModule;
		},



		// TODO: start parsing files into their content!
		transform: {
			order: "pre",

			handler: (fileSource, filePath) => {
				const match = filePath.match(wikiPageRegex)?.[0];

				if(!match) return;

				const fileName = match.split("/").pop()!;

				pageSourceIndex[fileName] = fileSource;
			}
		},



		load: (id) => {
			if(id === resolvedVirtualModule) {
				return `export const registry = ${JSON.stringify(pageSourceIndex)}`;
			}
		}
	};
}
