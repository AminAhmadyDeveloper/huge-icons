import * as React from "react";

function FileRemove({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 6V18C3 20.2091 4.79086 22 7 22H11.3431C11.6509 22 11.955 21.9645 12.25 21.8959V18C12.25 15.3766 14.3766 13.25 17 13.25H20.8959C20.9645 12.955 21 12.6509 21 12.3431V6C21 3.79086 19.2091 2 17 2H7C4.79086 2 3 3.79086 3 6ZM14.1716 20.8284C14.039 20.961 13.898 21.0833 13.75 21.1949V18C13.75 16.2051 15.2051 14.75 17 14.75H20.1949C20.0833 14.898 19.961 15.039 19.8284 15.1716L14.1716 20.8284ZM9.34846 11.6517C9.05556 11.3588 9.05555 10.884 9.34844 10.5911L10.9394 9.00006L9.34839 7.40907C9.0555 7.11618 9.0555 6.6413 9.34839 6.34841C9.64129 6.05552 10.1162 6.05552 10.4091 6.34841L12 7.93938L13.591 6.34834C13.8839 6.05544 14.3588 6.05543 14.6517 6.34832C14.9446 6.64121 14.9446 7.11608 14.6517 7.40898L13.0607 9.00004L14.6517 10.5911C14.9446 10.8839 14.9446 11.3588 14.6517 11.6517C14.3588 11.9446 13.8839 11.9446 13.591 11.6517L12 10.0607L10.4091 11.6517C10.1162 11.9446 9.64136 11.9446 9.34846 11.6517Z",
		}),
	);
}

export default React.forwardRef(FileRemove);