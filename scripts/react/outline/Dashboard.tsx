import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDashboard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M5.579 1.279C3.458 1.47 1.763 3.011 1.333 5.14c-.069.339-.073.734-.073 6.86s.004 6.521.073 6.86c.397 1.966 1.841 3.41 3.807 3.807.339.069.734.073 6.86.073s6.521-.004 6.86-.073c1.966-.397 3.41-1.841 3.807-3.807.069-.339.073-.734.073-6.86s-.004-6.521-.073-6.86c-.39-1.929-1.778-3.349-3.703-3.788l-.384-.088-6.34-.007c-3.487-.004-6.484.006-6.661.022M18.98 2.89c.538.184.878.4 1.304.826.426.426.642.766.826 1.304l.11.32v13.32l-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H5.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V5.34l.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.501-.191.28-.186 7.248-.178l6.56.007.32.11m-7.165 3.387a.8.8 0 0 0-.462.354l-.093.149v10.44l.093.149c.357.574 1.223.443 1.363-.207.059-.278.06-10.062.001-10.321a.747.747 0 0 0-.902-.564m-5 2a.8.8 0 0 0-.462.354l-.093.149v6.44l.093.149c.357.574 1.223.443 1.363-.207.059-.275.06-6.065.001-6.321a.747.747 0 0 0-.902-.564m10 0a.8.8 0 0 0-.462.354l-.093.149v6.44l.093.149c.357.574 1.223.443 1.363-.207.059-.275.06-6.065.001-6.321a.747.747 0 0 0-.902-.564'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDashboard);
export default ForwardRef;