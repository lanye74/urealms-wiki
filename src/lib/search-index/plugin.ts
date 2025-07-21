import type {Plugin} from "vite";

// TODO: determine if i'm really happy with relative file paths
import parseSvelteFile from "./parseSvelteFile.js";



type SearchIndexPluginOptions = {};



export default function searchIndexPlugin(options?: SearchIndexPluginOptions): Plugin {
	// TODO: understand what this does!
	const virtualModuleId = "virtual:search-index";
	const resolvedVirtualModule = `\0${virtualModuleId}`;

	const wikiPageRegex = /src\/lib\/wiki\/.+\.svelte$/;



	const pageSearchIndex: {[fileName: string]: string[]} = {};

	return {
		name: "search-index-plugin",

		resolveId: (id) => {
			if(id === virtualModuleId) return resolvedVirtualModule;
		},



		// although it feels weird to hook into "transformation" just to
		// read a file's content, this step comes right after the file is `load()`ed
		// ...where else to do it? :-)
		transform: {
			order: "pre",

			filter: {
				// TODO: double check: is the `code` field useful?
				// https://rollupjs.org/plugin-development/#build-hooks
				// i don't believe it is—it seems to just be a secondary filter so that
				// matched files must also pass the regex. but i don't believe that it
				// actually trims the `src` field passed to the handler
				id: wikiPageRegex
			},

			handler: (fileContent, filePath) => {
				// because of the filter, this should always exist
				const match = filePath.match(wikiPageRegex)![0];
				const fileName = match.split("/").pop()!;

				pageSearchIndex[fileName] = parseSvelteFile(fileContent);
				// console.log(pageSearchIndex[fileName]);
			}
		},



		load: (id) => {
			if(id === resolvedVirtualModule) {
				// TODO: ???
				return `export const registry = ${JSON.stringify(pageSearchIndex)}`;
			}
		}
	};
}
