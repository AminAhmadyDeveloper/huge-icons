import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGpsOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278a.883.883 0 0 0-.481.374c-.061.112-.072.274-.083 1.268-.008.748.002 1.191.031 1.288.09.304.413.55.722.55s.632-.246.722-.55c.029-.097.039-.54.031-1.288-.012-1.064-.018-1.149-.095-1.279a.807.807 0 0 0-.847-.363m-9.004 1.01c-.375.083-.605.482-.518.902.038.181.118.269 1.791 1.95L5.832 6.9l-.199.26a8.034 8.034 0 0 0-1.535 3.629l-.068.446-1.128.012-1.128.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.097.027.564.045 1.202.045h1.043l.089.545A7.904 7.904 0 0 0 6.2 17.494a7.958 7.958 0 0 0 4.71 2.428l.33.047v1.046c0 .639.018 1.107.045 1.204.059.213.293.441.513.5.4.108.812-.12.92-.51.024-.085.042-.599.042-1.194v-1.046l.33-.047a7.88 7.88 0 0 0 2.416-.742c.489-.238 1.121-.632 1.452-.904l.141-.117 1.741 1.739c1.192 1.191 1.787 1.759 1.889 1.801.586.242 1.184-.315.991-.924-.04-.126-.707-.814-3.588-3.699l-3.539-3.544.099-.197c.219-.431.288-.752.288-1.335 0-.453-.015-.588-.093-.84A3.06 3.06 0 0 0 12.9 9.132c-.283-.095-.384-.107-.88-.109-.605-.003-.916.062-1.355.285l-.197.099-3.544-3.54C3.91 2.857 3.359 2.324 3.24 2.301l-.2-.039a.841.841 0 0 0-.233.026m10.444 12.421c-.426.202-.73.267-1.251.267-.559 0-.837-.066-1.36-.323-.321-.157-.436-.242-.742-.55-.609-.612-.875-1.253-.874-2.103.001-.514.064-.81.266-1.253l.124-.272 2.054 2.052 2.054 2.053-.271.129m6.449-3.395a.747.747 0 0 0 .029 1.384c.122.051.345.062 1.24.062.672 0 1.152-.017 1.25-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.183-.011c-1.088-.009-1.196-.004-1.343.065'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGpsOff);
export default ForwardRef;