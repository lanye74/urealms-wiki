import stripHTMLComments from "./preprocessors/comments.js";
import extractWikiComponent from "./preprocessors/wikiComponent.js";

import {regexes} from "./helpers.js";



// TODO: name this more specifically, when i figure out a flow of events
export default function extractPageContent(fileContent: string) {
	const inputLines = fileContent.split(regexes.delimitLine);


	const trimmedLines = inputLines
		.map(line => line.trim())
		.filter(line => line !== "")
		.map(line => line.replace(regexes.leadingTabspace, ""));


	const wikiExtractedLines = extractWikiComponent(trimmedLines);
	const commentStrippedLines = stripHTMLComments(wikiExtractedLines);

	// TODO:


	return commentStrippedLines;
}
