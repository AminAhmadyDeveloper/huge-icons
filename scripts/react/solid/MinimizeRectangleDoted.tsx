import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMinimizeRectangleDoted = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.64 1.266a4.8 4.8 0 0 0-1.833.533c-.507.262-.843.52-1.274.978a4.568 4.568 0 0 0-1.148 2.111l-.084.352-2.68.001c-1.475.001-2.859.018-3.077.04a4.585 4.585 0 0 0-1.644.478c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.442-.056 8.654 0 9.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.442.056 8.654.056 9.096 0 1.124-.141 1.971-.56 2.791-1.38.677-.677 1.042-1.301 1.261-2.159.146-.57.16-.901.16-3.719v-2.762l.36-.088c.919-.225 1.636-.643 2.312-1.348a4.59 4.59 0 0 0 1.265-2.592c.074-.497.089-2.687.022-3.219a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.361-.036-2.484-.046-2.816-.015M11.252 7.71c.023.998.053 1.214.251 1.803.118.352.355.842.531 1.098l.12.175-2.195 2.195-2.196 2.195-.011-1.698c-.014-1.921-.003-1.855-.343-2.094-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.092.064-.204.18-.249.257-.08.136-.082.201-.093 2.771-.008 1.854.002 2.681.034 2.798a.816.816 0 0 0 .498.505c.222.062 5.216.062 5.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.701-.012-1.701-.012 2.195-2.195 2.195-2.195.175.12c.256.176.746.413 1.098.531.59.198.805.228 1.805.251l.951.022-.011 2.925-.012 2.925-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38V9.38L2.912 9c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 4.214 7.29c.31-.206.862-.43 1.194-.485.117-.02 1.474-.038 3.017-.04l2.805-.005.022.95'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMinimizeRectangleDoted);
export default ForwardRef;
