import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRedoRectangleLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.34 6.74a2.274 2.274 0 0 1-.149.037c-.154.034-.39.253-.476.443-.066.144-.073.29-.074 1.5 0 .801.016 1.4.041 1.489a.806.806 0 0 0 .36.452c.061.032.608.184 1.215.339 1.015.259 1.117.278 1.278.237a.753.753 0 0 0 .301-1.325c-.093-.075-.279-.147-.591-.229a5.67 5.67 0 0 1-.47-.135c-.032-.032.474-.357.755-.486.468-.214.782-.279 1.35-.278.394.001.568.02.82.09 1.14.319 2.006 1.186 2.304 2.308.109.412.12 1.154.024 1.548-.272 1.106-1.054 1.971-2.103 2.328-1.748.595-3.61-.366-4.159-2.147-.101-.329-.175-.445-.349-.553-.209-.129-.366-.161-.572-.115a.763.763 0 0 0-.604.725c-.002.359.367 1.231.754 1.779.97 1.374 2.716 2.167 4.353 1.976 1.074-.125 2.009-.552 2.768-1.267 2-1.881 2.026-4.957.059-6.857a5.892 5.892 0 0 0-.655-.552 5.463 5.463 0 0 0-1.78-.734c-.325-.069-1.368-.067-1.72.002-.578.115-1.29.398-1.73.687l-.13.086-.001-.374c-.001-.437-.075-.646-.285-.806-.141-.107-.435-.2-.534-.168'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRedoRectangleLeft);
export default ForwardRef;
