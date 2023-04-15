import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.433 2.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.385.079.537.083 2.909.083 1.643 0 2.605-.015 2.803-.045l.302-.045.001-1.985c.001-2.153.025-2.577.179-3.161.122-.463.498-1.241.775-1.605.255-.336.797-.857 1.121-1.076a5.034 5.034 0 0 1 2.228-.802c.218-.022 1.29-.039 2.382-.04l1.986-.001.046-.33c.033-.235.042-1.368.034-3.93l-.013-3.6-.106-.385a4.032 4.032 0 0 0-1.604-2.283 5.079 5.079 0 0 0-1.311-.599l-.338-.091-5.48-.007c-3.014-.003-5.582.009-5.707.028m3.787 4.166c.044.022.462.42.93.885l.85.845.83-.828c.533-.532.883-.85.979-.89a.735.735 0 0 1 1.031.679.84.84 0 0 1-.064.312c-.035.07-.435.502-.89.958l-.825.83.845.85c.466.468.875.908.91.978.122.244.065.603-.131.826a.812.812 0 0 1-.525.226c-.306 0-.427-.09-1.31-.971l-.849-.847-.871.865c-.892.887-.979.952-1.281.953-.226 0-.521-.194-.639-.42-.076-.146-.083-.523-.012-.66.029-.055.432-.482.896-.95l.844-.85-.844-.85c-.464-.467-.867-.895-.896-.95-.072-.14-.064-.514.014-.665.082-.158.282-.328.421-.359.059-.012.125-.029.147-.037.06-.021.348.025.44.07m6.188 8.596c-.332.055-.884.279-1.194.485a3.828 3.828 0 0 0-1.013 1.064 4.138 4.138 0 0 0-.294.655l-.126.371-.013 1.54a93.7 93.7 0 0 0 0 1.9l.012.36 3.153-3.14c1.733-1.727 3.17-3.172 3.191-3.21.037-.066-.057-.07-1.733-.065-.974.002-1.866.02-1.983.04'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileRemove);
export default ForwardRef;