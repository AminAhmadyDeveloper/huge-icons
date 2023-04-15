import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBroadcast = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.8 7.286c-.314.092-1.086.837-1.505 1.454a5.733 5.733 0 0 0-1.015 2.842c-.139 1.616.444 3.248 1.595 4.464.49.518.736.684 1.013.687.442.004.752-.3.752-.737 0-.28-.056-.367-.55-.858-.624-.62-.999-1.262-1.216-2.082-.081-.307-.094-.449-.094-1.036 0-.619.01-.715.109-1.071.236-.843.557-1.368 1.269-2.075.442-.437.517-.53.557-.691.138-.549-.378-1.055-.915-.897m7.985.002c-.36.098-.595.519-.5.896.04.159.117.254.557.69.707.702 1.035 1.236 1.261 2.054.139.502.176 1.335.082 1.836-.18.951-.561 1.661-1.277 2.374-.492.492-.548.578-.548.858 0 .437.31.741.752.737.276-.003.523-.169 1.005-.679 1.498-1.583 2.002-3.816 1.322-5.862-.281-.844-.758-1.595-1.457-2.293-.599-.599-.823-.713-1.197-.611m-4.545 10.24c0 1.667.015 2.666.042 2.76.086.313.515.515.911.43.248-.053.472-.236.525-.43.027-.094.042-1.092.042-2.758v-2.611l-.17.031c-.224.04-.92.039-1.16-.002l-.19-.033v2.613'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBroadcast);
export default ForwardRef;
