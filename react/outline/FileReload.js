import * as React from "react";

function FileReload({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 18H2.25H3ZM3 6H3.75H3ZM7 2V1.25V2ZM17 2V1.25V2ZM21 6H20.25H21ZM21 12.3431H21.75H21ZM11.3431 22V21.25V22ZM7 22V22.75V22ZM19.8284 15.1716L19.2981 14.6412V14.6412L19.8284 15.1716ZM14.1716 20.8284L14.7019 21.3588L14.1716 20.8284ZM13 18H12.25H13ZM17 14V13.25V14ZM10.7865 5.49943C10.3959 5.6372 10.1909 6.06555 10.3286 6.45618C10.4664 6.84681 10.8948 7.0518 11.2854 6.91404L10.7865 5.49943ZM14.1578 9.78647C14.02 10.1771 14.225 10.6055 14.6156 10.7432C15.0063 10.881 15.4346 10.676 15.5724 10.2854L14.1578 9.78647ZM9.91407 8.28536C10.0518 7.89473 9.84684 7.46638 9.45621 7.32861C9.06558 7.19085 8.63723 7.39584 8.49946 7.78648L9.91407 8.28536ZM13.2854 12.5724C13.676 12.4346 13.881 12.0063 13.7432 11.6156C13.6055 11.225 13.1771 11.02 12.7865 11.1578L13.2854 12.5724ZM3.75 18L3.75 6H2.25L2.25 18H3.75ZM7 2.75L17 2.75V1.25L7 1.25V2.75ZM20.25 6V12.3431H21.75V6H20.25ZM11.3431 21.25H7V22.75H11.3431V21.25ZM19.2981 14.6412L13.6412 20.2981L14.7019 21.3588L20.3588 15.7019L19.2981 14.6412ZM11.3431 22.75C12.6029 22.75 13.8111 22.2496 14.7019 21.3588L13.6412 20.2981C13.0317 20.9076 12.2051 21.25 11.3431 21.25V22.75ZM20.25 12.3431C20.25 13.2051 19.9076 14.0318 19.2981 14.6412L20.3588 15.7019C21.2496 14.8111 21.75 13.6029 21.75 12.3431H20.25ZM3.75 6C3.75 4.20507 5.20508 2.75 7 2.75V1.25C4.37665 1.25 2.25 3.37665 2.25 6H3.75ZM2.25 18C2.25 20.6234 4.37665 22.75 7 22.75V21.25C5.20507 21.25 3.75 19.7949 3.75 18H2.25ZM17 2.75C18.7949 2.75 20.25 4.20508 20.25 6H21.75C21.75 3.37665 19.6234 1.25 17 1.25V2.75ZM13.75 22V18H12.25V22H13.75ZM17 14.75L21 14.75V13.25L17 13.25V14.75ZM13.75 18C13.75 16.2051 15.2051 14.75 17 14.75V13.25C14.3766 13.25 12.25 15.3766 12.25 18H13.75ZM11.2854 6.91404C12.0787 6.63426 12.9947 6.81265 13.6269 7.44491L14.6876 6.38425C13.6317 5.32836 12.1038 5.03486 10.7865 5.49943L11.2854 6.91404ZM13.6269 7.44491C14.2592 8.07718 14.4376 8.99314 14.1578 9.78647L15.5724 10.2854C16.037 8.96805 15.7435 7.44015 14.6876 6.38425L13.6269 7.44491ZM10.4449 10.6269C9.81269 9.99463 9.63429 9.07868 9.91407 8.28536L8.49946 7.78648C8.03489 9.10378 8.3284 10.6317 9.38429 11.6876L10.4449 10.6269ZM12.7865 11.1578C11.9932 11.4375 11.0772 11.2592 10.4449 10.6269L9.38429 11.6876C10.4402 12.7434 11.9681 13.037 13.2854 12.5724L12.7865 11.1578Z",
		}),
	);
}

export default React.forwardRef(FileReload);
