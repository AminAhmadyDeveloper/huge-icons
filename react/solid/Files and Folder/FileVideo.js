import * as React from "react";

function FileVideo({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 18V6C3 3.79086 4.79086 2 7 2H11.3431C11.6509 2 11.955 2.03547 12.25 2.10414V6C12.25 8.62335 14.3766 10.75 17 10.75H20.8959C20.9645 11.045 21 11.3491 21 11.6569V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18ZM13.75 6V2.80513C13.898 2.91667 14.039 3.03899 14.1716 3.17157L19.8284 8.82843C19.961 8.96101 20.0833 9.10195 20.1949 9.25H17C15.2051 9.25 13.75 7.79493 13.75 6ZM10 13.8028V16.1972C10 17.3953 11.3352 18.1099 12.3321 17.4453L14.1279 16.2481C15.0185 15.6543 15.0185 14.3457 14.1279 13.7519L12.332 12.5547C11.3352 11.8901 10 12.6047 10 13.8028Z",
		}),
	);
}

export default React.forwardRef(FileVideo);