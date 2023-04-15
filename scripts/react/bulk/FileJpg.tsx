import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileJpg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13 4.212c0 2.381.008 2.499.209 3.088a4.078 4.078 0 0 0 2.083 2.322c.159.074.45.185.648.245l.36.111 1.98.013c1.089.007 2.147.007 2.35.001l.371-.012-4.001-4-4-4v2.232m2.46 9.429c-1.118.119-1.823.951-1.83 2.159-.004.688.182 1.228.567 1.649.651.712 1.887.833 2.967.289a2.54 2.54 0 0 0 .391-.24l.127-.106-.011-.846-.011-.846-.95-.011-.95-.01v.761h1v.257c0 .237-.009.264-.113.338-.183.13-.522.248-.786.272-.515.048-.985-.22-1.18-.673-.177-.411-.176-1.247.001-1.601.199-.398.498-.595.948-.625.493-.032.835.129 1.012.476.055.108.106.156.165.156.152 0 .793-.134.793-.166 0-.142-.198-.511-.38-.707-.396-.427-.996-.607-1.76-.526m-7.472.064c-.015.016-.028.732-.028 1.592 0 .974-.016 1.62-.043 1.715-.051.185-.23.308-.451.308-.295 0-.469-.192-.521-.575a.884.884 0 0 0-.033-.166 3.782 3.782 0 0 0-.406.032c-.255.027-.401.061-.414.095-.011.029.008.191.043.361.136.666.584 1.013 1.308 1.013.576 0 1.042-.258 1.256-.694.152-.312.184-.738.172-2.306L8.86 13.7l-.422-.011c-.232-.006-.435.001-.45.016m1.802-.003c-.016.017-.03.991-.03 2.165V18h.88v-1.6l.49-.001c1.096-.002 1.54-.185 1.819-.753.1-.203.111-.267.109-.626-.002-.32-.02-.438-.089-.589a1.285 1.285 0 0 0-.673-.631c-.22-.085-.313-.093-1.356-.11-.616-.01-1.134-.005-1.15.012m2.092.842c.359.211.364.762.01.981-.12.074-.217.089-.696.106l-.556.02v-1.222l.557.02c.449.016.581.035.685.095'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileJpg);
export default ForwardRef;
