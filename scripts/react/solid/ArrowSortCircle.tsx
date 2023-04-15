import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowSortCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m-.715 5.342c.08.051.188.162.24.246l.095.153v8.453l-.121.172c-.166.236-.346.334-.619.334s-.453-.097-.619-.334l-.121-.172-.02-3.197-.02-3.198-.36.364c-.198.2-.427.399-.508.441a.78.78 0 0 1-.846-.118c-.218-.191-.284-.576-.15-.865.108-.231 2.222-2.324 2.384-2.36.066-.015.138-.033.16-.041.091-.033.37.035.505.122m4 0c.08.051.188.162.24.246l.095.153.02 3.191.02 3.191.36-.364c.41-.414.578-.518.84-.518a.73.73 0 0 1 .739.728c-.001.317-.101.443-1.245 1.579-.96.953-1.116 1.092-1.27 1.133a.765.765 0 0 1-.849-.347l-.095-.153V7.78l.093-.149c.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowSortCircle);
export default ForwardRef;