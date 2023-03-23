import * as React from "react";

function Files({ size, title, titleId, ...props }, svgRef) {
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
			d: "M17 14L17 6C17 3.79086 15.2091 2 13 2H10.6569C10.3491 2 10.045 2.03547 9.75 2.10414L9.75 4C9.75 6.62335 7.62335 8.75 5 8.75H3.10414C3.03547 9.04498 3 9.34909 3 9.65685V14C3 16.2091 4.79086 18 7 18H13C15.2091 18 17 16.2091 17 14ZM7.82843 3.17157C7.96101 3.03899 8.10195 2.91667 8.25 2.80513L8.25 4C8.25 5.79493 6.79492 7.25 5 7.25H3.80513C3.91667 7.10195 4.03899 6.96101 4.17157 6.82843L7.82843 3.17157ZM11 22C9.32132 22 7.88416 20.9659 7.29077 19.5H13C16.0376 19.5 18.5 17.0376 18.5 14V6.29077C19.9659 6.88416 21 8.32132 21 10V18C21 20.2092 19.2092 22 17 22H11Z",
		}),
	);
}

export default React.forwardRef(Files);