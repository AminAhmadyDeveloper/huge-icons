import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.579 3.279A4.753 4.753 0 0 0 1.508 6.48c-.256.75-.248.569-.248 5.52 0 4.192.005 4.525.073 4.86.39 1.929 1.783 3.354 3.703 3.787.376.085.461.087 4.136.102 2.726.012 3.813.003 3.974-.03.68-.141.806-1.075.186-1.383-.145-.073-.33-.077-4.072-.096l-3.92-.02-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V7.34l.11-.32c.184-.538.4-.878.826-1.304.426-.426.766-.642 1.304-.826l.32-.11h13.32l.32.11c.538.184.878.4 1.304.826.427.426.642.767.826 1.304l.109.32.02 2.94.021 2.94.093.149c.363.585 1.228.441 1.367-.227.033-.163.042-.974.029-2.973-.016-2.632-.02-2.765-.102-3.133-.42-1.878-1.795-3.254-3.683-3.684l-.384-.088-6.34-.007c-3.487-.004-6.484.006-6.661.022m.088 3.786C5.303 7.177 5 7.602 5 8c0 .517.483 1 1 1s1-.483 1-1c0-.237-.12-.514-.303-.697-.281-.281-.63-.361-1.03-.238m5.993 2.213c-.884.107-1.633.623-2.092 1.442-.4.714-.4 1.846 0 2.56.526.939 1.385 1.451 2.432 1.451s1.906-.512 2.432-1.451c.4-.714.4-1.846 0-2.56-.575-1.026-1.636-1.578-2.772-1.442m.794 1.563c.29.109.596.415.705.705.176.471.068.975-.285 1.328a1.216 1.216 0 0 1-1.748 0c-.279-.278-.38-.549-.357-.954.021-.353.107-.547.355-.795.273-.272.473-.356.864-.362.16-.002.327.026.466.078m9.337 4.446a.893.893 0 0 0-.306.187c-.087.08-.789.87-1.562 1.755-1.384 1.587-1.522 1.723-1.654 1.622l-.849-.676c-.44-.351-.867-.689-.949-.751-.672-.506-1.524.259-1.098.987.071.121 2 1.654 2.217 1.762.319.158.542.201.912.175a1.726 1.726 0 0 0 1.02-.414c.189-.172 3.03-3.416 3.134-3.58.105-.166.105-.491-.001-.695a.763.763 0 0 0-.864-.372'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyCheck);
export default ForwardRef;
