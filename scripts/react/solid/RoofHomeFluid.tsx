import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeFluid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.336 2.058a4.172 4.172 0 0 0-1.236.39c-.394.198-.069-.021-3.86 2.605-3.573 2.475-3.662 2.546-3.958 3.158-.218.451-.296.827-.268 1.289.042.679.261 1.151.809 1.745.257.279.386.461.52.733.298.604.295.568.297 3.662.001 2.515.007 2.77.076 3.1.316 1.526 1.446 2.695 3.024 3.13l.4.11h9.72l.4-.11c1.507-.415 2.577-1.468 2.991-2.943.084-.298.087-.394.108-3.287l.022-2.98.109-.323c.137-.406.338-.718.743-1.155.809-.87.983-1.941.485-2.972-.296-.61-.385-.682-3.958-3.155-3.842-2.66-3.473-2.411-3.86-2.605a4.303 4.303 0 0 0-2.564-.392m1.436 7.672c1.352 1.349 2.176 2.53 2.556 3.665.125.373.129.407.13 1.065.001.577-.012.729-.086 1-.34 1.244-1.19 2.085-2.455 2.427-.485.131-1.349.131-1.834 0-1.265-.342-2.114-1.182-2.455-2.427-.075-.272-.088-.423-.087-1v-.68l.152-.44c.385-1.121 1.194-2.273 2.535-3.61.403-.401.75-.73.772-.73.022 0 .369.329.772.73'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeFluid);
export default ForwardRef;
