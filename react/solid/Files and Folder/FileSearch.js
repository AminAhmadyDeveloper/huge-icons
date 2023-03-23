

import * as React from "react";

function FileSearch({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 6V18C3 20.2091 4.79086 22 7 22H11.3431C11.6509 22 11.955 21.9645 12.25 21.8959V18C12.25 15.3766 14.3766 13.25 17 13.25H20.8959C20.9645 12.955 21 12.6509 21 12.3431V6C21 3.79086 19.2091 2 17 2H7C4.79086 2 3 3.79086 3 6ZM14.1716 20.8284C14.039 20.961 13.898 21.0833 13.75 21.1949V18C13.75 16.2051 15.2051 14.75 17 14.75H20.1949C20.0833 14.898 19.961 15.039 19.8284 15.1716L14.1716 20.8284ZM12.5 6.75C11.5335 6.75 10.75 7.5335 10.75 8.5C10.75 9.4665 11.5335 10.25 12.5 10.25C13.4665 10.25 14.25 9.4665 14.25 8.5C14.25 7.5335 13.4665 6.75 12.5 6.75ZM9.25 8.5C9.25 6.70507 10.7051 5.25 12.5 5.25C14.2949 5.25 15.75 6.70507 15.75 8.5C15.75 10.2949 14.2949 11.75 12.5 11.75C11.8743 11.75 11.2898 11.5732 10.7939 11.2667L9.53033 12.5303C9.23744 12.8232 8.76256 12.8232 8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697L9.73327 10.2061C9.42684 9.71018 9.25 9.12574 9.25 8.5Z",
		}),
	);
}

export default React.forwardRef(FileSearch);