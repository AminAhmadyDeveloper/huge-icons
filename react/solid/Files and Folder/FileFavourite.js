import * as React from "react";

function FileFavourite({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 6V18C3 20.2091 4.79086 22 7 22H11.3431C11.6509 22 11.955 21.9645 12.25 21.8959V18C12.25 15.3766 14.3766 13.25 17 13.25H20.8959C20.9645 12.955 21 12.6509 21 12.3431V6C21 3.79086 19.2091 2 17 2H7C4.79086 2 3 3.79086 3 6ZM14.1716 20.8284C14.039 20.961 13.898 21.0833 13.75 21.1949V18C13.75 16.2051 15.2051 14.75 17 14.75H20.1949C20.0833 14.898 19.961 15.039 19.8284 15.1716L14.1716 20.8284ZM11.2191 11.0239L9.36501 8.70626C9.12873 8.41091 9 8.04394 9 7.6657V7.59099C9 6.71231 9.71231 6 10.591 6C11.0129 6 11.4176 6.16762 11.716 6.46599L12 6.75L12.284 6.46599C12.5824 6.16762 12.9871 6 13.409 6C14.2877 6 15 6.71231 15 7.59099V7.6657C15 8.04394 14.8713 8.41091 14.635 8.70626L12.7809 11.0239C12.3805 11.5243 11.6195 11.5243 11.2191 11.0239Z",
		}),
	);
}

export default React.forwardRef(FileFavourite);