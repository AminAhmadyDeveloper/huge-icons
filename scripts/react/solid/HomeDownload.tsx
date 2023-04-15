import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeDownload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.52 2.025a4.519 4.519 0 0 0-1.682.622c-.181.116-3.694 2.984-5.253 4.289-.865.724-1.349 1.53-1.526 2.539-.088.499-.088 8.671 0 9.17a4.017 4.017 0 0 0 3.168 3.272c.398.081.507.083 5.773.083s5.375-.002 5.773-.083a4.017 4.017 0 0 0 3.168-3.272c.088-.499.088-8.671 0-9.17-.177-1.009-.661-1.815-1.526-2.539-1.559-1.305-5.072-4.173-5.253-4.289a4.586 4.586 0 0 0-1.202-.525c-.335-.084-1.124-.138-1.44-.097m.885 6.356c.08.051.188.162.24.246l.095.153.02 3.191.02 3.191.38-.386c.209-.211.452-.418.54-.459.498-.233 1.062.113 1.059.651-.001.307-.11.453-.947 1.281-.691.683-.835.806-1.075.92-.263.124-.3.131-.737.131s-.474-.007-.737-.131c-.24-.114-.384-.237-1.075-.92-.503-.497-.825-.848-.872-.949-.232-.499.115-1.062.652-1.059.269.001.462.12.872.535l.38.386.02-3.191.02-3.191.093-.149c.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeDownload);
export default ForwardRef;
