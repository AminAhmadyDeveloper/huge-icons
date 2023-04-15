import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLocationUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.32 2.025c-2.289.21-4.214 1.105-5.768 2.682a7.978 7.978 0 0 0-1.088 1.327c-1.257 1.9-1.735 4.239-1.3 6.366.302 1.475 1.122 3.241 2.23 4.8 1.127 1.586 2.619 3.04 3.99 3.888.954.59 1.877.912 2.616.912 2.088 0 5.134-2.405 7.194-5.68.159-.253.458-.802.665-1.22 1.093-2.21 1.369-3.929.959-5.969a8.84 8.84 0 0 0-1.573-3.511c-.367-.497-1.3-1.431-1.805-1.806a9.069 9.069 0 0 0-4.14-1.715c-.394-.06-1.629-.107-1.98-.074m1.281 4.017a5.2 5.2 0 0 1 2.223.839c.405.271 1.024.89 1.295 1.295.665.994.965 2.155.85 3.294a4.729 4.729 0 0 1-.486 1.712c-.707 1.446-1.989 2.427-3.583 2.743-.368.073-1.432.073-1.8 0-1.594-.316-2.876-1.297-3.583-2.743A4.982 4.982 0 0 1 7.18 9.68c.129-.484.503-1.247.814-1.664a5.027 5.027 0 0 1 4.607-1.974m-1.108 1.55a1.513 1.513 0 0 0-.972 1.636c.197 1.208 1.669 1.687 2.532.825a1.493 1.493 0 0 0-.409-2.403c-.292-.143-.837-.17-1.151-.058m-.187 3.991c-.531.129-1.049.5-1.369.982-.171.257-.412.782-.416.904-.002.074.685.52 1.097.713.507.237.827.309 1.382.309.555 0 .875-.072 1.382-.309.392-.184 1.098-.638 1.098-.706 0-.109-.262-.678-.424-.922a2.367 2.367 0 0 0-1.38-.973c-.321-.075-1.054-.074-1.37.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationUser);
export default ForwardRef;
