import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyWithdraw = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 4.095A.976.976 0 0 0 5.002 5c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m5.858 2.98a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 14 9c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011m6.142 5.02a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m-5.86 5.71c-.129.051-.309.223-.394.375-.056.102-.068.288-.079 1.255l-.013 1.134-.387-.379c-.448-.439-.59-.525-.867-.526-.486-.002-.816.42-.721.923.024.129.147.272.815.946.432.437.863.848.957.913.546.38 1.393.38 1.938 0 .094-.066.515-.467.936-.893.827-.835.886-.925.837-1.253-.032-.217-.209-.466-.393-.553a1.007 1.007 0 0 0-.359-.067c-.273 0-.402.081-.877.55l-.347.343-.013-1.137c-.011-.967-.023-1.154-.079-1.256-.088-.159-.267-.325-.407-.377a.952.952 0 0 0-.547.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyWithdraw);
export default ForwardRef;
