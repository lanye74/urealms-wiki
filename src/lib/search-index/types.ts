type StringArrayIndex = {
	line: number;
	char: number;
};



export type CommentMarker = {
	type: "start" | "end";
} & StringArrayIndex;



export type MultilineStringRange = {
	start: StringArrayIndex;
	end: StringArrayIndex;
};
