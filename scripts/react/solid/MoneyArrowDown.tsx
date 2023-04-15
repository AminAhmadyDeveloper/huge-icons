import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 4.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v9.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.394.08.523.083 4.163.083 4.125 0 3.956.01 4.26-.241.079-.065.186-.204.237-.309.088-.177.096-.254.12-1.13.031-1.087.086-1.383.37-1.983.232-.489.459-.818.801-1.16a4.263 4.263 0 0 1 1.865-1.062c.318-.083.452-.089 2.278-.111 1.93-.024 1.941-.024 2.13-.118.105-.051.244-.158.31-.238.249-.303.244-.228.231-3.393l-.012-2.875-.106-.385a4.03 4.03 0 0 0-1.604-2.283 5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m.907 3.023c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299A.984.984 0 0 1 5.3 7.298a.977.977 0 0 1 1.04-.232m6.043 2.977c.802.147 1.456.829 1.584 1.652C14.153 12.894 13.209 14 12 14a2.016 2.016 0 0 1-1.967-1.695c-.1-.642.099-1.244.563-1.709.489-.488 1.102-.678 1.787-.553m6.428 5.235a.883.883 0 0 0-.481.374c-.062.114-.071.285-.082 1.524l-.012 1.395-.388-.38c-.46-.45-.564-.511-.88-.511-.2 0-.262.019-.405.122a.731.731 0 0 0-.278.839c.065.216 1.601 1.746 1.921 1.913.323.168.724.232 1.065.171.5-.09.633-.183 1.544-1.081.459-.453.859-.882.89-.953a.795.795 0 0 0-.038-.654c-.126-.239-.447-.415-.698-.381-.262.035-.397.123-.817.535l-.388.38-.012-1.395c-.011-1.323-.016-1.403-.094-1.535a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyArrowDown);
export default ForwardRef;