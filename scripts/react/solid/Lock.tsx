import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.397 2.038a4.791 4.791 0 0 0-3.871 3.128c-.219.624-.251.854-.274 1.92l-.022.987-.265.066a4.224 4.224 0 0 0-.63.239c-1.126.532-1.858 1.397-2.201 2.603l-.114.399v7.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.396.081.516.083 4.774.083s4.378-.002 4.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392v-7.24l-.091-.32c-.268-.943-.75-1.687-1.429-2.21-.34-.261-1.064-.623-1.425-.712l-.265-.065-.022-.987c-.023-1.066-.055-1.296-.274-1.92a4.71 4.71 0 0 0-4.291-3.144 6.55 6.55 0 0 0-.786.016m1.543 1.6a3.276 3.276 0 0 1 2.237 2.453c.045.219.063.533.063 1.107V8H8.76v-.802c0-.574.018-.888.063-1.107.258-1.251 1.212-2.218 2.477-2.513.371-.087 1.28-.053 1.64.06m-.557 9.405c.802.147 1.456.829 1.584 1.652C14.153 15.894 13.209 17 12 17a2.016 2.016 0 0 1-1.967-1.695c-.1-.642.099-1.244.563-1.709.489-.488 1.102-.678 1.787-.553'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLock);
export default ForwardRef;
