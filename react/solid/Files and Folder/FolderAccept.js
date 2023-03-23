import * as React from "react";

function FolderAccept({ size, title, titleId, ...props }, svgRef) {
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
			d: "M22 10V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3H8.66667C9.53215 3 10.3743 3.28071 11.0667 3.8L12.9333 5.2C13.6257 5.71929 14.4679 6 15.3333 6H18C20.2091 6 22 7.79086 22 10ZM15.5645 11.4939C15.8372 11.1822 15.8056 10.7083 15.4939 10.4356C15.1822 10.1628 14.7084 10.1944 14.4356 10.5061L11.5657 13.786C11.4776 13.8867 11.3258 13.9002 11.2214 13.8166L9.46855 12.4144C9.1451 12.1556 8.67313 12.208 8.41438 12.5315C8.15562 12.8549 8.20806 13.3269 8.53151 13.5857L10.2843 14.9879C11.0156 15.5729 12.0779 15.4786 12.6946 14.7738L15.5645 11.4939Z",
		}),
	);
}

export default React.forwardRef(FolderAccept);
