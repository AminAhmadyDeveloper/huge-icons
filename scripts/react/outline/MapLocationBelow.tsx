import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapLocationBelow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M7.98 1.283c-1.293.129-2.822.792-4.64 2.01-1.162.778-1.542 1.126-1.794 1.64-.303.618-.281.191-.296 5.767-.009 3.343 0 5.105.028 5.316.069.518.316.935.726 1.223.344.242.599.328 1.036.35.515.027.714-.046 1.529-.559 1.257-.79 2.496-1.339 3.322-1.471a3.325 3.325 0 0 1 1.498.115 5.3 5.3 0 0 1 .571.226c.241.122 1.17.745 1.48.993.207.165.228.198.356.57.503 1.468 1.492 3.053 2.492 3.997 1.373 1.295 2.74 1.601 4.132.925.468-.228.83-.488 1.308-.942 1.554-1.472 2.825-4.122 2.989-6.23.054-.694.057-10.878.004-11.251a1.733 1.733 0 0 0-.725-1.201c-.344-.242-.599-.328-1.036-.35-.515-.027-.714.046-1.529.559-1.257.79-2.496 1.339-3.322 1.471a3.31 3.31 0 0 1-1.509-.119c-.605-.202-.967-.423-2.26-1.378-1.157-.855-1.689-1.171-2.389-1.418a4.783 4.783 0 0 0-1.971-.243m1.409 1.63c.204.069.456.169.56.222.289.146.963.601 1.611 1.086 1.814 1.358 2.699 1.743 4.02 1.746 1.303.003 2.893-.598 4.736-1.792.251-.162.499-.295.552-.295.125 0 .316.1.347.182.014.035.025 1.622.025 3.526v3.461l-.25-.232c-2.042-1.891-5.221-2.075-7.462-.431A6.142 6.142 0 0 0 11.82 12.4c-.274.543-.54 1.521-.54 1.984 0 .091-.011.248-.025.35l-.026.184-.164-.101c-1.417-.869-2.806-1.012-4.468-.458-.856.284-1.901.811-2.913 1.466-.251.162-.499.295-.552.295-.125 0-.316-.1-.347-.182-.014-.035-.025-2.306-.025-5.047 0-3.733.012-5.022.048-5.14a1.15 1.15 0 0 1 .215-.346C3.39 4.997 4.877 4.026 5.94 3.5c1.173-.579 1.773-.748 2.58-.726.432.012.55.031.869.139m8.376 7.906c.916.16 1.769.618 2.395 1.285.449.478.78 1.066.967 1.717.131.458.132 1.456.001 2.039-.369 1.644-1.349 3.463-2.416 4.483-.42.401-.736.625-1.092.776-.345.145-.895.145-1.24 0-.737-.311-1.583-1.158-2.279-2.281-.517-.833-1.023-2.057-1.229-2.978-.131-.583-.13-1.581.001-2.039a4.19 4.19 0 0 1 2.737-2.844c.174-.058.445-.129.603-.158.393-.071 1.147-.071 1.552 0m-1.086 1.459a2.254 2.254 0 0 0-1.859 1.691 2.217 2.217 0 0 0 .529 2.034c.475.515.952.725 1.651.725.699 0 1.176-.21 1.651-.725.79-.856.79-2.15 0-3.006a2.216 2.216 0 0 0-1.972-.719m.709 1.587c.059.044.162.148.23.231.107.133.122.182.122.404 0 .222-.015.271-.122.404-.217.267-.312.316-.618.316s-.401-.049-.618-.316c-.107-.132-.122-.183-.122-.398 0-.322.141-.543.44-.689.168-.082.55-.055.688.048'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocationBelow);
export default ForwardRef;
