import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArchive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.42 2.044a4.614 4.614 0 0 0-1.199.386 4.001 4.001 0 0 0-2.178 3.025C4.015 5.659 4 7.03 4 9.466c0 3.504.004 3.698.07 3.679l.25-.072c.123-.035.476-.051 1.12-.052.894-.001.953.004 1.2.095.562.207.698.337 1.574 1.503.805 1.07.935 1.223 1.283 1.496.488.384.999.632 1.623.789.443.112 1.38.105 1.821-.014a4.315 4.315 0 0 0 1.792-.97c.129-.118.581-.675 1.006-1.237.424-.563.832-1.079.906-1.148.191-.177.414-.308.715-.419.247-.091.306-.096 1.2-.095.644.001.997.017 1.12.052l.25.072c.066.019.07-.173.07-3.653 0-2.307-.015-3.798-.042-4.006-.221-1.764-1.64-3.196-3.413-3.443-.376-.052-8.757-.051-9.125.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArchive);
export default ForwardRef;
