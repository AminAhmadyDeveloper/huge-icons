import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGlobeSideView = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.533 1.31a3.91 3.91 0 0 0-.453.43C2.59 3.361 1.665 5.344 1.334 7.62c-.096.664-.096 2.096 0 2.76.38 2.617 1.532 4.815 3.446 6.576 1.62 1.491 3.814 2.483 6.03 2.728l.43.047v1.504l-1.233.012-1.233.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.233-.013-1.233-.012v-1.501l.55-.067c2.277-.28 4.486-1.325 6.086-2.88.314-.305.404-.458.404-.687 0-.427-.327-.74-.773-.74-.258 0-.385.076-.818.486-1.015.962-2.474 1.747-3.925 2.114-.889.225-1.175.257-2.284.257-1.109 0-1.395-.032-2.284-.257a9.27 9.27 0 0 1-6.774-7.1 9.625 9.625 0 0 1 .161-4.385C3.475 5.133 4.214 3.816 5.2 2.74c.468-.511.56-.751.418-1.09-.123-.296-.366-.45-.71-.45-.17 0-.25.023-.375.11'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobeSideView);
export default ForwardRef;
