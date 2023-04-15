import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackagingArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.353 2.042a4.255 4.255 0 0 0-2.13 1.003c-.165.146-2.206 2.651-2.497 3.065l-.091.13h18.729l-.119-.17a80.828 80.828 0 0 0-1.212-1.53c-.91-1.131-1.15-1.405-1.433-1.633a4.855 4.855 0 0 0-1.56-.793l-.34-.092-4.56-.007c-2.508-.004-4.662.009-4.787.027M2.021 8.01c-.014.138-.02 2.59-.012 5.45l.013 5.2.11.378c.441 1.507 1.585 2.572 3.094 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.403 3.098-2.905l.108-.392.012-5.18c.007-2.849.001-5.292-.013-5.43l-.025-.25H2.046l-.025.25m10.347 2.68a.8.8 0 0 1 .266.27l.106.18.012 2.296.011 2.296.429-.421c.506-.499.657-.569 1.017-.469.181.05.372.205.459.373.083.16.084.528.002.685-.035.066-.429.482-.877.924-.888.877-1.023.971-1.523 1.061a1.293 1.293 0 0 1-.54 0c-.5-.09-.635-.184-1.523-1.061-.448-.442-.842-.858-.877-.924-.082-.157-.081-.525.002-.685a.801.801 0 0 1 .459-.373c.36-.1.511-.03 1.017.469l.429.421.011-2.296.012-2.296.099-.173a.748.748 0 0 1 1.009-.277'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingArrowDown);
export default ForwardRef;
