import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLogin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.224 3.284c-2.101.221-3.823 1.864-4.165 3.972-.09.555-.088 8.969.003 9.489.304 1.756 1.469 3.155 3.104 3.729.785.275.517.26 4.954.276 4.157.015 4.447.007 5.054-.148.864-.221 1.486-.584 2.165-1.263.84-.84 1.254-1.695 1.387-2.865.072-.624-.007-.887-.326-1.099-.133-.087-.21-.108-.403-.108-.2 0-.267.019-.406.117-.256.18-.313.311-.357.826-.073.85-.365 1.488-.95 2.074-.403.402-.77.632-1.293.81l-.371.126-2.572.011-2.572.012.212-.257a4.789 4.789 0 0 0 1.031-2.438c.056-.442.056-8.654 0-9.096a4.789 4.789 0 0 0-1.031-2.438l-.213-.258 2.573.012 2.572.012.374.131c.541.188.892.408 1.29.805.583.584.877 1.224.95 2.068.041.482.094.628.286.79a.751.751 0 0 0 1.054-.094c.17-.202.204-.398.154-.9-.11-1.107-.518-2.014-1.261-2.803-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.482-.047-7.783-.044-8.232.003M14.8 9.29c-.162.035-.257.115-.952.804-.425.421-.827.852-.894.956a1.808 1.808 0 0 0-.045 1.83c.143.253 1.59 1.71 1.791 1.804a.74.74 0 0 0 1.049-.579c.035-.305-.044-.448-.501-.914l-.421-.429 3.316-.011c2.998-.01 3.329-.017 3.437-.077.242-.134.42-.419.42-.674 0-.255-.178-.54-.42-.674-.108-.06-.439-.067-3.435-.077l-3.315-.011.42-.431c.365-.375.425-.456.461-.621.123-.58-.325-1.021-.911-.896'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLogin);
export default ForwardRef;
