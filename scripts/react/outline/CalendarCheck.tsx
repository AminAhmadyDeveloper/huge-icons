import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCalendarCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.815 1.277a.8.8 0 0 0-.461.352c-.079.128-.093.215-.107.639l-.017.492h-.305c-1.334.001-2.743.681-3.584 1.73-.658.821-.976 1.625-1.063 2.69-.029.347-.038 2.334-.028 5.96.014 5.425.015 5.441.102 5.824.438 1.924 1.859 3.313 3.788 3.703.338.068.701.073 5.86.073 5.159 0 5.522-.005 5.86-.073 1.929-.39 3.35-1.779 3.788-3.703.087-.383.088-.399.102-5.824.01-3.626.001-5.613-.028-5.96-.087-1.059-.408-1.873-1.063-2.69-.842-1.051-2.249-1.729-3.589-1.73h-.31v-.358c0-.518-.057-.739-.238-.92-.349-.349-.904-.279-1.168.147-.079.128-.093.215-.107.639l-.017.492H8.76l-.001-.37c-.001-.446-.052-.686-.179-.854-.159-.209-.502-.325-.765-.259m-.568 3.455c.014.424.028.511.107.639.354.573 1.223.44 1.362-.209.024-.113.044-.367.044-.564V4.24h6.47l.017.492c.014.424.028.511.107.639.354.573 1.223.44 1.362-.209a3.52 3.52 0 0 0 .044-.57v-.364l.39.025c.523.035.84.116 1.27.325a3.364 3.364 0 0 1 1.721 2.044c.046.163.074.454.088.928l.02.69H3.76v-.562c0-1.107.249-1.76.94-2.463a3.198 3.198 0 0 1 2.265-.971l.265-.004.017.492m12.984 9.478-.011 4.45-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H6.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32-.011-4.45-.011-4.45h16.484l-.011 4.45m-5.522-1.903c-.118.049-.485.444-1.67 1.797-1.5 1.712-1.638 1.849-1.77 1.746l-.957-.762a25.688 25.688 0 0 0-.999-.772.923.923 0 0 0-.324-.049c-.191 0-.26.02-.397.116a.76.76 0 0 0-.252.953c.1.208 1.951 1.696 2.338 1.88.242.114.294.124.682.123.474-.001.746-.082 1.051-.313.238-.18 3.169-3.529 3.274-3.739a.565.565 0 0 0 .061-.377.74.74 0 0 0-1.037-.603'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalendarCheck);
export default ForwardRef;