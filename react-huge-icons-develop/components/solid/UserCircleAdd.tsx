import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserCircleAdd = (
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
            d='M12.582 17.919c0 .66.116 1.292.329 1.878a9 9 0 1 1 6.928-7.092 5.5 5.5 0 0 0-7.257 5.213ZM11 13.75a8.21 8.21 0 0 0-3.995 1.03.75.75 0 0 1-.727-1.312A9.71 9.71 0 0 1 11 12.25c.366 0 .727.02 1.082.06a.75.75 0 1 1-.164 1.49 8.343 8.343 0 0 0-.918-.05ZM11 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm11 13a4.002 4.002 0 0 0-4-4 4 4 0 1 0 4 4Zm-3.25-2a.75.75 0 0 0-1.5 0v1.25H16a.75.75 0 0 0 0 1.5h1.25V20a.75.75 0 0 0 1.5 0v-1.25H20a.75.75 0 0 0 0-1.5h-1.25V16Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserCircleAdd);
export default ForwardRef;
