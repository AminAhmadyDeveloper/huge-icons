import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowZoomOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M13.42 5.26a2.274 2.274 0 0 1-.149.037c-.147.032-.39.251-.457.411a.742.742 0 0 0 .139.786c.233.247.217.244 1.777.266l1.43.02-4.698 4.698-4.697 4.697-.013-1.437c-.013-1.572-.01-1.55-.258-1.785a.742.742 0 0 0-.786-.139c-.155.065-.375.305-.417.457-.017.06-.031 1.201-.031 2.536v2.426l.12.17a.965.965 0 0 0 .28.253c.157.082.204.084 2.56.084 1.32 0 2.449-.014 2.509-.031.152-.042.392-.262.457-.417a.742.742 0 0 0-.139-.786c-.235-.248-.213-.245-1.785-.258l-1.437-.013 4.697-4.697L17.22 7.84l.02 1.43c.022 1.56.019 1.544.266 1.777a.667.667 0 0 0 .494.193.667.667 0 0 0 .494-.193c.257-.243.245-.12.258-2.663.008-1.607-.003-2.383-.034-2.534a.727.727 0 0 0-.529-.564c-.13-.032-.857-.045-2.457-.043-1.249.002-2.29.009-2.312.017'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowZoomOut);
export default ForwardRef;
