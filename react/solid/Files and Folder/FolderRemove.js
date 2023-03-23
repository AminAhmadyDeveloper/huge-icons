import * as React from "react";

function FolderRemove({ size, title, titleId, ...props }, svgRef) {
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
			d: "M22 10V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3H8.66667C9.53215 3 10.3743 3.28071 11.0667 3.8L12.9333 5.2C13.6257 5.71929 14.4679 6 15.3333 6H18C20.2091 6 22 7.79086 22 10ZM14.6517 10.3483C14.9446 10.6412 14.9446 11.1161 14.6517 11.409L13.0607 13L14.6517 14.591C14.9446 14.8839 14.9446 15.3588 14.6517 15.6517C14.3588 15.9446 13.8839 15.9446 13.591 15.6517L12 14.0607L10.4091 15.6516C10.1162 15.9445 9.64129 15.9445 9.34839 15.6516C9.0555 15.3587 9.0555 14.8839 9.34839 14.591L10.9394 13L9.3484 11.409C9.05551 11.1161 9.05551 10.6413 9.3484 10.3484C9.64129 10.0555 10.1162 10.0555 10.4091 10.3484L12 11.9393L13.591 10.3483C13.8839 10.0554 14.3588 10.0554 14.6517 10.3483Z",
		}),
	);
}

export default React.forwardRef(FolderRemove);
