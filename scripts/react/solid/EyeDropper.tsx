import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgEyeDropper = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.508 2.9c-.459.126-.609.24-1.578 1.196l-.93.919-.35-.342c-.192-.188-.426-.381-.518-.428-.63-.319-1.315.366-.992.992.027.054.218.265.425.47l.375.372-2.825 2.831c-1.824 1.828-2.884 2.919-2.992 3.082a4.518 4.518 0 0 0-.587 1.308c-.093.353-.107.502-.126 1.274l-.021.875.896-.019c.797-.016.937-.03 1.28-.121a4.436 4.436 0 0 0 1.223-.532c.147-.096 1.284-1.199 3.12-3.031l2.889-2.882.411.401c.345.335.443.408.602.448a.728.728 0 0 0 .809-.333c.129-.225.149-.351.094-.57-.04-.159-.113-.257-.448-.601l-.4-.412.901-.908c.496-.5.939-.972.984-1.049.338-.571.347-1.335.022-1.976-.21-.415-.751-.837-1.233-.962-.283-.074-.766-.075-1.031-.002M5.183 18.331c-.594.648-1 1.296-1.129 1.8-.173.676.093 1.414.606 1.679.629.324 1.547.223 1.968-.216.314-.328.449-.951.318-1.463-.13-.506-.554-1.182-1.136-1.808l-.313-.336-.314.344'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEyeDropper);
export default ForwardRef;