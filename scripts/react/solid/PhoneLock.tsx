import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPhoneLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.555 1.281a4.117 4.117 0 0 0-1.713.649c-.307.207-.847.791-1.057 1.142a4.286 4.286 0 0 0-.503 1.421c-.059.435-.059 14.579 0 15.014.059.433.27 1.031.503 1.422.262.442.844 1.024 1.286 1.286.391.233.989.444 1.422.503.184.025 1.096.042 2.22.041 1.771-.001 1.918-.006 2.067-.075.486-.225.619-.807.267-1.178-.241-.254-.146-.244-2.447-.267-2.021-.021-2.109-.025-2.328-.108-.661-.248-1.118-.698-1.383-1.36L4.78 19.5v-15l.109-.271c.263-.657.684-1.077 1.346-1.343L6.5 2.78h9l.265.106c.662.266 1.083.686 1.346 1.343l.109.271.02 3.1c.018 2.79.027 3.112.086 3.22.323.582 1.081.56 1.358-.04.07-.151.074-.323.075-3.067.001-1.828-.015-3.023-.041-3.22a4.286 4.286 0 0 0-.503-1.421c-.21-.351-.75-.935-1.057-1.142a4.668 4.668 0 0 0-1.23-.562l-.388-.106-4.36-.007c-2.398-.003-4.479.008-4.625.026m9.101 11a2.75 2.75 0 0 0-2.112 1.496c-.235.48-.272.677-.293 1.563l-.02.8-.24.139a2.101 2.101 0 0 0-.947 1.313c-.059.283-.059 2.533 0 2.816.157.75.798 1.391 1.548 1.548.14.029.959.044 2.408.044 1.449 0 2.268-.015 2.408-.044a2.062 2.062 0 0 0 1.548-1.548c.059-.283.059-2.533 0-2.816a2.101 2.101 0 0 0-.947-1.313l-.24-.139-.02-.8c-.021-.865-.058-1.074-.271-1.523-.497-1.046-1.679-1.69-2.822-1.536m.881 1.597c.25.122.463.334.586.585.089.181.098.253.11.867l.012.67H14.76v-.615c0-.666.029-.81.224-1.104.121-.182.371-.373.607-.462.232-.089.705-.059.946.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPhoneLock);
export default ForwardRef;
