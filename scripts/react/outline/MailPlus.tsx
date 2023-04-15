import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMailPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.811 2.278a.883.883 0 0 0-.481.374c-.058.106-.072.255-.083.854l-.013.726-.73.014c-.721.014-.732.015-.899.126-.294.194-.413.501-.324.832.059.218.288.453.5.511.087.025.452.045.809.045h.65v.65c0 .358.02.722.045.809.059.213.293.441.513.5.4.108.812-.12.92-.51.023-.082.042-.441.042-.799v-.65h.65c.358 0 .722-.02.809-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832-.167-.111-.178-.112-.899-.126l-.73-.014-.013-.726c-.012-.645-.022-.741-.095-.865a.807.807 0 0 0-.847-.363M4.555 6.281a4.123 4.123 0 0 0-1.713.649c-.307.207-.847.791-1.057 1.142a4.286 4.286 0 0 0-.503 1.421c-.058.43-.058 8.584 0 9.014.059.433.27 1.031.503 1.422.262.442.844 1.024 1.286 1.286.391.233.989.444 1.422.503.432.058 10.582.058 11.014 0a4.292 4.292 0 0 0 1.422-.503c.442-.262 1.024-.844 1.286-1.286.233-.391.444-.989.503-1.422.058-.43.058-8.584 0-9.014a4.286 4.286 0 0 0-.503-1.421c-.21-.351-.75-.935-1.057-1.142a4.67 4.67 0 0 0-1.23-.562l-.388-.107-5.36-.006c-2.948-.003-5.479.008-5.625.026m11.216 1.608c.657.263 1.077.684 1.343 1.346l.106.265v9l-.109.271c-.289.723-.848 1.225-1.569 1.408-.36.092-10.724.092-11.084 0-.721-.183-1.28-.685-1.569-1.408L2.78 18.5v-9l.106-.265c.306-.761.907-1.283 1.654-1.435.088-.017 2.59-.029 5.56-.026l5.4.006.271.109m-10 3.394a.913.913 0 0 0-.286.188.718.718 0 0 0-.116.923c.052.084.615.533 1.521 1.213 1.701 1.277 1.816 1.354 2.242 1.5.296.102.38.113.868.113s.572-.011.868-.113c.426-.146.541-.223 2.242-1.5 1.587-1.191 1.629-1.232 1.629-1.607 0-.273-.098-.453-.334-.619-.145-.102-.206-.12-.406-.117-.291.004-.18-.068-1.994 1.291-.938.703-1.486 1.087-1.605 1.126a1.568 1.568 0 0 1-.4.059c-.121 0-.301-.027-.4-.059-.119-.039-.667-.423-1.605-1.126a90.25 90.25 0 0 0-1.58-1.168.854.854 0 0 0-.644-.104'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailPlus);
export default ForwardRef;
