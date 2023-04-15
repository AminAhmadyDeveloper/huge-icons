import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSmartThermostat = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.4 1.283a6.786 6.786 0 0 0-3.72 1.539c-.535.447-.681.651-.679.947a.844.844 0 0 0 .275.561.93.93 0 0 0 .479.19c.175 0 .399-.119.658-.353a5.457 5.457 0 0 1 2.527-1.308c.441-.092 1.245-.121 1.715-.062a5.372 5.372 0 0 1 2.902 1.343c.142.126.316.255.389.285.428.179.954-.116 1.004-.563.045-.399-.053-.561-.626-1.038a6.734 6.734 0 0 0-3.792-1.544c-.522-.043-.584-.043-1.132.003m.155 2.996c-.888.111-2.004.703-2.306 1.223-.132.226-.111.589.045.794.293.384.793.403 1.19.045.215-.194.443-.331.751-.453.235-.092.321-.104.765-.104s.53.012.765.104c.318.125.503.239.793.487.121.103.289.205.375.228.551.149 1.055-.367.906-.928-.079-.302-.566-.723-1.2-1.04-.579-.29-1.436-.436-2.084-.356m.025 13.816a.994.994 0 0 0-.011 1.802c.837.417 1.745-.491 1.328-1.328-.25-.501-.823-.707-1.317-.474'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartThermostat);
export default ForwardRef;