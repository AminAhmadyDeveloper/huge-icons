import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPowerCircle = (
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
            d='M12.75 7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm4.2-1.6a.75.75 0 1 0-.9 1.2l.9-1.2Zm-6 1.2a.75.75 0 0 0-.9-1.2l.9 1.2Zm11.8 3.4A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5ZM11.25 7v2h1.5V7h-1.5Zm5 5A4.25 4.25 0 0 1 12 16.25v1.5A5.75 5.75 0 0 0 17.75 12h-1.5ZM12 16.25A4.25 4.25 0 0 1 7.75 12h-1.5A5.75 5.75 0 0 0 12 17.75v-1.5Zm2.55-7.65a4.243 4.243 0 0 1 1.7 3.4h1.5a5.742 5.742 0 0 0-2.3-4.6l-.9 1.2ZM7.75 12a4.24 4.24 0 0 1 1.7-3.4l-.9-1.2a5.742 5.742 0 0 0-2.3 4.6h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPowerCircle);
export default ForwardRef;