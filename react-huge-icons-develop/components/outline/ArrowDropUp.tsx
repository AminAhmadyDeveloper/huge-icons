import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowDropUp = (
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
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M8.482 17h7.036c1.543 0 2.505-1.674 1.727-3.008l-3.517-6.03c-.772-1.323-2.684-1.323-3.456 0l-3.517 6.03C5.977 15.326 6.938 17 8.482 17Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDropUp);
export default ForwardRef;