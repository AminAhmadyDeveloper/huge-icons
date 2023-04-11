import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMusicQuaver = (
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
            d='m14.98 2.247-.185.727.185-.727ZM20.419 13l-.696.281a.75.75 0 0 0 1.39 0L20.42 13Zm-8.169 4A4.25 4.25 0 0 1 8 21.25v1.5A5.75 5.75 0 0 0 13.75 17h-1.5ZM8 21.25A4.25 4.25 0 0 1 3.75 17h-1.5A5.75 5.75 0 0 0 8 22.75v-1.5ZM3.75 17A4.25 4.25 0 0 1 8 12.75v-1.5A5.75 5.75 0 0 0 2.25 17h1.5ZM8 12.75A4.25 4.25 0 0 1 12.25 17h1.5A5.75 5.75 0 0 0 8 11.25v1.5Zm6.795-9.776A7.253 7.253 0 0 1 20.25 10h1.5c0-4.086-2.8-7.516-6.585-8.48l-.37 1.454ZM13 8.75a7.253 7.253 0 0 1 6.723 4.531l1.39-.563A8.753 8.753 0 0 0 13 7.25v1.5ZM20.25 10a7.22 7.22 0 0 1-.527 2.719l1.39.562A8.727 8.727 0 0 0 21.75 10h-1.5Zm-8-6v4h1.5V4h-1.5Zm2.915-2.48C13.489 1.093 12.25 2.55 12.25 4h1.5c0-.76.58-1.145 1.045-1.026l.37-1.454ZM12.25 8v9h1.5V8h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicQuaver);
export default ForwardRef;