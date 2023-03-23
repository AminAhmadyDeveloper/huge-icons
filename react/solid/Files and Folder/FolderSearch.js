import * as React from "react";

function FolderSearch({ size, title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ React.createElement(
		"svg",
		Object.assign(
			{
				width: size || "1rem",
				height: size || "1rem",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				stroke: "none",
				fillRule: "evenodd",
				clipRule: "evenodd",
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title ? /*#__PURE__*/ React.createElement("title", { id: titleId }, title) : null,
		/*#__PURE__*/ React.createElement("path", {
			d: "M22 10V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3H8.66667C9.53215 3 10.3743 3.28071 11.0667 3.8L12.9333 5.2C13.6257 5.71929 14.4679 6 15.3333 6H18C20.2091 6 22 7.79086 22 10ZM10.75 12.5C10.75 11.5335 11.5335 10.75 12.5 10.75C13.4665 10.75 14.25 11.5335 14.25 12.5C14.25 13.4665 13.4665 14.25 12.5 14.25C11.5335 14.25 10.75 13.4665 10.75 12.5ZM12.5 9.25C10.7051 9.25 9.25 10.7051 9.25 12.5C9.25 13.1257 9.42684 13.7102 9.73327 14.2061L8.46967 15.4697C8.17678 15.7626 8.17678 16.2374 8.46967 16.5303C8.76256 16.8232 9.23744 16.8232 9.53033 16.5303L10.7939 15.2667C11.2898 15.5732 11.8743 15.75 12.5 15.75C14.2949 15.75 15.75 14.2949 15.75 12.5C15.75 10.7051 14.2949 9.25 12.5 9.25Z",
		}),
	);
}

export default React.forwardRef(FolderSearch);
