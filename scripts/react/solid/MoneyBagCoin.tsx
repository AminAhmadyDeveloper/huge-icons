import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyBagCoin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.585 2.061a2.148 2.148 0 0 0-1.523 1.543c-.117.494-.057.95.185 1.403l.124.233h7.258l.124-.233c.242-.453.302-.909.185-1.403a2.121 2.121 0 0 0-1.562-1.547c-.422-.1-.763-.058-1.518.184-.825.265-.891.264-1.718-.001-.736-.237-1.143-.284-1.555-.179m-1.52 4.966a6.108 6.108 0 0 0-2.149 2.574c-.186.429-1.528 4.702-1.64 5.219-.116.531-.143 1.445-.061 2.003.398 2.688 2.443 4.731 5.125 5.118.578.083 4.742.083 5.32 0 2.546-.368 4.498-2.204 5.069-4.771.127-.567.126-1.731-.001-2.316-.118-.545-1.456-4.82-1.648-5.263a6.103 6.103 0 0 0-2.15-2.566l-.398-.265-3.536.001-3.536.001-.395.265m4.742 5.122c.637.22 1.145.668 1.428 1.262.189.395.245.643.245 1.089 0 .446-.056.694-.245 1.089a2.52 2.52 0 0 1-1.454 1.281c-.277.095-.384.11-.781.11-.744 0-1.226-.202-1.764-.737-.241-.239-.339-.374-.467-.643a2.173 2.173 0 0 1-.249-1.1c0-.446.056-.694.245-1.089a2.474 2.474 0 0 1 3.042-1.262'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagCoin);
export default ForwardRef;