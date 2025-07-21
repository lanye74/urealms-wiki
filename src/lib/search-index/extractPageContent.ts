import {allSubstringIndices, regexes} from "./helpers.js";

import type {CommentMarker} from "./types.js";



// TODO: name this more specifically, when i figure out a flow of events
export default function extractPageContent(fileContent: string) {
	const lines = fileContent.split(regexes.delimitLine);


	const trimmedLines = lines
		.map(line => line.trim())
		.filter(line => line !== "")
		.map(line => line.replace(regexes.leadingTabSpace, ""))


	const wikiExtractedLines = extractWikiLines(trimmedLines);
	const commentStrippedLines = stripHTMLComments(wikiExtractedLines);

	// TODO: i'm realizing, now, that i may have to parse svelte markup too
	// we're... gonna worry about that if it comes to it


	return commentStrippedLines;
}



// this method only operates on lines that start with the content,
// which is fine. i don't care that much about ignoring false positives in comments.
// or bad html.
function extractWikiLines(lines: string[]) {
	// skip forward a line, we don't care about the tag itself
	let startIndex = lines.findIndex(line => line.startsWith("<WikiPage>")) + 1;
	// presumably this saves a few CPU cycles, to go in reverse
	let endIndex = lines.findLastIndex(line => line.startsWith("</WikiPage>")) - 1;

	return lines.slice(startIndex, endIndex + 1);
}



function stripHTMLComments(lines: string[]) {
	// TODO: do i really like this verbose approach? meh
	const outputLines: string[] = [];

	let commentRanges: CommentMarker[] = [];



	for(const [_lineIndex, line] of Object.entries(lines)) {
		for(const charIndex of allSubstringIndices(line, "<!--")) {
			commentRanges.push({
				type: "start",
				char: charIndex,
				line: parseInt(_lineIndex)
			});
		}


		for(const charIndex of allSubstringIndices(line, "-->")) {
			commentRanges.push({
				type: "end",
				char: charIndex + 3, // charIndex is start of comment, +3 to reach end
				line: parseInt(_lineIndex)
			});
		}
	}

	// TODO: figure out how to turn CommentMarker[]
	// into MultilineStringRange[] of content to cut out
	// !!!!!
	console.log(commentRanges);


	return outputLines;
}
