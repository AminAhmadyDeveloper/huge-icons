import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGmail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 3.043a4.327 4.327 0 0 0-1.718.679c-.78.524-1.389 1.427-1.606 2.38-.075.331-.078.386-.027.436.032.031 1.903 1.4 4.158 3.041 4.33 3.151 4.488 3.256 5.11 3.403.226.054.398.064.78.047.542-.023.821-.097 1.27-.333.28-.148 8.474-6.09 8.54-6.194.028-.044.008-.185-.068-.483-.367-1.433-1.455-2.513-2.932-2.911l-.32-.086-6.48-.007c-3.564-.003-6.582.009-6.707.028M2.01 13.311l.012 4.349.11.378c.44 1.506 1.585 2.572 3.094 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.684-1.403 3.098-2.905l.108-.392.011-4.329.011-4.329-3.468 2.522a480.636 480.636 0 0 1-3.751 2.714 5 5 0 0 1-5.566 0 480.636 480.636 0 0 1-3.751-2.714L1.998 8.961l.012 4.35'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGmail);
export default ForwardRef;
