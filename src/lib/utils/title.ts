import {staticPageRegistry} from "./pageRegistry.js";



export default function getTitle(pagePath: string) {
	if(pagePath.startsWith("/wiki/")) {
		// TODO: get a better way to resolve these file names
		const filePath = `/src/lib${pagePath}.svelte`;

		// TODO: error check this
		// TODO: this is stupid.
		// the whole point of the static registry is so the client
		// doesn't have to access it all at once
		const pageTitle = staticPageRegistry[filePath].title;

		// TODO: please completely rethink this process
		return `${pageTitle} | NewRealms Wiki`;
	}


	return "NewRealms Wiki";
}
