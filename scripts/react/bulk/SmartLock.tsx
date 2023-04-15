import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSmartLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.023.179-.041 1.082-.04 2.007.001 1.549.007 1.694.075 1.841a.734.734 0 0 0 .413.398c.349.146.751-.007.945-.358.058-.105.068-.354.086-2.04l.021-1.92.132-.38c.185-.535.403-.883.803-1.284A3.064 3.064 0 0 1 11 2.913c.365-.125.404-.13 1-.13.595 0 .635.005.994.129a3.08 3.08 0 0 1 1.29.804c.398.398.617.75.805 1.29l.13.374.021 1.92c.022 2.081.016 2.033.247 2.248a.745.745 0 0 0 1.197-.248c.068-.147.074-.292.075-1.841.001-.925-.017-1.828-.04-2.007a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.442-.043-.499-.043-.963.002m-.033 9.98-.44.06c-1.281.168-2.607.798-3.572 1.697-.435.405-.535.684-.373 1.042.09.197.277.361.476.416.303.084.502.019.82-.266.641-.576 1.275-.953 1.998-1.188.627-.204.897-.244 1.631-.244.735 0 1.004.04 1.635.245a5.35 5.35 0 0 1 1.936 1.134c.269.244.423.321.644.321.443 0 .745-.301.745-.74 0-.265-.077-.41-.365-.683-.931-.887-2.173-1.496-3.515-1.723-.339-.057-1.392-.103-1.62-.071m0 3.021a4.754 4.754 0 0 0-1.12.346c-.499.251-1.087.745-1.181.992a.91.91 0 0 0 .035.618c.112.209.33.366.541.389.296.034.431-.014.707-.249.482-.409 1.009-.619 1.558-.619.532 0 1.092.216 1.509.58.337.295.584.362.882.237a.734.734 0 0 0 .413-.398c.15-.324.061-.636-.268-.942a3.777 3.777 0 0 0-3.076-.954m.24 3.032a.745.745 0 0 0 .029 1.382.65.65 0 0 0 .542 0 .748.748 0 0 0 0-1.396.665.665 0 0 0-.571.014'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartLock);
export default ForwardRef;
