import * as React from "react";

function FileFavouriteBent({ size, title, titleId, ...props }, svgRef) {
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
			d: "M2 5V16.5V17.25C2 19.0449 3.48027 20.5 5.27519 20.5C7.0425 20.5 8.5 19.0673 8.5 17.3C8.5 16.8582 8.85817 16.5 9.3 16.5H18V5C18 3.34315 16.6569 2 15 2H5C3.34315 2 2 3.34315 2 5ZM7.36501 9.70626L9.21913 12.0239C9.61946 12.5243 10.3805 12.5243 10.7809 12.0239L12.635 9.70626C12.8713 9.41091 13 9.04394 13 8.6657V8.59099C13 7.71231 12.2877 7 11.409 7C10.9871 7 10.5824 7.16762 10.284 7.46599L10 7.75L9.71599 7.46599C9.41762 7.16762 9.01295 7 8.59099 7C7.71231 7 7 7.71231 7 8.59099V8.6657C7 9.04394 7.12873 9.41091 7.36501 9.70626ZM21.8766 18.9899C21.4361 20.7202 19.8675 22 18 22H6C7.86748 22 9.43606 20.7202 9.87657 18.9899C10.0128 18.4547 10.4477 18 11 18H21C21.5523 18 22.0128 18.4547 21.8766 18.9899Z",
		}),
	);
}

export default React.forwardRef(FileFavouriteBent);