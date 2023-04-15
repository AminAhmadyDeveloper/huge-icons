import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapLocation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.499 1.282a6.008 6.008 0 0 0-2.971 1.104A6.142 6.142 0 0 0 6.82 4.4c-.136.27-.42 1.07-.42 1.183 0 .035-.081.096-.19.143-1.339.575-2.125 1.023-3.425 1.95-.695.495-1.033.837-1.238 1.253-.306.62-.283.191-.298 5.771-.009 3.338.001 5.105.029 5.316.069.518.316.935.726 1.223.344.242.599.328 1.036.35.515.027.714-.046 1.529-.559 1.257-.79 2.496-1.339 3.322-1.471a3.31 3.31 0 0 1 1.509.119c.603.201.968.424 2.247 1.369 1.155.853 1.709 1.182 2.402 1.427 1.809.638 3.826.099 6.611-1.767 1.161-.778 1.541-1.125 1.795-1.64.303-.615.281-.19.296-5.767.009-3.338-.001-5.105-.029-5.316a1.719 1.719 0 0 0-.726-1.223c-.344-.242-.599-.328-1.036-.35-.49-.025-.737.055-1.316.425a16.41 16.41 0 0 1-1.574.909l-.441.221.028-.173a6.507 6.507 0 0 0-.019-2.053 6.955 6.955 0 0 0-.458-1.34 6.142 6.142 0 0 0-1.708-2.014 5.924 5.924 0 0 0-3.041-1.106c-.27-.021-.5-.036-.511-.033-.011.002-.2.018-.421.035m1.266 1.537c.916.16 1.769.618 2.395 1.285.449.478.78 1.066.967 1.717.131.458.132 1.456.001 2.039-.369 1.644-1.349 3.463-2.416 4.483-.42.401-.736.625-1.092.776-.345.145-.895.145-1.24 0-.737-.311-1.583-1.158-2.279-2.281-.517-.833-1.023-2.057-1.229-2.978-.131-.583-.13-1.581.001-2.039a4.19 4.19 0 0 1 2.737-2.844c.174-.058.445-.129.603-.158.393-.071 1.147-.071 1.552 0m-1.086 1.459A2.254 2.254 0 0 0 9.82 5.969a2.217 2.217 0 0 0 .529 2.034c.475.515.952.725 1.651.725.699 0 1.176-.21 1.651-.725a2.216 2.216 0 0 0 .529-2.033c-.172-.727-.805-1.407-1.498-1.609a2.631 2.631 0 0 0-1.003-.083m.709 1.587c.059.044.162.148.23.231.107.133.122.182.122.404 0 .222-.015.271-.122.404-.217.267-.312.316-.618.316s-.401-.049-.618-.316c-.107-.132-.122-.183-.122-.398 0-.322.141-.543.44-.689.168-.082.55-.055.688.048M6.339 7.741c.177 1.112.645 2.402 1.27 3.499.53.931 1.072 1.647 1.679 2.22 1.373 1.295 2.74 1.601 4.132.925 1.011-.492 1.988-1.49 2.805-2.865.341-.574.46-.802.679-1.297l.21-.477.413-.146c.861-.304 1.906-.841 2.867-1.474.206-.135.419-.246.472-.246.127 0 .317.099.349.182.014.035.025 2.306.025 5.047 0 3.733-.012 5.022-.048 5.14-.068.23-.319.487-.841.861-1.495 1.074-3.1 1.877-4.141 2.074a3.306 3.306 0 0 1-1.599-.098 5.233 5.233 0 0 1-.56-.221c-.289-.146-.963-.601-1.611-1.086-1.814-1.358-2.699-1.743-4.02-1.746-1.303-.003-2.893.598-4.736 1.792-.251.162-.499.295-.552.295-.125 0-.316-.1-.347-.182-.014-.035-.025-2.306-.025-5.047 0-3.702.012-5.022.047-5.139.026-.086.117-.236.202-.332.229-.261 1.191-.947 2.031-1.449.319-.19 1.211-.653 1.227-.637.005.004.037.187.072.407'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocation);
export default ForwardRef;
