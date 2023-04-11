import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFontRectangle = (
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
            d='M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm6 3.25a.75.75 0 0 1 .692.462l5 12a.75.75 0 0 1-1.384.576l-1.475-3.538H9.167l-1.475 3.538a.75.75 0 0 1-1.384-.576l5-12A.75.75 0 0 1 12 5.25Zm0 2.7 2.208 5.3H9.792L12 7.95Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFontRectangle);
export default ForwardRef;