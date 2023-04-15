import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBasketBall = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.52 1.265A10.75 10.75 0 0 0 5.1 3.763C4.672 4.12 3.839 4.98 3.513 5.4a11.087 11.087 0 0 0-1.956 4.06c-.224.912-.291 1.499-.291 2.54s.067 1.628.291 2.54a11.158 11.158 0 0 0 1.952 4.056c.36.464 1.264 1.382 1.735 1.762 1.534 1.238 3.336 2.012 5.376 2.308.664.096 2.096.096 2.76 0 2.008-.292 3.826-1.064 5.316-2.257a14.575 14.575 0 0 0 1.674-1.669c1.223-1.509 1.999-3.32 2.296-5.36.105-.721.096-2.136-.019-2.88-.292-1.895-1.029-3.638-2.152-5.087-.335-.433-1.163-1.29-1.595-1.65a10.704 10.704 0 0 0-4.81-2.3 11.809 11.809 0 0 0-2.57-.198m-.28 5.755v4.22H8.298l-.09-.656C7.954 8.743 7.268 7.049 6.2 5.62a8.146 8.146 0 0 1-.347-.485c-.022-.055.637-.584 1.107-.888a9.636 9.636 0 0 1 2.62-1.17c.525-.139 1.223-.267 1.49-.273l.17-.004v4.22m2.26-4.141a9.38 9.38 0 0 1 3.542 1.369c.467.303 1.127.832 1.105.887a6.96 6.96 0 0 1-.34.474c-1.064 1.412-1.76 3.132-2.015 4.975l-.09.656H12.76V2.8h.13c.072 0 .346.035.61.079M5.22 6.838a9.001 9.001 0 0 1 1.182 2.467 10.5 10.5 0 0 1 .34 1.645l.028.29H2.8v-.105c0-.233.132-.986.261-1.488a9.257 9.257 0 0 1 1.481-3.111c.19-.258.232-.294.284-.251.034.028.211.277.394.553m14.479.045c.803 1.202 1.352 2.709 1.483 4.067l.028.29h-3.98l.028-.29c.147-1.517.84-3.257 1.795-4.505l.164-.215.114.135c.062.074.228.307.368.518M6.76 12.845c0 .152-.124.927-.202 1.264-.289 1.243-.955 2.641-1.691 3.548l-.095.118-.227-.306c-.658-.89-1.215-2.052-1.481-3.089-.117-.456-.264-1.281-.264-1.484v-.136h3.96v.085m4.48 4.135v4.22h-.156c-.22 0-.991-.137-1.459-.259-1.188-.31-2.462-.96-3.457-1.762-.183-.148-.325-.289-.315-.314.01-.025.166-.243.347-.485 1.066-1.426 1.754-3.127 2.008-4.965l.09-.655h2.942v4.22m4.552-3.564c.255 1.843.951 3.563 2.015 4.975.178.236.331.449.34.474.023.058-.527.502-1.061.857-1.166.775-2.766 1.358-4.016 1.463l-.31.027V12.76h2.942l.09.656m5.39-.366c-.145 1.501-.789 3.15-1.724 4.414-.19.258-.232.294-.284.251-.11-.092-.723-1.046-.947-1.475-.497-.952-.877-2.202-.97-3.19l-.027-.29h3.98l-.028.29'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBasketBall);
export default ForwardRef;
