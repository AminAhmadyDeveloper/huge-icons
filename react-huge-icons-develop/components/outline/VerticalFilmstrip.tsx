import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVerticalFilmstrip = (
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
            d='M18.75 3v-.75h-1.5V3h1.5Zm-1.5 18v.75h1.5V21h-1.5ZM18 8.75h.75v-1.5H18v1.5ZM6 7.25h-.75v1.5H6v-1.5Zm12 9.5h.75v-1.5H18v1.5Zm-12-1.5h-.75v1.5H6v-1.5ZM6.75 3v-.75h-1.5V3h1.5Zm-1.5 18v.75h1.5V21h-1.5ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM17.25 3v18h1.5V3h-1.5ZM18 7.25H6v1.5h12v-1.5Zm0 8H6v1.5h12v-1.5ZM5.25 3v18h1.5V3h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalFilmstrip);
export default ForwardRef;