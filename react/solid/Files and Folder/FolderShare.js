import * as React from "react";

function FolderShare({ size, title, titleId, ...props }, svgRef) {
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
			d: "M13 8V5.5C13 4.39543 12.1046 3.5 11 3.5H9.66667C9.23393 3.5 8.81286 3.35964 8.46667 3.1L7.53333 2.4C7.18714 2.14036 6.76607 2 6.33333 2H5C3.89543 2 3 2.89543 3 4V8C3 9.10457 3.89543 10 5 10H11C12.1046 10 13 9.10457 13 8ZM19 22C20.1046 22 21 21.1046 21 20V17.5C21 16.3954 20.1046 15.5 19 15.5H17.6667C17.2339 15.5 16.8129 15.3596 16.4667 15.1L15.5333 14.4C15.1871 14.1404 14.7661 14 14.3333 14H13C11.8954 14 11 14.8954 11 16V20C11 21.1046 11.8954 22 13 22H19ZM16 5.25C15.5858 5.25 15.25 5.58579 15.25 6C15.25 6.41421 15.5858 6.75 16 6.75H17C17.6904 6.75 18.25 7.30964 18.25 8V12.5C18.25 12.9142 18.5858 13.25 19 13.25C19.4142 13.25 19.75 12.9142 19.75 12.5V8C19.75 6.48122 18.5188 5.25 17 5.25H16ZM5.75 13C5.75 12.5858 5.41421 12.25 5 12.25C4.58579 12.25 4.25 12.5858 4.25 13V16C4.25 17.5188 5.48122 18.75 7 18.75H8C8.41421 18.75 8.75 18.4142 8.75 18C8.75 17.5858 8.41421 17.25 8 17.25H7C6.30964 17.25 5.75 16.6904 5.75 16V13Z",
		}),
	);
}

export default React.forwardRef(FolderShare);