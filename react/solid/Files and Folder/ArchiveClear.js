import * as React from "react";

function ArchiveClear({ size, title, titleId, ...props }, svgRef) {
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
			d: "M20 11.6115V6C20 3.79086 18.2091 2 16 2H8C5.79086 2 4 3.79086 4 6V11.6115C4.32161 11.5385 4.65631 11.5 5 11.5H6C7.10165 11.5 8.13901 12.0187 8.8 12.9L10 14.5C10.4721 15.1295 11.2131 15.5 12 15.5C12.7869 15.5 13.5279 15.1295 14 14.5L15.2 12.9C15.861 12.0187 16.8983 11.5 18 11.5H19C19.3437 11.5 19.6784 11.5385 20 11.6115ZM15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8ZM22 16V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V16C2 14.3431 3.34315 13 5 13H6C6.62951 13 7.22229 13.2964 7.6 13.8L8.8 15.4C9.55542 16.4072 10.741 17 12 17C13.259 17 14.4446 16.4072 15.2 15.4L16.4 13.8C16.7777 13.2964 17.3705 13 18 13H19C20.6569 13 22 14.3431 22 16Z",
		}),
	);
}

export default React.forwardRef(ArchiveClear);