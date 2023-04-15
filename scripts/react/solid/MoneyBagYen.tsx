import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyBagYen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.585 2.061a2.148 2.148 0 0 0-1.523 1.543c-.117.494-.057.95.185 1.403l.124.233h7.258l.124-.233c.242-.453.302-.909.185-1.403a2.121 2.121 0 0 0-1.562-1.547c-.422-.1-.763-.058-1.518.184-.825.265-.891.264-1.718-.001-.736-.237-1.143-.284-1.555-.179m-1.52 4.966a6.108 6.108 0 0 0-2.149 2.574c-.186.429-1.528 4.702-1.64 5.219-.116.531-.143 1.445-.061 2.003.398 2.688 2.443 4.731 5.125 5.118.578.083 4.742.083 5.32 0 2.546-.368 4.498-2.204 5.069-4.771.127-.567.126-1.731-.001-2.316-.118-.545-1.456-4.82-1.648-5.263a6.103 6.103 0 0 0-2.15-2.566l-.398-.265-3.536.001-3.536.001-.395.265m2.309 3.322c.089.051.346.401.866 1.18.407.61.749 1.109.76 1.109.011 0 .349-.495.751-1.1.772-1.162.836-1.233 1.159-1.282.484-.072.931.409.822.884-.024.102-.331.601-.845 1.37a46.444 46.444 0 0 0-.807 1.23c0 .011.242.02.537.02.58 0 .701.027.877.193a.69.69 0 0 1 .237.547.69.69 0 0 1-.237.547c-.182.172-.294.193-1.037.193h-.697v.52h.697c.743 0 .855.021 1.037.193a.69.69 0 0 1 .237.547.69.69 0 0 1-.237.547c-.182.172-.294.193-1.034.193h-.694l-.013.997-.013.996-.121.172c-.166.237-.346.334-.619.334s-.453-.097-.619-.334l-.121-.172-.013-.996-.013-.997h-.694c-.74 0-.852-.021-1.034-.193a.69.69 0 0 1-.237-.547.69.69 0 0 1 .237-.547c.182-.172.294-.193 1.037-.193h.697v-.52h-.697c-.743 0-.855-.021-1.037-.193a.69.69 0 0 1-.237-.547.69.69 0 0 1 .237-.547c.176-.166.297-.193.877-.193.295 0 .537-.009.537-.02 0-.012-.363-.565-.807-1.23-.514-.769-.821-1.268-.845-1.37-.139-.606.557-1.104 1.106-.791'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagYen);
export default ForwardRef;