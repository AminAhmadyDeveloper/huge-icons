import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgInCircle = (
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
            d='M12.53 7.47a.75.75 0 1 0-1.06 1.06l2.72 2.72H2a.75.75 0 0 0 0 1.5h12.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4ZM9.47 6.34a.75.75 0 1 1-.94-1.17 8.75 8.75 0 1 1 0 13.661.75.75 0 0 1 .94-1.17 7.25 7.25 0 1 0 0-11.32Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInCircle);
export default ForwardRef;
