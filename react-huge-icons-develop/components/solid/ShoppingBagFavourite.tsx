import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBagFavourite = (
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
            d='M15.612 3H8.389a4 4 0 0 0-3.946 3.342l-1.667 10A4 4 0 0 0 6.722 21H12a1 1 0 0 0 1-1v-3a4 4 0 0 1 4-4h2.486a1 1 0 0 0 .987-1.164l-.916-5.494A4 4 0 0 0 15.612 3Zm.138 4a3.75 3.75 0 1 1-7.5 0V6a.75.75 0 0 1 1.5 0v1a2.25 2.25 0 0 0 4.5 0V6a.75.75 0 0 1 1.5 0v1Zm2.507 8.755.265-.265a1.875 1.875 0 1 1 2.652 2.652l-1.856 1.856a1.5 1.5 0 0 1-2.121 0l-1.857-1.856a1.875 1.875 0 1 1 2.652-2.652l.265.265Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBagFavourite);
export default ForwardRef;