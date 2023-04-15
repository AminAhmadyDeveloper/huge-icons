import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignpostTop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.24 2.036a1.108 1.108 0 0 0-.668.584c-.065.144-.073.32-.084 1.73-.007.864.002 1.57.02 1.569.018 0 .698-.385 1.512-.856l1.48-.855v-.694c0-.783-.029-.915-.252-1.162-.273-.302-.373-.331-1.188-.34-.396-.005-.765.006-.82.024m4.688 2.569c-.119.022-1.96 1.063-6.04 3.417a816.837 816.837 0 0 0-6.072 3.522c-.36.242-.537.723-.406 1.102.033.096.522.975 1.086 1.954 1.127 1.955 1.204 2.059 1.599 2.184.192.06.262.065.44.027.165-.034 1.543-.812 6.188-3.493 3.288-1.896 6.028-3.495 6.091-3.553.062-.058.147-.171.189-.252.132-.258.85-2.987.85-3.233a.961.961 0 0 0-.466-.817c-.157-.091-2.825-.831-3.147-.872a1.2 1.2 0 0 0-.312.014m-3.927 10.859c-.781.452-1.443.841-1.472.865-.042.035-.05.509-.04 2.467.01 2.234.017 2.437.083 2.584.1.222.292.413.528.525.187.088.247.094.9.094s.713-.006.9-.094c.236-.112.428-.303.528-.525.067-.149.073-.381.083-3.45.009-2.65.001-3.29-.04-3.289-.028.001-.69.371-1.47.823'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostTop);
export default ForwardRef;
