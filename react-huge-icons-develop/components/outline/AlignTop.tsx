import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAlignTop = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M8 19V9m0 0 2 2M8 9l-2 2m10 8V9m0 0 2 2m-2-2-2 2'
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M5 5h14' />
    </svg>
);
const ForwardRef = forwardRef(SvgAlignTop);
export default ForwardRef;