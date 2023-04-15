import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgImageAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.282a4.698 4.698 0 0 0-1.593.477c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.124-.141 1.971-.56 2.791-1.38.679-.679 1.042-1.301 1.263-2.165.154-.603.162-.901.15-5.214-.012-4.13-.013-4.182-.094-4.319a1.003 1.003 0 0 0-.249-.257c-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.342.24-.328.155-.351 2.245l-.02 1.849-1.403-.932c-1.891-1.257-2.142-1.36-3.317-1.36-.573 0-.729.014-.994.086a5.2 5.2 0 0 0-1.34.633c-.157.11-1.026.948-2.128 2.053-1.024 1.027-1.958 1.943-2.075 2.036a4.13 4.13 0 0 1-1.744.788c-.525.098-1.315.064-1.79-.078-.591-.176-.839-.314-2.28-1.272l-1.391-.925.011-4.564.011-4.563.132-.38c.186-.535.404-.883.804-1.284.401-.4.749-.618 1.284-.804l.38-.132 4.42-.02c4.898-.022 4.539-.001 4.774-.28.292-.347.21-.85-.18-1.108l-.168-.112-4.203-.005c-2.312-.003-4.35.009-4.53.027m13.318-.004a.883.883 0 0 0-.481.374c-.062.112-.071.277-.082 1.355l-.012 1.228-1.231.012-1.231.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.099.028.593.045 1.309.045h1.15v1.15c0 .668.018 1.212.042 1.299.108.39.52.618.92.51.22-.059.454-.287.513-.5.028-.099.045-.593.045-1.309V5.76h1.15c.716 0 1.21-.017 1.309-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.231-.013-1.231-.012-.012-1.228c-.011-1.152-.017-1.235-.094-1.366a.807.807 0 0 0-.847-.363M7.96 6.062c-.418.089-.891.352-1.219.677a2.476 2.476 0 0 0 .001 3.525 2.486 2.486 0 0 0 3.52-.002 2.486 2.486 0 0 0 0-3.522 2.511 2.511 0 0 0-2.302-.678'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageAdd);
export default ForwardRef;
