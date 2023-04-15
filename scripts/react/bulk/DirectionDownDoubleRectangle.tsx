import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionDownDoubleRectangle = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
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
            d='M7.7 7.316c-.38.175-.552.587-.398.954a.961.961 0 0 0 .13.225c.138.156 3.096 2.348 3.326 2.464.772.39 1.712.39 2.484 0 .23-.116 3.188-2.308 3.326-2.464.499-.566-.098-1.457-.809-1.209-.073.026-.809.553-1.636 1.172-.827.618-1.566 1.151-1.643 1.183-.086.036-.271.059-.48.059-.209 0-.394-.023-.48-.059-.077-.032-.816-.565-1.643-1.183-.827-.619-1.563-1.146-1.636-1.172a.677.677 0 0 0-.541.03m0 5c-.38.175-.552.587-.398.954a.961.961 0 0 0 .13.225c.138.156 3.096 2.348 3.326 2.464.772.39 1.712.39 2.484 0 .23-.116 3.188-2.308 3.326-2.464.499-.566-.098-1.457-.809-1.209-.073.026-.809.553-1.636 1.172-.827.618-1.566 1.151-1.643 1.183-.086.036-.271.059-.48.059-.209 0-.394-.023-.48-.059-.077-.032-.816-.565-1.643-1.183-.827-.619-1.563-1.146-1.636-1.172a.677.677 0 0 0-.541.03'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionDownDoubleRectangle);
export default ForwardRef;
