import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCallIn = (
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
            d='M21 17.354V19a2 2 0 0 1-2 2C10.163 21 3 13.837 3 5a2 2 0 0 1 2-2h1.646a2 2 0 0 1 1.857 1.257l.814 2.034a2 2 0 0 1-.963 2.532L8 9s.5 2.5 2.5 4.5S15 16 15 16l.177-.354a2 2 0 0 1 2.532-.963l2.034.814A2 2 0 0 1 21 17.354Zm-3-6.604a.75.75 0 0 0 0-1.5h-2c-.06 0-.12-.004-.177-.012L20.53 4.53a.75.75 0 0 0-1.06-1.06l-4.708 4.707A1.259 1.259 0 0 1 14.75 8V6a.75.75 0 0 0-1.5 0v2A2.75 2.75 0 0 0 16 10.75h2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallIn);
export default ForwardRef;