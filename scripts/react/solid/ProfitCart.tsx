import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgProfitCart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.54 3.026c-1.672.216-3.004 1.385-3.423 3.005a4.653 4.653 0 0 0-.079 1.532 4.067 4.067 0 0 0 1.41 2.513c.303.25.778.539.961.585l.108.027.012-2.054.011-2.054.109-.221c.138-.283.427-.572.71-.71l.221-.109h12.84l.224.11c.268.132.606.475.728.74.086.187.088.226.099 2.24.01 1.713.021 2.05.067 2.05.097 0 .589-.281.89-.508.983-.739 1.573-1.944 1.571-3.207-.001-.92-.415-1.968-1.055-2.674-.449-.495-1.267-.98-1.984-1.177l-.34-.093-6.48-.005c-3.564-.003-6.534.002-6.6.01M6 13.098c0 4.297.013 6.161.044 6.31.157.75.798 1.391 1.548 1.548.297.062 8.519.062 8.816 0a2.062 2.062 0 0 0 1.548-1.548c.031-.149.044-2.013.044-6.31V7H6v6.098m6.587-2.738c.323.112.497.256 1.339 1.107.668.674.791.817.815.946.111.59-.369 1.062-.923.907-.158-.045-.269-.129-.624-.471l-.431-.416-.011 2.173-.012 2.174-.109.186a.74.74 0 0 1-1.262 0l-.109-.186-.012-2.174-.011-2.173-.431.416c-.355.342-.466.426-.624.471a.727.727 0 0 1-.933-.657.668.668 0 0 1 .048-.351c.036-.077.439-.508.895-.959.66-.654.874-.842 1.055-.927a1.796 1.796 0 0 1 1.34-.066'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProfitCart);
export default ForwardRef;
