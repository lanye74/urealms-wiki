import extractWikiSource from "./preprocessors/source.js";
import stripHTMLComments from "./preprocessors/comments.js";
import extractWikiComponents from "./preprocessors/components.js";

import {regexes} from "./helpers.js";



export default function getPageSearchableContent(fileContent: string) {
	const inputLines = fileContent.split(regexes.delimitLine);


	const trimmedLines = inputLines
		.map(line => line.trim())
		.filter(line => line !== "")
		.map(line => line.replace(regexes.leadingTabspace, ""));


	const wikiSource = extractWikiSource(trimmedLines);
	const wikiSourceWithoutComments = stripHTMLComments(wikiSource);

	const wikiComponents = extractWikiComponents(wikiSourceWithoutComments);

	// TODO: figure out a return type



	return wikiComponents;
}
