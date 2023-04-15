import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSdStorage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.214 1.282c-.861.08-1.659.388-2.414.93-.121.087-.959.898-1.862 1.803-1.736 1.739-1.893 1.924-2.219 2.607a5.567 5.567 0 0 0-.41 1.315c-.037.214-.049 1.531-.049 5.423 0 4.811.005 5.163.073 5.5.397 1.966 1.841 3.41 3.807 3.807.335.068.668.073 4.86.073s4.525-.005 4.86-.073c1.966-.397 3.41-1.841 3.807-3.807.069-.339.073-.734.073-6.86s-.004-6.521-.073-6.86c-.39-1.929-1.786-3.357-3.703-3.787-.372-.083-.477-.086-3.384-.095-1.65-.006-3.165.005-3.366.024M16.98 2.89c.538.184.878.4 1.304.826.426.426.642.766.826 1.304l.11.32v13.32l-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H7.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V8.06l.094-.299c.103-.329.272-.685.457-.961.169-.253 3.117-3.209 3.409-3.419.396-.283.861-.49 1.303-.578.097-.02 1.626-.033 3.397-.029l3.22.006.32.11m-6.165 1.387a.8.8 0 0 0-.462.354c-.092.147-.093.162-.093 1.369s.001 1.222.093 1.369c.357.574 1.223.443 1.363-.207.056-.261.057-2.079.001-2.321a.747.747 0 0 0-.902-.564m3 0a.8.8 0 0 0-.462.354c-.092.147-.093.162-.093 1.369s.001 1.222.093 1.369c.357.574 1.223.443 1.363-.207.056-.261.057-2.079.001-2.321a.747.747 0 0 0-.902-.564m3 0a.8.8 0 0 0-.462.354c-.092.147-.093.162-.093 1.369s.001 1.222.093 1.369c.357.574 1.223.443 1.363-.207.056-.261.057-2.079.001-2.321a.747.747 0 0 0-.902-.564'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSdStorage);
export default ForwardRef;