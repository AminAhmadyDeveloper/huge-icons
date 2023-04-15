import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolderUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 3.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v11.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V9.38l-.106-.385c-.332-1.199-1.077-2.081-2.211-2.619-.708-.335-.778-.344-3.003-.377-2-.029-2.045-.033-2.58-.206-.509-.165-.868-.388-2.066-1.282-1.998-1.491-2.07-1.514-4.709-1.506-.905.003-1.747.02-1.872.038m7.117 7.1c.342.071.709.225.997.419.303.204 2.05 1.952 2.137 2.138.23.494-.113 1.06-.644 1.06-.308 0-.424-.087-1.368-1.03l-.909-.906-.011 2.205-.012 2.204-.121.172c-.166.237-.346.334-.619.334s-.453-.097-.619-.334l-.121-.172-.02-2.197-.02-2.197-.86.863c-.473.475-.927.898-1.008.941a.78.78 0 0 1-.846-.118c-.209-.183-.282-.553-.165-.836.077-.186 1.738-1.866 2.074-2.097.65-.448 1.389-.603 2.135-.449'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderUpload);
export default ForwardRef;
