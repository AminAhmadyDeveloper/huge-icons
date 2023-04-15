import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVinylPlayer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M21.811 1.278a.883.883 0 0 0-.481.374c-.061.112-.072.291-.09 1.448-.025 1.644.013 1.545-.871 2.286l-.506.423-.201-.234c-1.546-1.808-3.66-3.03-5.902-3.412-2.678-.456-5.307.122-7.48 1.643-3.543 2.48-5.102 6.952-3.858 11.059a9.76 9.76 0 0 0 2.516 4.196c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645 1.494-1.93 2.229-4.181 2.142-6.56a9.75 9.75 0 0 0-.991-3.995 22.552 22.552 0 0 1-.276-.587c0-.006.25-.219.555-.474.305-.254.652-.567.771-.696.252-.272.468-.663.6-1.088.091-.29.094-.346.094-1.66 0-1.299-.004-1.366-.082-1.499a.807.807 0 0 0-.847-.363M19.992 5.99c.153.194.688 1.016.688 1.058 0 .017-.969.84-2.154 1.827-1.411 1.175-2.207 1.812-2.305 1.845-.609.201-1.156-.4-.915-1.004.058-.144.366-.415 2.29-2.02 1.223-1.02 2.236-1.855 2.251-1.855.014-.001.08.066.145.149m-7.609 4.053c.802.147 1.456.829 1.584 1.652C14.153 12.894 13.209 14 12 14a2.016 2.016 0 0 1-1.967-1.695c-.1-.642.099-1.244.563-1.709.489-.488 1.102-.678 1.787-.553m-5.978 1.338c.261.168.317.313.358.909.184 2.718 2.229 4.763 4.947 4.947.601.041.738.096.919.37a.753.753 0 0 1-.004.793c-.218.329-.457.394-1.192.324-3.347-.318-5.899-2.9-6.153-6.225-.042-.549-.027-.696.088-.888a.74.74 0 0 1 1.037-.23'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVinylPlayer);
export default ForwardRef;
