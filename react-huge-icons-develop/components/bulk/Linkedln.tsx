import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLinkedln = (
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
        <circle cx={4} cy={4} r={2} fill='currentColor' />
        <path fill='currentColor' d='M2 8.5h4V22H2V8.5Z' />
        <path
            fill='currentColor'
            d='M13 8.5H9V22h4v-7a2 2 0 1 1 4 0v7h4v-7a6 6 0 0 0-8-5.659V8.5Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLinkedln);
export default ForwardRef;