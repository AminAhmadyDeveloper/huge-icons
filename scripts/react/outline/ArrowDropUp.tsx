import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowDropUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.284 6.322a2.83 2.83 0 0 0-1.384.882c-.165.195-3.738 6.286-3.916 6.677-.167.366-.229.666-.229 1.119-.001.497.063.773.284 1.22.177.36.406.653.701.899.25.207.842.498 1.16.568.19.042 1.043.053 4.12.053 4.352 0 4.081.017 4.72-.298a2.548 2.548 0 0 0 1.221-1.222c.221-.447.285-.723.284-1.22 0-.464-.063-.76-.24-1.14-.194-.415-3.717-6.422-3.893-6.637a2.764 2.764 0 0 0-1.411-.903 3.182 3.182 0 0 0-1.417.002m1.245 1.516c.105.05.258.158.34.241.164.163 3.731 6.238 3.833 6.526.211.599-.13 1.33-.724 1.552-.224.084-.246.085-4.052.074L8.1 16.22l-.175-.093c-.544-.291-.823-.966-.627-1.522.061-.173 3.509-6.112 3.704-6.378.139-.192.364-.359.598-.443.248-.09.68-.064.929.054'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDropUp);
export default ForwardRef;
