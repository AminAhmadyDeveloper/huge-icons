import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRotateLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.56 1.266c-3.664.17-6.909 2.107-8.799 5.254-1.37 2.282-1.823 5.086-1.257 7.773.765 3.63 3.521 6.703 7.076 7.891 4.373 1.461 9.216-.033 11.986-3.696.512-.676 1.082-1.653 1.131-1.937a.717.717 0 0 0-.217-.631c-.199-.199-.416-.263-.68-.2-.267.064-.41.205-.64.633a9.317 9.317 0 0 1-2.366 2.858c-1.109.89-2.562 1.574-3.918 1.845-.792.159-1.249.196-2.132.173-1.491-.038-2.72-.354-4.024-1.035-.905-.472-1.582-.981-2.343-1.76-1.347-1.378-2.189-3.048-2.519-4.994-.089-.527-.121-1.801-.06-2.367.187-1.723.778-3.24 1.794-4.607.351-.473 1.129-1.282 1.588-1.653a9.418 9.418 0 0 1 4.26-1.934c.625-.11 1.906-.152 2.524-.082a9.465 9.465 0 0 1 4.856 2.015 12.427 12.427 0 0 1 1.402 1.408 9.514 9.514 0 0 1 1.677 3.258c.124.43.314 1.402.281 1.436-.008.008-.459-.134-1.001-.314-.882-.294-1.011-.327-1.219-.312a.707.707 0 0 0-.605 1.014c.136.298.213.334 1.894.89.864.287 1.615.531 1.669.543.303.068.711-.209.794-.539.052-.208.005-1.16-.088-1.783-.713-4.768-4.559-8.514-9.311-9.069a13.46 13.46 0 0 0-1.753-.078m.096 5.015a2.75 2.75 0 0 0-2.112 1.496c-.234.479-.272.677-.293 1.559l-.02.796.135-.03c.074-.017.206-.046.294-.064.088-.019.37-.035.627-.036l.468-.002.012-.67c.012-.614.021-.686.11-.867.123-.251.335-.463.586-.586.162-.08.258-.097.537-.097s.375.017.537.097c.251.123.463.335.586.586.089.181.098.253.11.867l.012.67.468.002c.257.001.539.017.627.036.088.018.22.047.294.064l.135.03-.02-.796c-.021-.861-.058-1.071-.271-1.519-.497-1.046-1.679-1.69-2.822-1.536'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRotateLock);
export default ForwardRef;
