import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLayoutThirdLeft = (
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
            d='M7.25 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h1.25V2Zm1.5 20H18a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H8.75v20Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdLeft);
export default ForwardRef;
