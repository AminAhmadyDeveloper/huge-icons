import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 3.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v11.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V6.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m2.909 5.618c1.115.739 2.133 1.396 2.261 1.46.439.222.796.298 1.397.298.6 0 .958-.076 1.395-.296.127-.064 1.153-.729 2.28-1.477 1.473-.977 2.092-1.367 2.202-1.386.631-.106 1.103.615.751 1.147-.098.148-3.9 2.715-4.428 2.989a4.762 4.762 0 0 1-3.751.279c-.57-.201-.854-.371-2.969-1.785-2.242-1.498-2.198-1.461-2.199-1.886a.714.714 0 0 1 .886-.717c.091.02.912.538 2.175 1.374'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMail);
export default ForwardRef;