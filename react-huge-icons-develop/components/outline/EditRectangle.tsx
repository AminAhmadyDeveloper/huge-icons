import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEditRectangle = (
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
            d='M22.75 12a.75.75 0 0 0-1.5 0h1.5ZM12 2.75a.75.75 0 0 0 0-1.5v1.5ZM9.155 15.99l-.106-.743.106.743ZM8.01 14.845l-.742-.106.742.106Zm1.002-4.148-.53-.53.53.53Zm-.572 1.145.742.106-.742-.106Zm4.863 3.146.53.53-.53-.53Zm-1.145.572.106.743-.106-.743Zm9.25-11.537-.53.53.53-.53Zm0 2.86-.53-.53.53.53Zm-1.43-4.29.53-.53-.53.53Zm-2.861 0 .53.53-.53-.53Zm-.68 1.43a.75.75 0 0 0-1.5 0h1.5Zm3.54 5.04a.75.75 0 0 0 0-1.5v1.5ZM21.25 12v6h1.5v-6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 2.75h6v-1.5H6v1.5ZM2.75 6A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM19.447 3.123l1.43 1.43 1.06-1.06-1.43-1.43-1.06 1.06Zm1.43 3.23-8.105 8.105 1.06 1.06 8.106-8.104-1.06-1.061ZM9.542 11.228l8.105-8.105-1.06-1.06-8.106 8.104 1.061 1.06Zm2.51 3.59-3.003.43.212 1.484 3.003-.43-.212-1.484Zm-3.3.133.43-3.003-1.485-.212-.429 3.003 1.485.212Zm.297.296a.261.261 0 0 1-.296-.296l-1.485-.212a1.761 1.761 0 0 0 1.993 1.993l-.212-1.485Zm-.568-5.08c-.424.424-.7.975-.784 1.569l1.485.212c.039-.273.165-.526.36-.72l-1.06-1.06Zm4.291 4.291a1.272 1.272 0 0 1-.72.36l.212 1.485a2.773 2.773 0 0 0 1.569-.784l-1.06-1.061Zm8.105-9.905a1.273 1.273 0 0 1 0 1.8l1.06 1.06a2.773 2.773 0 0 0 0-3.92l-1.06 1.06Zm-.37-2.49a2.773 2.773 0 0 0-3.92 0l1.06 1.06a1.273 1.273 0 0 1 1.8 0l1.06-1.06Zm-4.82 1.96h-.75v.007a.299.299 0 0 0 0 .033c0 .02.002.044.004.074.004.06.011.14.025.238.028.195.083.463.188.779.21.633.626 1.453 1.432 2.26l1.061-1.061c-.623-.624-.924-1.234-1.07-1.673a2.98 2.98 0 0 1-.14-.643.817.817 0 0 1 0-.022c0-.001 0-.001 0 0v.007h-.75Zm.9 3.39c.806.807 1.625 1.222 2.26 1.433a4.4 4.4 0 0 0 .778.188 3.188 3.188 0 0 0 .35.03h.002v-.75l.001-.75a.048.048 0 0 1 .004 0h.003c.001 0 .001 0 0 0l-.022-.001a2.99 2.99 0 0 1-.642-.14c-.44-.146-1.05-.446-1.674-1.07l-1.06 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEditRectangle);
export default ForwardRef;