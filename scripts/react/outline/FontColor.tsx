import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFontColor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.807 3.289c-.378.081-.221-.256-2.997 6.416-2.672 6.421-2.606 6.248-2.487 6.562.095.252.398.453.683.453.219 0 .483-.13.593-.292.048-.07.417-.92.82-1.888l.733-1.76h5.696l.733 1.76c.403.968.772 1.818.82 1.888.11.162.374.292.593.292.285 0 .588-.201.683-.453.119-.314.185-.141-2.481-6.544-1.389-3.335-2.567-6.119-2.618-6.187-.161-.215-.466-.313-.771-.247m1.295 5.296 1.091 2.62c.008.02-.957.035-2.193.035-1.236 0-2.201-.015-2.193-.035C9.974 10.769 11.983 6 12 6c.013 0 .509 1.163 1.102 2.585M4.811 19.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 14.213.063 14.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-7.143-.006c-3.929-.004-7.201.008-7.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFontColor);
export default ForwardRef;
