import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMatrix = (
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
            d='M8 1.25a.75.75 0 0 1 0 1.5H6A3.25 3.25 0 0 0 2.75 6v12A3.25 3.25 0 0 0 6 21.25h2a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18V6A4.75 4.75 0 0 1 6 1.25h2Zm7.25.75a.75.75 0 0 1 .75-.75h2A4.75 4.75 0 0 1 22.75 6v12A4.75 4.75 0 0 1 18 22.75h-2a.75.75 0 0 1 0-1.5h2A3.25 3.25 0 0 0 21.25 18V6A3.25 3.25 0 0 0 18 2.75h-2a.75.75 0 0 1-.75-.75ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMatrix);
export default ForwardRef;