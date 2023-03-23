import * as React from "react";

function FolderFavouriteOpen({ size, title, titleId, ...props }, svgRef) {
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
			d: "M17 4C18.4865 4 19.7205 5.08114 19.9585 6.5H4V5C4 3.34315 5.34315 2 7 2H9.56917C10.2372 2 10.8862 2.22298 11.4131 2.6336L12.3535 3.3664C12.8805 3.77702 13.5294 4 14.1975 4H17ZM20.526 8H3.47391C2.20062 8 1.25151 9.17404 1.5183 10.4191L3.32239 18.8381C3.71759 20.6824 5.34745 22 7.2336 22H16.7663C18.6524 22 20.2823 20.6824 20.6775 18.8381L22.4816 10.4191C22.7484 9.17403 21.7992 8 20.526 8ZM9.36495 14.7063L11.2191 17.0239C11.6194 17.5243 12.3805 17.5243 12.7808 17.0239L14.6349 14.7063C14.8712 14.4109 14.9999 14.0439 14.9999 13.6657V13.591C14.9999 12.7123 14.2876 12 13.4089 12C12.987 12 12.5823 12.1676 12.2839 12.466L11.9999 12.75L11.7159 12.466C11.4176 12.1676 11.0129 12 10.5909 12C9.71225 12 8.99994 12.7123 8.99994 13.591V13.6657C8.99994 14.0439 9.12867 14.4109 9.36495 14.7063Z",
		}),
	);
}

export default React.forwardRef(FolderFavouriteOpen);