import * as React from "react";

function FolderDownload({ size, title, titleId, ...props }, svgRef) {
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
			d: "M22 10V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3H8.66667C9.53215 3 10.3743 3.28071 11.0667 3.8L12.9333 5.2C13.6257 5.71929 14.4679 6 15.3333 6H18C20.2091 6 22 7.79086 22 10ZM11.1161 14.0555C11.1586 14.098 11.2033 14.1368 11.25 14.1718V10.0001C11.25 9.58584 11.5858 9.25006 12 9.25006C12.4142 9.25006 12.75 9.58584 12.75 10.0001V14.1718C12.7967 14.1368 12.8414 14.098 12.8839 14.0555L14.4697 12.4697C14.7626 12.1768 15.2374 12.1768 15.5303 12.4697C15.8232 12.7626 15.8232 13.2375 15.5303 13.5304L13.9445 15.1162C12.8706 16.1901 11.1294 16.1901 10.0555 15.1162L8.46967 13.5304C8.17678 13.2375 8.17678 12.7626 8.46967 12.4697C8.76256 12.1768 9.23744 12.1768 9.53033 12.4697L11.1161 14.0555Z",
		}),
	);
}

export default React.forwardRef(FolderDownload);
