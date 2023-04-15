import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 4.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v9.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.394.08.523.083 4.163.083 4.125 0 3.956.01 4.26-.241.079-.065.186-.204.237-.309.088-.177.096-.254.12-1.13.031-1.087.086-1.383.37-1.983.232-.489.459-.818.801-1.16a4.263 4.263 0 0 1 1.865-1.062c.318-.083.452-.089 2.278-.111 1.93-.024 1.941-.024 2.13-.118.105-.051.244-.158.31-.238.249-.303.244-.228.231-3.393l-.012-2.875-.106-.385a4.03 4.03 0 0 0-1.604-2.283 5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m.907 3.023c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299A.984.984 0 0 1 5.3 7.298a.977.977 0 0 1 1.04-.232m6.043 2.977c.802.147 1.456.829 1.584 1.652C14.153 12.894 13.209 14 12 14a2.016 2.016 0 0 1-1.967-1.695c-.1-.642.099-1.244.563-1.709.489-.488 1.102-.678 1.787-.553m4.877 5.863c-.179.095-.304.219-.365.363a.974.974 0 0 0-.013.597c.024.062.27.342.548.623l.506.511-.506.511c-.278.281-.524.561-.548.623-.054.143-.054.429.001.573.057.154.23.331.386.398.172.074.466.07.623-.009.07-.035.349-.282.618-.549l.49-.486.49.486c.269.267.548.514.618.549a.853.853 0 0 0 .649-.006.75.75 0 0 0 .392-.545c.043-.373.008-.436-.56-1.013l-.524-.533.505-.511c.278-.28.524-.56.548-.622a1.025 1.025 0 0 0-.001-.573c-.138-.365-.657-.565-1.009-.389-.07.035-.349.282-.618.549l-.49.486-.49-.486c-.269-.267-.548-.514-.618-.549-.162-.081-.476-.08-.632.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyRemove);
export default ForwardRef;
