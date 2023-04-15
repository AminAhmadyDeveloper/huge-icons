import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.34 2.279c-1.896.127-3.693.801-5.256 1.973-.501.375-1.468 1.344-1.839 1.84-1.002 1.341-1.608 2.77-1.893 4.46-.081.481-.086.668-.102 3.548-.017 3.153-.005 3.474.148 4.074.221.864.584 1.486 1.263 2.165.679.679 1.301 1.042 2.165 1.263.609.155.895.164 5.054.148 3.864-.014 4.04-.018 4.54-.099a9.927 9.927 0 0 0 2.84-.89c1.051-.513 1.77-1.029 2.621-1.88s1.367-1.57 1.88-2.621c1.616-3.305 1.23-7.202-1.006-10.164-1.297-1.719-3.215-2.988-5.343-3.538-.906-.234-1.399-.282-3.072-.297a40.85 40.85 0 0 0-2 .018m3.98 1.576c1.82.323 3.403 1.158 4.628 2.438 1.167 1.222 1.903 2.696 2.199 4.407.097.562.097 2.038 0 2.6a8.5 8.5 0 0 1-.847 2.529 8.25 8.25 0 0 1-6.4 4.37c-.276.031-1.656.041-4.46.033l-4.06-.012-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 18l-.132-.38v-3.26c0-3.596-.005-3.505.263-4.516C3.64 7.596 5.221 5.67 7.342 4.61c.736-.368 1.725-.674 2.478-.766.198-.024.405-.051.46-.06a58.38 58.38 0 0 1 1.88-.007c1.462.008 1.848.022 2.16.078m-2.664 3.426c-.355.048-.559.11-.869.263a2.738 2.738 0 0 0-1.072 3.977l.158.238-.226.121c-.361.193-.734.493-1.114.897-.743.789-1.151 1.696-1.261 2.803-.05.502-.016.698.154.9a.751.751 0 0 0 1.054.094c.192-.162.245-.308.286-.79.073-.848.364-1.481.95-2.068A3.064 3.064 0 0 1 11 12.913c.365-.125.404-.13 1-.13.595 0 .635.005.994.129a3.08 3.08 0 0 1 1.29.804c.583.584.877 1.224.95 2.068.041.482.094.628.286.79a.751.751 0 0 0 1.054-.094c.17-.202.204-.398.154-.9-.11-1.107-.518-2.014-1.261-2.803-.381-.405-.753-.704-1.116-.898l-.229-.123.161-.235c.929-1.361.418-3.242-1.081-3.983a2.843 2.843 0 0 0-1.546-.257m.881 1.597c.25.122.463.334.586.585.14.284.139.791-.001 1.076-.564 1.146-2.282.806-2.355-.465a1.44 1.44 0 0 1 .033-.42c.12-.378.42-.694.791-.835.232-.089.705-.059.946.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatUser);
export default ForwardRef;
