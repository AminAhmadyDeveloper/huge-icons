import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgParcel = (
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
            d='M22 18V7.657a4 4 0 0 0-1.172-2.829l-1.656-1.656A4 4 0 0 0 16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.172 4.828A4 4 0 0 0 2 7.657V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M16.343 2H7.657a4 4 0 0 0-2.829 1.172L3.171 4.828A4 4 0 0 0 2.054 7h19.892a4 4 0 0 0-1.118-2.172l-1.656-1.656A4 4 0 0 0 16.343 2Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='m8.25 13.396-.72.72a.75.75 0 0 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72V17a.75.75 0 0 1-1.5 0v-3.604Zm6 2.208-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 1 0-1.06-1.061l-.72.72V12a.75.75 0 0 0-1.5 0v3.604Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgParcel);
export default ForwardRef;