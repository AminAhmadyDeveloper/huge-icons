import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMailBlock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.42 3.044c-.468.067-1.298.381-1.59.603-.064.048.197.321 2.704 2.827l2.774 2.774.101-.174c.73-1.256.776-2.654.128-3.914-.768-1.493-2.445-2.355-4.117-2.116m-2.788 1.803c-.387.591-.631 1.465-.632 2.26-.001 1.213.702 2.495 1.762 3.214 1.178.8 2.745.893 4.038.238.165-.084.332-.176.37-.206.064-.048-.197-.321-2.703-2.826-2.745-2.745-2.774-2.772-2.835-2.68M5.46 11.296c-.474.209-.612.829-.267 1.199.167.181 2.443 1.877 2.74 2.043 1.058.591 2.407.615 3.507.062.415-.208 2.835-2.018 2.95-2.205.34-.552-.121-1.234-.768-1.137-.162.024-.346.148-1.454.975-1.526 1.141-1.733 1.247-2.431 1.247-.673 0-.912-.122-2.373-1.218-.67-.501-1.276-.936-1.349-.967a.77.77 0 0 0-.555.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailBlock);
export default ForwardRef;
