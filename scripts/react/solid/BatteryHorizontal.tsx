import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBatteryHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.58 6.047c-.721.138-1.381.801-1.536 1.545-.062.297-.062 8.519 0 8.816.157.75.798 1.391 1.548 1.548.3.062 14.516.062 14.816 0a2.062 2.062 0 0 0 1.548-1.548c.062-.297.062-8.519 0-8.816-.159-.762-.818-1.411-1.573-1.549-.307-.056-14.508-.052-14.803.004m18.231 3.231a.883.883 0 0 0-.481.374c-.064.117-.071.318-.081 2.259-.008 1.491.002 2.181.034 2.298a.809.809 0 0 0 .192.316.742.742 0 0 0 1.245-.326c.028-.104.039-.878.031-2.288-.011-2.065-.014-2.135-.093-2.27a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryHorizontal);
export default ForwardRef;
