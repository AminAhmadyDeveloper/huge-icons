import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPlaylists = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.442-.056 8.654 0 9.096.137 1.095.556 1.958 1.339 2.755.722.736 1.482 1.16 2.419 1.348l.258.052.052.258c.188.937.612 1.697 1.348 2.419.797.783 1.66 1.202 2.755 1.339.442.056 8.654.056 9.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.056-.442.056-8.654 0-9.096a4.886 4.886 0 0 0-.688-1.962c-.246-.394-.802-1.001-1.184-1.291-.411-.313-1.146-.659-1.687-.795l-.459-.116-.051-.254a4.63 4.63 0 0 0-1.218-2.297c-.445-.464-.762-.697-1.332-.978a4.585 4.585 0 0 0-1.644-.478c-.473-.046-8.485-.045-8.963.002m9.501 1.628c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374v9.24l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 15l-.132-.38V5.38L2.912 5c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 4.214 3.29c.309-.205.86-.43 1.194-.486.118-.02 2.212-.033 4.712-.03l4.5.006.374.131M9.811 4.278a.887.887 0 0 0-.481.374c-.064.117-.071.335-.081 2.61l-.011 2.482-.309-.153c-.474-.233-.861-.319-1.429-.319-.96 0-1.717.33-2.387 1.04-.632.67-.959 1.669-.84 2.563.101.762.399 1.364.943 1.909 1.137 1.136 2.8 1.287 4.144.376.459-.312.927-.898 1.143-1.431.248-.614.234-.374.247-4.299.013-3.505.015-3.59.089-3.59.157 0 .753.215 1.124.404a4.257 4.257 0 0 1 2.277 3.591c.001.324.068.523.236.69a.742.742 0 0 0 1.247-.337c.091-.337-.039-1.305-.267-1.988a5.748 5.748 0 0 0-3.673-3.66c-.622-.203-1.651-.34-1.972-.262m9.277 2.667c.466.167.819.395 1.196.771.397.398.617.749.805 1.29l.131.374v9.24l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H9.38l-.371-.126a3.227 3.227 0 0 1-1.235-.744 3.325 3.325 0 0 1-.912-1.5l-.027-.09h3.693c3.775 0 4.065-.01 4.652-.16.858-.219 1.482-.584 2.159-1.261.677-.677 1.042-1.301 1.261-2.159.15-.587.16-.877.16-4.649 0-2.03.008-3.691.018-3.691.009 0 .149.047.31.105M8.254 10.933c.363.18.662.485.838.857.12.253.128.298.128.71s-.008.457-.128.71a1.828 1.828 0 0 1-.847.861c-.293.145-.313.149-.745.149s-.452-.004-.745-.149a1.828 1.828 0 0 1-.847-.861c-.12-.253-.128-.298-.128-.71s.008-.457.128-.71c.159-.337.462-.662.768-.825.32-.17.483-.204.915-.189.332.012.402.028.663.157'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlaylists);
export default ForwardRef;
