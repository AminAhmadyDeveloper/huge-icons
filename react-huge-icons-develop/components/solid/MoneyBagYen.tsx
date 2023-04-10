import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyBagYen = (
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
            d='M15.602 5.25H8.398c-1.162-1.57.404-3.768 2.35-3.14l.927.3c.211.067.439.067.65 0l.928-.3c1.945-.628 3.512 1.57 2.349 3.14Zm-7.096 1.5h6.988c1.32.73 2.35 1.95 2.822 3.46l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4a5.996 5.996 0 0 1 2.822-3.46Zm2.118 3.834a.75.75 0 1 0-1.248.832l1.556 2.334H10a.75.75 0 0 0 0 1.5h1.25v.5H10a.75.75 0 0 0 0 1.5h1.25V19a.75.75 0 0 0 1.5 0v-1.75H14a.75.75 0 0 0 0-1.5h-1.25v-.5H14a.75.75 0 0 0 0-1.5h-.932l1.556-2.334a.75.75 0 1 0-1.248-.832L12 12.648l-1.376-2.064Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagYen);
export default ForwardRef;
