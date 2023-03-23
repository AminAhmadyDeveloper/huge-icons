import * as React from "react";

function FileWrite({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 18V6C3 3.79086 4.79086 2 7 2H17C19.2091 2 21 3.79086 21 6V12.3431C21 12.6509 20.9645 12.955 20.8959 13.25H17C14.3766 13.25 12.25 15.3766 12.25 18V21.8959C11.955 21.9645 11.6509 22 11.3431 22H7C4.79086 22 3 20.2091 3 18ZM13.75 21.1949C13.898 21.0833 14.039 20.961 14.1716 20.8284L19.8284 15.1716C19.961 15.039 20.0833 14.898 20.1949 14.75H17C15.2051 14.75 13.75 16.2051 13.75 18V21.1949ZM7.25 7C7.25 6.58579 7.58579 6.25 8 6.25H16C16.4142 6.25 16.75 6.58579 16.75 7C16.75 7.41421 16.4142 7.75 16 7.75H8C7.58579 7.75 7.25 7.41421 7.25 7ZM8 10.25C7.58579 10.25 7.25 10.5858 7.25 11C7.25 11.4142 7.58579 11.75 8 11.75H12C12.4142 11.75 12.75 11.4142 12.75 11C12.75 10.5858 12.4142 10.25 12 10.25H8Z",
		}),
	);
}

export default React.forwardRef(FileWrite);
