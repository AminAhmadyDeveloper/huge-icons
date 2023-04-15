import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgScreenRotate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.72 2.544c-.295.128-.451.362-.451.676 0 .228.07.389.242.552.088.084.253.151.654.267a7.91 7.91 0 0 1 1.615.633A8.286 8.286 0 0 1 18.848 7.4a8.715 8.715 0 0 1 1.132 2.5c.059.22.146.458.193.528.247.369.83.413 1.134.086.17-.184 1.371-2.191 1.415-2.366.122-.485-.344-.979-.838-.888-.301.056-.4.158-.834.857-.06.095-.063.09-.252-.31-.906-1.918-2.529-3.57-4.458-4.537-.688-.344-2.012-.792-2.333-.788a.85.85 0 0 0-.287.062M2.983 13.298a.856.856 0 0 0-.268.17c-.17.172-1.389 2.189-1.44 2.382-.127.482.346.982.841.89.3-.056.403-.161.832-.853.055-.089.067-.074.325.441a9.764 9.764 0 0 0 6.08 5.05c.548.158.7.171.918.08a.734.734 0 0 0 .373-1.043c-.123-.218-.282-.311-.744-.435a8.298 8.298 0 0 1-5.88-5.88c-.059-.22-.146-.458-.193-.528a.76.76 0 0 0-.844-.274'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgScreenRotate);
export default ForwardRef;
