import stripHTMLComments from "./preprocessors/comments.js";
import extractWikiComponent from "./preprocessors/wikiComponent.js";

import {regexes} from "./helpers.js";



export default function getPageSearchableContent(fileContent: string) {
	const inputLines = fileContent.split(regexes.delimitLine);


	const trimmedLines = inputLines
		.map(line => line.trim())
		.filter(line => line !== "")
		.map(line => line.replace(regexes.leadingTabspace, ""));


	const wikiExtractedLines = extractWikiComponent(trimmedLines);
	const commentStrippedLines = stripHTMLComments(wikiExtractedLines);

	// TODO: figure out a return type


	return commentStrippedLines;
}
