import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoadLocation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.42 2.044c-.542.077-1.215.347-1.72.69-.481.326-1.026.962-1.309 1.526-.466.931-.515 2.037-.148 3.3.413 1.417 1.095 2.626 1.974 3.5.694.69 1.166.938 1.783.938.565 0 1.062-.24 1.649-.795 1.166-1.103 2.136-3.097 2.316-4.763a3.991 3.991 0 0 0-1.143-3.262 4.036 4.036 0 0 0-3.402-1.134m1.112 2.558c.575.215.957.773.957 1.398 0 .633-.379 1.18-.977 1.407-.314.119-.849.094-1.153-.056a1.677 1.677 0 0 1-.71-.71c-.098-.198-.109-.265-.109-.641s.011-.443.109-.641a1.506 1.506 0 0 1 1.883-.757M11.7 6.316c-.384.177-.46.374-.459 1.193.001.684.04.852.244 1.039a.746.746 0 0 0 1.199-.248c.062-.134.074-.262.074-.8s-.012-.666-.074-.8c-.181-.392-.607-.558-.984-.384m.149 4.445a.825.825 0 0 0-.524.409c-.076.157-.085.244-.085.836 0 .615.006.674.093.838a.755.755 0 0 0 1.334 0c.087-.164.093-.222.093-.844s-.006-.68-.093-.844c-.152-.287-.516-.463-.818-.395m-.149 4.555c-.384.177-.46.374-.459 1.193.001.684.04.852.244 1.039a.746.746 0 0 0 1.199-.248c.062-.134.074-.262.074-.8s-.012-.666-.074-.8c-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadLocation);
export default ForwardRef;
