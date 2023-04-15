import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLockDash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.397 2.038a4.791 4.791 0 0 0-3.871 3.128c-.219.624-.251.854-.274 1.92l-.022.987-.265.066a4.224 4.224 0 0 0-.63.239c-1.126.532-1.858 1.397-2.201 2.603l-.114.399v7.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.396.081.516.083 4.774.083s4.378-.002 4.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392v-7.24l-.091-.32c-.268-.943-.75-1.687-1.429-2.21-.34-.261-1.064-.623-1.425-.712l-.265-.065-.022-.987c-.023-1.066-.055-1.296-.274-1.92a4.71 4.71 0 0 0-4.291-3.144 6.55 6.55 0 0 0-.786.016m1.543 1.6a3.276 3.276 0 0 1 2.237 2.453c.045.219.063.533.063 1.107V8H8.76v-.802c0-.574.018-.888.063-1.107.258-1.251 1.212-2.218 2.477-2.513.371-.087 1.28-.053 1.64.06m-.535 9.743c.08.051.188.162.24.246.095.152.095.158.095 1.38v1.226l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172v-1.226c0-1.214.001-1.229.093-1.376.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLockDash);
export default ForwardRef;