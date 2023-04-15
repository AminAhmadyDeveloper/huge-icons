import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInvoiceTorn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.58 2.047c-.721.138-1.381.801-1.536 1.545C3.013 3.743 3 6.061 3 11.594c0 8.519-.015 7.972.23 8.479.143.296.561.714.857.857.264.127.661.229.901.229.281.001.553-.075 1.532-.431l.94-.342.44-.001c.531-.003.449-.031 2.138.732.691.312 1.357.594 1.478.626.282.073.686.073.966 0 .12-.032.839-.336 1.598-.676 1.38-.618 1.633-.707 2-.707.309 0 .544.065 1.554.431l.946.344.42-.001c.343 0 .464-.017.66-.093a2.03 2.03 0 0 0 1.28-1.426c.052-.203.06-1.208.06-8.021 0-5.533-.013-7.851-.044-8.002-.159-.762-.818-1.411-1.573-1.549-.307-.056-14.508-.052-14.803.004m7.793 4.308c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.136.08-.194.082-2.359.082s-2.223-.002-2.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.055-1.013.431-1.132.069-.017 1.088-.027 2.265-.024l2.14.007.153.095m4 4c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.081-.178.082-4.359.082s-4.221-.001-4.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 1.988-.028 4.265-.024l4.14.006.153.095m0 4c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.081-.178.082-4.359.082s-4.221-.001-4.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 1.988-.028 4.265-.024l4.14.006.153.095'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInvoiceTorn);
export default ForwardRef;