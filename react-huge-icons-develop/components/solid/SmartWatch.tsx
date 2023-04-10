import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartWatch = (
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
            d='M16 5V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1h8ZM8 19v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1H8Zm11-9a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-4Zm-7 5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0-6a5.23 5.23 0 0 0-3.712 1.538.75.75 0 1 1-1.061-1.061A6.731 6.731 0 0 1 12 8.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 9.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 12 11.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 1 1-1.061 1.061A2.24 2.24 0 0 0 12 12.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartWatch);
export default ForwardRef;
