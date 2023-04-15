import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutFour = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.302 4.302 0 0 0-1.702.669c-.766.521-1.324 1.307-1.6 2.256l-.108.372-.013 2.95-.013 2.95h9.243V2l-2.79.005c-1.535.003-2.892.02-3.017.038m7.327 4.575v4.622h9.243l-.012-2.93-.012-2.93-.106-.385a4.03 4.03 0 0 0-1.604-2.283 5.058 5.058 0 0 0-1.311-.599c-.332-.087-.387-.089-3.268-.103l-2.93-.014v4.622M2.01 15.71l.013 2.95.11.378c.437 1.504 1.584 2.572 3.093 2.879.388.079.533.083 3.21.083h2.804v-9.24H1.997l.013 2.95m10.75 1.671v4.622l2.93-.012 2.93-.012.391-.108a4.004 4.004 0 0 0 2.906-3.097c.079-.388.083-.533.083-3.21V12.76h-9.24v4.621'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutFour);
export default ForwardRef;
