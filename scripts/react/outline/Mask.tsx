import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMask = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.66 5.278A2.76 2.76 0 0 0 1.352 7.26c-.092.319-.092.33-.092 2.78 0 2.688.006 2.771.248 3.48a4.764 4.764 0 0 0 3.644 3.143l.371.068.196.414c.359.763.787 1.263 1.761 2.06.76.622 1.348.98 2.094 1.274 1.262.497 2.784.579 4.152.224.998-.26 1.818-.699 2.794-1.498.98-.803 1.382-1.271 1.745-2.03l.213-.444.371-.068a4.762 4.762 0 0 0 3.643-3.143c.242-.709.248-.792.248-3.48 0-2.45 0-2.461-.092-2.78-.207-.719-.684-1.309-1.368-1.692-.714-.4-1.846-.4-2.56 0-.678.38-1.166.98-1.359 1.672-.059.213-.091.476-.109.91a8.07 8.07 0 0 1-.036.61c-.006 0-.764-.375-1.684-.833C13.384 6.858 13.054 6.748 12 6.748c-1.054 0-1.384.11-3.532 1.179-.92.458-1.678.833-1.684.833a8.07 8.07 0 0 1-.036-.61c-.028-.686-.112-1.066-.316-1.43-.575-1.026-1.636-1.578-2.772-1.442m.794 1.563c.29.109.596.415.705.705.079.212.081.297.081 3.916 0 2.321-.014 3.698-.038 3.698a2.14 2.14 0 0 1-.292-.092c-.472-.171-.789-.38-1.194-.784-.426-.426-.641-.765-.826-1.304l-.11-.32v-2.52c0-2.509 0-2.521.087-2.682.157-.293.484-.573.773-.661.198-.06.592-.039.814.044m16 0c.292.11.596.415.707.71.081.216.082.276.071 2.665l-.012 2.444-.11.32c-.184.538-.399.878-.826 1.304-.405.404-.722.613-1.194.784a2.091 2.091 0 0 1-.293.092c-.025 0-.035-1.342-.028-3.77l.011-3.77.087-.162c.157-.293.484-.573.773-.661.198-.06.592-.039.814.044m-8.049 1.417c.145.013.361.05.48.083.118.034 1.147.523 2.285 1.089l2.07 1.028v2.513c0 2.73-.006 2.824-.229 3.38a3.601 3.601 0 0 1-.675 1.026c-.277.28-1.146.997-1.463 1.208a6.006 6.006 0 0 1-1.341.631c-.56.166-.844.204-1.532.204-.908 0-1.474-.121-2.225-.477-.468-.222-.791-.435-1.335-.882-.844-.694-1.217-1.136-1.457-1.725-.215-.531-.223-.646-.223-3.365v-2.513L8.83 9.43c1.139-.566 2.171-1.057 2.295-1.091.237-.065.798-.134.935-.115.044.006.199.021.345.034'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMask);
export default ForwardRef;
