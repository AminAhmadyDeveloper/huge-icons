import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMicrophoneMute = (
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
        <path fill='currentColor' d='M8 6a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0V6Z' opacity={0.4} />
        <path
            fill='currentColor'
            d='M8 12a4 4 0 0 0 6.394 3.205l1.602 1.601A6.25 6.25 0 0 1 5.75 12v-1a.75.75 0 0 0-1.5 0v1a7.751 7.751 0 0 0 7 7.714v1.536H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-1.536a7.717 7.717 0 0 0 4.31-1.843l3.41 3.41a.75.75 0 1 0 1.06-1.061l-18-18a.75.75 0 0 0-1.06 1.06L8 8.81V12Z'
        />
        <path
            fill='currentColor'
            d='M19.75 12v-1a.75.75 0 1 0-1.5 0v1a6.222 6.222 0 0 1-1.224 3.716l1.07 1.07A7.717 7.717 0 0 0 19.75 12Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMicrophoneMute);
export default ForwardRef;