import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChartBarRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.056-.446.056-12.65 0-13.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.477-.047-12.482-.045-12.963.002m13.501 1.628c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374v13.24l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38V5.38L2.912 5c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 4.214 3.29c.31-.205.861-.43 1.194-.486.119-.02 3.057-.033 6.712-.03l6.5.006.374.131M7.656 6.281a2.752 2.752 0 0 0-2.112 1.496c-.298.607-.284.406-.284 4.223 0 3.183.005 3.438.073 3.68a2.819 2.819 0 0 0 1.987 1.985c.351.096 1.01.095 1.36 0a2.822 2.822 0 0 0 1.987-1.985c.068-.243.073-.487.073-3.68 0-3.785.011-3.608-.262-4.183-.497-1.047-1.679-1.69-2.822-1.536m.881 1.597c.25.122.463.334.586.585l.097.197v6.68l-.098.199a1.25 1.25 0 0 1-2.244 0l-.098-.199-.012-3.26c-.009-2.35.001-3.305.034-3.42a1.32 1.32 0 0 1 .789-.841c.232-.089.705-.059.946.059m7.119 2.403a2.752 2.752 0 0 0-2.112 1.496c-.273.558-.284.641-.284 2.223 0 1.25.009 1.451.073 1.68a2.819 2.819 0 0 0 1.987 1.985c.351.096 1.01.095 1.36 0a2.822 2.822 0 0 0 1.987-1.985c.064-.23.073-.425.073-1.68 0-1.56-.012-1.656-.262-2.183-.497-1.047-1.679-1.69-2.822-1.536m.881 1.597c.25.122.463.334.586.585.097.197.097.2.097 1.537v1.34l-.098.199a1.25 1.25 0 0 1-2.244 0c-.097-.197-.098-.214-.11-1.459-.009-.866.001-1.31.033-1.42.107-.371.414-.698.79-.841.232-.089.705-.059.946.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartBarRectangle);
export default ForwardRef;
