import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackPrevious = (
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
            d='m13.992 17.245-.378.648.378-.648Zm-6.03-3.518-.378.648.377-.648Zm0-3.455-.378-.647.378.647Zm6.03-3.518.378.648-.378-.648ZM7.75 7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 10a.75.75 0 1 0 1.5 0h-1.5Zm8.12-.402L8.34 13.08l-.756 1.295 6.03 3.518.756-1.295ZM8.34 10.92l6.03-3.518-.756-1.295-6.03 3.518.755 1.295Zm0 2.16a1.25 1.25 0 0 1 0-2.16l-.756-1.295c-1.82 1.06-1.82 3.69 0 4.75l.755-1.295Zm5.274 4.813c1.834 1.07 4.136-.253 4.136-2.375h-1.5a1.25 1.25 0 0 1-1.88 1.08l-.756 1.295Zm.756-10.49a1.25 1.25 0 0 1 1.88 1.079h1.5c0-2.122-2.302-3.445-4.136-2.375l.756 1.295ZM6.25 7v10h1.5V7h-1.5Zm10 1.482v7.036h1.5V8.482h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPrevious);
export default ForwardRef;