import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArchiveFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.433 2.042a4.334 4.334 0 0 0-1.702.67c-.766.521-1.323 1.306-1.6 2.256l-.108.372-.013 3.135-.013 3.135.111-.029c.062-.016.593-.038 1.181-.049.896-.016 1.122-.009 1.4.047a3.42 3.42 0 0 1 1.679.861c.162.152.596.683 1.045 1.279.815 1.083 1.023 1.296 1.487 1.522a2.534 2.534 0 0 0 2.2 0c.464-.226.672-.439 1.487-1.522.819-1.088 1.144-1.433 1.597-1.702.739-.438 1.119-.511 2.532-.485.585.011 1.114.033 1.175.049l.112.029-.012-3.115-.012-3.115-.106-.385c-.261-.948-.828-1.756-1.604-2.283a5.094 5.094 0 0 0-1.311-.599l-.338-.09-4.48-.007c-2.464-.004-4.582.008-4.707.026m3.533 4.012c.284.067.554.224.823.478l.209.198.245-.226c.303-.281.553-.41.912-.471.7-.12 1.35.221 1.674.878.146.295.151.319.15.727-.001.619-.039.686-1.286 2.244C12.5 11.372 12.491 11.38 12 11.38c-.491 0-.5-.008-1.693-1.498C9.061 8.325 9.022 8.257 9.021 7.64c-.001-.389.008-.44.126-.687.342-.723 1.06-1.077 1.819-.899M4.503 13.04c-1.026.182-1.947.936-2.301 1.885-.188.502-.201.669-.201 2.567-.001 1.954.013 2.12.233 2.659a3.046 3.046 0 0 0 1.615 1.615c.604.246.175.234 8.151.234 6.4 0 7.32-.007 7.581-.062a3.003 3.003 0 0 0 2.357-2.357c.091-.436.091-3.726 0-4.162a2.942 2.942 0 0 0-1.678-2.121c-.549-.258-.675-.278-1.72-.278-.871 0-.934.005-1.18.096a2.049 2.049 0 0 0-.715.419c-.074.069-.482.585-.906 1.148-.425.562-.877 1.119-1.006 1.237a4.315 4.315 0 0 1-1.792.97c-.441.119-1.378.126-1.821.014a4.167 4.167 0 0 1-1.623-.789c-.348-.273-.478-.426-1.283-1.496-.866-1.153-1.003-1.285-1.554-1.5-.222-.087-.306-.095-1.1-.104-.473-.005-.949.006-1.057.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArchiveFavourite);
export default ForwardRef;
