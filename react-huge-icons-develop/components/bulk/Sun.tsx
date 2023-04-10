import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSun = (
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
        <circle cx={12} cy={12} r={6} fill='currentColor' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 19a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm7.601-15.852a.75.75 0 0 1 0 1.061l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0ZM6.166 17.834a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0ZM22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm-19 0a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm15.852 7.602a.75.75 0 0 1-1.061 0l-.707-.707a.75.75 0 1 1 1.06-1.061l.708.707a.75.75 0 0 1 0 1.06ZM6.166 6.167a.75.75 0 0 1-1.06 0l-.707-.708a.75.75 0 0 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSun);
export default ForwardRef;
