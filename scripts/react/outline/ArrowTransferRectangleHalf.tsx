import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowTransferRectangleHalf = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.579 1.279C3.458 1.47 1.763 3.011 1.333 5.14c-.069.339-.073.734-.073 6.86s.004 6.521.073 6.86c.397 1.966 1.841 3.41 3.807 3.807.339.069.734.073 6.86.073s6.521-.004 6.86-.073c1.966-.397 3.41-1.841 3.807-3.807.069-.339.073-.734.073-6.86s-.004-6.521-.073-6.86c-.39-1.929-1.778-3.349-3.703-3.788l-.384-.088-6.34-.007c-3.487-.004-6.484.006-6.661.022M18.98 2.89c.538.184.878.4 1.304.826.426.426.642.766.826 1.304l.11.32v13.32l-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H5.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V5.34l.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.501-.191.28-.186 7.248-.178l6.56.007.32.11m-5.333 4.436a.755.755 0 0 0-.366.899c.034.107.181.289.472.585l.422.43H11.11c-2.088 0-3.132.014-3.272.044-.758.163-.758 1.269 0 1.432.298.064 8.096.062 8.351-.002a.744.744 0 0 0 .526-.904c-.043-.175-.136-.28-1.151-1.305-.72-.727-1.16-1.14-1.264-1.189a.738.738 0 0 0-.653.01m-5.862 5.963c-.361.096-.594.515-.5.901.043.175.136.28 1.151 1.305.72.727 1.16 1.14 1.264 1.189a.74.74 0 0 0 1.049-.579c.035-.305-.044-.448-.502-.915l-.422-.43h3.065c2.088 0 3.132-.014 3.272-.044.758-.163.758-1.269 0-1.432-.275-.059-8.153-.054-8.377.005'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowTransferRectangleHalf);
export default ForwardRef;