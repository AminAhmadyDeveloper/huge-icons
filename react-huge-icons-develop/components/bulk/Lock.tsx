import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLock = (
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
            fill='currentColor'
            fillRule='evenodd'
            d='M8.75 6a3.25 3.25 0 0 1 6.5 0v2H16c.256 0 .507.024.75.07V6a4.75 4.75 0 1 0-9.5 0v2.07A4.02 4.02 0 0 1 8 8h.75V6Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M4 12a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6Z'
            opacity={0.4}
        />
        <circle cx={12} cy={15} r={2} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgLock);
export default ForwardRef;