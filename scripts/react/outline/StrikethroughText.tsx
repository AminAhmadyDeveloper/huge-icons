import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStrikethroughText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.811 4.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.109.031.999.045 2.809.045h2.65v4.48h1.52V5.76h2.65c1.81 0 2.7-.014 2.809-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-6.143-.006c-3.379-.004-6.201.008-6.272.025m-2 7a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.111.031 1.269.045 3.809.045h3.65v3.098c0 2.111.014 3.164.044 3.304.163.758 1.269.758 1.432 0 .03-.14.044-1.193.044-3.304V12.76h3.65c2.54 0 3.698-.014 3.809-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-8.143-.006c-4.479-.004-8.201.008-8.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStrikethroughText);
export default ForwardRef;
