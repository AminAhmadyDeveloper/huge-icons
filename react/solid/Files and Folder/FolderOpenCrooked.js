import * as React from "react";

function FolderOpenCrooked({ size, title, titleId, ...props }, svgRef) {
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
			d: "M2 6.375V17.625C2 17.8469 2.02061 18.0638 2.05995 18.2737L4.89483 11.8251C5.81764 9.67562 7.8941 8.25 10.2287 8.25H19.3049C19.1254 6.56252 17.7484 5.25 16.0763 5.25H12.7227C12.1448 5.25 11.5773 5.0898 11.0788 4.78592L8.91049 3.46408C8.41201 3.1602 7.84453 3 7.26659 3H5.24839C3.45435 3 2 4.51104 2 6.375ZM10.2286 9.75H19.3247H19.831C21.5143 9.75 22.554 11.6579 21.688 13.1576L18.4208 18.8152C17.638 20.1707 16.2282 21 14.7068 21H5.24834C4.34542 21 3.52855 20.6173 2.93982 19.9994L6.27076 12.4224C6.96592 10.7973 8.51701 9.75 10.2286 9.75Z",
		}),
	);
}

export default React.forwardRef(FolderOpenCrooked);