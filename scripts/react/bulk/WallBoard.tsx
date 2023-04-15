import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWallBoard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278c-.17.041.007-.101-3.085 2.477L6.032 6l1.174-.001H8.38l1.798-1.5A95.46 95.46 0 0 1 12 3c.013 0 .833.675 1.822 1.499l1.798 1.5h1.174L17.968 6l-2.78-2.317c-1.529-1.274-2.814-2.334-2.854-2.355-.114-.06-.38-.085-.523-.05M6.7 9.316a.745.745 0 0 0 .029 1.382c.131.055.738.062 5.271.062 4.533 0 5.14-.007 5.271-.062a.748.748 0 0 0 0-1.396c-.131-.055-.737-.062-5.28-.061-4.903.001-5.138.004-5.291.075m0 4a.745.745 0 0 0 .029 1.382c.131.055.738.062 5.271.062 4.533 0 5.14-.007 5.271-.062a.748.748 0 0 0 0-1.396c-.131-.055-.737-.062-5.28-.061-4.903.001-5.138.004-5.291.075m0 4a.745.745 0 0 0 .029 1.382c.129.054.494.062 2.78.061 2.472-.001 2.641-.005 2.791-.075.38-.175.552-.587.398-.955a.734.734 0 0 0-.398-.413c-.15-.07-.318-.074-2.8-.074-2.482 0-2.65.004-2.8.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWallBoard);
export default ForwardRef;
