import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUploadCircle = (
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
            d='M7.47 5.47a.75.75 0 1 0 1.06 1.06l2.72-2.72V16a.75.75 0 0 0 1.5 0V3.81l2.72 2.72a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4Zm-1.13 4a.75.75 0 1 0-1.17-.94 8.75 8.75 0 1 0 13.661 0 .75.75 0 0 0-1.17.94 7.25 7.25 0 1 1-11.32 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUploadCircle);
export default ForwardRef;
