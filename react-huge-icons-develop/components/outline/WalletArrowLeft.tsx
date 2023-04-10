import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWalletArrowLeft = (
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
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='m17.586 22-1.293-1.293a1 1 0 0 1 0-1.414L17.586 18M22 20h-5.414'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M22 15V6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h7'
        />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletArrowLeft);
export default ForwardRef;
