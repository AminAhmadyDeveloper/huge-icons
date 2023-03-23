import * as React from "react";

function FolderHasFile({ size, title, titleId, ...props }, svgRef) {
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
			d: "M17 9.125C17.7056 9.125 18.3801 9.25786 19 9.49994V4C19 2.89543 18.1046 2 17 2H7C5.89543 2 5 2.89543 5 4V6.87494C5.61986 6.63286 6.29442 6.5 7 6.5H8.89653C10.0612 6.5 11.1959 6.86974 12.137 7.55596L13.6305 8.64502C14.0583 8.95693 14.5741 9.125 15.1035 9.125H17ZM21 14.625V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V12C3 9.79086 4.79086 8 7 8H8.89653C9.74359 8 10.5688 8.2689 11.2532 8.76797L12.7468 9.85703C13.4312 10.3561 14.2564 10.625 15.1035 10.625H17C19.2091 10.625 21 12.4159 21 14.625Z",
		}),
	);
}

export default React.forwardRef(FolderHasFile);