import * as React from "react";

function HomeTwo({ size, title, titleId, ...props }, svgRef) {
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
				"aria-hidden": "true",
				ref: svgRef,
				"aria-labelledby": titleId,
			},
			props,
		),
		title
			? /*#__PURE__*/ React.createElement(
					"title",
					{
						id: titleId,
					},
					title,
			  )
			: null,
		/*#__PURE__*/ React.createElement("path", {
			d: "M16.1804 22H7.81965C5.5109 22 3.6393 20.214 3.6393 18.0108V13.133C3.6393 12.4248 3.34447 11.7456 2.81969 11.2448C1.60381 10.0845 1.76187 8.16205 3.15251 7.19692L9.54124 2.763C11.0071 1.74567 12.9929 1.74567 14.4588 2.763L20.8475 7.19691C22.2381 8.16205 22.3962 10.0845 21.1803 11.2448C20.6555 11.7456 20.3607 12.4248 20.3607 13.133V18.0108C20.3607 20.214 18.4891 22 16.1804 22ZM10 17.25C9.58579 17.25 9.25 17.5858 9.25 18C9.25 18.4142 9.58579 18.75 10 18.75H14C14.4142 18.75 14.75 18.4142 14.75 18C14.75 17.5858 14.4142 17.25 14 17.25H10Z",
		}),
	);
}

const ForwardRef = React.forwardRef(HomeTwo);
export default ForwardRef;