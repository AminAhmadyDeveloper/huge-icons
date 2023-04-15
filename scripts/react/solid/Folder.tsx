import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 3.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v11.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V9.38l-.106-.385c-.332-1.199-1.077-2.081-2.211-2.619-.708-.335-.778-.344-3.003-.377-2-.029-2.045-.033-2.58-.206-.509-.165-.868-.388-2.066-1.282-1.998-1.491-2.07-1.514-4.709-1.506-.905.003-1.747.02-1.872.038'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolder);
export default ForwardRef;
