import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.66 1.265c-1.609.162-2.898 1.283-3.307 2.875-.072.28-.085.48-.102 1.616-.022 1.398-.011 1.503.178 1.728A.744.744 0 0 0 9.684 7.3c.067-.144.074-.279.075-1.368.001-.717.019-1.294.045-1.42.167-.806.902-1.541 1.708-1.708.271-.056.705-.056.976 0 .806.167 1.541.902 1.708 1.708.026.126.044.703.045 1.42.001 1.089.008 1.224.075 1.368a.734.734 0 0 0 .413.398c.397.166.867-.067.994-.494.032-.106.04-.541.026-1.448-.017-1.152-.029-1.333-.105-1.632-.417-1.636-1.794-2.772-3.464-2.857a4.733 4.733 0 0 0-.52-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBag);
export default ForwardRef;
