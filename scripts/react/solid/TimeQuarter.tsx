import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTimeQuarter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.31 1.283c-4.667.28-8.629 3.603-9.753 8.177-.242.987-.388 2.534-.28 2.965.147.585.78.798 1.221.411.211-.185.254-.363.277-1.156a9.14 9.14 0 0 1 2.038-5.5A12.01 12.01 0 0 1 6.22 4.779a9.473 9.473 0 0 1 4.421-1.926c.643-.101 2.075-.101 2.718 0 2.031.32 3.799 1.223 5.23 2.673 1.351 1.368 2.187 3.009 2.537 4.981.123.693.133 2.192.02 2.873-.157.944-.478 1.967-.853 2.712-1.217 2.426-3.357 4.17-5.949 4.849-.749.196-1.22.263-2.084.295-.83.031-.921.055-1.114.284a.738.738 0 0 0-.027.912c.199.275.323.309 1.101.303 2.556-.017 5.164-1.064 7.054-2.832 1.899-1.775 3.014-3.92 3.392-6.523.096-.664.096-2.096 0-2.76-.373-2.567-1.481-4.721-3.326-6.464a10.788 10.788 0 0 0-5.683-2.773c-.354-.055-1.615-.152-1.777-.137-.033.003-.29.02-.57.037m.224 8.774a2.08 2.08 0 0 0-1.255.936l-.139.242-2.183.013-2.183.012-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.106.03.854.045 2.259.046l2.1.001.139.243c.16.279.498.609.773.755l.188.1v1.1c0 .633.018 1.163.042 1.249.108.39.52.618.92.51.22-.059.454-.287.513-.5.028-.098.045-.584.046-1.259l.001-1.1.243-.139c1.13-.647 1.328-2.196.399-3.125a1.969 1.969 0 0 0-1.87-.539M2.3 14.915c-.405.251-.481.617-.245 1.179.22.526.426.706.803.706a.708.708 0 0 0 .68-.45c.086-.206.077-.387-.033-.682-.158-.417-.258-.583-.432-.709-.14-.101-.201-.119-.409-.119-.168 0-.281.023-.364.075m2.108 3.288c-.246.125-.378.315-.4.575-.009.117.004.278.03.357.059.177.595.729.785.809a.734.734 0 0 0 .846-.198.714.714 0 0 0 .103-.84c-.067-.131-.402-.478-.619-.641a.726.726 0 0 0-.745-.062m3.142 2.28a.732.732 0 0 0-.319.926c.101.229.279.37.675.536.499.21.826.174 1.083-.119a.66.66 0 0 0 .155-.679c-.081-.277-.211-.393-.657-.586-.431-.187-.69-.209-.937-.078'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeQuarter);
export default ForwardRef;