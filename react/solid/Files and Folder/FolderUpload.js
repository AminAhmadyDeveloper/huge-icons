import * as React from "react";

function FolderUpload({ size, title, titleId, ...props }, svgRef) {
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
			d: "M22 10V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3H8.66667C9.53215 3 10.3743 3.28071 11.0667 3.8L12.9333 5.2C13.6257 5.71929 14.4679 6 15.3333 6H18C20.2091 6 22 7.79086 22 10ZM11.1161 11.9445C11.1586 11.902 11.2033 11.8632 11.25 11.8282V15.9999C11.25 16.4142 11.5858 16.7499 12 16.7499C12.4142 16.7499 12.75 16.4142 12.75 15.9999V11.8282C12.7967 11.8632 12.8414 11.902 12.8839 11.9445L14.4697 13.5303C14.7626 13.8232 15.2374 13.8232 15.5303 13.5303C15.8232 13.2374 15.8232 12.7625 15.5303 12.4696L13.9445 10.8838C12.8706 9.80988 11.1294 9.80988 10.0555 10.8838L8.46967 12.4696C8.17678 12.7625 8.17678 13.2374 8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303L11.1161 11.9445Z",
		}),
	);
}

export default React.forwardRef(FolderUpload);
