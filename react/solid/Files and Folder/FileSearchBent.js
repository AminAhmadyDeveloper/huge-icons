import * as React from "react";

function FileSearchBent({ size, title, titleId, ...props }, svgRef) {
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
			d: "M2 5V16.5V17.25C2 19.0449 3.48027 20.5 5.27519 20.5C7.0425 20.5 8.5 19.0673 8.5 17.3C8.5 16.8582 8.85817 16.5 9.3 16.5H18V5C18 3.34315 16.6569 2 15 2H5C3.34315 2 2 3.34315 2 5ZM8.75 9.5C8.75 8.5335 9.5335 7.75 10.5 7.75C11.4665 7.75 12.25 8.5335 12.25 9.5C12.25 10.4665 11.4665 11.25 10.5 11.25C9.5335 11.25 8.75 10.4665 8.75 9.5ZM10.5 6.25C8.70507 6.25 7.25 7.70507 7.25 9.5C7.25 10.1257 7.42684 10.7102 7.73327 11.2061L6.46967 12.4697C6.17678 12.7626 6.17678 13.2374 6.46967 13.5303C6.76256 13.8232 7.23744 13.8232 7.53033 13.5303L8.79393 12.2667C9.28982 12.5732 9.87426 12.75 10.5 12.75C12.2949 12.75 13.75 11.2949 13.75 9.5C13.75 7.70507 12.2949 6.25 10.5 6.25ZM21.8766 18.9899C21.4361 20.7202 19.8675 22 18 22H6C7.86748 22 9.43606 20.7202 9.87657 18.9899C10.0128 18.4547 10.4477 18 11 18H21C21.5523 18 22.0128 18.4547 21.8766 18.9899Z",
		}),
	);
}

export default React.forwardRef(FileSearchBent);