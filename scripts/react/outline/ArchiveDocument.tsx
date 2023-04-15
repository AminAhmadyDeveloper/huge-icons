import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArchiveDocument = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.444.056 10.652.056 11.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.056-.446.056-12.65 0-13.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.475-.047-10.484-.045-10.963.002m11.501 1.628c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374.012 2.93.011 2.93H3.757l.011-2.93.012-2.93.132-.38c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 5.214 3.29c.31-.205.861-.43 1.194-.486.119-.02 2.634-.033 5.712-.03l5.5.006.374.131M9.811 6.278a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.22.062 4.218.062 4.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.143-.007c-1.179-.003-2.201.008-2.272.025m10.421 9.412-.012 2.93-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H6.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 3.912 19l-.132-.38-.012-2.93-.011-2.93h16.486l-.011 2.93m-10.421.588a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.22.062 4.218.062 4.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.143-.007c-1.179-.003-2.201.008-2.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArchiveDocument);
export default ForwardRef;
