import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoofHomeFlash = (
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
            d='M16.18 22H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 0 0-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 0 1 4.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 0 0-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989ZM13.6 9.45a.75.75 0 1 0-1.2-.9l-3 4a.75.75 0 0 0 .6 1.2h2.5l-2.1 2.8a.75.75 0 1 0 1.2.9l3-4a.75.75 0 0 0-.6-1.2h-2.5l2.1-2.8Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeFlash);
export default ForwardRef;