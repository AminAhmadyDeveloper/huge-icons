import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWalletArrowUp = (
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
            d='M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='m19.25 17.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 1 1-1.06 1.061l-.72-.72V22a.75.75 0 0 1-1.5 0v-4.604Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletArrowUp);
export default ForwardRef;
