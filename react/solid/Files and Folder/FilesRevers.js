import * as React from "react";

function FilesRevers({ size, title, titleId, ...props }, svgRef) {
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
			d: "M13 2C14.6787 2 16.1159 3.03409 16.7092 4.5L11 4.5C7.96244 4.5 5.5 6.96243 5.5 10L5.5 17.7092C4.03409 17.1159 3 15.6787 3 14V6C3 3.79086 4.79086 2 7 2H13ZM7.00001 10L7.00001 18C7.00001 20.2092 8.79087 22 11 22H13.3432C13.6509 22 13.955 21.9645 14.25 21.8959L14.25 20C14.25 17.3767 16.3767 15.25 19 15.25H20.8959C20.9645 14.955 21 14.6509 21 14.3432L21 10C21 7.79087 19.2092 6.00001 17 6.00001L11 6.00001C8.79088 6.00001 7.00001 7.79087 7.00001 10ZM16.1716 20.8284C16.039 20.961 15.8981 21.0833 15.75 21.1949L15.75 20C15.75 18.2051 17.2051 16.75 19 16.75H20.1949C20.0833 16.8981 19.961 17.039 19.8284 17.1716L16.1716 20.8284Z",
		}),
	);
}

export default React.forwardRef(FilesRevers);