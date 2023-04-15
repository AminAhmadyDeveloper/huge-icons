import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeShield = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.336 2.058a4.172 4.172 0 0 0-1.236.39c-.394.198-.069-.021-3.86 2.605-3.573 2.475-3.662 2.546-3.958 3.158-.218.451-.296.827-.268 1.289.042.679.261 1.151.809 1.745.257.279.386.461.52.733.298.604.295.568.297 3.662.001 2.515.007 2.77.076 3.1.316 1.526 1.446 2.695 3.024 3.13l.4.11h9.72l.4-.11c.22-.06.598-.208.84-.328 1.1-.547 1.815-1.416 2.151-2.615.083-.298.086-.397.108-3.287l.022-2.98.109-.323c.137-.406.338-.718.743-1.155.809-.87.983-1.941.485-2.972-.296-.61-.385-.682-3.958-3.155-3.842-2.66-3.473-2.411-3.86-2.605a4.303 4.303 0 0 0-2.564-.392m1.087 7.229c.162.032.63.243 1.475.664 1.145.571 1.256.636 1.485.864.458.459.604.885.561 1.642-.142 2.524-.802 3.995-2.411 5.38-.304.262-.579.46-.771.555-.292.145-.307.148-.762.148s-.47-.003-.762-.148c-.51-.254-1.434-1.099-1.935-1.77-.752-1.007-1.172-2.394-1.25-4.131-.03-.673.026-.953.265-1.322.279-.432.474-.565 1.803-1.228.674-.336 1.311-.628 1.421-.65a2.31 2.31 0 0 1 .881-.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeShield);
export default ForwardRef;
