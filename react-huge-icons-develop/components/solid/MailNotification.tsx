import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailNotification = (
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
            d='M15.646 4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-7.646A4.5 4.5 0 0 1 15.646 4ZM5.376 8.584a.75.75 0 0 1 1.04-.208l3.781 2.52a3.25 3.25 0 0 0 3.606 0l.49-.326a.75.75 0 0 1 .832 1.248l-.49.327a4.75 4.75 0 0 1-5.27 0L5.584 9.624a.75.75 0 0 1-.208-1.04ZM19 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailNotification);
export default ForwardRef;