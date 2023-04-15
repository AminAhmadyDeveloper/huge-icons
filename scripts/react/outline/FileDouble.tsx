import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.45.057 12.434.056 12.985-.001a4.744 4.744 0 0 0 4.281-4.281c.056-.541.056-6.333 0-6.874a4.744 4.744 0 0 0-4.281-4.281c-.237-.025-1.503-.042-3.041-.042H12.76v-.731c0-.402-.018-.878-.041-1.057a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.465-.046-2.49-.044-2.963.002m3.501 1.628c.54.188.891.407 1.29.805.397.398.617.749.805 1.29l.131.374.011 7.931.01 7.931-2.93-.011-2.931-.011-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38V5.38L2.912 5c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 4.214 3.29c.308-.204.858-.429 1.194-.487.117-.02.887-.033 1.712-.029l1.5.007.374.13M5.815 5.278c-.484.115-.717.726-.432 1.13.222.314.293.33 1.486.345 1.253.015 1.427-.009 1.65-.232.399-.399.212-1.098-.33-1.235-.206-.051-2.164-.058-2.374-.008m0 3c-.484.115-.717.726-.432 1.13.222.314.293.33 1.486.345 1.253.015 1.427-.009 1.65-.232.399-.399.212-1.098-.33-1.235-.206-.051-2.164-.058-2.374-.008m12.934.561a3.128 3.128 0 0 1 1.593.926c.439.462.676.891.819 1.486.075.314.078.483.078 3.749s-.003 3.435-.078 3.749a3.267 3.267 0 0 1-2.412 2.412c-.311.074-.481.078-3.159.079h-2.83V8.76h2.83c2.678.001 2.848.005 3.159.079m-2.934 2.439c-.484.115-.717.726-.432 1.13.222.314.293.33 1.486.345 1.253.015 1.427-.009 1.65-.232.399-.399.212-1.098-.33-1.235-.206-.051-2.164-.058-2.374-.008m0 3c-.484.115-.717.726-.432 1.13.222.314.293.33 1.486.345 1.253.015 1.427-.009 1.65-.232.399-.399.212-1.098-.33-1.235-.206-.051-2.164-.058-2.374-.008'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileDouble);
export default ForwardRef;