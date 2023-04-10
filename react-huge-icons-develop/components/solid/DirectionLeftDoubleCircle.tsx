import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDirectionLeftDoubleCircle = (
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
            d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-6.55-4.6a.75.75 0 0 1 .15 1.05l-2.1 2.8a1.25 1.25 0 0 0 0 1.5l2.1 2.8a.75.75 0 0 1-1.2.9l-2.1-2.8a2.75 2.75 0 0 1 0-3.3l2.1-2.8a.75.75 0 0 1 1.05-.15ZM10.6 8.45a.75.75 0 0 0-1.2-.9l-2.1 2.8a2.75 2.75 0 0 0 0 3.3l2.1 2.8a.75.75 0 1 0 1.2-.9l-2.1-2.8a1.25 1.25 0 0 1 0-1.5l2.1-2.8Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionLeftDoubleCircle);
export default ForwardRef;
