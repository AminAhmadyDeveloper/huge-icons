import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowUp = (
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
            d='M11.47 5.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-2.72-2.72V18a.75.75 0 0 1-1.5 0V7.81l-2.72 2.72a.75.75 0 1 1-1.06-1.06l4-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
