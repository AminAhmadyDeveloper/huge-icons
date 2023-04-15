import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWifiCrooked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.811 2.279c-.519.123-.732.788-.385 1.201.212.252.232.255 1.614.284 1.321.028 1.974.086 2.92.261a16.319 16.319 0 0 1 9.32 5.335 16.567 16.567 0 0 1 3.098 5.4c.587 1.724.813 3.1.858 5.2.029 1.382.032 1.402.284 1.614.409.344 1.056.146 1.198-.365.099-.356.03-2.391-.12-3.525A17.751 17.751 0 0 0 6.268 2.401c-1.043-.134-3.102-.207-3.457-.122m0 4c-.519.123-.732.788-.385 1.201.21.249.241.255 1.534.285 1.517.036 2.263.137 3.4.46 3.95 1.12 7.157 4.256 8.339 8.155.381 1.258.497 2.051.536 3.66.03 1.293.036 1.324.285 1.534.409.344 1.056.146 1.198-.365.093-.336.033-2.193-.102-3.129-.613-4.262-3.12-7.931-6.876-10.061-1.8-1.021-3.791-1.604-5.94-1.738-.752-.046-1.797-.048-1.989-.002m0 3.997c-.653.171-.754 1.073-.156 1.394.104.056.306.072 1.205.095 1.162.03 1.527.074 2.296.278 2.797.743 5.059 3.004 5.801 5.802.204.768.248 1.134.278 2.295.03 1.182.039 1.227.285 1.434a.75.75 0 0 0 1.204-.386c.071-.263.021-1.964-.078-2.608a9.76 9.76 0 0 0-2.576-5.282 9.669 9.669 0 0 0-5.662-2.937c-.608-.089-2.364-.146-2.597-.085m2.149 5.786c-.418.089-.891.352-1.219.677a2.476 2.476 0 0 0 .001 3.525 2.486 2.486 0 0 0 3.52-.002 2.486 2.486 0 0 0 0-3.522 2.511 2.511 0 0 0-2.302-.678'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiCrooked);
export default ForwardRef;
