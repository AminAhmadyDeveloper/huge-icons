import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHelp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.34 2.279c-1.896.127-3.693.801-5.256 1.973-.501.375-1.468 1.344-1.839 1.84-1.002 1.341-1.608 2.77-1.893 4.46-.081.481-.086.668-.102 3.548-.017 3.153-.005 3.474.148 4.074.221.864.584 1.486 1.263 2.165.679.679 1.301 1.042 2.165 1.263.609.155.895.164 5.054.148 3.864-.014 4.04-.018 4.54-.099a9.927 9.927 0 0 0 2.84-.89c1.051-.513 1.77-1.029 2.621-1.88s1.367-1.57 1.88-2.621c1.616-3.305 1.23-7.202-1.006-10.164-1.297-1.719-3.215-2.988-5.343-3.538-.906-.234-1.399-.282-3.072-.297a40.85 40.85 0 0 0-2 .018m3.98 1.576c1.82.323 3.403 1.158 4.628 2.438 1.167 1.222 1.903 2.696 2.199 4.407.097.562.097 2.038 0 2.6a8.5 8.5 0 0 1-.847 2.529 8.25 8.25 0 0 1-6.4 4.37c-.276.031-1.656.041-4.46.033l-4.06-.012-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 18l-.132-.38v-3.26c0-3.596-.005-3.505.263-4.516C3.64 7.596 5.221 5.67 7.342 4.61c.736-.368 1.725-.674 2.478-.766.198-.024.405-.051.46-.06a58.38 58.38 0 0 1 1.88-.007c1.462.008 1.848.022 2.16.078m-2.765 1.424a4.153 4.153 0 0 0-1.713.651c-.307.207-.847.791-1.057 1.142-.379.634-.631 1.68-.51 2.116a.751.751 0 0 0 1.205.386c.184-.155.242-.302.285-.722.097-.952.598-1.621 1.47-1.964.235-.092.321-.104.765-.104s.53.012.765.104c.887.349 1.412 1.063 1.464 1.992.025.443-.038.745-.24 1.157-.18.369-.603.788-.97.961-.891.419-.938.447-1.188.694-.469.464-.59.826-.59 1.768-.001.702.036.866.235 1.065.402.403 1.091.227 1.242-.316.023-.082.042-.41.043-.729.001-.49.012-.593.07-.664.104-.126.279-.229.589-.348.563-.216 1.187-.699 1.577-1.22a4.03 4.03 0 0 0 .748-2.024c.053-.68-.156-1.526-.53-2.152-.21-.351-.75-.935-1.057-1.142-.75-.506-1.752-.756-2.603-.651m.112 10.786c-.364.112-.667.537-.667.935 0 .517.483 1 1 1s1-.483 1-1c0-.402-.312-.827-.69-.939a.941.941 0 0 0-.643.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHelp);
export default ForwardRef;
