import type {Plugin} from "vite";



type SearchIndexPluginOptions = {

};



export default function searchIndexPlugin(options?: SearchIndexPluginOptions): Plugin {
	return {
		name: "search-index-plugin"
	};
}
