import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgZoom = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.493 2.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.444-.056 10.652 0 11.096.141 1.124.56 1.971 1.38 2.791.532.532.929.806 1.51 1.043.755.308 1.237.378 2.593.378h.987l.212-.111a.732.732 0 0 0 .043-1.28l-.186-.109-1.22-.022-1.22-.022-.371-.124a3.075 3.075 0 0 1-1.293-.808A3.077 3.077 0 0 1 3.912 18l-.132-.38V6.38L3.912 6c.186-.535.404-.883.804-1.284.401-.4.749-.618 1.284-.804l.38-.132h11.24l.374.131c.541.188.892.408 1.29.805.4.4.62.754.802 1.29.125.367.128.391.151 1.314.022.886.028.949.115 1.101.148.257.332.359.648.359.335 0 .516-.109.661-.398.094-.188.099-.232.099-.901 0-.387-.018-.85-.041-1.029a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.475-.047-10.484-.045-10.963.002m7.938 6c-2.906.231-5.354 2.362-6.014 5.237-.687 2.992.79 6.119 3.543 7.501 2.277 1.143 4.938.926 7.019-.57l.239-.172.681.679c.426.424.737.702.83.74a.765.765 0 0 0 .805-.133c.21-.184.289-.603.162-.857-.035-.07-.369-.435-.742-.81l-.678-.683.077-.097c.201-.259.496-.737.677-1.098 1.123-2.24.918-4.87-.54-6.94-.34-.482-1.081-1.223-1.56-1.56a6.762 6.762 0 0 0-4.499-1.237m1.629 1.574c2.082.46 3.639 2.027 4.089 4.115.099.459.099 1.597 0 2.056-.382 1.773-1.577 3.202-3.219 3.849-.722.284-1.044.341-1.93.342-.718 0-.814-.009-1.211-.109-1.266-.32-2.337-1.044-3.07-2.076-.287-.404-.654-1.177-.774-1.634-.335-1.267-.222-2.515.332-3.66.544-1.122 1.311-1.895 2.423-2.44a4.817 4.817 0 0 1 1.48-.484c.409-.068 1.493-.044 1.88.041'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgZoom);
export default ForwardRef;
