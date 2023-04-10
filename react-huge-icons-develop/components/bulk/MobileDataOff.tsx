import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMobileDataOff = (
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
            d='M8.75 18.172a1.27 1.27 0 0 0 .134-.117l1.586-1.585a.75.75 0 1 1 1.06 1.06l-1.585 1.586a2.75 2.75 0 0 1-3.89 0L4.47 17.53a.75.75 0 1 1 1.06-1.06l1.586 1.585c.043.043.087.082.134.117V8a.75.75 0 0 1 1.5 0v10.172Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.75 13.69V5.828c.047.035.091.074.134.117L18.47 7.53a.75.75 0 1 0 1.06-1.061l-1.585-1.586a2.75 2.75 0 0 0-3.89 0L12.47 6.47a.75.75 0 0 0 1.06 1.06l1.586-1.585a1.22 1.22 0 0 1 .134-.117v6.362l1.5 1.5Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMobileDataOff);
export default ForwardRef;
