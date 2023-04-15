import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgActivity = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m4.972 5.338c.08.051.181.153.224.226.043.073.806 1.775 1.695 3.782s1.625 3.649 1.636 3.649c.011.001.315-.741.676-1.649.36-.907.691-1.709.735-1.782a.916.916 0 0 1 .241-.24l.162-.107h1.223c1.218 0 1.224 0 1.376.095.242.151.36.363.36.648 0 .2-.019.267-.117.406-.219.313-.28.329-1.256.344l-.86.013-.92 2.305c-1.008 2.526-1.022 2.553-1.375 2.648a.723.723 0 0 1-.818-.307c-.053-.084-.84-1.83-1.75-3.882S9.973 9.8 9.961 9.8c-.011 0-.327.608-.701 1.35-.63 1.252-.693 1.359-.853 1.47l-.174.12H7.007c-1.391 0-1.391 0-1.623-.331-.098-.138-.117-.206-.117-.402a.7.7 0 0 1 .345-.64c.162-.107.164-.107 1.046-.12l.885-.013.928-1.855c.987-1.972 1.02-2.023 1.34-2.101a.813.813 0 0 1 .594.103'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgActivity);
export default ForwardRef;
