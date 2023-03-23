import * as React from "react";

function FileRemoveBent({ size, title, titleId, ...props }, svgRef) {
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
			d: "M2 5V16.5V17.25C2 19.0449 3.48027 20.5 5.27519 20.5C7.0425 20.5 8.5 19.0673 8.5 17.3C8.5 16.8582 8.85817 16.5 9.3 16.5H18V5C18 3.34315 16.6569 2 15 2H5C3.34315 2 2 3.34315 2 5ZM11.591 12.6516C11.8839 12.9445 12.3588 12.9445 12.6517 12.6516C12.9446 12.3587 12.9446 11.8839 12.6517 11.591L11.0607 9.99997L12.6516 8.409C12.9445 8.11611 12.9445 7.64123 12.6516 7.34834C12.3587 7.05545 11.8839 7.05545 11.591 7.34834L10 8.93931L8.40904 7.34833C8.11614 7.05544 7.64127 7.05544 7.34838 7.34833C7.05548 7.64123 7.05548 8.1161 7.34838 8.40899L8.93935 9.99997L7.34833 11.591C7.05544 11.8839 7.05544 12.3587 7.34833 12.6516C7.64123 12.9445 8.1161 12.9445 8.40899 12.6516L10 11.0606L11.591 12.6516ZM21.8766 18.9899C21.4361 20.7202 19.8675 22 18 22H6C7.86748 22 9.43606 20.7202 9.87657 18.9899C10.0128 18.4547 10.4477 18 11 18H21C21.5523 18 22.0128 18.4547 21.8766 18.9899Z",
		}),
	);
}

export default React.forwardRef(FileRemoveBent);
