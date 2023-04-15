import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSadRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.056-.446.056-12.65 0-13.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.477-.047-12.482-.045-12.963.002m13.501 1.628c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374v13.24l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38V5.38L2.912 5c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 4.214 3.29c.31-.205.861-.43 1.194-.486.119-.02 3.057-.033 6.712-.03l6.5.006.374.131M7.687 8.283c-.31.054-.619.215-.887.463a1.712 1.712 0 0 0-.002 2.509c.693.661 1.711.661 2.404 0 .814-.777.703-2.058-.234-2.704a1.844 1.844 0 0 0-1.281-.268m8 0c-.31.054-.619.215-.887.463a1.712 1.712 0 0 0-.002 2.509c.693.661 1.711.661 2.404 0 .814-.777.703-2.058-.234-2.704a1.844 1.844 0 0 0-1.281-.268m-7.52 1.543c.152.138.045.414-.16.414a.243.243 0 0 1-.181-.407c.083-.091.244-.094.341-.007m8 0c.152.138.045.414-.16.414a.243.243 0 0 1-.181-.407c.083-.091.244-.094.341-.007m-4.707 4.455a5.558 5.558 0 0 0-2.04.584c-.827.407-1.138.712-1.138 1.115 0 .18.108.446.224.548.192.171.595.246.787.147a6.93 6.93 0 0 0 .355-.222 4.451 4.451 0 0 1 1.267-.564c.345-.093.458-.103 1.085-.103s.74.01 1.085.103c.447.121.908.325 1.231.545.341.233.463.286.652.285.191-.001.456-.107.56-.225a.9.9 0 0 0 .191-.523c-.002-.388-.311-.694-1.099-1.09a5.948 5.948 0 0 0-3.16-.6'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSadRectangle);
export default ForwardRef;