import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWifiSignalOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.815 2.277a.802.802 0 0 0-.459.349c-.122.197-.124.548-.004.738.046.075.679.73 1.406 1.456.727.726 1.322 1.332 1.322 1.347 0 .015-.157.123-.35.239-.697.42-1.791 1.224-2.122 1.559-.768.778-.926 2.041-.38 3.045.095.174 6.291 8.577 7.457 10.113.508.669.992 1.013 1.655 1.177.365.09.955.09 1.32 0 .501-.124 1.083-.479 1.409-.86.066-.077.692-.914 1.391-1.86.699-.946 1.278-1.728 1.287-1.738.008-.01.883.848 1.944 1.906 1.847 1.842 1.937 1.925 2.119 1.963.58.12 1.02-.32.901-.901-.037-.185-.257-.408-9.125-9.282-4.997-5-9.14-9.125-9.206-9.166a.842.842 0 0 0-.565-.085m8.392 2.005c-.861.055-2.038.249-2.288.378-.163.085-.324.342-.348.555a.72.72 0 0 0 .391.746c.193.099.369.099.844.003.757-.154 1.115-.184 2.214-.184.843 0 1.181.016 1.54.072 2.127.333 4.034 1.132 5.89 2.469.7.504 1.039.837 1.109 1.09.068.25.034.608-.08.832-.05.097-.677.969-1.394 1.937-.717.968-1.335 1.822-1.374 1.898-.122.239-.068.607.121.815.207.229.59.288.89.137.156-.079.317-.278 1.291-1.59.612-.825 1.249-1.689 1.415-1.92.501-.695.653-1.105.655-1.765.002-.776-.244-1.37-.777-1.879-.16-.152-1.072-.841-1.466-1.107-2.658-1.794-5.707-2.672-8.633-2.487m-.25 7.735c3.623 3.623 4.728 4.75 4.696 4.79l-1.409 1.901c-.752 1.017-1.419 1.886-1.483 1.931a1.188 1.188 0 0 1-.765.24c-.26.001-.339-.017-.549-.122a1.274 1.274 0 0 1-.383-.29C10.687 20.004 3.54 10.32 3.488 10.2c-.094-.213-.108-.598-.032-.828.092-.276.461-.616 1.327-1.221.315-.221 1.372-.871 1.415-.871.012 0 2.154 2.132 4.759 4.737'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiSignalOff);
export default ForwardRef;
