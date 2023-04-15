import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAttachment = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.7 2.825c-.626.056-1.234.22-1.707.458-.641.324-.752.425-3.875 3.552-3.287 3.29-3.34 3.349-3.774 4.225a6.265 6.265 0 0 0-.54 1.512 6.407 6.407 0 0 0 8.088 7.502 6.463 6.463 0 0 0 2.208-1.168c.176-.143 1.574-1.517 3.107-3.053 2.934-2.941 2.874-2.874 2.872-3.213-.001-.155-.134-.412-.275-.53a.92.92 0 0 0-.484-.19c-.295 0-.283-.01-3.24 2.939-1.573 1.569-2.99 2.951-3.148 3.072-.552.421-1.4.784-2.132.913-.385.068-1.215.068-1.6 0a4.943 4.943 0 0 1-3.871-3.364A4.495 4.495 0 0 1 5.111 14c0-1.036.275-1.932.862-2.8.148-.22.972-1.072 3.085-3.193 1.585-1.591 2.99-2.974 3.122-3.074.3-.227.598-.379.981-.499.432-.135 1.245-.135 1.679 0 .86.268 1.493.814 1.886 1.626.194.403.272.77.273 1.284a2.922 2.922 0 0 1-.679 1.907c-.128.159-1.455 1.506-2.947 2.994-3.006 2.997-2.841 2.857-3.373 2.853-.636-.004-1.095-.473-1.095-1.118 0-.521-.123-.378 2.975-3.48 1.553-1.556 2.815-2.85 2.838-2.913a.818.818 0 0 0-.051-.63c-.07-.132-.147-.204-.31-.29-.275-.145-.513-.13-.767.048-.195.137-5.512 5.46-5.703 5.711a3.13 3.13 0 0 0-.267.461c-.696 1.465.091 3.177 1.682 3.658.329.1 1.067.1 1.396 0 .337-.102.683-.284.962-.507.132-.105 1.501-1.458 3.042-3.005 2.04-2.048 2.857-2.895 3.005-3.113 1.566-2.314.779-5.386-1.7-6.637-.642-.323-1.629-.52-2.307-.458'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAttachment);
export default ForwardRef;
