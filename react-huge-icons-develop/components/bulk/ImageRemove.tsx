import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgImageRemove = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M19.061 11.884 22 14v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-4l2.939 2.116a4 4 0 0 0 5.013-.273l4.096-3.686a4 4 0 0 1 5.013-.273Z'
        />
        <circle cx={8.5} cy={8.5} r={2.5} fill='currentColor' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.47 2.47a.75.75 0 0 1 1.06 0L19 3.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L20.06 5l1.47 1.47a.75.75 0 0 1-1.06 1.06L19 6.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L17.94 5l-1.47-1.47a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageRemove);
export default ForwardRef;
