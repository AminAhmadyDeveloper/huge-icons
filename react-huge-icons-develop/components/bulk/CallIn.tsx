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
            d='M19.75 9a.75.75 0 0 1-.75.75h-2A2.75 2.75 0 0 1 14.25 7V5a.75.75 0 0 1 1.5 0v2c0 .06.004.12.012.177L20.47 2.47a.75.75 0 1 1 1.06 1.06l-4.707 4.708c.058.008.117.012.177.012h2a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M21 19v-1.646a2 2 0 0 0-1.257-1.857l-2.034-.813a2 2 0 0 0-2.532.962L15 16s-2.5-.5-4.5-2.5S8 9 8 9l.354-.177a2 2 0 0 0 .963-2.532l-.814-2.034A2 2 0 0 0 6.646 3H5a2 2 0 0 0-2 2c0 8.837 7.163 16 16 16a2 2 0 0 0 2-2Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallIn);
export default ForwardRef;