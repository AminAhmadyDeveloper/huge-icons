import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpringNotesEditSearch = (
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
            d='M8.282.75a.75.75 0 0 1 .75.75V3h6.5V1.5a.75.75 0 0 1 1.5 0V3h.25a4 4 0 0 1 4 4v1.086a1 1 0 0 1-.293.707L8.575 21.207a1 1 0 0 1-.707.293h-.586a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.25V1.5a.75.75 0 0 1 .75-.75Zm.75 9.75a3.25 3.25 0 1 1 1.544 2.767l-.764.763a.75.75 0 0 1-1.06-1.06l.763-.764a3.235 3.235 0 0 1-.483-1.706Zm3.25-1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm8.51 4.24a1.674 1.674 0 0 0-2.368 0l-5.014 5.015a1 1 0 0 0-.256.434l-.626 2.197a.5.5 0 0 0 .618.618l2.196-.627a.991.991 0 0 0 .435-.255l5.014-5.015a1.674 1.674 0 0 0 0-2.367Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesEditSearch);
export default ForwardRef;