import * as React from "react";

function FileUpload({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 6V18C3 20.2091 4.79086 22 7 22H11.3431C11.6509 22 11.955 21.9645 12.25 21.8959V18C12.25 15.3766 14.3766 13.25 17 13.25H20.8959C20.9645 12.955 21 12.6509 21 12.3431V6C21 3.79086 19.2091 2 17 2H7C4.79086 2 3 3.79086 3 6ZM14.1716 20.8284C14.039 20.961 13.898 21.0833 13.75 21.1949V18C13.75 16.2051 15.2051 14.75 17 14.75H20.1949C20.0833 14.898 19.961 15.039 19.8284 15.1716L14.1716 20.8284ZM11.1161 7.94449C11.1586 7.90202 11.2033 7.86325 11.25 7.82817V11.9999C11.25 12.4142 11.5858 12.7499 12 12.7499C12.4142 12.7499 12.75 12.4142 12.75 11.9999V7.82817C12.7967 7.86325 12.8414 7.90202 12.8839 7.94449L14.4697 9.53027C14.7626 9.82316 15.2374 9.82316 15.5303 9.53027C15.8232 9.23738 15.8232 8.76251 15.5303 8.46961L13.9445 6.88382C12.8706 5.80988 11.1294 5.80988 10.0555 6.88383L8.46967 8.46961C8.17678 8.76251 8.17678 9.23738 8.46967 9.53027C8.76256 9.82316 9.23744 9.82316 9.53033 9.53027L11.1161 7.94449Z",
		}),
	);
}

export default React.forwardRef(FileUpload);