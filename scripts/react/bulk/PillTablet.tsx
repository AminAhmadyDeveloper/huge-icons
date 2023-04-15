import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPillTablet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.42 2.044a4.614 4.614 0 0 0-1.199.386 4.001 4.001 0 0 0-2.178 3.025c-.06.434-.06 12.656 0 13.09.247 1.773 1.679 3.192 3.443 3.413.192.024 1.213.042 2.423.042H12V2l-2.17.005c-1.194.003-2.278.02-2.41.039m1.092 3.103c.63.387.642 1.299.023 1.692a.998.998 0 0 1-1.394-.336c-.107-.174-.121-.232-.121-.5 0-.259.016-.33.111-.492a.955.955 0 0 1 .941-.496.836.836 0 0 1 .44.132m7.068-.052a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m-7.068 6.052c.63.387.642 1.299.023 1.692a.998.998 0 0 1-1.394-.336c-.107-.174-.121-.232-.121-.5 0-.259.016-.33.111-.492a.955.955 0 0 1 .941-.496.836.836 0 0 1 .44.132m7.068-.052a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m-7.068 6.052c.63.387.642 1.299.023 1.692a.998.998 0 0 1-1.394-.336c-.107-.174-.121-.232-.121-.5 0-.259.016-.33.111-.492a.955.955 0 0 1 .941-.496.836.836 0 0 1 .44.132m7.068-.052a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPillTablet);
export default ForwardRef;
