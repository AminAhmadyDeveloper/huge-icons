import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChat = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.34 3.025c-1.269.123-2.251.39-3.28.893a9.009 9.009 0 0 0-5.02 7.242c-.031.311-.041 1.436-.031 3.48l.014 3.02.11.378c.437 1.504 1.584 2.572 3.093 2.879.395.081.521.083 4.341.083 3.223 0 4.025-.011 4.441-.059a8.992 8.992 0 0 0 7.075-5.001 8.974 8.974 0 0 0-1.07-9.571c-1.215-1.517-2.984-2.648-4.853-3.102-.889-.217-1.134-.237-2.96-.248a64.757 64.757 0 0 0-1.86.006'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChat);
export default ForwardRef;
