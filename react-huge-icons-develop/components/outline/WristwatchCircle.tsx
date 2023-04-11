import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWristwatchCircle = (
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
        <circle cx={12} cy={12} r={7} stroke='currentColor' strokeWidth={1.5} />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 9v3l-2 1'
        />
        <path
            fill='currentColor'
            d='M17.75 17a.75.75 0 0 0-1.5 0h1.5Zm-10 0a.75.75 0 0 0-1.5 0h1.5Zm8.5 0v3h1.5v-3h-1.5ZM15 21.25H9v1.5h6v-1.5ZM7.75 20v-3h-1.5v3h1.5ZM9 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 9 22.75v-1.5ZM16.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 17.75 20h-1.5Zm1.5-13a.75.75 0 0 1-1.5 0h1.5Zm-10 0a.75.75 0 0 1-1.5 0h1.5Zm8.5 0V4h1.5v3h-1.5ZM15 2.75H9v-1.5h6v1.5ZM7.75 4v3h-1.5V4h1.5ZM9 2.75c-.69 0-1.25.56-1.25 1.25h-1.5A2.75 2.75 0 0 1 9 1.25v1.5ZM16.25 4c0-.69-.56-1.25-1.25-1.25v-1.5A2.75 2.75 0 0 1 17.75 4h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWristwatchCircle);
export default ForwardRef;