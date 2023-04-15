import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCalculator = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.442.056 8.654.056 9.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.056-.446.056-12.65 0-13.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.473-.046-8.485-.045-8.963.002m9.501 1.628c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374v13.24l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H7.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 4.912 19l-.132-.38V5.38L4.912 5c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 6.214 3.29c.309-.205.86-.43 1.194-.486.118-.02 2.212-.033 4.712-.03l4.5.006.374.131M7.811 5.278a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.224.063 8.214.063 8.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-4.143-.006c-2.279-.004-4.201.007-4.272.024m0 4c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916m4 0c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916m4 0c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916m-8 4c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916m4 0c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916m4 0c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916m-8 4c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916m4 0c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916m4 0c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalculator);
export default ForwardRef;
