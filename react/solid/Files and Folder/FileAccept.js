import * as React from "react";

function FileAccept({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 6V18C3 20.2091 4.79086 22 7 22H11.3431C11.6509 22 11.955 21.9645 12.25 21.8959V18C12.25 15.3766 14.3766 13.25 17 13.25H20.8959C20.9645 12.955 21 12.6509 21 12.3431V6C21 3.79086 19.2091 2 17 2H7C4.79086 2 3 3.79086 3 6ZM14.1716 20.8284C14.039 20.961 13.898 21.0833 13.75 21.1949V18C13.75 16.2051 15.2051 14.75 17 14.75H20.1949C20.0833 14.898 19.961 15.039 19.8284 15.1716L14.1716 20.8284ZM15.5645 6.49389C15.8372 6.18216 15.8056 5.70834 15.4939 5.43558C15.1822 5.16282 14.7084 5.1944 14.4356 5.50613L11.5657 8.78603C11.4776 8.88671 11.3258 8.90019 11.2214 8.81662L9.46855 7.41436C9.1451 7.1556 8.67313 7.20804 8.41438 7.53149C8.15562 7.85494 8.20806 8.3269 8.53151 8.58566L10.2843 9.98792C11.0156 10.5729 12.0779 10.4786 12.6946 9.77378L15.5645 6.49389Z",
		}),
	);
}

export default React.forwardRef(FileAccept);