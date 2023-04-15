import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoadHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 5.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v7.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V8.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m1.955 6.324a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.216.308-.295.331-1.116.331-.821 0-.9-.023-1.116-.331-.286-.406-.056-1.009.431-1.133.069-.017.414-.028.768-.024.624.008.648.011.805.115m5.432-.039c.582.315.559 1.079-.04 1.356-.235.109-1.325.109-1.56 0-.521-.241-.625-.866-.205-1.234a.747.747 0 0 1 .256-.153c.06-.013.127-.031.149-.039.022-.009.319-.011.66-.006.482.009.647.025.74.076m5.568.039a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.216.308-.295.331-1.116.331-.821 0-.9-.023-1.116-.331-.286-.406-.056-1.009.431-1.133.069-.017.414-.028.768-.024.624.008.648.011.805.115'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadHorizontal);
export default ForwardRef;