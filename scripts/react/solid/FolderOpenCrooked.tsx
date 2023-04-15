import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolderOpenCrooked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.753 3.041a3.32 3.32 0 0 0-1.99 1.167 3.71 3.71 0 0 0-.721 1.609c-.048.269-.052 12.119-.005 12.323l.028.12.062-.14 1.451-3.3c.764-1.738 1.46-3.295 1.548-3.46a5.816 5.816 0 0 1 4.66-3.079c.306-.025 2.285-.041 5.015-.041h4.509l-.035-.19c-.244-1.332-1.157-2.351-2.417-2.696-.302-.083-.427-.089-2.518-.113-2.397-.029-2.366-.026-2.909-.274-.138-.064-.791-.445-1.451-.849-.66-.403-1.335-.792-1.5-.864-.499-.217-.839-.255-2.275-.249-.696.002-1.349.019-1.452.036M9.58 9.804a4.648 4.648 0 0 0-1.199.385 4.326 4.326 0 0 0-1.992 1.994A369.03 369.03 0 0 0 4.6 16.217c-1.242 2.829-1.641 3.773-1.612 3.82.087.14.533.459.872.624.713.345.202.319 6.18.319h5.3l.4-.11A4.433 4.433 0 0 0 18.301 19c.46-.714 3.502-6.051 3.58-6.281a2.45 2.45 0 0 0 .062-1.216c-.198-.843-.873-1.536-1.655-1.699-.257-.053-10.333-.054-10.708 0'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenCrooked);
export default ForwardRef;
