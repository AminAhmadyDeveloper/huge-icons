import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSyrup = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.15 2.043a1.555 1.555 0 0 0-1.006.837c-.11.231-.124.3-.124.62 0 .311.015.394.113.604.143.309.452.617.767.764l.24.112h5.72l.244-.113c.309-.143.617-.452.764-.767.097-.207.112-.29.112-.6s-.015-.393-.112-.6a1.698 1.698 0 0 0-.764-.767l-.244-.113-2.78-.007c-1.539-.003-2.847.01-2.93.03M9 6.832c0 .809-.326 1.375-1.095 1.899-.946.645-1.518 1.436-1.798 2.484-.086.322-.087.358-.087 3.865v3.54l.111.397c.347 1.242 1.226 2.235 2.389 2.698.165.066.487.158.715.204.4.081.502.084 2.9.072l2.485-.013.391-.107a4.002 4.002 0 0 0 2.908-3.105c.082-.404.084-.488.072-3.84-.012-3.375-.014-3.431-.099-3.733-.298-1.052-.861-1.823-1.797-2.462C15.318 8.202 15 7.645 15 6.818V6.52H9v.312m3.756 5.265c.337.092.839.35 1.117.574C14.554 13.219 15 14.14 15 15c0 1.17-.775 2.329-1.849 2.766-1.509.614-3.162-.032-3.853-1.506-.226-.481-.277-.714-.277-1.26s.051-.779.277-1.26a3.033 3.033 0 0 1 2.205-1.7c.267-.049.988-.016 1.253.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSyrup);
export default ForwardRef;
