import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionLeftDoubleRectangle = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10.7 7.316a1.005 1.005 0 0 0-.265.189c-.058.063-.596.772-1.196 1.575-1.362 1.82-1.49 2.071-1.49 2.92 0 .856.123 1.095 1.538 2.981.628.835 1.176 1.55 1.218 1.587.566.499 1.457-.098 1.209-.809-.026-.073-.553-.809-1.172-1.636-.618-.827-1.151-1.566-1.183-1.643-.036-.086-.059-.271-.059-.48 0-.209.023-.394.059-.48.032-.077.565-.816 1.183-1.643.619-.827 1.146-1.563 1.172-1.636a.677.677 0 0 0-.03-.541c-.181-.392-.607-.559-.984-.384m5 0a1.005 1.005 0 0 0-.265.189c-.058.063-.596.772-1.196 1.575-1.362 1.82-1.49 2.071-1.49 2.92 0 .856.123 1.095 1.538 2.981.628.835 1.176 1.55 1.218 1.587.566.499 1.457-.098 1.209-.809-.026-.073-.553-.809-1.172-1.636-.618-.827-1.151-1.566-1.183-1.643-.036-.086-.059-.271-.059-.48 0-.209.023-.394.059-.48.032-.077.565-.816 1.183-1.643.619-.827 1.146-1.563 1.172-1.636a.677.677 0 0 0-.03-.541c-.181-.392-.607-.559-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionLeftDoubleRectangle);
export default ForwardRef;
