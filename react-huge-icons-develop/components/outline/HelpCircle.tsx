import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHelpCircle = (
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
            d='m12.982 11.836-.245-.71.245.71ZM8.25 9a.75.75 0 0 0 1.5 0h-1.5Zm3 5a.75.75 0 0 0 1.5 0h-1.5Zm10-2A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5ZM14.25 9c0 .984-.632 1.822-1.514 2.127l.491 1.417A3.751 3.751 0 0 0 15.75 9h-1.5Zm-4.5 0A2.25 2.25 0 0 1 12 6.75v-1.5A3.75 3.75 0 0 0 8.25 9h1.5ZM12 6.75A2.25 2.25 0 0 1 14.25 9h1.5A3.75 3.75 0 0 0 12 5.25v1.5ZM11.25 13v1h1.5v-1h-1.5Zm1.486-1.873c-.678.235-1.486.87-1.486 1.873h1.5c0-.056.02-.13.102-.219a.92.92 0 0 1 .375-.237l-.49-1.417Z'
        />
        <circle cx={12} cy={17} r={1} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgHelpCircle);
export default ForwardRef;
