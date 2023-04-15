import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDesk = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.656 1.281a2.75 2.75 0 0 0-2.112 1.496c-.278.567-.277.564-.294 2.611l-.014 1.849-2.231.011-2.231.012-.169.112c-.667.441-.337 1.387.485 1.388h.15v3.722c0 3.225.008 3.762.063 4.025.117.569.338.996.716 1.39l.221.23v1.967c0 1.311.015 2.019.045 2.125.059.213.293.441.513.5.4.108.812-.12.92-.51.026-.091.042-.787.042-1.799v-1.65h1.48v.65c0 .358.019.717.042.799.108.39.52.618.92.51.22-.059.454-.287.513-.5.025-.087.045-.451.045-.809v-.65h8.48v.65c0 .358.02.722.045.809.059.213.293.441.513.5.4.108.812-.12.92-.51.023-.082.042-.441.042-.799v-.65h1.48v1.65c0 1.08.016 1.705.045 1.809.059.213.293.441.513.5.4.108.812-.12.92-.51.026-.093.042-.886.042-2.116v-1.968l.193-.198c.391-.401.627-.851.743-1.416.056-.268.064-.783.064-4.029V8.76h.15c.391-.001.72-.227.809-.556.089-.331-.03-.638-.324-.832l-.169-.112-2.231-.012-2.231-.011-.014-1.849c-.013-1.621-.024-1.877-.086-2.088a2.809 2.809 0 0 0-1.462-1.762c-.573-.283-.422-.272-4.042-.281-1.793-.005-3.37.006-3.504.024m6.881 1.596c.251.123.463.335.586.586l.097.197.011 1.79.011 1.79H7.76V5.505c0-1.879.001-1.887.224-2.224.121-.183.373-.375.607-.461.123-.045.726-.054 3.449-.048l3.3.008.197.097m4.694 9.673-.011 3.79-.098.199a1.306 1.306 0 0 1-.665.619c-.219.082-.247.082-7.457.082s-7.238 0-7.457-.082c-.267-.1-.53-.345-.665-.619l-.098-.199-.011-3.79-.01-3.79h16.482l-.01 3.79'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDesk);
export default ForwardRef;
