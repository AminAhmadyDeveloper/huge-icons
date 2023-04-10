import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartSpeaker = (
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
            d='M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V6Zm7 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8.288 7.288A5.231 5.231 0 0 1 12 5.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.061A6.731 6.731 0 0 0 12 4.25a6.731 6.731 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 12 8.75a2.24 2.24 0 0 1 1.591.659.75.75 0 1 0 1.06-1.06A3.74 3.74 0 0 0 12 7.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 1 0 1.061 1.061Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartSpeaker);
export default ForwardRef;
