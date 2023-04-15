import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInvoice = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.433 2.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.399.081.505.083 5.774.083s5.375-.002 5.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.079 5.079 0 0 0-1.311-.599l-.338-.091-5.48-.007c-3.014-.003-5.582.009-5.707.028m10.94 4.312c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.082-.17.082-5.359.082s-5.221 0-5.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 2.438-.028 5.265-.024l5.14.006.153.095m0 5c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.082-.17.082-5.359.082s-5.221 0-5.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 2.438-.028 5.265-.024l5.14.006.153.095m-4.985 5.012a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.064.092-.18.204-.257.249-.136.08-.19.082-2.859.082s-2.723-.002-2.859-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.055-1.013.431-1.132.069-.016 1.314-.027 2.768-.024l2.643.007.162.107'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInvoice);
export default ForwardRef;
