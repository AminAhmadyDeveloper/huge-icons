import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLocationMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.32 2.025c-2.289.21-4.214 1.105-5.768 2.682a7.978 7.978 0 0 0-1.088 1.327c-1.257 1.9-1.735 4.239-1.3 6.366.302 1.475 1.122 3.241 2.23 4.8 1.127 1.586 2.619 3.04 3.99 3.888.954.59 1.877.912 2.616.912 2.088 0 5.134-2.405 7.194-5.68.159-.253.458-.802.665-1.22 1.093-2.21 1.369-3.929.959-5.969a8.84 8.84 0 0 0-1.573-3.511c-.367-.497-1.3-1.431-1.805-1.806a9.069 9.069 0 0 0-4.14-1.715c-.394-.06-1.629-.107-1.98-.074m1.281 4.017a5.2 5.2 0 0 1 2.223.839c.174.116.489.384.7.595 2.163 2.164 1.901 5.699-.56 7.546-.559.419-1.333.758-2.064.903-.368.073-1.432.073-1.8 0-.675-.134-1.422-.447-1.945-.814a5.084 5.084 0 0 1-1.638-1.931 4.974 4.974 0 0 1-.337-3.5c.129-.484.503-1.247.814-1.664a5.027 5.027 0 0 1 4.607-1.974m-2.79 4.236a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.22.062 4.218.062 4.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.143-.007c-1.179-.003-2.201.008-2.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationMinus);
export default ForwardRef;
