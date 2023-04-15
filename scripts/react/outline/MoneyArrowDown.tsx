import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M5.579 3.279A4.753 4.753 0 0 0 1.508 6.48c-.256.75-.248.569-.248 5.52 0 4.192.005 4.525.073 4.86.39 1.929 1.78 3.352 3.703 3.788.381.086.423.087 5.138.102 3.451.01 4.815.001 4.974-.032.678-.141.803-1.075.184-1.382-.146-.073-.349-.077-5.072-.096l-4.92-.02-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V7.34l.11-.32c.184-.538.4-.878.826-1.304.426-.426.766-.642 1.304-.826l.32-.11h13.32l.32.11c.538.184.878.4 1.304.826.428.427.644.769.825 1.304l.108.32.021 1.94.022 1.94.093.149a.747.747 0 0 0 1.168.15c.24-.24.251-.348.228-2.356-.018-1.579-.028-1.779-.104-2.127-.41-1.869-1.793-3.253-3.681-3.684l-.384-.088-6.34-.007c-3.487-.004-6.484.006-6.661.022m.088 3.786C5.303 7.177 5 7.602 5 8c0 .517.483 1 1 1s1-.483 1-1c0-.237-.12-.514-.303-.697-.281-.281-.63-.361-1.03-.238m5.993 2.213c-.884.107-1.633.623-2.092 1.442-.4.714-.4 1.846 0 2.56.526.939 1.385 1.451 2.432 1.451s1.906-.512 2.432-1.451c.4-.714.4-1.846 0-2.56-.575-1.026-1.636-1.578-2.772-1.442m.794 1.563c.29.109.596.415.705.705.176.471.068.975-.285 1.328a1.216 1.216 0 0 1-1.748 0c-.279-.278-.38-.549-.357-.954.021-.353.107-.547.355-.795.273-.272.473-.356.864-.362.16-.002.327.026.466.078m7.361 2.436a.8.8 0 0 0-.462.354l-.093.149-.011 2.394-.012 2.393-.414-.399c-.454-.436-.591-.509-.906-.479a.71.71 0 0 0-.648.728c0 .112.028.258.063.324.087.166 1.569 1.627 1.783 1.758.252.156.532.227.885.227s.633-.071.885-.227c.214-.131 1.696-1.592 1.783-1.758a.844.844 0 0 0 .063-.324.71.71 0 0 0-.648-.728c-.315-.03-.452.042-.907.481l-.416.4-.001-2.275c-.001-1.418-.017-2.343-.042-2.454a.747.747 0 0 0-.902-.564'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyArrowDown);
export default ForwardRef;
