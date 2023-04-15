import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStudentCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.62 2.039a2.048 2.048 0 0 0-1.512 1.317c-.076.205-.085.328-.099 1.434L9.994 6h4.012l-.015-1.21c-.015-1.115-.022-1.228-.101-1.44a2.06 2.06 0 0 0-1.246-1.236c-.255-.089-.786-.128-1.024-.075m-3.182 8.036a1.984 1.984 0 0 0-.872.542A1.91 1.91 0 0 0 7 12c0 .535.184.986.566 1.383.254.265.521.43.872.54.122.039.195.078.162.087-.033.01-.186.048-.34.084-1.049.248-1.9 1.108-2.179 2.202-.205.804-.033 1.357.499 1.609l.2.094h4.44l.2-.093c.24-.112.425-.311.521-.563.057-.149.066-.257.048-.554-.08-1.285-1.009-2.398-2.249-2.694a12.072 12.072 0 0 1-.34-.085c-.033-.009.04-.048.162-.087.351-.11.618-.275.872-.54A1.91 1.91 0 0 0 11 12c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011m6.262 1.241a.745.745 0 0 0 .029 1.382c.126.053.396.062 1.78.061 1.5-.001 1.644-.007 1.791-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.147-.068-.29-.074-1.8-.074s-1.653.006-1.8.074m0 4a.745.745 0 0 0 .029 1.382c.126.053.396.062 1.78.061 1.5-.001 1.644-.007 1.791-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.147-.068-.29-.074-1.8-.074s-1.653.006-1.8.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStudentCard);
export default ForwardRef;
