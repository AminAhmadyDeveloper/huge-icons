import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderUpload = (
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
            d='m11.067 3.8-.45.6.45-.6Zm1.866 1.4.45-.6-.45.6ZM8.47 12.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm4.944-1.056-.53.53.53-.53Zm1.056 2.116a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM12.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm10-6v7h1.5v-7h-1.5ZM18 20.25H6v1.5h12v-1.5ZM2.75 17V7h-1.5v10h1.5ZM15.333 6.75H18v-1.5h-2.667v1.5ZM6 3.75h2.667v-1.5H6v1.5Zm4.617.65 1.866 1.4.9-1.2-1.866-1.4-.9 1.2Zm-1.95-.65a3.25 3.25 0 0 1 1.95.65l.9-1.2a4.75 4.75 0 0 0-2.85-.95v1.5Zm6.666 1.5a3.25 3.25 0 0 1-1.95-.65l-.9 1.2a4.75 4.75 0 0 0 2.85.95v-1.5ZM6 20.25A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75v-1.5ZM21.25 17A3.25 3.25 0 0 1 18 20.25v1.5A4.75 4.75 0 0 0 22.75 17h-1.5Zm1.5-7A4.75 4.75 0 0 0 18 5.25v1.5A3.25 3.25 0 0 1 21.25 10h1.5Zm-20-3A3.25 3.25 0 0 1 6 3.75v-1.5A4.75 4.75 0 0 0 1.25 7h1.5Zm6.78 6.53 1.586-1.585-1.06-1.061L8.47 12.47l1.06 1.06Zm3.354-1.585 1.586 1.585 1.06-1.06-1.585-1.586-1.061 1.06ZM11.25 11v5h1.5v-5h-1.5Zm-.134.944a1.25 1.25 0 0 1 1.768 0l1.06-1.06a2.75 2.75 0 0 0-3.889 0l1.061 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderUpload);
export default ForwardRef;