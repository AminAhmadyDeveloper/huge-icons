import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowTransfer = (
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
            d='m15.53 11.53 3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H6a.75.75 0 0 0 0 1.5h10.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06ZM5.47 15.47a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H18a.75.75 0 0 0 0-1.5H7.81l1.72-1.72a.75.75 0 1 0-1.06-1.06l-3 3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowTransfer);
export default ForwardRef;
