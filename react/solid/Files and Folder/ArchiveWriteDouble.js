import * as React from "react";

function ArchiveWriteDouble({ size, title, titleId, ...props }, svgRef) {
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
			d: "M11.25 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H11.25V2ZM12.75 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H12.75V22ZM14.75 6C14.75 5.58579 15.0858 5.25 15.5 5.25H18.5C18.9142 5.25 19.25 5.58579 19.25 6C19.25 6.41421 18.9142 6.75 18.5 6.75H15.5C15.0858 6.75 14.75 6.41421 14.75 6ZM5.5 5.25C5.08579 5.25 4.75 5.58579 4.75 6C4.75 6.41421 5.08579 6.75 5.5 6.75H8.5C8.91421 6.75 9.25 6.41421 9.25 6C9.25 5.58579 8.91421 5.25 8.5 5.25H5.5ZM14.75 10C14.75 9.58579 15.0858 9.25 15.5 9.25H18.5C18.9142 9.25 19.25 9.58579 19.25 10C19.25 10.4142 18.9142 10.75 18.5 10.75H15.5C15.0858 10.75 14.75 10.4142 14.75 10ZM5.5 9.25C5.08579 9.25 4.75 9.58579 4.75 10C4.75 10.4142 5.08579 10.75 5.5 10.75H8.5C8.91421 10.75 9.25 10.4142 9.25 10C9.25 9.58579 8.91421 9.25 8.5 9.25H5.5ZM18 17.5C18 18.0523 17.5523 18.5 17 18.5C16.4477 18.5 16 18.0523 16 17.5C16 16.9477 16.4477 16.5 17 16.5C17.5523 16.5 18 16.9477 18 17.5ZM7 18.5C7.55228 18.5 8 18.0523 8 17.5C8 16.9477 7.55228 16.5 7 16.5C6.44772 16.5 6 16.9477 6 17.5C6 18.0523 6.44772 18.5 7 18.5Z",
		}),
	);
}

export default React.forwardRef(ArchiveWriteDouble);
