import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMailFail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.811 2.278a.752.752 0 0 0-.53.926c.039.147.139.269.602.737l.556.561-.522.519c-.572.568-.677.723-.677.999 0 .537.53.886 1.031.678.089-.036.366-.277.69-.6l.54-.538.5.503c.548.552.704.657.979.657a.73.73 0 0 0 .74-.74c0-.275-.105-.431-.657-.979l-.503-.5.536-.54c.295-.298.565-.599.6-.669.122-.244.065-.603-.131-.826-.108-.123-.351-.226-.533-.225-.284.001-.461.12-1.011.674l-.519.524-.541-.534c-.297-.294-.577-.553-.621-.575a.97.97 0 0 0-.529-.052M5.698 11.315a.779.779 0 0 0-.416.476c-.062.222-.052.333.048.531.077.153.268.312 1.35 1.129 1.803 1.361 2.155 1.522 3.32 1.522s1.517-.161 3.32-1.522c1.082-.817 1.273-.976 1.35-1.129.1-.198.11-.309.048-.531-.114-.41-.593-.655-.973-.496-.073.031-.679.466-1.349.967-1.489 1.116-1.688 1.217-2.396 1.217s-.907-.101-2.396-1.217c-.67-.501-1.276-.936-1.349-.967a.672.672 0 0 0-.557.02'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailFail);
export default ForwardRef;
