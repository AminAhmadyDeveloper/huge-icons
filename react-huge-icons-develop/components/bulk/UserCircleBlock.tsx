import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserCircleBlock = (
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
        <circle r={9} fill='currentColor' opacity={0.4} transform='matrix(1 0 0 -1 11 11)' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10.87 13.75c-1.072.003-2.137.296-3.563.934a.75.75 0 1 1-.614-1.368c1.52-.681 2.805-1.062 4.172-1.066 1.361-.004 2.73.367 4.418 1.056a.75.75 0 1 1-.566 1.388c-1.612-.657-2.77-.947-3.848-.944Z'
            clipRule='evenodd'
        />
        <circle r={3} fill='currentColor' transform='matrix(1 0 0 -1 11 8)' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18 21a3 3 0 0 0 2.482-4.686l-4.168 4.168a3.016 3.016 0 0 1-.796-.796l4.168-4.168A3 3 0 1 0 18 21Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserCircleBlock);
export default ForwardRef;
