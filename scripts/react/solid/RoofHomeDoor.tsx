import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeDoor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.336 2.058a4.172 4.172 0 0 0-1.236.39c-.394.198-.069-.021-3.86 2.605-3.573 2.475-3.662 2.546-3.958 3.158-.218.451-.296.827-.268 1.289.042.679.261 1.151.809 1.745.257.279.386.461.52.733.298.604.295.568.297 3.662.001 2.515.007 2.77.076 3.1.316 1.526 1.446 2.695 3.024 3.13l.4.11h9.72l.4-.11c1.507-.415 2.577-1.468 2.991-2.943.084-.298.087-.394.108-3.287l.022-2.98.109-.323c.137-.406.338-.718.743-1.155.809-.87.983-1.941.485-2.972-.296-.61-.385-.682-3.958-3.155-3.842-2.66-3.473-2.411-3.86-2.605a4.303 4.303 0 0 0-2.564-.392m1.047 11.985c.802.147 1.456.829 1.584 1.652C14.153 16.894 13.209 18 12 18a2.016 2.016 0 0 1-1.967-1.695c-.1-.642.099-1.244.563-1.709.489-.488 1.102-.678 1.787-.553'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeDoor);
export default ForwardRef;
