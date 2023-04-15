import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletOpenRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.433 2.042A4.211 4.211 0 0 0 9.27 3.078c-.376.344-.95 1.18-.95 1.385 0 .049.944.057 6.684.057h6.685l-.027-.11c-.071-.292-.586-1.022-.954-1.353a4.542 4.542 0 0 0-1.75-.944c-.337-.089-.353-.09-3.818-.097-1.914-.004-3.582.007-3.707.026m-6 4.001a4.302 4.302 0 0 0-1.702.669 4.015 4.015 0 0 0-1.595 2.256c-.08.291-.107.501-.125.962l-.022.59h2.223c2.412 0 2.512.007 3.062.227.465.185.808.415 1.186.793.696.696 1.02 1.477 1.02 2.46 0 .97-.323 1.758-1 2.441-.512.517-.942.766-1.671.968-.295.082-.408.087-2.564.101l-2.256.016.022.567c.018.437.047.654.127.945a3.992 3.992 0 0 0 3.088 2.879c.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392.011-6.31.01-6.31-8.17.005c-4.494.003-8.273.02-8.398.038M2 14v2h2.098c1.377 0 2.171-.015 2.31-.044C7.31 15.768 8 14.92 8 14c0-.932-.71-1.791-1.617-1.957-.151-.027-.994-.043-2.31-.043H2v2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletOpenRight);
export default ForwardRef;
