import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEyeScannerBorder = (
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
            d='m4.912 13.101-.555.505.555-.505Zm0-2.202-.555-.505.555.505ZM19.088 13.1l.555.505-.555-.505Zm0-2.202.555-.505-.555.505ZM1.25 8a.75.75 0 0 0 1.5 0h-1.5ZM8 2.75a.75.75 0 0 0 0-1.5v1.5Zm8-1.5a.75.75 0 0 0 0 1.5v-1.5ZM21.25 8a.75.75 0 0 0 1.5 0h-1.5Zm1.5 8a.75.75 0 0 0-1.5 0h1.5ZM16 21.25a.75.75 0 0 0 0 1.5v-1.5Zm-8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5.25-6.194a.75.75 0 1 0-1.5 0h1.5Zm15.783-3.96c-.644.71-1.598 1.634-2.745 2.377-1.15.746-2.445 1.277-3.788 1.277v1.5c1.735 0 3.315-.682 4.604-1.518 1.293-.838 2.345-1.862 3.039-2.626l-1.11-1.01ZM12 16.25c-1.343 0-2.638-.531-3.788-1.277-1.147-.743-2.1-1.668-2.745-2.376l-1.11 1.009c.694.764 1.746 1.788 3.039 2.626 1.29.836 2.869 1.518 4.604 1.518v-1.5Zm-6.533-4.847c.644-.708 1.598-1.633 2.745-2.376C9.362 8.28 10.657 7.75 12 7.75v-1.5c-1.735 0-3.315.682-4.604 1.518-1.293.838-2.345 1.863-3.039 2.626l1.11 1.01ZM12 7.75c1.343 0 2.638.531 3.789 1.277 1.146.743 2.1 1.668 2.744 2.376l1.11-1.009c-.694-.763-1.746-1.788-3.039-2.626C15.314 6.932 13.735 6.25 12 6.25v1.5Zm-6.533 4.847a.87.87 0 0 1 0-1.194l-1.11-1.009a2.37 2.37 0 0 0 0 3.212l1.11-1.01Zm14.176 1.009a2.37 2.37 0 0 0 0-3.212l-1.11 1.01a.87.87 0 0 1 0 1.193l1.11 1.009ZM13.25 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 12h-1.5ZM12 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 14.75v-1.5ZM10.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 12h1.5ZM12 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 9.25v1.5ZM2.75 8V6h-1.5v2h1.5ZM6 2.75h2v-1.5H6v1.5Zm10 0h2v-1.5h-2v1.5ZM21.25 6v2h1.5V6h-1.5Zm0 10v2h1.5v-2h-1.5ZM18 21.25h-2v1.5h2v-1.5Zm-10 0H6v1.5h2v-1.5ZM2.75 18v-1.444h-1.5V18h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM2.75 6A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEyeScannerBorder);
export default ForwardRef;
