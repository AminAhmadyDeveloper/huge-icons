import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgNavigation = (
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
            d='m9.21 13.396-3.703-1.234c-2.01-.67-2.01-3.513 0-4.183l11.588-3.862c1.723-.575 3.363 1.065 2.788 2.788l-3.862 11.588c-.67 2.01-3.513 2.01-4.183 0l-1.234-3.703a2.204 2.204 0 0 0-1.394-1.394Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10.059 13.916c.245.24.433.54.545.874l1.234 3.703c.67 2.01 3.513 2.01 4.183 0l3.862-11.588a2.18 2.18 0 0 0-.545-2.268l-9.28 9.279Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNavigation);
export default ForwardRef;
