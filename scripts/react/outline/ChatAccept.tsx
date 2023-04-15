import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatAccept = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.34 2.279c-1.896.127-3.693.801-5.256 1.973-.501.375-1.468 1.344-1.839 1.84-1.002 1.341-1.608 2.77-1.893 4.46-.081.481-.086.668-.102 3.548-.017 3.153-.005 3.474.148 4.074.221.864.584 1.486 1.263 2.165.679.679 1.301 1.042 2.165 1.263.609.155.895.164 5.054.148 3.864-.014 4.04-.018 4.54-.099a9.927 9.927 0 0 0 2.84-.89c1.051-.513 1.77-1.029 2.621-1.88s1.367-1.57 1.88-2.621c1.616-3.305 1.23-7.202-1.006-10.164-1.297-1.719-3.215-2.988-5.343-3.538-.906-.234-1.399-.282-3.072-.297a40.85 40.85 0 0 0-2 .018m3.98 1.576c1.82.323 3.403 1.158 4.628 2.438 1.167 1.222 1.903 2.696 2.199 4.407.097.562.097 2.038 0 2.6a8.5 8.5 0 0 1-.847 2.529 8.25 8.25 0 0 1-6.4 4.37c-.276.031-1.656.041-4.46.033l-4.06-.012-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 18l-.132-.38v-3.26c0-3.596-.005-3.505.263-4.516C3.64 7.596 5.221 5.67 7.342 4.61c.736-.368 1.725-.674 2.478-.766.198-.024.405-.051.46-.06a58.38 58.38 0 0 1 1.88-.007c1.462.008 1.848.022 2.16.078m.389 5.452c-.118.049-.485.443-1.668 1.794-.834.953-1.553 1.744-1.597 1.758a.256.256 0 0 1-.168-.021 24.927 24.927 0 0 1-.979-.76 24.495 24.495 0 0 0-.984-.762.924.924 0 0 0-.316-.052.716.716 0 0 0-.641.363.763.763 0 0 0-.004.741c.077.124 1.663 1.433 2.11 1.742.413.285 1.135.332 1.618.105.143-.067.322-.175.398-.239.076-.064.825-.901 1.665-1.86 1.048-1.197 1.543-1.792 1.577-1.895.201-.609-.412-1.163-1.011-.914'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatAccept);
export default ForwardRef;
