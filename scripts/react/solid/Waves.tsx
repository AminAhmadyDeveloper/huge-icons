import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWaves = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m5.687 5.304c.707.194 1.298.78 1.544 1.533.066.201.074.47.094 3.04.02 2.517.029 2.833.088 2.94.302.551 1.164.479 1.349-.112.022-.071.058-.282.08-.47.11-.943.684-1.641 1.585-1.929.26-.083.354-.089 1.32-.089 1.025 0 1.042.001 1.193.095.242.151.36.363.36.648 0 .2-.019.267-.117.406-.223.317-.266.328-1.376.351-.808.016-1.001.032-1.1.086-.252.138-.361.344-.398.754-.057.629-.254 1.069-.662 1.484-.394.4-1.037.675-1.58.675-.276 0-.709-.112-1.02-.265-.52-.254-.945-.765-1.144-1.374-.066-.2-.074-.472-.094-3.04-.024-3.039-.016-2.936-.229-3.129a.91.91 0 0 0-.513-.191c-.161 0-.4.089-.513.192-.168.152-.215.327-.241.908-.029.653-.092.954-.284 1.342a2.791 2.791 0 0 1-1.782 1.464c-.212.06-.41.073-1.08.074-.933 0-.996-.017-1.216-.331-.098-.138-.117-.206-.117-.402a.7.7 0 0 1 .345-.64c.158-.104.179-.107.945-.128.903-.024 1.03-.059 1.339-.377.264-.272.328-.486.356-1.182.017-.422.046-.651.105-.84.371-1.174 1.567-1.821 2.763-1.493'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWaves);
export default ForwardRef;
