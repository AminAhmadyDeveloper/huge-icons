import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMobile = (
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
        <rect
            width={14}
            height={20}
            x={5}
            y={2}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            rx={3}
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M11 19h2' />
    </svg>
);
const ForwardRef = forwardRef(SvgMobile);
export default ForwardRef;
