import {allSubstringIndices} from "../helpers.js";

import type {CommentMarker, MultilineStringRange} from "../types.js";



export default function stripHTMLComments(inputLines: string[]) {
	const outputLines: string[] = Array.from(inputLines);

	const commentedRanges = getCommentedRanges(inputLines);
	const reversedCommentedRanges = commentedRanges.toReversed();


	for(const {start, end} of reversedCommentedRanges) {
		if(start.line === end.line) { // single line comment
			const targetLine = outputLines[start.line];

			// we're talking about a single line, so we just need to cut around the comment content
			const includeBeginning = targetLine.slice(0, start.char);
			// end char starts at first position of -->; add + 3 to remove it completely
			const includeEnd = targetLine.slice(end.char + 3);

			outputLines[start.line] = includeBeginning + includeEnd;
		} else { // multiline comment
			const includeBeginning = outputLines[start.line].slice(0, start.char);
			const includeEnd = outputLines[end.line].slice(end.char + 3);

			outputLines[start.line] = includeBeginning;
			outputLines[end.line] = includeEnd;

			// don't touch the lines we just modified, only any lines in-between
			outputLines.splice(start.line + 1, end.line - start.line - 1);
		}
	}


	return outputLines
		.map(line => line.trim())
		.filter(line => line !== "");
}



function getCommentedRanges(inputLines: string[]) {
	const output: MultilineStringRange[] = [];


	let currentStart: CommentMarker | null = null;
	// pair up starts and ends
	for(const marker of identifyCommentMarkers(inputLines)) {
		if(marker.type === "start" && currentStart === null) {
			currentStart = marker;
		}

		if(marker.type === "end" && currentStart !== null) {
			output.push({
				// the `type` field isn't actually omitted but it's fine
				start: {...currentStart},
				end: {...marker}
			});

			currentStart = null;
		}

		// otherwise, ignore—it's a bad comment marker
		// (a start after a start, or an end after an end)
	}



	return output;
}



function identifyCommentMarkers(inputLines: string[]) {
	const output: CommentMarker[] = [];

	inputLines.forEach((line, lineIndex) => {
		allSubstringIndices(line, "<!--").forEach(charIndex => {
			output.push({type: "start", char: charIndex, line: lineIndex});
		});

		allSubstringIndices(line, "-->").forEach(charIndex => {
			output.push({type: "end", char: charIndex, line: lineIndex});
		});
	});

	return output.toSorted(
		// neat branchless trick: if first.line and second.line are the same,
		// then the other half of the || will always trigger (subsort by char position)
		(first, second) => (first.line - second.line) || (first.char - second.char)
	);
}
