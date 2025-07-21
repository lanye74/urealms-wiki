type StringArrayIndex = {
	line: number | null;
	char: number | null;
};



export type CommentMarker = {
	type: "start" | "end";
} & StringArrayIndex;



type MultilineStringRange = {
	start: StringArrayIndex;
	end: StringArrayIndex;
};
