import * as React from "react";

function FilePng({ size, title, titleId, ...props }, svgRef) {
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
			d: "M3 18V6C3 3.79086 4.79086 2 7 2H11.3431C11.6509 2 11.955 2.03547 12.25 2.10414V6C12.25 8.62335 14.3766 10.75 17 10.75H20.8959C20.9645 11.045 21 11.3491 21 11.6569V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18ZM13.75 6V2.80513C13.898 2.91667 14.039 3.03899 14.1716 3.17157L19.8284 8.82843C19.961 8.96101 20.0833 9.10195 20.1949 9.25H17C15.2051 9.25 13.75 7.79493 13.75 6ZM16.3359 15.6973V16.4209H17.3291V16.9658C17.1982 17.0674 17.041 17.1543 16.8574 17.2266C16.6758 17.2969 16.4941 17.332 16.3125 17.332C15.9453 17.332 15.6484 17.2051 15.4219 16.9512C15.1953 16.6953 15.082 16.3125 15.082 15.8027C15.082 15.3301 15.1934 14.9736 15.416 14.7334C15.6406 14.4932 15.9424 14.373 16.3213 14.373C16.5713 14.373 16.7793 14.4346 16.9453 14.5576C17.1133 14.6787 17.2275 14.8447 17.2881 15.0557L18.1494 14.8945C18.0635 14.5 17.8701 14.1914 17.5693 13.9688C17.2705 13.7441 16.8545 13.6318 16.3213 13.6318C15.9111 13.6318 15.5684 13.7031 15.293 13.8457C14.9316 14.0312 14.6572 14.2979 14.4697 14.6455C14.2822 14.9932 14.1885 15.3906 14.1885 15.8379C14.1885 16.25 14.2725 16.6318 14.4404 16.9834C14.6084 17.333 14.8594 17.6025 15.1934 17.792C15.5273 17.9795 15.9189 18.0732 16.3682 18.0732C16.7217 18.0732 17.0703 18.0068 17.4141 17.874C17.7598 17.7393 18.0234 17.584 18.2051 17.4082V15.6973H16.3359ZM6 18V13.7051H7.3916C7.91895 13.7051 8.2627 13.7266 8.42285 13.7695C8.66895 13.834 8.875 13.9746 9.04102 14.1914C9.20703 14.4062 9.29004 14.6846 9.29004 15.0264C9.29004 15.29 9.24219 15.5117 9.14648 15.6914C9.05078 15.8711 8.92871 16.0127 8.78027 16.1162C8.63379 16.2178 8.48438 16.2852 8.33203 16.3184C8.125 16.3594 7.8252 16.3799 7.43262 16.3799H6.86719V18H6ZM6.86719 14.4316V15.6504H7.3418C7.68359 15.6504 7.91211 15.6279 8.02734 15.583C8.14258 15.5381 8.23242 15.4678 8.29688 15.3721C8.36328 15.2764 8.39648 15.165 8.39648 15.0381C8.39648 14.8818 8.35059 14.7529 8.25879 14.6514C8.16699 14.5498 8.05078 14.4863 7.91016 14.4609C7.80664 14.4414 7.59863 14.4316 7.28613 14.4316H6.86719ZM10.0107 18V13.7051H10.8545L12.6123 16.5732V13.7051H13.418V18H12.5479L10.8164 15.1992V18H10.0107Z",
		}),
	);
}

export default React.forwardRef(FilePng);