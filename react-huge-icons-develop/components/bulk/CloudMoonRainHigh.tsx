import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoonRainHigh = (
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
            d='M2 11a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751 7.028 7.028 0 0 0-2.983-3.338A7 7 0 0 0 2 11Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M21 10a5 5 0 1 0-8.544-5.089A7.027 7.027 0 0 1 15.44 8.25 4.996 4.996 0 0 1 17 8c1.636 0 3.088.786 4 2Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M13.5 20.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S12 18 12 18s1.5 1.395 1.5 2.5Zm5-3c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S17 15 17 15s1.5 1.395 1.5 2.5Zm-10 0c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S7 15 7 15s1.5 1.395 1.5 2.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonRainHigh);
export default ForwardRef;
