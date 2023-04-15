import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.556 3.521a4.034 4.034 0 0 0-3.497 3.314C3.019 7.064 3 7.46 3 8.085V9h18v-.915c0-.994-.043-1.368-.218-1.88-.375-1.1-1.306-2.058-2.376-2.446-.751-.271-.316-.253-6.226-.262-2.948-.004-5.479.006-5.624.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalendar);
export default ForwardRef;
