import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpringNotes = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.811 1.278a.883.883 0 0 0-.481.374c-.063.115-.071.297-.082 1.768-.009 1.101.001 1.689.031 1.788.089.304.412.55.721.55s.632-.246.721-.55c.03-.099.04-.687.031-1.788-.011-1.569-.016-1.646-.094-1.779a.807.807 0 0 0-.847-.363m8 0a.883.883 0 0 0-.481.374c-.063.115-.071.297-.082 1.768-.009 1.101.001 1.689.031 1.788.089.304.412.55.721.55s.632-.246.721-.55c.03-.099.04-.687.031-1.788-.011-1.569-.016-1.646-.094-1.779a.807.807 0 0 0-.847-.363M6.7 8.316a.745.745 0 0 0 .029 1.382c.131.055.738.062 5.271.062 4.533 0 5.14-.007 5.271-.062a.748.748 0 0 0 0-1.396c-.131-.055-.737-.062-5.28-.061-4.903.001-5.138.004-5.291.075m0 4a.745.745 0 0 0 .029 1.382c.131.055.738.062 5.271.062 4.533 0 5.14-.007 5.271-.062a.748.748 0 0 0 0-1.396c-.131-.055-.737-.062-5.28-.061-4.903.001-5.138.004-5.291.075m0 4a.745.745 0 0 0 .029 1.382c.129.054.494.062 2.78.061 2.472-.001 2.641-.005 2.791-.075.38-.175.552-.587.398-.955a.734.734 0 0 0-.398-.413c-.15-.07-.318-.074-2.8-.074-2.482 0-2.65.004-2.8.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotes);
export default ForwardRef;
