import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTimeMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.679.679 1.301 1.042 2.165 1.263.597.152.915.162 4.754.15 3.684-.012 3.722-.013 3.88-.096.502-.262.519-.997.03-1.284l-.19-.112-3.96-.02-3.96-.02-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38V5.38L2.912 5c.186-.535.404-.883.804-1.284.401-.4.749-.618 1.284-.804l.38-.132h13.24l.374.131c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374.02 3.96c.011 2.254.036 3.994.057 4.04a.758.758 0 0 0 .712.469.772.772 0 0 0 .647-.389c.083-.158.084-.196.096-3.88.008-2.374-.003-3.851-.029-4.081a4.624 4.624 0 0 0-1.256-2.722c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.477-.047-12.482-.045-12.963.002m6.318 3.995a.883.883 0 0 0-.481.374c-.064.117-.071.322-.082 2.308l-.012 2.18-.242.139c-.787.453-1.187 1.487-.898 2.321l.062.18-.875.88c-.481.484-.906.941-.943 1.016-.103.205-.068.554.075.74.211.278.624.386.917.24.07-.035.525-.459 1.01-.941l.881-.877.179.064c.448.161 1.056.1 1.533-.153.707-.374 1.151-1.246 1.031-2.021a2.038 2.038 0 0 0-.577-1.142 2.246 2.246 0 0 0-.439-.338l-.187-.092-.012-2.188c-.011-2.122-.013-2.192-.093-2.327a.807.807 0 0 0-.847-.363m4 12a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.143-.006c-1.729-.004-3.201.007-3.272.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeMinus);
export default ForwardRef;