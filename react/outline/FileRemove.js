import * as React from "react";

function FileRemove({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 18H2.25H3ZM3 6H3.75H3ZM7 2V1.25V2ZM17 2V1.25V2ZM21 6H20.25H21ZM21 12.3431H21.75H21ZM11.3431 22V21.25V22ZM7 22V22.75V22ZM19.8284 15.1716L19.2981 14.6412V14.6412L19.8284 15.1716ZM14.1716 20.8284L14.7019 21.3588L14.1716 20.8284ZM13 18H12.25H13ZM17 14V13.25V14ZM13.591 11.6516C13.8839 11.9445 14.3588 11.9445 14.6517 11.6516C14.9446 11.3587 14.9446 10.8839 14.6517 10.591L13.591 11.6516ZM10.409 6.34834C10.1161 6.05544 9.64126 6.05544 9.34837 6.34834C9.05547 6.64123 9.05547 7.1161 9.34837 7.409L10.409 6.34834ZM9.34844 10.5911C9.05556 10.884 9.05557 11.3589 9.34847 11.6517C9.64136 11.9446 10.1162 11.9446 10.4091 11.6517L9.34844 10.5911ZM14.6517 7.40899C14.9446 7.11609 14.9446 6.64122 14.6517 6.34833C14.3588 6.05544 13.8839 6.05545 13.591 6.34835L14.6517 7.40899ZM3.75 18L3.75 6H2.25L2.25 18H3.75ZM7 2.75L17 2.75V1.25L7 1.25V2.75ZM20.25 6V12.3431H21.75V6H20.25ZM11.3431 21.25H7V22.75H11.3431V21.25ZM19.2981 14.6412L13.6412 20.2981L14.7019 21.3588L20.3588 15.7019L19.2981 14.6412ZM11.3431 22.75C12.6029 22.75 13.8111 22.2496 14.7019 21.3588L13.6412 20.2981C13.0317 20.9076 12.2051 21.25 11.3431 21.25V22.75ZM20.25 12.3431C20.25 13.2051 19.9076 14.0318 19.2981 14.6412L20.3588 15.7019C21.2496 14.8111 21.75 13.6029 21.75 12.3431H20.25ZM3.75 6C3.75 4.20507 5.20508 2.75 7 2.75V1.25C4.37665 1.25 2.25 3.37665 2.25 6H3.75ZM2.25 18C2.25 20.6234 4.37665 22.75 7 22.75V21.25C5.20507 21.25 3.75 19.7949 3.75 18H2.25ZM17 2.75C18.7949 2.75 20.25 4.20508 20.25 6H21.75C21.75 3.37665 19.6234 1.25 17 1.25V2.75ZM13.75 22V18H12.25V22H13.75ZM17 14.75L21 14.75V13.25L17 13.25V14.75ZM13.75 18C13.75 16.2051 15.2051 14.75 17 14.75V13.25C14.3766 13.25 12.25 15.3766 12.25 18H13.75ZM14.6517 10.591L10.409 6.34834L9.34837 7.409L13.591 11.6516L14.6517 10.591ZM10.4091 11.6517L14.6517 7.40899L13.591 6.34835L9.34844 10.5911L10.4091 11.6517Z",
		}),
	);
}

export default React.forwardRef(FileRemove);