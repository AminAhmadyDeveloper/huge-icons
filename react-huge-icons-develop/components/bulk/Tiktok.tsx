import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTiktok = (
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
            d='M10 21a6 6 0 0 0 6-6V8.197c.883.51 1.907.803 3 .803h1V6h-1a3 3 0 0 1-3-3h-3v12a3 3 0 1 1-3-3V9a6 6 0 0 0 0 12Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M16 3a3 3 0 0 0 3 3h1v3h-1a5.972 5.972 0 0 1-3-.803V3Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgTiktok);
export default ForwardRef;