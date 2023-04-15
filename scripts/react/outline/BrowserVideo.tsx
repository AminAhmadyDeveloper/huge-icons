import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBrowserVideo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.056-.446.056-12.65 0-13.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.477-.047-12.482-.045-12.963.002m13.501 1.628c.541.188.892.408 1.29.805.595.596.902 1.274.945 2.089l.023.435H2.748l.023-.435a3.216 3.216 0 0 1 .436-1.46A3.826 3.826 0 0 1 4.214 3.29c.31-.205.861-.43 1.194-.486.119-.02 3.057-.033 6.712-.03l6.5.006.374.131m2.237 10.279-.011 5.43-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38-.011-5.43-.011-5.43h18.484l-.011 5.43M6.479 10.955a1.774 1.774 0 0 0-1.034.874c-.191.378-.205.529-.205 2.171s.014 1.793.205 2.171a1.76 1.76 0 0 0 2.038.885c.119-.036.91-.412 1.757-.837 1.368-.687 1.564-.797 1.752-.986a1.73 1.73 0 0 0 0-2.466c-.188-.189-.384-.299-1.752-.986-.847-.425-1.638-.801-1.757-.837a1.986 1.986 0 0 0-1.004.011m7.332.323a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.22.062 4.218.062 4.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.143-.007c-1.179-.003-2.201.008-2.272.025M8.45 13.064c.776.387 1.442.732 1.48.766.09.08.09.26 0 .34-.096.085-2.875 1.47-2.95 1.47-.033 0-.096-.036-.14-.08-.077-.077-.08-.133-.08-1.56s.003-1.483.08-1.56c.044-.044.107-.08.14-.08.033 0 .695.317 1.47.704m5.361 2.214a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.22.062 4.218.062 4.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.143-.007c-1.179-.003-2.201.008-2.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBrowserVideo);
export default ForwardRef;
