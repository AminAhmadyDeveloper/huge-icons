import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBluetooth = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.815 3.277a.802.802 0 0 0-.459.349c-.103.167-.123.529-.038.694.028.055 1.727 1.778 3.775 3.829 2.316 2.318 3.71 3.743 3.686 3.765-.022.02-1.231.83-2.688 1.801-2.93 1.951-2.811 1.854-2.811 2.288a.72.72 0 0 0 .881.712c.109-.024.951-.563 2.62-1.676L11.24 13.4l.001 2.73c0 1.567.017 2.845.04 3.001.13.902.903 1.511 1.852 1.462.534-.028.642-.098 2.287-1.469l1.44-1.201 1.38 1.374c1.308 1.303 1.39 1.376 1.57 1.414.579.12 1.02-.32.901-.901-.037-.185-.238-.389-8.125-8.282-4.447-4.45-8.14-8.125-8.206-8.166a.842.842 0 0 0-.565-.085m8.651.2a1.745 1.745 0 0 0-1.188 1.413c-.02.138-.037.934-.037 1.77l-.001 1.521.73.729c.402.402.744.73.76.73.017 0 .03-1.044.03-2.319V5.002l.103-.068c.076-.05.129-.058.201-.031.16.06 3.486 2.854 3.511 2.949a.263.263 0 0 1-.038.178c-.033.05-.766.561-1.628 1.136-.863.575-1.577 1.052-1.587 1.061-.01.009.222.257.516.551l.534.535 1.544-1.03c.863-.576 1.608-1.102 1.689-1.192.578-.641.62-1.544.103-2.231-.239-.317-3.633-3.137-3.985-3.311-.226-.111-.303-.128-.64-.138-.293-.009-.438.007-.617.066m3.303 13.408c-.28.265-2.654 2.203-2.719 2.22a.257.257 0 0 1-.19-.042l-.1-.065V13.82l1.519 1.519c.836.835 1.506 1.531 1.49 1.546'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBluetooth);
export default ForwardRef;