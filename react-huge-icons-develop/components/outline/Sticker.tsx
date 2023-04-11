import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSticker = (
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
            d='m21.414 11.586.53.53-.53-.53Zm-8.828 8.828-.53-.53.53.53ZM21.5 11.75a.75.75 0 0 0 0-1.5v1.5ZM11.25 20.5a.75.75 0 0 0 1.5 0h-1.5ZM6 3.75h12v-1.5H6v1.5ZM2.75 17V7h-1.5v10h1.5Zm8.422 3.25H6v1.5h5.172v-1.5ZM21.25 7v3.172h1.5V7h-1.5Zm-.366 4.056-8.829 8.828 1.061 1.06 8.829-8.828-1.061-1.06Zm.366-.884c0 .331-.132.649-.366.883l1.06 1.061a2.75 2.75 0 0 0 .806-1.944h-1.5ZM11.172 21.75c.729 0 1.428-.29 1.944-.805l-1.06-1.061a1.25 1.25 0 0 1-.884.366v1.5ZM1.25 17A4.75 4.75 0 0 0 6 21.75v-1.5A3.25 3.25 0 0 1 2.75 17h-1.5ZM18 3.75A3.25 3.25 0 0 1 21.25 7h1.5A4.75 4.75 0 0 0 18 2.25v1.5ZM6 2.25A4.75 4.75 0 0 0 1.25 7h1.5A3.25 3.25 0 0 1 6 3.75v-1.5Zm12 9.5h3.5v-1.5H18v1.5Zm-5.25 8.75V17h-1.5v3.5h1.5ZM18 10.25A6.75 6.75 0 0 0 11.25 17h1.5c0-2.9 2.35-5.25 5.25-5.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSticker);
export default ForwardRef;