import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgEarnings = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.46 3.073c-.664.307-.57 1.251.14 1.403.133.029.919.044 2.252.044H17.9l-7.366 7.37c-4.052 4.054-7.392 7.424-7.424 7.49a.724.724 0 0 0-.048.574c.106.356.453.565.844.508.189-.028.222-.056 1.234-1.055.572-.564 3.924-3.906 7.45-7.426L19 5.58l.001 2.16c.001 2.023.005 2.17.076 2.325.041.09.135.211.209.267.13.099.435.196.529.168a3.47 3.47 0 0 1 .154-.037c.136-.03.373-.234.463-.399.061-.111.069-.333.08-2.144.013-2.113-.012-2.612-.148-3.01a2.8 2.8 0 0 0-1.824-1.796c-.278-.091-.298-.092-2.6-.103-2.186-.011-2.329-.007-2.48.062m-6.216 2.75c-1.308.352-1.902 1.871-1.172 3 .306.473.733.761 1.314.887.84.183 1.769-.287 2.155-1.089.378-.786.232-1.657-.378-2.262-.295-.291-.556-.447-.904-.538a2.288 2.288 0 0 0-1.015.002m8 8c-1.308.352-1.902 1.871-1.172 3 .306.473.733.761 1.314.887.84.183 1.769-.287 2.155-1.089.378-.786.232-1.657-.378-2.262-.295-.291-.556-.447-.904-.538a2.288 2.288 0 0 0-1.015.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEarnings);
export default ForwardRef;
