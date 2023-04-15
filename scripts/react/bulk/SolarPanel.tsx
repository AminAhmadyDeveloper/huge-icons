import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSolarPanel = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.86 2.042c-.443.09-.793.289-1.1.626-.157.172-.326.469-.78 1.374-.319.635-.58 1.165-.58 1.177 0 .011.922.021 2.05.021H8.5l.338-1.55c.185-.853.345-1.582.354-1.62.016-.065-.054-.07-1.077-.066-.602.003-1.167.02-1.255.038m3.881.007c-.01.028-.163.717-.341 1.531a294.93 294.93 0 0 1-.346 1.57l-.023.09h3.935l-.025-.11-.356-1.61-.331-1.5-1.248-.011c-.978-.008-1.252.001-1.265.04m4.07.038c.012.051.172.781.355 1.623l.334 1.53h2.05c1.128 0 2.05-.01 2.05-.021 0-.012-.261-.542-.58-1.177-.62-1.236-.774-1.462-1.174-1.718-.436-.28-.539-.298-1.861-.315l-1.195-.015.021.093M3.465 7.079a2.77 2.77 0 0 0-.193.62c-.146.945.394 1.848 1.311 2.189.223.083.315.089 1.561.103l1.324.015.11-.533c.12-.577.531-2.475.568-2.623l.023-.09H3.611l-.146.319m5.984.811c-.137.621-.301 1.35-.364 1.62l-.114.49h3.015c2.385 0 3.014-.01 3.012-.05a7.166 7.166 0 0 0-.1-.47c-.053-.231-.21-.937-.348-1.57l-.25-1.15H9.699l-.25 1.13m6.407-1.032c.035.139.433 1.979.565 2.615l.111.533 1.324-.015c1.241-.014 1.339-.021 1.558-.102a2.047 2.047 0 0 0 1.25-1.289c.052-.153.074-.336.074-.6 0-.401-.031-.534-.228-.97l-.122-.27h-4.557l.025.098M12.7 13.316a1.005 1.005 0 0 0-.265.189c-.058.063-.781 1.018-1.608 2.122-.968 1.294-1.519 2.065-1.55 2.168-.095.315.087.718.391.869.137.069.282.078 1.484.096l1.333.02-1.079 1.44c-1.171 1.563-1.206 1.625-1.121 1.964.123.488.711.71 1.139.43.05-.033.802-1.008 1.67-2.167 1.712-2.283 1.731-2.313 1.63-2.648a.803.803 0 0 0-.422-.484c-.147-.066-.288-.073-1.472-.074l-1.31-.001 1.073-1.432c.591-.787 1.095-1.492 1.12-1.566a.675.675 0 0 0-.029-.542c-.181-.392-.607-.559-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSolarPanel);
export default ForwardRef;