import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAddRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.056-.446.056-12.65 0-13.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.477-.047-12.482-.045-12.963.002m13.501 1.628c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374v13.24l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38V5.38L2.912 5c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 4.214 3.29c.31-.205.861-.43 1.194-.486.119-.02 3.057-.033 6.712-.03l6.5.006.374.131m-7.183 4.367a.883.883 0 0 0-.481.374c-.063.115-.071.3-.082 1.856l-.011 1.728-1.732.012-1.731.012-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.104.029.729.045 1.809.045h1.65v1.65c0 1.08.016 1.705.045 1.809.059.213.293.441.513.5.4.108.812-.12.92-.51.026-.091.042-.787.042-1.799v-1.65h1.65c1.08 0 1.705-.016 1.809-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.731-.012-1.732-.012-.011-1.728c-.012-1.658-.015-1.734-.094-1.867a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAddRectangle);
export default ForwardRef;
