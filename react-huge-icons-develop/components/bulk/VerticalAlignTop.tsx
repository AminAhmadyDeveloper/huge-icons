import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVerticalAlignTop = (
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
            d='M4 4v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4H4Zm10 0v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4h-6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.25 4A.75.75 0 0 1 2 3.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalAlignTop);
export default ForwardRef;
