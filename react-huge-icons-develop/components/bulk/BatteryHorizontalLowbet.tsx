import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBatteryHorizontalLowbet = (
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
            d='M22 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M20 16V8a2 2 0 0 0-2-2H7.06l11.805 11.804A2 2 0 0 0 20 16Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M4.925 6 16.94 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h.925Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryHorizontalLowbet);
export default ForwardRef;
