import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCameraVideoDash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 4.042a4.328 4.328 0 0 0-1.702.67c-.775.527-1.335 1.322-1.602 2.277l-.109.391v9.24l.111.397c.347 1.242 1.226 2.235 2.389 2.698.165.066.486.157.712.204.404.082.491.083 3.9.072l3.488-.012.391-.107c1.504-.414 2.597-1.58 2.907-3.103.083-.405.084-.48.073-4.9L15.98 7.38l-.107-.385c-.262-.949-.829-1.756-1.604-2.283a5.06 5.06 0 0 0-1.311-.599c-.337-.089-.353-.09-3.818-.097-1.914-.004-3.582.007-3.707.026M19.68 7.085a1.84 1.84 0 0 0-.56.18c-.312.155-.521.347-1.305 1.2l-.335.364v6.342l.335.364c.786.856.993 1.045 1.305 1.198.422.207.796.26 1.221.173.819-.167 1.397-.704 1.598-1.484.052-.205.061-.693.061-3.408 0-2.16-.014-3.238-.044-3.382-.212-1.015-1.19-1.68-2.276-1.547m-8.307 4.27c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.136.08-.194.082-2.359.082s-2.223-.002-2.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.055-1.013.431-1.132.069-.017 1.088-.027 2.265-.024l2.14.007.153.095'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraVideoDash);
export default ForwardRef;
