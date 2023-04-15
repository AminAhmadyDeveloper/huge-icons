import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMiniStoreSmile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.76 2.027a5.634 5.634 0 0 0-.48.1c-1.243.304-2.296 1.186-2.93 2.453-.143.287-.949 2.507-1.136 3.132-.141.471-.174 1.167-.075 1.574.149.614.543 1.323.978 1.757a3.95 3.95 0 0 0 1.28.813c.318.112.383.121.903.123.588.001.761-.029 1.2-.21.772-.317 1.489-1.051 1.84-1.883.146-.348.298-.91.303-1.124.003-.093.029-.018.076.218.186.918.524 1.548 1.155 2.148.603.573 1.331.872 2.126.872.86 0 1.619-.337 2.264-1.006.534-.553.833-1.14 1.015-1.994.042-.193.075-.287.077-.218.007.2.165.773.304 1.104.351.832 1.068 1.566 1.84 1.883.439.181.612.211 1.2.21.52-.002.585-.011.903-.123a3.895 3.895 0 0 0 1.291-.827c.442-.452.818-1.13.968-1.745.099-.408.064-1.095-.081-1.583-.181-.612-.984-2.826-1.131-3.121-.631-1.262-1.632-2.104-2.93-2.464l-.34-.095-5.24-.005c-2.882-.002-5.303.003-5.38.011M8.7 16.316c-.393.181-.558.605-.384.987.103.228.295.371.899.672.667.332 1.044.479 1.623.634.419.112.521.123 1.102.127.701.004 1-.042 1.673-.262.447-.147 1.676-.737 1.863-.896a.744.744 0 0 0-.176-1.262c-.277-.128-.397-.103-1.062.226-.751.372-1.009.478-1.41.581-.949.243-1.704.106-3.004-.545-.734-.367-.843-.392-1.124-.262'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMiniStoreSmile);
export default ForwardRef;
