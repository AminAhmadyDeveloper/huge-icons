import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChartPresentation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v11.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.388.079.533.083 3.21.083h2.804v1.232l-.733.014c-.725.014-.735.015-.902.126-.294.194-.413.501-.324.832.059.218.288.453.5.511.22.062 4.218.062 4.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832-.167-.111-.177-.112-.902-.126l-.733-.014v-1.229l2.93-.012 2.93-.012.391-.108a4.001 4.001 0 0 0 2.907-3.101c.083-.406.084-.469.073-5.9l-.011-5.49-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m5.687 4.304c.707.194 1.298.78 1.544 1.533.066.201.074.47.094 3.04.02 2.517.029 2.833.088 2.94.302.551 1.169.479 1.348-.112.021-.071.049-.362.062-.648.028-.615.094-.921.282-1.302a2.72 2.72 0 0 1 1.26-1.26c.466-.23.716-.272 1.622-.275.775-.003.805 0 .953.092.242.151.36.363.36.648 0 .2-.019.267-.117.406-.214.306-.29.328-1.176.351-.725.019-.794.027-.979.118-.11.054-.275.176-.368.271-.252.259-.318.483-.346 1.171-.035.867-.191 1.281-.667 1.764-.394.4-1.037.675-1.58.675-.276 0-.709-.112-1.02-.265-.52-.254-.945-.765-1.144-1.374-.066-.2-.074-.472-.094-3.04-.024-3.039-.016-2.936-.229-3.129a.91.91 0 0 0-.513-.191c-.161 0-.4.089-.513.192-.168.152-.215.327-.241.908-.029.653-.092.954-.284 1.342a2.791 2.791 0 0 1-1.782 1.464c-.212.06-.41.073-1.08.074-.933 0-.996-.017-1.216-.331-.098-.138-.117-.206-.117-.402a.7.7 0 0 1 .345-.64c.158-.104.179-.107.945-.128.903-.024 1.03-.059 1.339-.377.264-.272.328-.486.356-1.182.017-.422.046-.651.105-.84.371-1.174 1.567-1.821 2.763-1.493'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartPresentation);
export default ForwardRef;
