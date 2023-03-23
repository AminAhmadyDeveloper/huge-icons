import * as React from "react";

function FileWriteBig({ size, title, titleId, ...props }, svgRef) {
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
			d: "M15 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H20C18.8954 22 18 21.1046 18 20V8V5C18 3.34315 16.6569 2 15 2ZM5.25 7C5.25 6.58579 5.58579 6.25 6 6.25H14C14.4142 6.25 14.75 6.58579 14.75 7C14.75 7.41421 14.4142 7.75 14 7.75H6C5.58579 7.75 5.25 7.41421 5.25 7ZM6 11.25C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H14C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25H6ZM5.25 17C5.25 16.5858 5.58579 16.25 6 16.25H10C10.4142 16.25 10.75 16.5858 10.75 17C10.75 17.4142 10.4142 17.75 10 17.75H6C5.58579 17.75 5.25 17.4142 5.25 17ZM22 19.25V10C22 8.89543 21.1046 8 20 8H19.5V19.25C19.5 19.9404 20.0596 20.5 20.75 20.5C21.4404 20.5 22 19.9404 22 19.25Z",
		}),
	);
}

export default React.forwardRef(FileWriteBig);
