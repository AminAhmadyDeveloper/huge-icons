import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAlignRight = (
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
            d='M12 5.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Zm-6 4a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H6ZM11.25 14a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75ZM6 17.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlignRight);
export default ForwardRef;