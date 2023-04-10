import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAlarmDelete = (
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
            d='M7.497 2.687a.75.75 0 1 0-.6-1.374 12.797 12.797 0 0 0-5.521 4.636.75.75 0 0 0 1.249.83 11.297 11.297 0 0 1 4.872-4.092Zm9.607-1.374a.75.75 0 0 0-.601 1.374c1.99.87 3.681 2.301 4.872 4.093a.75.75 0 0 0 1.25-.83 12.797 12.797 0 0 0-5.521-4.637Zm1.888 17.355A9 9 0 1 0 3 13c0 2.148.752 4.12 2.008 5.668l-1.663 2.965a.75.75 0 1 0 1.308.734l1.443-2.573A8.965 8.965 0 0 0 12 22a8.966 8.966 0 0 0 5.903-2.206l1.443 2.573a.75.75 0 1 0 1.308-.734l-1.662-2.965Zm-4.34-7.259a.75.75 0 0 0-1.061-1.06L12 11.938l-1.591-1.59a.75.75 0 1 0-1.06 1.06L10.938 13l-1.59 1.591a.75.75 0 1 0 1.06 1.06l1.59-1.59 1.592 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.59 1.59-1.592Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlarmDelete);
export default ForwardRef;
