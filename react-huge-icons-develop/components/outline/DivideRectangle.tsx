import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDivideRectangle = (
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
            d='M8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10-10h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM12.75 8a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 14.25 8h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 12 10.25v-1.5ZM11.25 8a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 9.75 8h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 12 5.75v1.5Zm.75 8.75a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 14.25 16h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 12 18.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 9.75 16h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 12 13.75v1.5Zm-4-2.5h8v-1.5H8v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDivideRectangle);
export default ForwardRef;