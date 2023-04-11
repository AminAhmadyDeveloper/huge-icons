import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBoxFavorite = (
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
            d='M13 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7'
        />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707V2Zm10.265 14.735L18 17l-.265-.265a1.875 1.875 0 1 0-2.652 2.652l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.856a1.875 1.875 0 0 0-2.652-2.652Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxFavorite);
export default ForwardRef;