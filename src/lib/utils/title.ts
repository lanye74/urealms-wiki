import {staticPageRegistry} from "$lib/utils/pageRegistry.js";



export default function getTitle(pagePath: string) {
	if(pagePath.startsWith("/wiki/")) {
		// TODO: get a better way to resolve these file names
		const filePath = `/src/lib${pagePath}.svelte`;

		// TODO: error check this
		// TODO: this is stupid.
		const pageTitle = staticPageRegistry[filePath].title;

		// TODO: please completely rethink this process
		return `${pageTitle} | NewRealms Wiki`;
	}


	return "NewRealms Wiki";
}
