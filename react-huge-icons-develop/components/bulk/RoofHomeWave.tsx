import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoofHomeWave = (
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
            d='M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10.5 11.75a.75.75 0 0 0-.75.75v1a2.25 2.25 0 0 1-2.25 2.25H7a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 0 .75-.75v-1a2.25 2.25 0 0 1 4.5 0v3a.75.75 0 0 0 1.5 0 2.25 2.25 0 0 1 2.25-2.25h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0v-3a.75.75 0 0 0-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeWave);
export default ForwardRef;