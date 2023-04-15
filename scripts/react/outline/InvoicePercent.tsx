import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInvoicePercent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.656 1.282a2.398 2.398 0 0 0-.869.262A2.798 2.798 0 0 0 2.333 3.32c-.069.247-.073.651-.073 8.26 0 7.633.003 8.012.073 8.26.317 1.125 1.209 1.892 2.378 2.044.498.065.837-.006 1.949-.407.99-.356 1.297-.417 1.606-.315.085.028.727.309 1.428.625 1.591.716 1.704.753 2.306.753.602 0 .715-.037 2.306-.753a42.932 42.932 0 0 1 1.428-.625c.309-.102.616-.041 1.606.315 1.112.401 1.451.472 1.949.407 1.169-.152 2.061-.919 2.378-2.044.07-.248.073-.627.073-8.26s-.003-8.012-.073-8.26a2.792 2.792 0 0 0-1.465-1.782c-.602-.297.047-.275-8.042-.282-3.993-.004-7.37.008-7.504.026m14.881 1.595c.251.123.463.335.586.586l.097.197.01 7.84c.012 8.983.05 8.104-.368 8.522-.191.192-.291.258-.475.315-.373.116-.571.079-1.647-.306-1.042-.373-1.419-.457-1.857-.412-.47.048-.722.139-2.106.762-.751.337-1.458.63-1.571.651a1.239 1.239 0 0 1-.412 0c-.113-.021-.82-.314-1.57-.651-1.423-.641-1.649-.721-2.144-.762-.446-.037-.824.05-1.84.42-1.027.374-1.25.415-1.626.298-.186-.058-.284-.122-.476-.315-.417-.418-.378.456-.378-8.462 0-8.484-.015-7.917.224-8.279.121-.183.373-.375.607-.461.125-.046 1.335-.054 7.449-.047l7.3.007.197.097M8.664 8.063a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212.984.984 0 0 0 0-1.402.996.996 0 0 0-1.037-.236m5.996.283c-.176.091-6.251 6.167-6.343 6.342a.78.78 0 0 0 .118.846c.183.209.553.282.836.165.185-.077 6.255-6.123 6.372-6.347.14-.27.07-.685-.149-.877-.222-.195-.596-.253-.834-.129m.004 5.717a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInvoicePercent);
export default ForwardRef;
