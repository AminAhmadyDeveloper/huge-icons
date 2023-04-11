import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyDollar = (
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
            d='M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 5.75a.75.75 0 0 1 .75.75v.854a2.75 2.75 0 0 1 2 2.646.75.75 0 0 1-1.5 0A1.25 1.25 0 1 0 12 11.25a2.75 2.75 0 0 1 .75 5.396v.854a.75.75 0 0 1-1.5 0v-.854a2.751 2.751 0 0 1-2-2.646.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 12 12.75a2.75 2.75 0 0 1-.75-5.396V6.5a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyDollar);
export default ForwardRef;