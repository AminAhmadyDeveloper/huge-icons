import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpeakerDisable = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.672 3.362a.692.692 0 0 0-.384.595c-.012.164.003.269.052.367.037.075.86.93 1.829 1.901L6.93 7.991l-.675.018c-.58.016-.709.031-.915.11-.672.258-1.158.81-1.296 1.473-.061.292-.061 4.524 0 4.816.114.546.562 1.135 1.036 1.364.442.212.582.228 2.063.228 1.421 0 1.638.018 1.987.168.124.053 1.156.798 2.51 1.812 1.265.948 2.381 1.762 2.48 1.81.784.377 1.659.228 2.284-.389a1.92 1.92 0 0 0 .561-1.053l.05-.273 1.282 1.281c1.325 1.323 1.426 1.405 1.732 1.403.173-.001.439-.112.539-.225.194-.218.245-.596.115-.846-.119-.227-16.186-16.27-16.372-16.347a.8.8 0 0 0-.639.021m10.866.691a2.617 2.617 0 0 0-.4.148c-.182.088-3.905 2.847-3.928 2.911-.006.015 1.52 1.558 3.39 3.428l3.4 3.4V9.872c0-2.815-.014-4.133-.044-4.28-.14-.669-.626-1.22-1.296-1.469-.297-.11-.833-.144-1.122-.07'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeakerDisable);
export default ForwardRef;