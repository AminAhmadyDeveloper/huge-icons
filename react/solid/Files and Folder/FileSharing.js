import * as React from "react";

function FileSharing({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 10V4C3 2.89543 3.89543 2 5 2H7.96282C8.44726 2 8.91524 2.17584 9.27982 2.49485L10.317 3.40238C10.751 3.78216 11 4.33081 11 4.90754V10C11 11.1046 10.1046 12 9 12H5C3.89543 12 3 11.1046 3 10ZM13 20V14C13 12.8954 13.8954 12 15 12H17.9628C18.4473 12 18.9152 12.1758 19.2798 12.4948L20.317 13.4024C20.751 13.7822 21 14.3308 21 14.9075V20C21 21.1046 20.1046 22 19 22H15C13.8954 22 13 21.1046 13 20ZM13.5 5.25C13.0858 5.25 12.75 5.58579 12.75 6C12.75 6.41421 13.0858 6.75 13.5 6.75H16C16.6904 6.75 17.25 7.30964 17.25 8V9.5C17.25 9.91421 17.5858 10.25 18 10.25C18.4142 10.25 18.75 9.91421 18.75 9.5V8C18.75 6.48122 17.5188 5.25 16 5.25H13.5ZM6.75 14.5C6.75 14.0858 6.41421 13.75 6 13.75C5.58579 13.75 5.25 14.0858 5.25 14.5V16C5.25 17.5188 6.48122 18.75 8 18.75H10.5C10.9142 18.75 11.25 18.4142 11.25 18C11.25 17.5858 10.9142 17.25 10.5 17.25H8C7.30964 17.25 6.75 16.6904 6.75 16V14.5Z",
		}),
	);
}

export default React.forwardRef(FileSharing);