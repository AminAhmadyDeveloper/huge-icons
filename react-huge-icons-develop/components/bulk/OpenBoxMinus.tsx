import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgOpenBoxMinus = (
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
            d='M20 16.764V8l-8 2-8-2v8.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4 8-4Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='m20 6-8 4 2 3 8-4-2-3ZM4 6l8 4-2 3-8-4 2-3Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M14.75 5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxMinus);
export default ForwardRef;
