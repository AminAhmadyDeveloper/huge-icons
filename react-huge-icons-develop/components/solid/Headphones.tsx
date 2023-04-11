import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHeadphones = (
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
            d='M12 3.75A8.25 8.25 0 0 0 3.75 12v1a3.75 3.75 0 0 1 6 3v2a3.75 3.75 0 1 1-7.5 0v-6c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v6a3.75 3.75 0 1 1-7.5 0v-2a3.75 3.75 0 0 1 6-3v-1A8.25 8.25 0 0 0 12 3.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeadphones);
export default ForwardRef;