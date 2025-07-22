import {allSubstringIndices, regexes} from "./helpers.js";

import type {CommentMarker, MultilineStringRange} from "./types.js";



// TODO: name this more specifically, when i figure out a flow of events
export default function extractPageContent(fileContent: string) {
	const lines = fileContent.split(regexes.delimitLine);


	const trimmedLines = lines
		.map(line => line.trim())
		.filter(line => line !== "")
		.map(line => line.replace(regexes.leadingTabspace, ""))


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
function extractWikiLines(lines: string[]) {
	// skip forward a line, we don't care about the tag itself
	let startIndex = lines.findIndex(line => line.startsWith("<WikiPage>")) + 1;
	// presumably this saves a few CPU cycles, to go in reverse
	let endIndex = lines.findLastIndex(line => line.startsWith("</WikiPage>")) - 1;

	return lines.slice(startIndex, endIndex + 1);
}



function stripHTMLComments(lines: string[]) {
	// TODO: nicer way to do this
	const commentMarkers: CommentMarker[] = [];

	for(const [_lineIndex, line] of Object.entries(lines)) {
		for(const charIndex of allSubstringIndices(line, "<!--")) {
			commentMarkers.push({
				type: "start",
				char: charIndex,
				line: parseInt(_lineIndex)
			});
		}

		for(const charIndex of allSubstringIndices(line, "-->")) {
			commentMarkers.push({
				type: "end",
				char: charIndex,
				line: parseInt(_lineIndex)
			});
		}
	}



	// sort by line first, ascending, then character
	// TODO: i'm sure i can probably build the array in order instead
	const sortedCommentMarkers = commentMarkers.toSorted((first, second) => {
		if(first.line !== second.line) {
			return first.line - second.line;
		}

		return first.char - second.char;
	});


	const commentedRanges: MultilineStringRange[] = [];
	let currentStart: CommentMarker | null = null;

	// pair up starts and ends
	for(const marker of sortedCommentMarkers) {
		if(marker.type === "start" && currentStart === null) {
			currentStart = marker;
		}

		if(marker.type === "end" && currentStart !== null) {
			commentedRanges.push({
				// the `type` field isn't actually omitted but it's fine
				start: {...currentStart},
				end: {...marker}
			});

			currentStart = null;
		}

		// otherwise, ignore—it's a bad comment marker
		// (a start after a start, or an end after an end)
	}


	// now, cut out all the content within the MultilineStringRange[]s
	// splicing strings and such.
	// TODO: I LOVE STRING MANIPULATION!!!!!!

	const outputLines: string[] = [];



	return outputLines;
}
