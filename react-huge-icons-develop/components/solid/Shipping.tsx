import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShipping = (
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
            d='M19.65 9.336C20.53 8.376 22 6.546 22 5c0-2.21-1.343-3-3-3s-3 .79-3 3c0 1.546 1.469 3.376 2.35 4.336a.873.873 0 0 0 1.3 0ZM19 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 12a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H9Zm2 1.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2ZM2.75 9c0-.69.56-1.25 1.25-1.25h10a.75.75 0 0 0 0-1.5H4A2.75 2.75 0 0 0 1.25 9v6A2.75 2.75 0 0 0 4 17.75h.846a.75.75 0 0 0 0-1.5H4c-.69 0-1.25-.56-1.25-1.25V9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShipping);
export default ForwardRef;