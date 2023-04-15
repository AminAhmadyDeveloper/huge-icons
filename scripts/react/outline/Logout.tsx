import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLogout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.498 3.284c-2.234.236-3.984 2.011-4.216 4.279-.057.548-.057 8.326 0 8.874.236 2.302 1.979 4.045 4.281 4.281.548.057 8.326.057 8.874 0a4.67 4.67 0 0 0 1.625-.455c1.512-.741 2.483-2.138 2.656-3.822.055-.532.009-.754-.198-.961-.409-.409-1.115-.205-1.236.358a2.307 2.307 0 0 0-.044.394c-.001.257-.134.792-.276 1.105a3.317 3.317 0 0 1-2.215 1.824c-.309.074-.479.078-2.799.079H9.479l.187-.23a4.78 4.78 0 0 0 1.052-2.573c.057-.548.057-8.326 0-8.874A4.78 4.78 0 0 0 9.666 4.99l-.187-.23h2.471c2.32.001 2.49.005 2.799.079a3.267 3.267 0 0 1 2.491 2.929c0 .103.02.281.044.394.121.563.827.767 1.236.358.207-.207.253-.429.198-.961-.236-2.297-1.981-4.041-4.281-4.277-.49-.051-8.458-.048-8.939.002m1.251 1.555a3.267 3.267 0 0 1 2.412 2.412c.076.317.078.488.078 4.749 0 4.261-.002 4.432-.078 4.749a3.317 3.317 0 0 1-1.824 2.215 3.376 3.376 0 0 1-2.674 0 3.317 3.317 0 0 1-1.824-2.215c-.076-.317-.078-.488-.078-4.749 0-4.261.002-4.432.078-4.749a3.281 3.281 0 0 1 2.393-2.41 3.727 3.727 0 0 1 1.517-.002M19.66 9.307c-.272.144-.42.38-.42.673 0 .265.079.39.533.85l.406.41h-3.568c-2.454 0-3.631.014-3.773.044-.758.163-.758 1.269 0 1.432.142.03 1.319.044 3.773.044h3.568l-.406.41c-.454.46-.533.585-.533.85 0 .55.555.898 1.06.664.101-.047.452-.369.949-.872.683-.691.806-.835.92-1.075.124-.263.131-.3.131-.737s-.007-.474-.131-.737c-.114-.24-.237-.384-.92-1.075-.497-.503-.848-.825-.949-.872-.195-.091-.478-.095-.64-.009'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLogout);
export default ForwardRef;
