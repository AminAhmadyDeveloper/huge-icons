import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoadLocationHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.433 2.04c-.59.094-1.212.34-1.702.672-1.305.887-1.937 2.44-1.657 4.074.168.984.711 2.339 1.287 3.214.637.968 1.332 1.615 2.019 1.882.357.139.906.135 1.251-.009.728-.303 1.365-.897 2.008-1.873.524-.796 1.033-2.013 1.249-2.984.133-.599.126-1.492-.017-2.021a4.021 4.021 0 0 0-1.602-2.283 4.76 4.76 0 0 0-1.311-.592c-.386-.094-1.175-.136-1.525-.08m1.214 2.612c.265.13.603.473.725.738.073.157.088.262.088.61 0 .376-.011.443-.109.641-.29.591-.948.94-1.579.838a1.563 1.563 0 0 1-1.121-.833c-.137-.282-.171-.767-.076-1.094.12-.412.502-.812.918-.96.316-.113.859-.085 1.154.06M5.433 8.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v7.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392v-7.24l-.106-.385c-.332-1.199-1.077-2.081-2.211-2.619-.561-.265-.916-.339-1.763-.364l-.721-.022-.052.195c-.091.342-.453 1.219-.712 1.727-.477.933-1.069 1.748-1.713 2.358-.873.826-1.742 1.218-2.702 1.218-.714 0-1.355-.211-2.043-.673-.356-.239-.959-.806-1.284-1.209-.712-.882-1.476-2.322-1.781-3.36L6.82 8l-.58.005a8.74 8.74 0 0 0-.807.038m1.955 6.324a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.216.308-.295.331-1.116.331-.821 0-.9-.023-1.116-.331-.286-.406-.056-1.009.431-1.133.069-.017.414-.028.768-.024.624.008.648.011.805.115m5.432-.039c.582.315.559 1.079-.04 1.356-.235.109-1.325.109-1.56 0-.521-.241-.625-.866-.205-1.234a.747.747 0 0 1 .256-.153c.06-.013.127-.031.149-.039.022-.009.319-.011.66-.006.482.009.647.025.74.076m5.568.039a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.216.308-.295.331-1.116.331-.821 0-.9-.023-1.116-.331-.286-.406-.056-1.009.431-1.133.069-.017.414-.028.768-.024.624.008.648.011.805.115'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadLocationHorizontal);
export default ForwardRef;
