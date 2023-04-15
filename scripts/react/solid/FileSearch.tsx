import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.433 2.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.385.079.537.083 2.909.083 1.643 0 2.605-.015 2.803-.045l.302-.045.001-1.985c.001-2.153.025-2.577.179-3.161.122-.463.498-1.241.775-1.605.255-.336.797-.857 1.121-1.076a5.034 5.034 0 0 1 2.228-.802c.218-.022 1.29-.039 2.382-.04l1.986-.001.046-.33c.033-.235.042-1.368.034-3.93l-.013-3.6-.106-.385a4.032 4.032 0 0 0-1.604-2.283 5.079 5.079 0 0 0-1.311-.599l-.338-.091-5.48-.007c-3.014-.003-5.582.009-5.707.028m6.887 3.323c1.178.298 2.107 1.279 2.362 2.494.078.372.059 1.062-.04 1.44a3.227 3.227 0 0 1-2.261 2.319c-.801.232-1.611.151-2.377-.237l-.216-.109-.664.659c-.365.363-.722.689-.792.724-.254.127-.673.048-.857-.162a.765.765 0 0 1-.133-.805c.038-.093.311-.399.721-.811l.66-.662-.141-.298c-.227-.48-.31-.862-.31-1.418.002-.732.183-1.315.584-1.876a3.242 3.242 0 0 1 3.464-1.258m-1.255 1.436c-.463.116-.935.519-1.157.988-.12.253-.128.298-.128.71s.008.457.128.71c.178.376.474.677.847.861.293.145.313.149.745.149s.452-.004.745-.149c.373-.184.669-.485.847-.861.12-.253.128-.298.128-.71s-.008-.457-.128-.71a1.838 1.838 0 0 0-.838-.857c-.261-.129-.331-.145-.663-.157a2.662 2.662 0 0 0-.526.026m4.343 8.003c-.332.055-.884.279-1.194.485a3.828 3.828 0 0 0-1.013 1.064 4.138 4.138 0 0 0-.294.655l-.126.371-.013 1.54a93.7 93.7 0 0 0 0 1.9l.012.36 3.153-3.14c1.733-1.727 3.17-3.172 3.191-3.21.037-.066-.057-.07-1.733-.065-.974.002-1.866.02-1.983.04'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileSearch);
export default ForwardRef;