import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPinCircle = (
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
        <ellipse cx={12} cy={19} stroke='currentColor' strokeWidth={1.5} rx={9} ry={3} />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v11'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPinCircle);
export default ForwardRef;
