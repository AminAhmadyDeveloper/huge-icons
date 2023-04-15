import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatClock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.34 2.279c-1.896.127-3.693.801-5.256 1.973-.501.375-1.468 1.344-1.839 1.84-1.002 1.341-1.608 2.77-1.893 4.46-.081.481-.086.668-.102 3.548-.017 3.153-.005 3.474.148 4.074.221.864.584 1.486 1.263 2.165.679.679 1.301 1.042 2.165 1.263.609.155.895.164 5.054.148 3.864-.014 4.04-.018 4.54-.099a9.927 9.927 0 0 0 2.84-.89c1.051-.513 1.77-1.029 2.621-1.88s1.367-1.57 1.88-2.621c1.616-3.305 1.23-7.202-1.006-10.164-1.297-1.719-3.215-2.988-5.343-3.538-.906-.234-1.399-.282-3.072-.297a40.85 40.85 0 0 0-2 .018m3.98 1.576c1.82.323 3.403 1.158 4.628 2.438 1.167 1.222 1.903 2.696 2.199 4.407.097.562.097 2.038 0 2.6a8.5 8.5 0 0 1-.847 2.529 8.25 8.25 0 0 1-6.4 4.37c-.276.031-1.656.041-4.46.033l-4.06-.012-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 18l-.132-.38v-3.26c0-3.596-.005-3.505.263-4.516C3.64 7.596 5.221 5.67 7.342 4.61c.736-.368 1.725-.674 2.478-.766.198-.024.405-.051.46-.06a58.38 58.38 0 0 1 1.88-.007c1.462.008 1.848.022 2.16.078m-2.827 3.428a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018-1.473 1.564-1.702 3.889-.564 5.738.289.47 1.046 1.227 1.516 1.516.887.546 1.969.802 2.945.698a4.851 4.851 0 0 0 2.085-.698c.47-.289 1.227-1.046 1.516-1.516.546-.887.802-1.969.698-2.945-.118-1.111-.524-2.009-1.262-2.793-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.442-.043-.499-.043-.963.002m1.501 1.633c.533.179.888.399 1.29.8.398.399.618.751.804 1.29.124.359.129.399.129.994s-.005.635-.129.994a3.08 3.08 0 0 1-.804 1.29 3.088 3.088 0 0 1-1.293.809c-.352.119-.402.125-.991.125s-.639-.006-.991-.125a3.088 3.088 0 0 1-1.293-.809A3.064 3.064 0 0 1 8.913 13c-.125-.365-.13-.404-.13-1s.005-.635.13-1c.171-.495.39-.86.737-1.226a3.167 3.167 0 0 1 1.197-.803c.471-.177.685-.209 1.273-.194.433.011.55.03.874.139m-1.294.901a.861.861 0 0 0-.398.432c-.049.118-.062.318-.062.98 0 .483.019.898.045.99.056.204.292.44.496.496.093.026.507.044.999.044.732-.001.86-.01 1-.075.295-.137.46-.381.46-.684a.667.667 0 0 0-.193-.494c-.19-.201-.31-.239-.817-.258l-.47-.018-.001-.425c-.001-.473-.059-.661-.264-.852a.752.752 0 0 0-.795-.136'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatClock);
export default ForwardRef;
