import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFilterTwoLineVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.811 2.278a.883.883 0 0 0-.481.374c-.061.112-.072.274-.082 1.292l-.012 1.165-.168.049a3.705 3.705 0 0 0-.95.511 2.998 2.998 0 0 0-1.054 1.74c-.091.438-.093 2.736-.002 3.172a2.993 2.993 0 0 0 2.357 2.357c1.601.331 3.183-.729 3.519-2.357.085-.407.088-2.751.005-3.141-.142-.671-.344-1.04-.843-1.542-.368-.371-.76-.619-1.168-.74l-.168-.049-.012-1.165c-.011-1.089-.017-1.173-.094-1.303a.807.807 0 0 0-.847-.363m8 0a.883.883 0 0 0-.481.374c-.064.118-.071.342-.081 2.76-.008 1.753.003 2.683.031 2.788a.743.743 0 0 0 1.245.325.806.806 0 0 0 .192-.315c.032-.117.042-.944.034-2.798-.011-2.57-.013-2.635-.093-2.771a.807.807 0 0 0-.847-.363m-.308 8.762c-1.032.187-1.947.936-2.301 1.885-.179.478-.201.704-.201 2.067-.001 1.394.026 1.655.222 2.145.313.78 1.174 1.566 1.887 1.721l.13.028v1.087c0 .67.017 1.148.045 1.246.059.213.293.441.513.5.4.108.812-.12.92-.51.024-.086.042-.61.042-1.231v-1.082l.23-.07c.402-.124.726-.335 1.11-.722.5-.505.701-.873.843-1.544.083-.39.08-2.734-.005-3.141a2.91 2.91 0 0 0-1.076-1.755 3.635 3.635 0 0 0-1.106-.567c-.265-.073-.986-.106-1.253-.057m-7.692 4.238a.883.883 0 0 0-.481.374c-.064.118-.071.342-.081 2.76-.008 1.753.003 2.683.031 2.788a.743.743 0 0 0 1.245.325.806.806 0 0 0 .192-.315c.032-.117.042-.944.034-2.798-.011-2.57-.013-2.635-.093-2.771a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterTwoLineVertical);
export default ForwardRef;