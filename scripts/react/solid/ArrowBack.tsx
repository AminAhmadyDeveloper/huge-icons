import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowBack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.812 4.277c-.155.039-.275.126-2.571 1.854-1.281.964-1.843 1.41-1.9 1.509-.108.188-.108.532 0 .72.057.099.66.576 2.06 1.63 2.3 1.733 2.276 1.716 2.477 1.75.624.105 1.087-.591.753-1.134-.051-.082-.521-.463-1.225-.991l-1.142-.857 4.178.011 4.178.011.374.131c.541.188.892.408 1.29.805.398.399.618.751.804 1.29.124.359.129.399.129.994s-.005.635-.129.994a3.08 3.08 0 0 1-.804 1.29c-.403.402-.77.632-1.293.81l-.371.126-5.423.02-5.423.02-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.213.06 10.297.063 10.767.004a4.948 4.948 0 0 0 1.967-.688c.47-.289 1.227-1.046 1.516-1.516a4.765 4.765 0 0 0 0-5.025c-.246-.394-.802-1.001-1.184-1.291-.369-.281-1.145-.656-1.611-.779a6.036 6.036 0 0 0-.78-.139c-.222-.022-2.104-.039-4.292-.04L7.267 7.24l1.141-.856c.795-.596 1.169-.903 1.236-1.01a.79.79 0 0 0 .013-.734.799.799 0 0 0-.845-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowBack);
export default ForwardRef;
