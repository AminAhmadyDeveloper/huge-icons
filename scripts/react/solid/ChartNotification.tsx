import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChartNotification = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.422 1.51 1.576 2.591 3.099 2.901.407.083.457.083 6.9.073l6.49-.011.391-.108c1.504-.415 2.597-1.581 2.906-3.099.082-.401.083-.482.073-5.767l-.01-5.361-.24.163a4.054 4.054 0 0 1-1.893.671c-2.047.197-3.959-1.289-4.289-3.333-.062-.386-.029-1.281.059-1.606a4.656 4.656 0 0 1 .688-1.45L16.37 2l-5.355.005c-2.945.003-5.457.02-5.582.038m13.527.019c-.418.089-.891.352-1.219.677a2.476 2.476 0 0 0 .001 3.525 2.486 2.486 0 0 0 3.52-.002 2.486 2.486 0 0 0 0-3.522 2.511 2.511 0 0 0-2.302-.678m-8.29 4.281c.739.165 1.432.728 1.792 1.455.281.569.27.415.295 4.162.023 3.365.023 3.381.11 3.569.356.77 1.408.952 2.011.349.309-.309.348-.461.374-1.458.025-.939.067-1.178.286-1.622a2.72 2.72 0 0 1 1.26-1.26c.466-.23.716-.272 1.622-.275.775-.003.805 0 .953.092.242.151.36.363.36.648 0 .2-.019.267-.117.406-.214.306-.29.328-1.176.351-.725.019-.794.027-.979.118-.269.132-.519.398-.614.653-.064.173-.081.354-.099 1.049-.025.939-.067 1.178-.286 1.622a2.784 2.784 0 0 1-1.782 1.463c-.35.095-1.009.096-1.36 0a2.789 2.789 0 0 1-1.781-1.461c-.282-.572-.271-.416-.296-4.164-.023-3.35-.024-3.382-.109-3.566a1.356 1.356 0 0 0-.597-.597c-.162-.08-.258-.097-.537-.097-.406 0-.641.096-.907.369-.278.286-.32.459-.345 1.431-.025.939-.067 1.178-.286 1.622a2.791 2.791 0 0 1-1.782 1.464c-.212.06-.41.073-1.08.074-.933 0-.996-.017-1.216-.331-.098-.138-.117-.206-.117-.402a.7.7 0 0 1 .345-.64c.158-.104.179-.107.945-.128.903-.024 1.03-.059 1.339-.377.29-.299.33-.462.356-1.442.025-.939.067-1.178.286-1.622a2.708 2.708 0 0 1 1.251-1.255c.587-.29 1.189-.354 1.881-.2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartNotification);
export default ForwardRef;
