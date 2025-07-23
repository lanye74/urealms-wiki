import {regexes} from "./helpers.js";
import stripHTMLComments from "./stripHTMLComments.js";



// TODO: name this more specifically, when i figure out a flow of events
export default function extractPageContent(fileContent: string) {
	const inputLines = fileContent.split(regexes.delimitLine);


	const trimmedLines = inputLines
		.map(line => line.trim())
		.filter(line => line !== "")
		.map(line => line.replace(regexes.leadingTabspace, ""));


	const wikiExtractedLines = extractWikiLines(trimmedLines);
	const commentStrippedLines = stripHTMLComments(wikiExtractedLines);

	// TODO: i'm realizing, now, that i may have to parse svelte markup too
	// we're... gonna worry about that if it comes to it



	return commentStrippedLines;
}



// this method only operates on lines that start with the content,
// which is fine. i don't care that much about ignoring false positives in comments.
// or bad html.
// TODO: you probably should care. literally just run stripHTMLComments before this i think
// TODO: make this throw errors if content can't be found and stuff!!!!!!
// or reduce allSubstringIndices on each line and check that sum of each tag <= 1. idk whatever brah
function extractWikiLines(inputLines: string[]) {
	// skip forward a line, we don't care about the tag itself
	const startIndex = inputLines.findIndex(line => line.startsWith("<WikiPage>")) + 1;
	// presumably this saves a few CPU cycles, to go in reverse
	const endIndex = inputLines.findLastIndex(line => line.startsWith("</WikiPage>")) - 1;

	return inputLines.slice(startIndex, endIndex + 1);
}
