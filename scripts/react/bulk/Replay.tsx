import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgReplay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.211 8.96c-.47.098-.921.47-1.094.9l-.097.24v3.8l.096.24c.134.333.497.694.824.819.281.107.749.128 1 .044.088-.03.928-.438 1.866-.907 1.872-.937 1.96-.995 2.181-1.446.102-.208.113-.27.113-.65 0-.383-.01-.441-.117-.658-.217-.442-.31-.503-2.157-1.428a61.29 61.29 0 0 0-1.834-.897 1.806 1.806 0 0 0-.781-.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReplay);
export default ForwardRef;
