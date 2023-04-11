import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCartArrowDown = (
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
            d='M2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4 3.5h12v-1.5H6v1.5ZM21.25 8v5h1.5V8h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM6.75 13V4h-1.5v9h1.5ZM4 1.25H2v1.5h2v-1.5ZM6.75 4A2.75 2.75 0 0 0 4 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM10 16.25A3.25 3.25 0 0 1 6.75 13h-1.5A4.75 4.75 0 0 0 10 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5Z'
        />
        <path
            fill='currentColor'
            d='M5.26 5.123a.75.75 0 0 0 1.48-.246l-1.48.246Zm.38-2.287-.74.123.74-.123ZM2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4.74 3.627-.36-2.165-1.48.247.36 2.164 1.48-.246ZM4.653 1.25H2v1.5h2.653v-1.5Zm1.726 1.462A1.75 1.75 0 0 0 4.653 1.25v1.5a.25.25 0 0 1 .246.209l1.48-.247ZM10.25 20.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm9.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-1.97-7.22a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-3.237.763.53-.53-.53.53Zm-.763-1.823a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM14.75 8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm2.22-1.53-1.293 1.293 1.06 1.06 1.293-1.293-1.06-1.06Zm-1.647 1.293L12.53 11.47l-1.06 1.06 1.293 1.293 1.06-1.06Zm.354 0a.25.25 0 0 1-.354 0l-1.06 1.06a1.75 1.75 0 0 0 2.474 0l-1.06-1.06ZM13.25 8v5h1.5V8h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCartArrowDown);
export default ForwardRef;