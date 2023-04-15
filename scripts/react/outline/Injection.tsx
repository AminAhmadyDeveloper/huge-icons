import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInjection = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.251 2.279c-.395.094-.639.519-.53.925.039.145.136.266.562.697l.516.521-.87.869c-.478.478-.885.869-.904.869-.019 0-.149-.107-.288-.237a2.67 2.67 0 0 0-1.057-.609c-.243-.075-.391-.093-.78-.093-.778 0-1.267.193-1.903.75-.185.163-1.484 1.452-2.886 2.866-2.714 2.736-2.803 2.837-2.992 3.403-.121.363-.366 2.048-.37 2.54a2.51 2.51 0 0 0 .23 1.129l.095.208-2.335 2.207c-1.497 1.416-2.36 2.26-2.405 2.352a.738.738 0 0 0 .692 1.058.658.658 0 0 0 .332-.081c.067-.043 1.16-1.058 2.429-2.255 1.292-1.221 2.334-2.175 2.369-2.17.035.004.226.065.424.136.551.195.885.198 2.128.018 1.276-.184 1.499-.25 2.012-.593.229-.153 5.407-5.311 5.721-5.699.27-.334.451-.688.537-1.054.071-.299.081-.98.019-1.284-.076-.369-.363-.905-.651-1.217l-.261-.281.888-.887.888-.887.479.48c.263.264.535.507.605.54a.88.88 0 0 0 .652-.01.735.735 0 0 0 .394-.569c.038-.392.026-.406-1.641-2.068-1.511-1.505-1.533-1.525-1.742-1.569a2.638 2.638 0 0 0-.22-.04 2.82 2.82 0 0 1-.137.035m-2.849 4.527c.233.098 1.903 1.759 2.045 2.034.136.263.133.778-.005 1.06-.126.257-1.294 1.46-1.418 1.46-.083 0-5.069-.985-5.182-1.024-.077-.026 3.279-3.391 3.495-3.503.307-.16.722-.17 1.065-.027m-3.227 5.321 2.634.527-1.474 1.466c-1.135 1.129-1.519 1.487-1.668 1.555-.255.117-1.987.38-2.318.352-.386-.033-.754-.281-.979-.661-.159-.269-.161-.587-.012-1.614.069-.477.155-.954.191-1.06.051-.149.162-.292.504-.642.242-.247.451-.45.463-.45.013 0 1.21.237 2.659.527'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInjection);
export default ForwardRef;
