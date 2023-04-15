import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVideoMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.302 4.302 0 0 0-1.702.669C2.963 3.234 2.4 4.03 2.134 4.968c-.096.342-.106.45-.124 1.322l-.018.95h3.629l1.707-2.39 1.871-2.62.165-.23-1.852.005c-1.019.003-1.954.02-2.079.038M9.369 4.57a572.49 572.49 0 0 0-1.864 2.62c-.024.04.596.05 3.043.05h3.073l1.707-2.39 1.871-2.62.165-.23h-6.161L9.369 4.57m7.942.08a548.84 548.84 0 0 0-1.806 2.54c-.024.04.634.05 3.233.05H22v-.775c0-1.083-.097-1.583-.441-2.275a3.955 3.955 0 0 0-1.294-1.479c-.246-.168-.888-.484-1.071-.526-.101-.023-.184.085-1.883 2.465M2.01 13.71l.012 4.95.11.378c.441 1.507 1.585 2.572 3.094 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.403 3.098-2.905l.108-.392.011-4.93.011-4.93H1.998l.012 4.95m13.378.657a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.064.092-.18.204-.257.249-.137.081-.186.082-3.359.082s-3.222-.001-3.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 1.539-.028 3.268-.024l3.143.006.162.107'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVideoMinus);
export default ForwardRef;
