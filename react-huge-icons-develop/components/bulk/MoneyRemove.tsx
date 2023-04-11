import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyRemove = (
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
            d='M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z'
            opacity={0.4}
        />
        <circle cx={1} cy={1} r={1} fill='currentColor' transform='matrix(1 0 0 -1 5 9)' />
        <circle cx={2} cy={2} r={2} fill='currentColor' transform='matrix(1 0 0 -1 10 14)' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M22.03 15.227a.75.75 0 0 1 0 1.06l-1.59 1.592 1.59 1.59a.75.75 0 1 1-1.06 1.061l-1.591-1.59-1.591 1.59a.75.75 0 0 1-1.061-1.06l1.591-1.591-1.591-1.591a.75.75 0 0 1 1.06-1.061l1.592 1.591 1.59-1.591a.75.75 0 0 1 1.061 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyRemove);
export default ForwardRef;