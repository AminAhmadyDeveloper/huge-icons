import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgProtractor = (
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
            d='M7 2h2a2 2 0 0 1 2 2 8 8 0 1 1 0 16 2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 10a3 3 0 0 1-3 3V9a3 3 0 0 1 3 3Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M5 5.25h2a.75.75 0 0 1 0 1.5H5v-1.5Zm0 4h2a.75.75 0 0 1 0 1.5H5v-1.5Zm0 4h2a.75.75 0 0 1 0 1.5H5v-1.5Zm0 4h2a.75.75 0 0 1 0 1.5H5v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProtractor);
export default ForwardRef;