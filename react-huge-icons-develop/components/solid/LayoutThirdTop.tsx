import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLayoutThirdTop = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v1.25H2V6Zm0 2.75V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8.75H2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdTop);
export default ForwardRef;