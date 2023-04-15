import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMenuLineHorizontalHalf = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.811 7.278a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.222.062 5.216.062 5.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.643-.007c-1.454-.003-2.701.008-2.772.025m0 4.001a.762.762 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 10.213.063 10.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-5.143-.006c-2.829-.004-5.201.007-5.272.025m5 3.999a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.222.062 5.216.062 5.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.643-.007c-1.454-.003-2.701.008-2.772.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMenuLineHorizontalHalf);
export default ForwardRef;
