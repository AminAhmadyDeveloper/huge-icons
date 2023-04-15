import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgImageRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v8.394l1.58 1.035c.869.569 1.707 1.096 1.862 1.172.854.415 1.931.408 2.799-.018.406-.2.266-.09 3.239-2.523a356.904 356.904 0 0 1 2.76-2.244 4.75 4.75 0 0 1 3.9-.877c.744.161 1.124.355 2.64 1.346.605.395 1.123.733 1.151.75.042.025.049-.638.04-3.502l-.012-3.533-.106-.385a4.032 4.032 0 0 0-1.604-2.283 5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M9.02 6.06c1.182.246 2.042 1.374 1.967 2.58a2.494 2.494 0 0 1-3.007 2.3c-1.127-.236-1.979-1.286-1.979-2.44 0-1.57 1.474-2.762 3.019-2.44m7.449 5.719a3.672 3.672 0 0 0-1.109.471c-.121.081-1.453 1.157-2.96 2.391s-2.871 2.326-3.032 2.427a4.767 4.767 0 0 1-3.971.495c-.639-.205-.691-.236-3.29-1.942l-.113-.074.016 1.556c.016 1.55.016 1.559.124 1.935.43 1.498 1.583 2.572 3.092 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083a4.003 4.003 0 0 0 3.097-2.905l.107-.392.001-2.195.001-2.195-1.58-1.036c-1.605-1.052-1.956-1.255-2.382-1.374-.329-.092-1.195-.115-1.549-.041'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageRectangle);
export default ForwardRef;
