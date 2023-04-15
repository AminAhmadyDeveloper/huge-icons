import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpotify = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.32 1.281c-4.279.244-8.068 3.128-9.477 7.216a10.886 10.886 0 0 0-.279 6.053 10.76 10.76 0 0 0 7.886 7.886 10.96 10.96 0 0 0 5.1 0 10.76 10.76 0 0 0 7.886-7.886 10.96 10.96 0 0 0 0-5.1 10.758 10.758 0 0 0-8.694-8.052c-.408-.067-1.668-.169-1.862-.151l-.56.034m1.826 1.541a9.086 9.086 0 0 1 2.914.874c2.817 1.383 4.708 4.026 5.118 7.158.123.932.066 2.172-.144 3.144-.289 1.345-1.031 2.857-1.913 3.902a9.31 9.31 0 0 1-3.061 2.404 8.94 8.94 0 0 1-4.06.936 8.93 8.93 0 0 1-4.06-.936c-2.817-1.383-4.708-4.026-5.118-7.158-.123-.932-.066-2.172.144-3.144.211-.982.737-2.227 1.302-3.082a9.335 9.335 0 0 1 6.552-4.097c.56-.077 1.749-.077 2.326-.001M9.14 7.644c-1.156.08-2.182.257-3.004.52-.418.134-.525.185-.652.312a.735.735 0 0 0 .343 1.241c.182.043.23.038.576-.071 1.074-.338 1.773-.452 3.259-.531 2.716-.144 5.66.384 7.62 1.366.21.105.456.212.548.236.516.139 1.026-.366.89-.88-.076-.284-.202-.41-.629-.629-2.315-1.185-5.743-1.784-8.951-1.564m.182 3.197c-1.275.072-2.745.303-3.12.49-.453.226-.586.776-.274 1.132.24.273.472.329.906.219 1.59-.405 4.14-.489 6.106-.2 1.254.183 2.228.469 3.215.942.295.14.605.274.689.297.502.135 1.01-.378.876-.884-.078-.291-.2-.41-.669-.649-1.7-.864-3.767-1.316-6.248-1.365a24.574 24.574 0 0 0-1.481.018m-.042 2.984c-.951.047-2.283.247-2.911.435-.591.178-.808.82-.416 1.234.244.257.457.295.961.168 1.841-.463 4.184-.472 6.066-.023.84.2 1.781.546 2.4.883.154.083.356.172.448.196.519.136 1.029-.367.892-.881-.076-.284-.202-.41-.629-.629-1.376-.706-2.792-1.122-4.451-1.308a21.275 21.275 0 0 0-2.36-.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpotify);
export default ForwardRef;
