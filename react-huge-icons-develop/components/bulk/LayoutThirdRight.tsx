import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLayoutThirdRight = (
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
        <path fill='currentColor' d='M22 6v12a4 4 0 0 1-4 4h-2V2h2a4 4 0 0 1 4 4Z' />
        <path fill='currentColor' d='M2 18V6a4 4 0 0 1 4-4h10v20H6a4 4 0 0 1-4-4Z' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdRight);
export default ForwardRef;