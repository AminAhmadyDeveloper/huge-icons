import * as React from "react";

function FolderDownloadOpen({ size, title, titleId, ...props }, svgRef) {
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
			d: "M17 4C18.4865 4 19.7205 5.08114 19.9585 6.5H4V5C4 3.34315 5.34315 2 7 2H9.56917C10.2372 2 10.8862 2.22298 11.4131 2.6336L12.3535 3.3664C12.8805 3.77702 13.5294 4 14.1975 4H17ZM20.526 8H3.47391C2.20062 8 1.25151 9.17404 1.5183 10.4191L3.32239 18.8381C3.71759 20.6824 5.34745 22 7.2336 22H16.7663C18.6524 22 20.2823 20.6824 20.6775 18.8381L22.4816 10.4191C22.7484 9.17403 21.7992 8 20.526 8ZM11.25 16.1718C11.2033 16.1368 11.1586 16.098 11.1161 16.0555L9.53033 14.4697C9.23744 14.1768 8.76256 14.1768 8.46967 14.4697C8.17678 14.7626 8.17678 15.2375 8.46967 15.5304L10.0555 17.1162C11.1294 18.1901 12.8706 18.1901 13.9445 17.1162L15.5303 15.5304C15.8232 15.2375 15.8232 14.7626 15.5303 14.4697C15.2374 14.1768 14.7626 14.1768 14.4697 14.4697L12.8839 16.0555C12.8414 16.098 12.7967 16.1368 12.75 16.1718V12.0001C12.75 11.5858 12.4142 11.2501 12 11.2501C11.5858 11.2501 11.25 11.5858 11.25 12.0001V16.1718Z",
		}),
	);
}

export default React.forwardRef(FolderDownloadOpen);