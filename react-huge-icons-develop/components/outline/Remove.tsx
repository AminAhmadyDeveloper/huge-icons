import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRemove = (
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
            d='m6.343 14.828-.53-.53.53.53Zm2.829 2.829.53.53-.53-.53Zm5.656-11.314-.53-.53.53.53Zm-5.656 0 .53-.53-.53.53ZM6.343 9.172l.53-.53-.53.53Zm11.314 5.656.53-.53-.53.53ZM14.828 12l-.53-.53a.75.75 0 0 0 0 1.06l.53-.53ZM12 14.828l.53-.53a.75.75 0 0 0-1.06 0l.53.53ZM9.172 12l.53.53a.75.75 0 0 0 0-1.06l-.53.53ZM12 9.172l-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm-5.127 7.954a1.25 1.25 0 0 1 0-1.767l-1.06-1.06a2.75 2.75 0 0 0 0 3.888l1.06-1.06Zm1.768 0a1.25 1.25 0 0 1-1.768 0l-1.06 1.061a2.75 2.75 0 0 0 3.889 0l-1.06-1.06Zm8.486-10.253a1.25 1.25 0 0 1 0 1.768l1.06 1.06a2.75 2.75 0 0 0 0-3.888l-1.06 1.06Zm1.06-1.06a2.75 2.75 0 0 0-3.889 0l1.06 1.06a1.25 1.25 0 0 1 1.768 0l1.061-1.06ZM6.873 6.873a1.25 1.25 0 0 1 1.768 0l1.06-1.06a2.75 2.75 0 0 0-3.888 0l1.06 1.06Zm0 1.768a1.25 1.25 0 0 1 0-1.768l-1.06-1.06a2.75 2.75 0 0 0 0 3.889l1.06-1.06Zm10.253 8.486a1.25 1.25 0 0 1-1.767 0l-1.06 1.06a2.75 2.75 0 0 0 3.888 0l-1.06-1.06Zm1.061 1.06a2.75 2.75 0 0 0 0-3.889l-1.06 1.06a1.25 1.25 0 0 1 0 1.768l1.06 1.061Zm-3.889-5.657 2.829 2.829 1.06-1.06-2.828-2.83-1.06 1.061Zm2.829-3.889-2.829 2.829 1.06 1.06 2.83-2.828-1.061-1.06Zm-5.657 5.657-2.83 2.829 1.06 1.06 2.83-2.828-1.061-1.06Zm3.889 2.829-2.829-2.829-1.06 1.06 2.828 2.83 1.06-1.061ZM9.702 11.47 6.873 8.64 5.813 9.7l2.828 2.83 1.06-1.061Zm-2.829 3.889 2.829-2.829-1.06-1.06-2.83 2.828 1.061 1.06Zm1.768-8.486 2.829 2.829 1.06-1.06-2.828-2.83-1.06 1.061Zm5.657-1.06L11.47 8.64l1.06 1.06 2.829-2.828-1.06-1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemove);
export default ForwardRef;