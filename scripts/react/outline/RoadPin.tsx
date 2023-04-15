import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoadPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.74 1.266c-1.325.119-2.413.819-3.021 1.946A3.483 3.483 0 0 0 13.271 5c0 .68.129 1.197.448 1.788.516.956 1.276 1.532 2.469 1.874.036.011.051.449.06 1.786l.012 1.772.093.149c.357.574 1.223.443 1.363-.207.028-.131.044-.799.044-1.845 0-1.277.011-1.643.05-1.654 1.206-.35 1.954-.918 2.471-1.875A3.483 3.483 0 0 0 20.729 5c0-.68-.129-1.197-.448-1.788a3.674 3.674 0 0 0-2.066-1.749c-.422-.147-1.066-.233-1.475-.197m.838 1.555c.371.097.696.291 1.003.598.46.46.659.937.659 1.581 0 .644-.199 1.121-.659 1.581-.46.46-.937.659-1.581.659-.644 0-1.121-.199-1.581-.659-.46-.46-.659-.937-.659-1.581 0-.644.199-1.121.659-1.581.3-.301.631-.5.985-.596.288-.077.881-.078 1.174-.002M8.06 3.28c-.9.1-1.708.67-2.132 1.503-.162.318-4.689 12.45-4.733 12.682-.065.35-.022 1.101.081 1.391.239.674.768 1.285 1.367 1.578.682.335-.198.306 9.357.306 9.558 0 8.674.029 9.36-.307.438-.215.942-.705 1.171-1.139a3.01 3.01 0 0 0 .269-1.854c-.048-.252-2.608-7.108-2.74-7.34a.693.693 0 0 0-.617-.34.727.727 0 0 0-.747.645c-.023.169.072.442 1.319 3.769 1.2 3.201 1.345 3.612 1.345 3.82 0 .48-.252.896-.675 1.115l-.252.131H3.567l-.252-.131a1.231 1.231 0 0 1-.675-1.116c0-.21.228-.842 2.325-6.433 2.566-6.844 2.38-6.406 2.841-6.661l.214-.119 1.643-.02 1.643-.02.162-.107A.7.7 0 0 0 11.813 4a.7.7 0 0 0-.345-.633l-.162-.107-1.483-.006c-.816-.003-1.609.009-1.763.026m3.755 2.997a.8.8 0 0 0-.462.354c-.088.141-.093.185-.093.869 0 .684.005.728.093.869.357.574 1.223.443 1.363-.207.055-.258.056-1.082.001-1.321a.747.747 0 0 0-.902-.564m-.116 4.539c-.149.065-.367.308-.408.455-.017.06-.031.388-.031.729 0 .341.014.669.031.729.042.152.262.392.417.457a.85.85 0 0 0 .584 0c.155-.065.375-.305.417-.457.017-.06.031-.388.031-.729 0-.341-.014-.669-.031-.729-.042-.152-.262-.392-.417-.457a.881.881 0 0 0-.593.002m.116 4.461a.8.8 0 0 0-.462.354c-.088.141-.093.185-.093.869 0 .684.005.728.093.869.357.574 1.223.443 1.363-.207.055-.258.056-1.082.001-1.321a.747.747 0 0 0-.902-.564'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadPin);
export default ForwardRef;
