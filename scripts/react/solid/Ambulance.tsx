import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAmbulance = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 3.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v9.24l.09.327c.238.863.702 1.613 1.303 2.105l.181.149.066-.231c.345-1.197 1.471-2.195 2.723-2.413.406-.071 1.25-.027 1.597.082 1.26.398 2.18 1.397 2.437 2.649.035.17.063.399.063.51V19h3.043l-.014-6.27c-.015-6.916.005-6.381-.268-7.136a3.954 3.954 0 0 0-.85-1.339c-.638-.665-1.399-1.066-2.27-1.197-.297-.045-.832-.057-2.421-.053-1.122.003-2.142.02-2.267.038M15 12.077c0 2.796.006 5.083.013 5.083.008 0 .08-.097.162-.215.443-.643 1.292-1.196 2.099-1.367.345-.073 1.038-.073 1.42 0 1.26.241 2.359 1.272 2.683 2.519.034.129.07.243.079.253.03.03.269-.319.366-.534.178-.395.183-.512.17-3.656l-.012-2.98-.093-.231a2.994 2.994 0 0 0-.242-.451c-.182-.272-3.04-2.963-3.382-3.185-.426-.277-.488-.286-1.953-.303L15 6.994v5.083M6.405 7.381c.08.051.188.162.24.246.089.144.096.197.109.883l.014.73h2.464l.014-.73c.013-.686.02-.739.109-.883a.714.714 0 0 1 .642-.36c.282 0 .477.106.636.345l.107.162v4.459l-.121.172c-.166.236-.346.334-.619.334s-.453-.097-.619-.334l-.121-.172-.014-.736-.014-.737H6.768l-.014.737-.014.736-.121.172c-.166.237-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172V7.78l.093-.149c.233-.375.691-.484 1.052-.25m.175 9.666c-.721.138-1.381.801-1.536 1.545C4.789 19.816 5.751 21 7 21c1.08 0 2-.92 2-2 0-.523-.21-1.017-.596-1.404-.491-.49-1.127-.682-1.824-.549m11 0c-.721.138-1.381.801-1.536 1.545C15.789 19.816 16.751 21 18 21c1.08 0 2-.92 2-2 0-.523-.21-1.017-.596-1.404-.491-.49-1.127-.682-1.824-.549'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAmbulance);
export default ForwardRef;