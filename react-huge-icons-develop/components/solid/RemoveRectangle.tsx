import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRemoveRectangle = (
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
            d='M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm9.359 6.641a.75.75 0 0 1 0 1.061L13.06 12l2.298 2.298a.75.75 0 0 1-1.06 1.06L12 13.062 9.702 15.36a.75.75 0 1 1-1.06-1.06l2.296-2.3-2.297-2.298a.75.75 0 0 1 1.06-1.06l2.3 2.297 2.297-2.298a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemoveRectangle);
export default ForwardRef;