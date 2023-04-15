import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMailSilent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.811 1.278c-.396.097-.638.519-.531.926.041.153.165.294.947 1.081l.901.905-.265.335a4.24 4.24 0 0 0-.732 1.458l-.111.397v11.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083 6.236 0 6.376-.002 6.765-.081a5.37 5.37 0 0 0 .621-.165l.224-.083.985.983c.646.644 1.036 1.004 1.134 1.045a.735.735 0 0 0 1.031-.679.847.847 0 0 0-.077-.332C22.603 21.535 2.485 1.401 2.34 1.329a.984.984 0 0 0-.529-.051m8.637 5.149 3.428 3.429 1.932-1.286c1.287-.856 1.98-1.294 2.076-1.311.62-.11 1.094.62.744 1.148-.061.092-.646.506-1.88 1.331l-1.792 1.198 3.472 3.472c3.403 3.403 3.472 3.47 3.511 3.362.026-.071.04-2.133.04-5.75l.001-5.64-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-5.8-.012-5.8-.011 3.428 3.428'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailSilent);
export default ForwardRef;