import * as React from "react";

function FolderAddOpen({ size, title, titleId, ...props }, svgRef) {
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
			d: "M17 4C18.4865 4 19.7205 5.08114 19.9585 6.5H4V5C4 3.34315 5.34315 2 7 2H9.56917C10.2372 2 10.8862 2.22298 11.4131 2.6336L12.3535 3.3664C12.8805 3.77702 13.5294 4 14.1975 4H17ZM20.526 8H3.47391C2.20062 8 1.25151 9.17404 1.5183 10.4191L3.32239 18.8381C3.71759 20.6824 5.34745 22 7.2336 22H16.7663C18.6524 22 20.2823 20.6824 20.6775 18.8381L22.4816 10.4191C22.7484 9.17403 21.7992 8 20.526 8ZM12.7499 13C12.7499 12.5858 12.4141 12.25 11.9999 12.25C11.5857 12.25 11.2499 12.5858 11.2499 13V15.25H8.99993C8.58572 15.25 8.24993 15.5858 8.24993 16C8.24993 16.4142 8.58572 16.75 8.99993 16.75H11.2499V19C11.2499 19.4142 11.5857 19.75 11.9999 19.75C12.4141 19.75 12.7499 19.4142 12.7499 19V16.75H14.9999C15.4141 16.75 15.7499 16.4142 15.7499 16C15.7499 15.5858 15.4141 15.25 14.9999 15.25H12.7499V13Z",
		}),
	);
}

export default React.forwardRef(FolderAddOpen);
