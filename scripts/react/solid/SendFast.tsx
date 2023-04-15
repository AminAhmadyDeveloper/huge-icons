import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSendFast = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.88 4.062C6.833 4.288 6 5.307 6 6.362c0 .146.034.399.076.562.042.164.473 1.19.968 2.304l.892 2.009 2.145.011 2.145.012.162.107a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.064.092-.18.204-.257.249-.135.079-.205.082-2.281.093l-2.142.012-.892 2.008c-.549 1.236-.924 2.132-.974 2.329-.198.785.065 1.646.682 2.224.291.274.562.439.928.565.345.12 1.028.128 1.36.016.121-.04 2.852-1.384 6.068-2.986l5.849-2.913.313-.313c.359-.358.534-.658.651-1.117.1-.392.1-.76 0-1.152a2.222 2.222 0 0 0-.62-1.089l-.282-.285-5.895-2.948c-4.51-2.255-5.967-2.966-6.196-3.025a2.208 2.208 0 0 0-1.048-.015M1.811 9.278a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.214.06 2.224.06 2.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.143-.007c-.629-.004-1.201.007-1.272.025m0 4a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.214.06 2.224.06 2.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.143-.007c-.629-.004-1.201.007-1.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSendFast);
export default ForwardRef;
