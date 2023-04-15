import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatWritten = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.34 3.025c-1.269.123-2.251.39-3.28.893a9.009 9.009 0 0 0-5.02 7.242c-.031.311-.041 1.436-.031 3.48l.014 3.02.11.378c.437 1.504 1.584 2.572 3.093 2.879.395.081.521.083 4.341.083 3.223 0 4.025-.011 4.441-.059a8.992 8.992 0 0 0 7.075-5.001 8.974 8.974 0 0 0-1.07-9.571c-1.215-1.517-2.984-2.648-4.853-3.102-.889-.217-1.134-.237-2.96-.248a64.757 64.757 0 0 0-1.86.006m6.033 6.33c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.081-.178.082-4.359.082s-4.221-.001-4.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 1.988-.028 4.265-.024l4.14.006.153.095m-4 4c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.136.08-.194.082-2.359.082s-2.223-.002-2.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.055-1.013.431-1.132.069-.017 1.088-.027 2.265-.024l2.14.007.153.095'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatWritten);
export default ForwardRef;