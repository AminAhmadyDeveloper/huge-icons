import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHotspot = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.32 3.281c-4.257.242-8.043 3.109-9.459 7.161-1.297 3.71-.458 7.867 2.17 10.763.449.494.598.595.879.595.342 0 .585-.154.708-.45.14-.333.048-.584-.383-1.05a8.53 8.53 0 0 1-1.537-2.24A8.9 8.9 0 0 1 2.76 14c0-1.462.3-2.764.936-4.06 1.383-2.817 4.026-4.708 7.158-5.118.932-.123 2.172-.066 3.144.144 1.335.287 2.824 1.012 3.862 1.881 1.074.899 1.847 1.877 2.444 3.093A8.93 8.93 0 0 1 21.24 14c0 1.464-.297 2.75-.937 4.06a8.53 8.53 0 0 1-1.554 2.254c-.41.436-.505.706-.367 1.036.131.315.388.468.741.442.291-.021.398-.096.844-.588a10.745 10.745 0 0 0 2.469-9.754 10.758 10.758 0 0 0-8.694-8.052c-.408-.067-1.668-.169-1.862-.151l-.56.034m.159 3.999c-1.564.123-3 .764-4.145 1.851-.955.906-1.658 2.173-1.936 3.489-.451 2.133.201 4.44 1.699 6.013.261.274.39.34.667.34.489.001.814-.417.709-.909-.03-.138-.103-.252-.318-.492-.699-.779-1.088-1.535-1.302-2.532-.103-.479-.103-1.691 0-2.12.255-1.064.703-1.88 1.425-2.601C9.326 9.274 10.553 8.76 12 8.76c1.45 0 2.671.512 3.722 1.559.722.72 1.167 1.532 1.425 2.601.058.238.073.462.073 1.08-.001.713-.01.816-.108 1.202-.237.938-.616 1.655-1.223 2.319-.296.323-.378.481-.378.725a.73.73 0 0 0 .321.611c.137.096.205.116.397.116.285 0 .411-.064.674-.34 1.281-1.345 1.98-3.31 1.822-5.124a6.687 6.687 0 0 0-.651-2.429c-1.178-2.487-3.833-4.017-6.595-3.8m.181 3.998a2.744 2.744 0 0 0-2.303 1.982c-.177.647-.09 1.484.211 2.02.526.939 1.385 1.451 2.432 1.451s1.906-.512 2.432-1.451c.4-.714.4-1.846 0-2.56-.575-1.026-1.636-1.578-2.772-1.442m.794 1.563c.29.109.596.415.705.705.176.471.068.975-.285 1.328a1.216 1.216 0 0 1-1.748 0c-.279-.278-.38-.549-.357-.954.021-.353.107-.547.355-.795.273-.272.473-.356.864-.362.16-.002.327.026.466.078'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHotspot);
export default ForwardRef;
