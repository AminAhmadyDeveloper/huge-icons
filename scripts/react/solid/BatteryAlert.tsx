import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBatteryAlert = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.811 1.278a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.22.062 4.218.062 4.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.143-.007c-1.179-.003-2.201.008-2.272.025M7.58 4.047c-.721.138-1.381.801-1.536 1.545-.062.3-.062 14.516 0 14.816.157.75.798 1.391 1.548 1.548.297.062 8.519.062 8.816 0a2.062 2.062 0 0 0 1.548-1.548c.062-.3.062-14.516 0-14.816-.159-.762-.818-1.411-1.573-1.549-.304-.055-8.51-.052-8.803.004m4.825 4.334c.08.051.188.162.24.246l.095.153v4.453l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172V8.78l.093-.149c.233-.375.691-.484 1.052-.25m0 7c.08.051.188.162.24.246.091.146.095.184.095.88v.726l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172v-.726c0-.691.005-.734.093-.876.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryAlert);
export default ForwardRef;
