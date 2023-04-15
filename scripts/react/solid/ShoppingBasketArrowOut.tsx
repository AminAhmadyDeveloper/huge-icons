import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShoppingBasketArrowOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.787 2.279a.978.978 0 0 0-.24.134c-.07.055-.712.884-1.427 1.843-.818 1.097-1.33 1.749-1.38 1.759a63.24 63.24 0 0 1-.438.083c-.792.149-1.426.496-2.042 1.118-.529.535-.82 1.032-1.015 1.736l-.08.288h19.67l-.08-.288c-.195-.704-.486-1.201-1.015-1.736-.616-.622-1.25-.969-2.042-1.118l-.438-.083c-.05-.01-.57-.671-1.399-1.781-.922-1.234-1.366-1.796-1.476-1.869a.741.741 0 0 0-.778.006c-.294.194-.424.543-.318.849.03.088.49.74 1.023 1.449.532.71.968 1.299.968 1.31 0 .012-1.926.021-4.28.021s-4.28-.009-4.28-.021c0-.011.433-.597.963-1.303.53-.705.99-1.358 1.023-1.449.154-.432-.155-.907-.626-.962a.875.875 0 0 0-.293.014M2.2 10.812c0 .126 2.048 8.369 2.141 8.614a4.036 4.036 0 0 0 2.21 2.268c.139.056.409.143.6.194l.349.092h9l.357-.094c1.33-.352 2.345-1.244 2.804-2.465.095-.252 2.139-8.478 2.139-8.607 0-.045-1.623-.054-9.8-.054-8.013 0-9.8.009-9.8.052m10.122 1.468c.461.088.602.189 1.492 1.072.459.456.86.886.89.957.191.442-.11.969-.591 1.035-.302.042-.44-.032-.918-.494l-.435-.42v2.119c0 1.503-.013 2.159-.046 2.255a.752.752 0 0 1-1.343.182l-.111-.159-.011-2.198-.012-2.197-.434.419c-.476.461-.614.535-.916.493-.481-.066-.782-.593-.591-1.035.03-.071.431-.501.89-.957.674-.669.877-.847 1.061-.931a1.67 1.67 0 0 1 1.075-.141'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketArrowOut);
export default ForwardRef;
