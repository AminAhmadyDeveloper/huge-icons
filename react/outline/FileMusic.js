import * as React from "react";

function FileMusic({ size, title, titleId, ...props }, svgRef) {
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
		title ? /*#__PURE__*/ React.createElement("title", { id: titleId }, title) : null,
		/*#__PURE__*/ React.createElement("path", {
			d: "M3 6H2.25H3ZM3 18H3.75H3ZM7 22V21.25V22ZM17 22V22.75V22ZM21 18H20.25H21ZM21 11.6569H21.75H21ZM11.3431 2V1.25V2ZM7 2V2.75V2ZM19.8284 8.82843L19.2981 9.35876L19.8284 8.82843ZM14.1716 3.17157L14.7019 2.64124V2.64124L14.1716 3.17157ZM13 6H12.25H13ZM17 10V10.75V10ZM14.25 14.05C14.25 14.4642 14.5858 14.8 15 14.8C15.4142 14.8 15.75 14.4642 15.75 14.05H14.25ZM2.25 6L2.25 18H3.75L3.75 6H2.25ZM7 22.75H17V21.25H7V22.75ZM21.75 18V11.6569H20.25V18H21.75ZM11.3431 1.25L7 1.25V2.75L11.3431 2.75V1.25ZM20.3588 8.2981L14.7019 2.64124L13.6412 3.7019L19.2981 9.35876L20.3588 8.2981ZM11.3431 2.75C12.2051 2.75 13.0317 3.09241 13.6412 3.7019L14.7019 2.64124C13.8111 1.75044 12.6029 1.25 11.3431 1.25V2.75ZM21.75 11.6569C21.75 10.3971 21.2496 9.18889 20.3588 8.2981L19.2981 9.35876C19.9076 9.96825 20.25 10.7949 20.25 11.6569H21.75ZM2.25 18C2.25 20.6234 4.37665 22.75 7 22.75V21.25C5.20508 21.25 3.75 19.7949 3.75 18H2.25ZM3.75 6C3.75 4.20508 5.20507 2.75 7 2.75V1.25C4.37665 1.25 2.25 3.37665 2.25 6H3.75ZM17 22.75C19.6234 22.75 21.75 20.6234 21.75 18H20.25C20.25 19.7949 18.7949 21.25 17 21.25V22.75ZM12.25 2V6H13.75V2H12.25ZM17 10.75L21 10.75V9.25L17 9.25V10.75ZM12.25 6C12.25 8.62335 14.3766 10.75 17 10.75V9.25C15.2051 9.25 13.75 7.79493 13.75 6H12.25ZM11.25 16.5C11.25 16.9142 10.9142 17.25 10.5 17.25V18.75C11.7426 18.75 12.75 17.7426 12.75 16.5H11.25ZM10.5 17.25C10.0858 17.25 9.75 16.9142 9.75 16.5H8.25C8.25 17.7426 9.25736 18.75 10.5 18.75V17.25ZM9.75 16.5C9.75 16.0858 10.0858 15.75 10.5 15.75V14.25C9.25736 14.25 8.25 15.2574 8.25 16.5H9.75ZM10.5 15.75C10.9142 15.75 11.25 16.0858 11.25 16.5H12.75C12.75 15.2574 11.7426 14.25 10.5 14.25V15.75ZM15.75 14.05V14H14.25V14.05H15.75ZM11.25 13V16.5H12.75V13H11.25ZM13 11.25C12.0335 11.25 11.25 12.0335 11.25 13H12.75C12.75 12.8619 12.8619 12.75 13 12.75V11.25ZM15.75 14C15.75 12.4812 14.5188 11.25 13 11.25V12.75C13.6904 12.75 14.25 13.3096 14.25 14H15.75Z",
		}),
	);
}

export default React.forwardRef(FileMusic);
