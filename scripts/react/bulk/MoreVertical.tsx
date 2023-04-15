import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoreVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.853 10.071a1.245 1.245 0 0 0-.104 2.318c.465.213.999.11 1.374-.266a1.229 1.229 0 0 0-.793-2.107c-.2-.014-.324.001-.477.055'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoreVertical);
export default ForwardRef;
