import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.023.179-.041.846-.041 1.481 0 1.085.004 1.154.07 1.127.039-.016.379-.039.757-.05l.686-.021.015-1.304.014-1.305.131-.38c.184-.534.402-.882.803-1.284A3.064 3.064 0 0 1 11 2.913c.365-.125.404-.13 1-.13.595 0 .635.005.994.129a3.08 3.08 0 0 1 1.29.804c.398.399.618.751.804 1.29l.13.374.014 1.305.015 1.304.686.021c.378.011.719.034.757.05.066.027.07-.042.07-1.127 0-.635-.018-1.302-.041-1.481a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.442-.043-.499-.043-.963.002m-.009 11.78c-.333.09-.6.252-.885.536-.41.411-.599.853-.599 1.401s.189.99.599 1.401c.292.291.553.447.902.538a2.06 2.06 0 0 0 1.436-.17c.261-.139.693-.571.832-.832a2.033 2.033 0 0 0 0-1.874c-.139-.261-.571-.693-.832-.832a2.11 2.11 0 0 0-1.453-.168'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLock);
export default ForwardRef;