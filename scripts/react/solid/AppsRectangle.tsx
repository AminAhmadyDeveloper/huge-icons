import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAppsRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 4.047c-.721.138-1.381.801-1.536 1.545-.059.283-.059 2.533 0 2.816.157.75.798 1.391 1.548 1.548.127.026.689.044 1.408.044s1.281-.018 1.408-.044a2.062 2.062 0 0 0 1.548-1.548c.059-.283.059-2.533 0-2.816-.159-.762-.818-1.411-1.573-1.549-.291-.053-2.52-.05-2.803.004m10 0c-.721.138-1.381.801-1.536 1.545C14.018 5.719 14 6.281 14 7s.018 1.281.044 1.408c.157.75.798 1.391 1.548 1.548.127.026.689.044 1.408.044s1.281-.018 1.408-.044a2.062 2.062 0 0 0 1.548-1.548c.059-.283.059-2.533 0-2.816-.159-.762-.818-1.411-1.573-1.549-.291-.053-2.52-.05-2.803.004m-10 10c-.721.138-1.381.801-1.536 1.545-.059.283-.059 2.533 0 2.816.157.75.798 1.391 1.548 1.548.127.026.689.044 1.408.044s1.281-.018 1.408-.044a2.062 2.062 0 0 0 1.548-1.548c.059-.283.059-2.533 0-2.816-.159-.762-.818-1.411-1.573-1.549-.291-.053-2.52-.05-2.803.004m10 0c-.721.138-1.381.801-1.536 1.545-.026.127-.044.689-.044 1.408s.018 1.281.044 1.408c.157.75.798 1.391 1.548 1.548.127.026.689.044 1.408.044s1.281-.018 1.408-.044a2.062 2.062 0 0 0 1.548-1.548c.059-.283.059-2.533 0-2.816-.159-.762-.818-1.411-1.573-1.549-.291-.053-2.52-.05-2.803.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAppsRectangle);
export default ForwardRef;