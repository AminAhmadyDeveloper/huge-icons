import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVerticalAlignCenter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.811 11.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.226.063 20.212.063 20.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-10.143-.006c-5.579-.003-10.201.008-10.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalAlignCenter);
export default ForwardRef;
