import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTimeForward = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.473.059 16.553.056 16.767-.004.212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-8.423-.02-8.423-.02-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38V5.38L2.912 5c.186-.535.404-.883.804-1.284.401-.4.749-.618 1.284-.804l.38-.132h13.24l.374.131c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374.012 2.4.011 2.4-.411-.408c-.23-.228-.478-.436-.561-.47a.734.734 0 0 0-1.031.678c0 .103.034.248.077.332.042.081.578.646 1.19 1.255.973.967 1.135 1.112 1.288 1.152.23.061.446.02.642-.121.323-.235.302.013.315-3.558.008-2.014-.003-3.312-.029-3.541a4.628 4.628 0 0 0-1.256-2.722c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.477-.047-12.482-.045-12.963.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeForward);
export default ForwardRef;
