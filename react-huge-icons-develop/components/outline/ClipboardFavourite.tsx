import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgClipboardFavourite = (
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
            d='m12 12.182-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm.265-.265.53.53-.53-.53Zm-.53 0-.53.53.53-.53Zm-2.652 2.651.53-.53-.53.53Zm1.856 1.857-.53.53.53-.53Zm1.591-3.713.265-.265-1.06-1.06-.265.265 1.06 1.06Zm-1.326-.265.266.265 1.06-1.06-.265-.265-1.06 1.06ZM8.553 15.1l1.856 1.856 1.06-1.06-1.856-1.857-1.06 1.06Zm5.038 1.856 1.856-1.856-1.06-1.06-1.857 1.855 1.06 1.06Zm.795-4.508c.44.44.44 1.152 0 1.591l1.061 1.06a2.625 2.625 0 0 0 0-3.712l-1.06 1.061Zm1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06c.44-.44 1.152-.44 1.591 0l1.061-1.06Zm-5.834 1.06c.44-.44 1.152-.44 1.591 0l1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06Zm.796 4.508a2.25 2.25 0 0 0 3.182 0l-1.06-1.06a.75.75 0 0 1-1.061 0l-1.061 1.06Zm-1.856-5.568a2.625 2.625 0 0 0 0 3.712l1.06-1.06a1.125 1.125 0 0 1 0-1.592l-1.06-1.06ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClipboardFavourite);
export default ForwardRef;