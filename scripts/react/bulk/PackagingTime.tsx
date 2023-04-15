import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackagingTime = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.973 2.059a4.27 4.27 0 0 0-1.693.722c-.331.243-2.242 2.155-2.497 2.499a4.33 4.33 0 0 0-.697 1.55L2.049 7h19.904l-.054-.23a4.293 4.293 0 0 0-.711-1.53c-.288-.385-2.26-2.326-2.568-2.527-.543-.356-1.024-.551-1.615-.654-.466-.082-9.581-.081-10.032 0m4.267 8.003C9.319 10.473 8 12.076 8 14c0 1.101.426 2.11 1.211 2.867.5.483 1.023.784 1.729.999.334.102.411.11 1.06.11s.726-.008 1.06-.11c1.412-.429 2.377-1.394 2.806-2.806.102-.334.11-.411.11-1.06s-.008-.726-.11-1.06c-.463-1.523-1.588-2.561-3.114-2.876-.379-.079-1.15-.079-1.512-.002m1.065 1.775c.09.041.216.142.28.225.11.145.116.174.135.675l.02.523.26.02c.171.013.309.05.402.108.437.272.423.974-.025 1.236-.157.092-.196.096-.877.096s-.72-.004-.877-.096a.793.793 0 0 1-.253-.256c-.086-.152-.09-.199-.09-1.101 0-.57.017-.986.043-1.054a.692.692 0 0 1 .377-.377.681.681 0 0 1 .605.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingTime);
export default ForwardRef;