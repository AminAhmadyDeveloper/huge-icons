import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArchiveFavourite = (
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
            d='M20 11.611V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v5.611a4.513 4.513 0 0 1 1-.111h1a3.5 3.5 0 0 1 2.8 1.4l1.2 1.6a2.5 2.5 0 0 0 4 0l1.2-1.6a3.5 3.5 0 0 1 2.8-1.4h1c.344 0 .678.039 1 .111ZM9.365 8.707l1.854 2.318a1 1 0 0 0 1.562 0l1.854-2.318c.236-.295.365-.662.365-1.04V7.59a1.591 1.591 0 0 0-2.716-1.125L12 6.75l-.284-.284A1.591 1.591 0 0 0 9 7.591v.075c0 .378.129.745.365 1.04ZM22 16v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h1a2 2 0 0 1 1.6.8l1.2 1.6a4 4 0 0 0 6.4 0l1.2-1.6A2 2 0 0 1 18 13h1a3 3 0 0 1 3 3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArchiveFavourite);
export default ForwardRef;
