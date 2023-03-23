import * as React from "react";

function FolderRemoveOpen({ size, title, titleId, ...props }, svgRef) {
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
			d: "M17 4C18.4865 4 19.7205 5.08114 19.9585 6.5H4V5C4 3.34315 5.34315 2 7 2H9.56917C10.2372 2 10.8862 2.22298 11.4131 2.6336L12.3535 3.3664C12.8805 3.77702 13.5294 4 14.1975 4H17ZM20.526 8H3.47391C2.20062 8 1.25151 9.17404 1.5183 10.4191L3.32239 18.8381C3.71759 20.6824 5.34745 22 7.2336 22H16.7663C18.6524 22 20.2823 20.6824 20.6775 18.8381L22.4816 10.4191C22.7484 9.17403 21.7992 8 20.526 8ZM13.591 17.6516C13.8838 17.9445 14.3587 17.9445 14.6516 17.6516C14.9445 17.3587 14.9445 16.8839 14.6516 16.591L13.0606 15L14.6516 13.409C14.9445 13.1161 14.9445 12.6412 14.6516 12.3483C14.3587 12.0554 13.8838 12.0554 13.5909 12.3483L11.9999 13.9393L10.409 12.3483C10.1161 12.0554 9.64121 12.0554 9.34831 12.3483C9.05542 12.6412 9.05542 13.1161 9.34831 13.409L10.9393 15L9.34827 16.591C9.05538 16.8839 9.05538 17.3587 9.34827 17.6516C9.64116 17.9445 10.116 17.9445 10.4089 17.6516L11.9999 16.0606L13.591 17.6516Z",
		}),
	);
}

export default React.forwardRef(FolderRemoveOpen);