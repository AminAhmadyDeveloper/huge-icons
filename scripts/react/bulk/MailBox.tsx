import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMailBox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.716 1.142c-.701.127-1.384.483-1.687.88-.252.332-.269.441-.269 1.785V5h1.48V3.839c0-1.287.007-1.332.251-1.546.289-.254.509-.303 1.489-.331.94-.026 1.058-.051 1.198-.251.151-.216-.004-.499-.321-.587-.227-.063-1.765-.05-2.141.018M7.301 5.045a5.035 5.035 0 0 0-4.055 3.42c-.229.706-.226.654-.226 4.035v3.12l.111.397c.347 1.242 1.226 2.235 2.389 2.698.165.066.488.158.719.205.392.08.513.084 1.94.071l1.521-.014.36-.11c1.413-.432 2.37-1.388 2.808-2.807l.111-.36.013-3.06c.013-3.383.008-3.476-.241-4.22a5.153 5.153 0 0 0-2.061-2.643 5.083 5.083 0 0 0-1.847-.713 6.267 6.267 0 0 0-1.542-.019m6.706 14.885c.013.912.015.934.12 1.159.15.319.431.605.748.761.238.118.298.13.625.13s.387-.012.625-.13a1.67 1.67 0 0 0 .748-.761c.105-.225.107-.247.12-1.159l.013-.93h-3.012l.013.93'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailBox);
export default ForwardRef;
