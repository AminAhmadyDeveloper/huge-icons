import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrackPlayRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.211 8.96c-.47.098-.921.47-1.094.9l-.097.24v3.8l.096.24c.134.333.497.694.824.819.281.107.749.128 1 .044.088-.03.928-.438 1.866-.907 1.872-.937 1.96-.995 2.181-1.446.102-.208.113-.27.113-.65 0-.383-.01-.441-.117-.658-.217-.442-.31-.503-2.157-1.428a61.29 61.29 0 0 0-1.834-.897 1.806 1.806 0 0 0-.781-.057m7.596 8.328c-.376.083-.606.483-.517.902.037.176.101.251.843 1l.804.811-.804.809c-.864.871-.921.955-.882 1.295a.741.741 0 0 0 1.02.594c.095-.04.435-.347.939-.85l.79-.788.77.768c.795.793.93.892 1.219.89.173-.001.439-.112.539-.225a.918.918 0 0 0 .192-.514c0-.277-.106-.421-.891-1.21l-.767-.771.787-.789c.503-.505.81-.844.85-.939a.741.741 0 0 0-.594-1.02c-.34-.039-.424.018-1.295.882l-.809.804-.811-.804c-.652-.646-.837-.809-.95-.831l-.2-.04a.841.841 0 0 0-.233.026'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPlayRemove);
export default ForwardRef;
