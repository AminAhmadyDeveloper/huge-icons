import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTable = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.493 2.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.444-.056 10.652 0 11.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.444.056 10.652.056 11.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.056-.444.056-10.652 0-11.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.475-.047-10.484-.045-10.963.002M11.24 5.92v2.16H3.751l.017-.85c.017-.832.02-.858.147-1.23.071-.209.202-.504.292-.655A3.826 3.826 0 0 1 5.214 4.29c.31-.206.862-.43 1.194-.485.117-.02 1.252-.038 2.522-.04l2.31-.005v2.16m6.754-2.009c.541.188.892.408 1.29.805.399.4.619.753.803 1.29.125.365.128.394.145 1.224l.017.85H12.76V3.756l2.43.012 2.43.012.374.131M11.24 12v2.44H3.76V9.56h7.48V12m9 0v2.44h-7.48V9.56h7.48V12m-9 6.081v2.162l-2.43-.012-2.43-.011-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.033 3.033 0 0 1 3.915 18c-.127-.372-.13-.398-.147-1.23l-.017-.85h7.489v2.161m8.992-1.311c-.017.83-.02.859-.145 1.224-.184.537-.404.89-.803 1.29-.403.402-.77.632-1.293.81l-.371.126-2.43.011-2.43.012V15.92h7.489l-.017.85'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTable);
export default ForwardRef;
