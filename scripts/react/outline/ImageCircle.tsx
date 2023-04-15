import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgImageCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.31 1.283a10.67 10.67 0 0 0-6.63 2.856C2.834 5.865 1.707 8.048 1.334 10.62c-.095.663-.096 2.054-.001 2.74a11.063 11.063 0 0 0 2.244 5.32c.305.387 1.356 1.438 1.743 1.743a11.058 11.058 0 0 0 5.32 2.243c.609.083 1.993.094 2.58.02 1.712-.217 3.348-.816 4.701-1.72.667-.445 1.044-.755 1.653-1.357 1.675-1.656 2.701-3.695 3.073-6.109.115-.744.124-2.159.019-2.88-.374-2.57-1.481-4.721-3.326-6.464a10.788 10.788 0 0 0-5.683-2.773c-.354-.055-1.615-.152-1.777-.137-.033.003-.29.02-.57.037m2.09 1.576c3.629.562 6.62 3.254 7.536 6.781.195.751.264 1.258.292 2.138l.024.758-.256-.184c-1.984-1.42-2.106-1.496-2.736-1.708a4.723 4.723 0 0 0-1.555-.244c-.737.001-1.348.131-1.976.421-.572.264-.934.556-3.05 2.461a226.679 226.679 0 0 1-2.354 2.102 3.217 3.217 0 0 1-3.458.4c-.401-.198-2.908-1.979-2.952-2.097-.148-.403-.187-2.248-.063-3.047A9.287 9.287 0 0 1 8.64 3.386c.737-.291 1.519-.475 2.56-.601.314-.039 1.798.011 2.2.074M8.656 6.281a2.752 2.752 0 0 0-2.112 1.496c-.209.426-.28.737-.28 1.223 0 .485.071.797.279 1.221a2.804 2.804 0 0 0 1.777 1.444c.351.096 1.01.095 1.36 0 .784-.215 1.461-.773 1.798-1.482.188-.396.258-.716.258-1.183 0-.657-.175-1.169-.575-1.688a2.78 2.78 0 0 0-2.505-1.031m.881 1.597c.25.122.463.334.586.585.14.284.139.791-.001 1.076-.459.932-1.79.932-2.243 0-.115-.236-.152-.655-.079-.885.12-.378.42-.694.791-.835.232-.089.705-.059.946.059m7.983 4.102c.479.115.927.38 2.2 1.3.671.485 1.226.908 1.233.941.02.093-.183.758-.379 1.239a9.03 9.03 0 0 1-2.005 3.035A9.09 9.09 0 0 1 12 21.24a9.197 9.197 0 0 1-4.784-1.322c-1.326-.801-2.554-2.08-3.317-3.456l-.155-.278.238.172c.857.62 1.221.823 1.834 1.024a4.738 4.738 0 0 0 4.212-.644c.136-.097 1.18-1.016 2.32-2.042a245.65 245.65 0 0 1 2.301-2.057c.42-.352.92-.586 1.491-.7.34-.067 1.007-.046 1.38.043'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageCircle);
export default ForwardRef;
