import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBasketArrowDown = (
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
            d='M14.53 17.53a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-3.237.763.53-.53-.53.53Zm-.763-1.823a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM12.75 13a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm2.22-1.53-1.293 1.293 1.06 1.06 1.293-1.293-1.06-1.06Zm-1.647 1.293L10.53 16.47l-1.06 1.06 1.293 1.293 1.06-1.06Zm.354 0a.25.25 0 0 1-.354 0l-1.06 1.06a1.75 1.75 0 0 0 2.474 0l-1.06-1.06ZM11.25 13v5h1.5v-5h-1.5Zm8.566 5.955.728.179-.728-.18Zm1.966-8-.728-.18.728.18Zm-17.597 8-.729.179.729-.18Zm-1.967-8 .728-.18-.728.18ZM15.931 21.25H8.07v1.5h7.862v-1.5ZM6.102 6.75h11.796v-1.5H6.102v1.5Zm14.442 12.384 1.966-8-1.456-.358-1.967 8 1.457.358Zm-15.631-.358-1.967-8-1.456.358 1.966 8 1.457-.358ZM15.93 22.75a4.75 4.75 0 0 0 4.613-3.616l-1.457-.358a3.25 3.25 0 0 1-3.156 2.474v1.5Zm-7.862-1.5a3.25 3.25 0 0 1-3.156-2.474l-1.457.358A4.75 4.75 0 0 0 8.07 22.75v-1.5Zm-1.967-16C3.02 5.25.754 8.14 1.49 11.134l1.456-.358A3.25 3.25 0 0 1 6.102 6.75v-1.5Zm11.796 1.5a3.25 3.25 0 0 1 3.156 4.026l1.456.358c.736-2.994-1.53-5.884-4.612-5.884v1.5Z'
        />
        <path
            fill='currentColor'
            d='M3 9.25a.75.75 0 0 0 0 1.5v-1.5Zm18 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18 0h18v-1.5H3v1.5Zm6.6-8.3a.75.75 0 0 0-1.2-.9l1.2.9Zm-4.2 3.1a.75.75 0 1 0 1.2.9l-1.2-.9Zm3-4-3 4 1.2.9 3-4-1.2-.9Zm7.2 0a.75.75 0 0 0-1.2.9l1.2-.9Zm1.8 4.9a.75.75 0 1 0 1.2-.9l-1.2.9Zm-3-4 3 4 1.2-.9-3-4-1.2.9Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketArrowDown);
export default ForwardRef;
