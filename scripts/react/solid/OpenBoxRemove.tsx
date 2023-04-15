import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOpenBoxRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.34 2.898a1.99 1.99 0 0 1-.16.042c-.081.018-.292.196-.651.552l-.53.525-.49-.487c-.623-.62-.825-.71-1.211-.535-.299.136-.498.491-.436.778.051.234.146.365.611.837l.463.47-.524.53c-.408.413-.533.565-.568.69-.053.196-.053.204-.002.389a.77.77 0 0 0 1.022.492c.078-.033.365-.279.639-.547l.498-.489.47.463c.258.254.529.492.601.529.435.221.993-.073 1.071-.563.047-.298-.031-.431-.576-.983l-.502-.51.489-.498c.268-.274.514-.561.547-.639.141-.337.017-.752-.275-.922-.159-.092-.402-.154-.486-.124M3.029 7.551c-.896 1.334-.98 1.474-.918 1.522.098.074 7.816 3.945 7.889 3.956.071.011 1.977-2.908 1.93-2.954-.016-.017-1.804-.922-3.972-2.012L4.016 6.082l-.987 1.469m12.943.543c-2.183 1.081-3.969 1.979-3.97 1.995-.004.055 1.962 2.931 2.01 2.941.054.011 7.964-3.896 7.976-3.941.012-.04-1.966-2.943-2.011-2.953-.021-.005-1.823.876-4.005 1.958M4 14.412c0 2.886-.002 2.862.23 3.341.062.128.218.335.357.475.243.243.314.281 3.44 1.845 1.756.877 3.292 1.629 3.413 1.669.144.048.337.073.56.073.223 0 .416-.025.56-.073.121-.04 1.657-.792 3.413-1.669 3.126-1.564 3.197-1.602 3.44-1.845.139-.14.295-.347.357-.475.232-.479.23-.455.23-3.341 0-1.459-.009-2.652-.019-2.652-.011 0-1.272.626-2.802 1.39l-2.782 1.39-.389-.001c-.334 0-.419-.015-.613-.105-.338-.158-.502-.331-.954-1.013-.227-.341-.425-.621-.44-.621-.016 0-.219.285-.451.634-.411.617-.612.838-.89.976-.216.107-.54.162-.815.138-.249-.022-.428-.105-3.036-1.406a272.235 272.235 0 0 0-2.79-1.382c-.01 0-.019 1.193-.019 2.652'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxRemove);
export default ForwardRef;
