import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderMinus = (
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
            d='M22 10v7a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h2.667a4 4 0 0 1 2.4.8l1.866 1.4a4 4 0 0 0 2.4.8H18a4 4 0 0 1 4 4Zm-7 3.75a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderMinus);
export default ForwardRef;
