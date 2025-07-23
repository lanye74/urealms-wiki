import {allSubstringIndices} from "../helpers.js";

import type {CommentMarker, MultilineStringRange} from "../types.js";



export default function stripHTMLComments(inputLines: string[]) {
	const outputLines: string[] = Array.from(inputLines);

	const commentedRanges = getCommentedRanges(inputLines);


	// TODO: possible to build them in reverse? probably not, or not friendly, at least
	const reversedCommentedRanges = commentedRanges.toReversed();

	for(const {start, end} of reversedCommentedRanges) {
		if(start.line === end.line) {
			const targetLine = outputLines[start.line];

			// we're talking about a single line, so we just need to cut around the comment content
			const includeBeginning = targetLine.slice(0, start.char);
			// end char starts at first position of -->; add + 3 to remove it completely
			const includeEnd = targetLine.slice(end.char + 3);

			outputLines[start.line] = includeBeginning + includeEnd;

			// not necessary; peace of mind
			continue;
		}


		// multi-line comment
		const includeBeginning = outputLines[start.line].slice(0, start.char);
		const includeEnd = outputLines[end.line].slice(end.char + 3);

		outputLines[start.line] = includeBeginning;
		outputLines[end.line] = includeEnd;

		// don't touch the lines we just modified, only any lines inbetween
		outputLines.splice(start.line + 1, end.line - start.line - 1);
	}


	return outputLines
		// TODO: does this need to be trimmed?
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

	// TODO: nicer way to do this
	for(const [_lineIndex, line] of Object.entries(inputLines)) {
		for(const charIndex of allSubstringIndices(line, "<!--")) {
			output.push({
				type: "start",
				char: charIndex,
				line: parseInt(_lineIndex)
			});
		}

		for(const charIndex of allSubstringIndices(line, "-->")) {
			output.push({
				type: "end",
				char: charIndex,
				line: parseInt(_lineIndex)
			});
		}
	}



	// sort by line first, ascending, then character
	// TODO: i'm sure i can probably build the array in order instead
	// TODO: in what cases would the array not be in the order i want?
	return output.toSorted((first, second) => {
		if(first.line !== second.line) {
			return first.line - second.line;
		}

		return first.char - second.char;
	});
}
