import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgEyeDisable = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.647 3.326a.759.759 0 0 0-.367.899c.039.122.337.444 1.404 1.515l1.355 1.361-.469.349c-.593.44-1.004.783-1.706 1.423C2.411 10.197 2.021 10.858 2.021 12c0 1.118.36 1.751 1.705 3.001 2.441 2.269 4.603 3.472 7.014 3.904.564.101 1.956.101 2.52 0a11.212 11.212 0 0 0 3.113-1.056l.273-.142 1.487 1.482c1.598 1.592 1.609 1.601 1.972 1.56a.738.738 0 0 0 .578-1.049c-.051-.109-1.024-1.108-3.059-3.14-1.641-1.639-2.984-3.001-2.984-3.028 0-.026.036-.109.08-.183.132-.223.278-.702.327-1.073.175-1.316-.651-2.663-1.927-3.142a2.969 2.969 0 0 0-2.412.123l-.26.131L7.454 6.39C5.412 4.345 4.409 3.368 4.3 3.317a.735.735 0 0 0-.653.009m7.823 9.204c1.105 1.105 2.01 2.024 2.01 2.042 0 .053-.5.264-.791.334-.355.085-1.025.084-1.389-.002a3.868 3.868 0 0 1-.66-.253c-.321-.158-.436-.243-.74-.549-.413-.415-.647-.812-.785-1.328-.107-.401-.117-1.074-.022-1.463.071-.292.282-.791.334-.791.018 0 .937.904 2.043 2.01'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEyeDisable);
export default ForwardRef;
