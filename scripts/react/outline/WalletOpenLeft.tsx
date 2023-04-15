import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletOpenLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.498 1.284c-2.234.236-3.984 2.011-4.216 4.279-.057.551-.058 12.535-.001 12.985.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.056-.442.056-8.654 0-9.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018-.81-.401-1.417-.516-2.723-.518l-.683-.001-.103-.417c-.474-1.915-2.14-3.335-4.154-3.541-.486-.05-6.461-.048-6.939.002m7.251 1.555c.791.19 1.477.67 1.965 1.374.155.224.368.687.422.917l.026.11H2.838l.026-.11c.054-.23.267-.693.422-.917.482-.695 1.17-1.181 1.946-1.372.29-.071.514-.075 3.748-.078 3.291-.002 3.454.001 3.769.076m6.245 4.072c.541.188.892.408 1.29.805.399.4.619.752.803 1.29.127.371.129.382.145 1.301l.016.927-1.834.017c-1.927.018-1.983.023-2.454.217-.674.276-1.2.798-1.488 1.475a2.802 2.802 0 0 0 0 2.114 2.734 2.734 0 0 0 1.488 1.475c.471.194.527.199 2.454.217l1.834.017-.016.927c-.016.919-.018.93-.145 1.301a3.06 3.06 0 0 1-.803 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38-.011-5.931-.011-5.93 7.931.01 7.931.011.374.131M21.24 14v1.24h-1.738c-1.665 0-1.748-.004-1.962-.083-.819-.307-1.045-1.408-.418-2.035.358-.359.351-.358 2.368-.36l1.75-.002V14'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletOpenLeft);
export default ForwardRef;
