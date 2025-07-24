import stripHTMLComments from "./preprocessors/comments.js";
import extractWikiSource from "./preprocessors/source.js";

import {regexes} from "./helpers.js";



export default function getPageSearchableContent(fileContent: string) {
	const inputLines = fileContent.split(regexes.delimitLine);


	const trimmedLines = inputLines
		.map(line => line.trim())
		.filter(line => line !== "")
		.map(line => line.replace(regexes.leadingTabspace, ""));


	const wikiExtractedLines = extractWikiSource(trimmedLines);
	const commentStrippedLines = stripHTMLComments(wikiExtractedLines);

	// TODO: figure out a return type


	return commentStrippedLines;
}
