import * as React from "react";

function FileMusic({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 18V6C3 3.79086 4.79086 2 7 2H11.3431C11.6509 2 11.955 2.03547 12.25 2.10414V6C12.25 8.62335 14.3766 10.75 17 10.75H20.8959C20.9645 11.045 21 11.3491 21 11.6569V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18ZM13.75 6V2.80513C13.898 2.91667 14.039 3.03899 14.1716 3.17157L19.8284 8.82843C19.961 8.96101 20.0833 9.10195 20.1949 9.25H17C15.2051 9.25 13.75 7.79493 13.75 6ZM13 12.75C13.6904 12.75 14.25 13.3096 14.25 14V14.05C14.25 14.4642 14.5858 14.8 15 14.8C15.4142 14.8 15.75 14.4642 15.75 14.05V14C15.75 12.4812 14.5188 11.25 13 11.25C12.0335 11.25 11.25 12.0335 11.25 13V14.378C11.0154 14.2951 10.763 14.25 10.5 14.25C9.25736 14.25 8.25 15.2574 8.25 16.5C8.25 17.7426 9.25736 18.75 10.5 18.75C11.7426 18.75 12.75 17.7426 12.75 16.5V13C12.75 12.8619 12.8619 12.75 13 12.75ZM10.5 15.75C10.9142 15.75 11.25 16.0858 11.25 16.5C11.25 16.9142 10.9142 17.25 10.5 17.25C10.0858 17.25 9.75 16.9142 9.75 16.5C9.75 16.0858 10.0858 15.75 10.5 15.75Z",
		}),
	);
}

export default React.forwardRef(FileMusic);