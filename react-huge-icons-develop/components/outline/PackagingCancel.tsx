import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackagingCancel = (
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
            d='m9.879 16.121 4.242-4.242m-4.242 0 4.242 4.242'
        />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M22 18V8.403a4 4 0 0 0-.877-2.499l-1.922-2.403A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.124 1.501L2.877 5.904A4 4 0 0 0 2 8.404V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M3 7h18'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingCancel);
export default ForwardRef;