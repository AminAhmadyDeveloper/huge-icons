import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCartArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.66 1.258a1.38 1.38 0 0 1-.147.038c-.25.055-.51.409-.512.695a.88.88 0 0 0 .211.522c.207.222.23.225 1.608.247 1.248.019 1.285.022 1.46.114.245.129.466.346.593.586l.107.2.021 5 .021 5 .111.378c.438 1.505 1.584 2.572 3.093 2.879.396.081.516.083 4.774.083s4.378-.002 4.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V7.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.064 5.064 0 0 0-1.311-.599l-.338-.091-5.538-.012c-4.311-.009-5.546-.023-5.57-.061a.56.56 0 0 1-.031-.21c-.001-.237-.146-.719-.313-1.038-.099-.19-.257-.393-.487-.626-.291-.294-.397-.372-.721-.527-.209-.1-.47-.203-.58-.229-.186-.044-2.623-.099-2.72-.061m11.745 6.123c.08.051.188.162.24.246l.095.153.02 2.191.02 2.191.36-.364c.41-.414.578-.518.84-.518a.73.73 0 0 1 .739.728c-.001.306-.11.453-.927 1.261-.672.664-.816.787-1.055.9-.263.124-.3.131-.737.131s-.474-.007-.737-.131c-.24-.114-.384-.237-1.075-.92-.503-.497-.825-.848-.872-.949a.735.735 0 0 1 .955-.998c.083.034.33.241.557.467l.409.406.011-2.197.012-2.198.093-.149c.233-.375.691-.484 1.052-.25M9.15 19.041a1.567 1.567 0 0 0-1.006.839c-.11.231-.124.3-.124.62 0 .311.015.394.113.604.143.309.452.617.767.764.207.097.29.112.6.112.311 0 .394-.015.604-.113.309-.143.617-.452.764-.767.097-.207.112-.29.112-.6 0-.311-.015-.394-.113-.604a1.68 1.68 0 0 0-.757-.757c-.258-.117-.703-.163-.96-.098m9 0a1.567 1.567 0 0 0-1.006.839c-.11.231-.124.3-.124.62 0 .311.015.394.113.604.143.309.452.617.767.764.207.097.29.112.6.112.311 0 .394-.015.604-.113.309-.143.617-.452.764-.767.097-.207.112-.29.112-.6 0-.311-.015-.394-.113-.604a1.68 1.68 0 0 0-.757-.757c-.258-.117-.703-.163-.96-.098'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCartArrowDown);
export default ForwardRef;
