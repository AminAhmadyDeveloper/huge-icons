import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLocationAdd = (
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
            d='M12 22c3.375 0 9-6.202 9-11.111C21 5.979 16.97 2 12 2s-9 3.98-9 8.889C3 15.799 8.625 22 12 22Zm.75-13a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25V9Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm.75-7a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25V9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationAdd);
export default ForwardRef;
