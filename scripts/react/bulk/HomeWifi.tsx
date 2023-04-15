import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeWifi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.32 10.265c-1.517.188-2.915.829-3.898 1.787-.349.34-.379.383-.405.562a.772.772 0 0 0 .441.831c.345.156.583.075 1.09-.375 1.956-1.732 4.903-1.737 6.898-.01.427.369.428.37.616.412a.764.764 0 0 0 .896-.927c-.094-.363-1.173-1.231-2.042-1.643a6.436 6.436 0 0 0-2.776-.642 11.041 11.041 0 0 0-.82.005m.02 3.031c-.737.143-1.365.459-1.874.942-.349.331-.425.535-.326.871.097.326.38.537.72.537.23 0 .347-.056.648-.311.883-.75 2.078-.757 2.963-.019.4.333.632.394.951.249a.768.768 0 0 0 .441-.82c-.07-.464-1.007-1.139-1.923-1.385-.41-.11-1.2-.142-1.6-.064m.36 3.02a.745.745 0 0 0 .029 1.382.65.65 0 0 0 .542 0 .748.748 0 0 0 0-1.396.665.665 0 0 0-.571.014'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeWifi);
export default ForwardRef;
