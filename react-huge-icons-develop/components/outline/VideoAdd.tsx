import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVideoAdd = (
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
            d='M13.376 7.584a.75.75 0 1 0 1.248.832l-1.248-.832Zm-2.752-5.168a.75.75 0 1 0-1.248-.832l1.248.832ZM5.376 7.584a.75.75 0 0 0 1.248.832l-1.248-.832ZM12.75 12a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5ZM15 15.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5ZM6 2.75h12v-1.5H6v1.5ZM2.75 18V6h-1.5v12h1.5Zm18.5-12v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5Zm-20 0A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm-4 7.5h20v-1.5H2v1.5Zm15.376-7.166-4 6 1.248.832 4-6-1.248-.832Zm-8 0-4 6 1.248.832 4-6-1.248-.832ZM11.25 12v6h1.5v-6h-1.5ZM15 14.25H9v1.5h6v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVideoAdd);
export default ForwardRef;