import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgYen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.815 2.276a.762.762 0 0 0-.539.91c.03.112.809 1.181 2.621 3.597l2.578 3.437-2.35.02-2.351.02-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.109.031.999.045 2.809.045h2.65v2.477l-2.733.012-2.733.011-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.109.031.999.045 2.809.045h2.65v2.65c0 1.81.014 2.7.045 2.809.059.213.293.441.513.5.4.108.812-.12.92-.51.027-.096.042-1.1.042-2.799v-2.65h2.65c1.81 0 2.7-.014 2.809-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.733-.011-2.733-.012V11.76h2.65c1.81 0 2.7-.014 2.809-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.351-.02-2.35-.02 2.572-3.43c2.686-3.58 2.706-3.611 2.643-3.916a.868.868 0 0 0-.362-.515.776.776 0 0 0-.752-.003c-.116.072-.841 1.011-2.873 3.72C13.258 8.069 12.019 9.7 12 9.7c-.019 0-1.258-1.631-2.753-3.624-1.828-2.437-2.763-3.652-2.854-3.708a.819.819 0 0 0-.578-.092'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgYen);
export default ForwardRef;
