import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBagSmile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.493 1.283a4.641 4.641 0 0 0-1.593.476c-.57.281-.887.514-1.332.978a4.676 4.676 0 0 0-1.246 2.426l-.049.264-.239.072C5.919 5.833 4.836 6.777 4.28 7.9c-.355.718-.354.712-.946 5.42-.525 4.174-.54 4.317-.521 4.88.014.442.043.671.119.96.473 1.809 1.88 3.13 3.737 3.509.326.066.707.071 5.351.071 4.97 0 5.002-.001 5.38-.086 1.849-.418 3.2-1.705 3.668-3.494.076-.289.105-.518.119-.96.019-.563.004-.706-.521-4.88-.575-4.567-.589-4.65-.885-5.3-.526-1.155-1.659-2.165-2.833-2.526l-.222-.069-.048-.262a4.683 4.683 0 0 0-1.246-2.426c-.445-.464-.762-.697-1.332-.978a4.585 4.585 0 0 0-1.644-.478c-.442-.043-.499-.043-.963.002m1.501 1.633c.533.179.888.399 1.29.8.376.377.604.73.771 1.196.058.161.105.301.105.31 0 .01-1.423.018-3.163.018H8.835l.027-.09a3.316 3.316 0 0 1 .909-1.496 3.002 3.002 0 0 1 1.112-.697c.449-.164.661-.195 1.237-.18.433.011.55.03.874.139m3.386 3.959c1.142.386 1.956 1.225 2.235 2.306.034.132.298 2.121.587 4.42.568 4.522.576 4.621.415 5.219-.294 1.094-1.138 1.957-2.257 2.306l-.3.094H6.94l-.3-.094c-.972-.303-1.736-.988-2.11-1.89a3.346 3.346 0 0 1-.25-1.196c0-.353 1.02-8.53 1.105-8.859a3.293 3.293 0 0 1 1.953-2.199c.557-.223.437-.217 4.762-.209l4 .007.28.095m-7.628 8.402a.765.765 0 0 0-.511.706.808.808 0 0 0 .288.591c.193.147 1.142.626 1.551.782 1.01.385 2.054.477 2.979.263.872-.202 2.291-.865 2.557-1.193.251-.31.159-.829-.188-1.059a.584.584 0 0 0-.385-.107c-.2 0-.293.035-.903.341-.972.488-1.478.639-2.147.639-.672 0-1.265-.182-2.233-.685-.555-.288-.781-.351-1.008-.278'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBagSmile);
export default ForwardRef;
