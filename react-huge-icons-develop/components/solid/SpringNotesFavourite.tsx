import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpringNotesFavourite = (
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
            d='M17.032 1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.25V1.5Zm-4.726 9.14.23-.24a1.568 1.568 0 0 1 2.295 0 1.768 1.768 0 0 1 0 2.411L13.225 14.5a1.254 1.254 0 0 1-1.837 0l-1.606-1.689a1.768 1.768 0 0 1 0-2.412 1.568 1.568 0 0 1 2.295 0l.23.242Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesFavourite);
export default ForwardRef;