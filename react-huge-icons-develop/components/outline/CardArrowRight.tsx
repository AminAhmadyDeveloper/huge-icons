import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCardArrowRight = (
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
            strokeWidth={1.5}
            d='M14 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7'
        />
        <circle cx={6} cy={17} r={1} fill='currentColor' />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M2 7h20v4H2V7Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='m20.414 21 1.293-1.293a1 1 0 0 0 0-1.414L20.414 17M16 19h5.414'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardArrowRight);
export default ForwardRef;