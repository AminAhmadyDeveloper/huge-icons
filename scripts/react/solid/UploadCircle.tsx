import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUploadCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.9 1.259a1.795 1.795 0 0 1-.16.04c-.089.02-.661.566-2.233 2.134-1.162 1.159-2.148 2.174-2.19 2.255a.847.847 0 0 0-.077.332c0 .537.53.886 1.031.679.101-.042.606-.518 1.559-1.47l1.41-1.409v6.12c0 4.342.013 6.166.045 6.279.059.213.293.441.513.5.4.108.812-.12.92-.51.028-.1.042-2.183.042-6.269V3.82l1.41 1.409c.953.952 1.458 1.428 1.559 1.47a.735.735 0 0 0 1.031-.679.847.847 0 0 0-.077-.332c-.079-.152-4.199-4.287-4.343-4.359-.091-.045-.38-.092-.44-.07M5.5 8.298c-.452.163-1.374 1.668-1.791 2.926-.74 2.226-.585 4.516.449 6.636 1.283 2.63 3.8 4.426 6.762 4.825.209.029.695.052 1.08.052.385 0 .871-.023 1.08-.052 3.945-.531 6.994-3.522 7.579-7.433.312-2.09-.196-4.33-1.385-6.112-.38-.569-.601-.799-.829-.859-.542-.144-1.064.36-.922.891.025.092.131.285.236.428.81 1.101 1.252 2.175 1.419 3.452a7.244 7.244 0 0 1-4.35 7.621c-.827.354-1.603.523-2.548.555-.823.027-1.326-.022-2.013-.195C7.011 20.214 4.76 17.339 4.76 14c0-1.595.492-3.056 1.481-4.4.31-.422.34-.744.098-1.064-.177-.233-.555-.341-.839-.238'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUploadCircle);
export default ForwardRef;
