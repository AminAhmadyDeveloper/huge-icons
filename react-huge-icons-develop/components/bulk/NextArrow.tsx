import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgNextArrow = (
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
            d='M3 15.518V8.482c0-1.544 1.674-2.505 3.008-1.728l6.03 3.518c1.323.772 1.323 2.684 0 3.455l-6.03 3.518C4.674 18.023 3 17.061 3 15.518Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M11 15.518V8.482c0-1.544 1.674-2.505 3.008-1.728l6.03 3.518c1.323.772 1.323 2.684 0 3.455l-6.03 3.518c-1.334.778-3.008-.184-3.008-1.727Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNextArrow);
export default ForwardRef;