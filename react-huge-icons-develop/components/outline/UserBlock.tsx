import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserBlock = (
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
        <ellipse
            cx={10}
            cy={17.5}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            rx={7}
            ry={3.5}
        />
        <circle
            cx={10}
            cy={7}
            r={4}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
        />
        <circle cx={19} cy={11} r={3} stroke='currentColor' strokeWidth={1.5} />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='m20.5 9.5-3 3' />
    </svg>
);
const ForwardRef = forwardRef(SvgUserBlock);
export default ForwardRef;
