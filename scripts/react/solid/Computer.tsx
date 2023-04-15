import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgComputer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.503 2.042c-1.016.172-1.947.934-2.301 1.883-.207.554-.201.349-.201 6.567-.001 6.337-.011 6.061.233 6.659a3.046 3.046 0 0 0 1.615 1.615c.575.234.569.234 4.129.234h3.262v2.235l-1.233.012-1.233.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.233-.013-1.233-.012V19h3.262c3.559 0 3.554 0 4.128-.233a3.08 3.08 0 0 0 1.617-1.617c.243-.596.233-.324.233-6.65 0-6.328.01-6.053-.234-6.651a2.99 2.99 0 0 0-1.47-1.537c-.66-.318.116-.289-8.176-.297-4.081-.003-7.509.009-7.617.027m8.885 13.325a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.232.331-.233.331-1.616.331s-1.384 0-1.616-.331c-.286-.406-.056-1.011.431-1.132.069-.017.639-.028 1.268-.024l1.143.007.162.107'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgComputer);
export default ForwardRef;
