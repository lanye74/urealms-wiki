import {staticPageRegistry} from "$utils/pageRegistry.js";



export default function getPageTitle(urlPathname: string) {
	if(urlPathname.startsWith("/wiki/")) {
		// TODO: get a better way to resolve these file names
		const filePath = `/src/lib${urlPathname}.svelte`;

		// TODO: error check this
		// TODO: this is stupid.
		const pageTitle = staticPageRegistry[filePath]?.pageTitle;

		// TODO: please completely rethink this process
		return pageTitle ? `${pageTitle} | NewRealms Wiki` : "404 | NewRealms Wiki";
	}


	return "NewRealms Wiki";
}
