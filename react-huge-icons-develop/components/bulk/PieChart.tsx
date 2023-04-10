import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPieChart = (
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
        <path fill='currentColor' d='M20 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' opacity={0.4} />
        <path
            fill='currentColor'
            d='M21.802 10.013a10.012 10.012 0 0 0-7.815-7.816C12.905 1.98 12 2.895 12 4v6a2 2 0 0 0 2 2h6c1.105 0 2.02-.905 1.802-1.987Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPieChart);
export default ForwardRef;
