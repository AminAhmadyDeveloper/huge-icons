import * as React from "react";

function FileAddBent({ size, title, titleId, ...props }, svgRef) {
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
			d: "M2 4.5V16V16.75C2 18.5449 3.48027 20 5.27519 20C7.0425 20 8.5 18.5673 8.5 16.8C8.5 16.3582 8.85817 16 9.3 16H18V4.5C18 2.84315 16.6569 1.5 15 1.5H5C3.34315 1.5 2 2.84315 2 4.5ZM10.75 6.5C10.75 6.08579 10.4142 5.75 10 5.75C9.58579 5.75 9.25 6.08579 9.25 6.5V8.75H7C6.58579 8.75 6.25 9.08579 6.25 9.5C6.25 9.91421 6.58579 10.25 7 10.25H9.25V12.5C9.25 12.9142 9.58579 13.25 10 13.25C10.4142 13.25 10.75 12.9142 10.75 12.5V10.25H13C13.4142 10.25 13.75 9.91421 13.75 9.5C13.75 9.08579 13.4142 8.75 13 8.75H10.75V6.5ZM21.8766 18.9899C21.4361 20.7202 19.8675 22 18 22H6C7.86748 22 9.43606 20.7202 9.87657 18.9899C10.0128 18.4547 10.4477 18 11 18H21C21.5523 18 22.0128 18.4547 21.8766 18.9899Z",
		}),
	);
}

export default React.forwardRef(FileAddBent);