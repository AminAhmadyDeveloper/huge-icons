import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileVideo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.433 2.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.399.081.505.083 5.774.083s5.375-.002 5.774-.083a4.002 4.002 0 0 0 3.097-2.905l.108-.392.013-3.6c.008-2.562-.001-3.695-.034-3.93l-.046-.33h-2.067c-1.168 0-2.209-.018-2.393-.041a4.64 4.64 0 0 1-2.675-1.252c-.491-.462-.729-.782-1.018-1.367a4.644 4.644 0 0 1-.478-1.62c-.022-.209-.04-1.282-.04-2.385L12.24 2.09l-.353-.045c-.413-.053-5.095-.055-5.454-.002m7.335 2.685.012 1.892.126.371c.178.523.408.89.81 1.293.403.402.77.632 1.293.81l.371.126 1.892.012 1.893.012-.047-.092c-.062-.12-6.15-6.208-6.27-6.27l-.092-.047.012 1.893m-1.812 7.654c.251.075 2.29 1.419 2.464 1.625.062.073.168.25.236.393.108.227.123.303.123.6-.001.285-.018.378-.109.573-.194.417-.303.514-1.427 1.264-1.152.768-1.332.855-1.76.852a1.492 1.492 0 0 1-1.422-1.107c-.089-.348-.089-2.816 0-3.164.069-.27.29-.617.503-.787.36-.288.921-.388 1.392-.249'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileVideo);
export default ForwardRef;