import type {Plugin} from "vite";

// TODO: determine if i'm really happy with relative file paths
import getPageSearchableContent from "./getPageSearchableContent.js";
import {regexes} from "./helpers.js";



type SearchIndexPluginOptions = {};



export default function searchIndexPlugin(options?: SearchIndexPluginOptions): Plugin {
	// TODO: understand what this does!
	const virtualModuleId = "virtual:search-index";
	const resolvedVirtualModule = `\0${virtualModuleId}`;


	// TODO: properly type this
	const pageSearchIndex: {[fileName: string]: any} = {};


	return {
		name: "search-index-plugin",

		resolveId: (id) => {
			if(id === virtualModuleId) {
				return resolvedVirtualModule
			};
		},

		load: (id) => {
			if(id === resolvedVirtualModule) {
				// TODO: ???
				return `export const registry = ${JSON.stringify(pageSearchIndex)}`;
			}
		},



		// use transformation hook to read file content
		transform: {
			order: "pre",
			filter: {id: regexes.isWikiFile},

			handler: (fileContent, filePath) => {
				const fileName = filePath
					.match(regexes.isWikiFile)![0]
					.split("/")
					.pop()!; // last segment of the path is the file name

				pageSearchIndex[fileName] = getPageSearchableContent(fileContent);
				console.log(pageSearchIndex[fileName]);
			}
		}
	};
}
