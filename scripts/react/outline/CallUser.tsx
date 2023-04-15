import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCallUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.656 2.28c-.927.129-1.716.688-2.112 1.497-.281.575-.341 1.06-.269 2.173.276 4.216 1.955 7.959 4.885 10.89 2.931 2.93 6.674 4.609 10.89 4.885.773.05 1.294.029 1.65-.067a2.828 2.828 0 0 0 1.963-1.958c.055-.193.072-.453.086-1.328.019-1.175-.008-1.484-.168-1.944a2.777 2.777 0 0 0-1.093-1.38c-.306-.197-2.563-1.106-2.954-1.188a2.728 2.728 0 0 0-2.475.719 5.627 5.627 0 0 0-.382.41l-.097.129-.42-.16c-1.539-.587-2.859-1.546-3.794-2.755a10.143 10.143 0 0 1-1.362-2.47l-.12-.326.267-.214c.675-.541 1.05-1.31 1.048-2.149 0-.498-.068-.727-.608-2.083-.37-.929-.534-1.29-.69-1.519A2.84 2.84 0 0 0 7.34 2.339c-.192-.054-.46-.07-1.34-.081-.605-.007-1.21.003-1.344.022m13 .001a2.752 2.752 0 0 0-2.112 1.496c-.209.426-.28.737-.28 1.223 0 .486.071.797.282 1.226.077.158.205.362.284.455.128.149.136.172.076.206-.144.081-.547.44-.732.652a3.967 3.967 0 0 0-.891 1.954c-.07.506-.054 1.098.033 1.287.137.295.381.46.684.46a.667.667 0 0 0 .494-.193c.211-.2.24-.302.269-.947.023-.507.043-.642.131-.871.246-.647.681-1.081 1.341-1.341.235-.092.321-.104.765-.104s.53.012.765.104c.66.26 1.095.694 1.341 1.341.088.229.108.364.131.871.019.434.044.633.091.72.313.582 1.079.559 1.356-.04.087-.189.103-.781.033-1.287a3.967 3.967 0 0 0-.891-1.954c-.184-.211-.588-.571-.73-.651-.058-.032-.046-.064.098-.245.36-.456.542-1.007.542-1.643 0-.657-.175-1.169-.575-1.688a2.78 2.78 0 0 0-2.505-1.031M7.008 3.815c.243.072.512.263.646.456.152.219 1.011 2.385 1.043 2.629.048.367-.134.836-.415 1.072-.069.058-.269.18-.444.272-.358.186-.496.324-.56.562-.051.192-.027.366.121.854.262.862.712 1.864 1.159 2.58a10.204 10.204 0 0 0 3.202 3.201c.733.458 1.816.941 2.633 1.174.495.141.613.157.799.107.243-.065.394-.216.571-.568.302-.6.645-.843 1.195-.846.294-.002.331.01 1.458.464.636.256 1.228.515 1.316.576.196.136.408.45.468.692.028.116.04.559.032 1.24-.012 1.032-.015 1.065-.11 1.259a1.312 1.312 0 0 1-.673.623c-.217.083-.272.086-1.049.064-3.769-.109-7.452-1.717-10.181-4.445A15.296 15.296 0 0 1 4.041 7.96c-.218-1.091-.354-2.951-.242-3.301a1.33 1.33 0 0 1 .792-.838c.213-.079 2.16-.084 2.417-.006m11.529.063c.25.122.463.334.586.585.14.284.139.791-.001 1.076-.459.932-1.79.932-2.243 0-.115-.236-.152-.655-.079-.885.12-.378.42-.694.791-.835.232-.089.705-.059.946.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallUser);
export default ForwardRef;