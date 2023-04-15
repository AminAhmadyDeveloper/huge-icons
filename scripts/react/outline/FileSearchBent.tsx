import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileSearchBent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.555 1.281a4.123 4.123 0 0 0-1.713.649c-.307.207-.847.791-1.057 1.142a4.286 4.286 0 0 0-.503 1.421c-.057.424-.059 13.597-.001 14.055.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.095-.137 1.958-.556 2.755-1.339.658-.645 1.038-1.273 1.259-2.078.112-.408.095-.827-.044-1.122-.207-.436-.737-.815-1.263-.901-.129-.021-.743-.039-1.365-.039h-1.13v-6.217c0-4.153-.014-6.321-.042-6.53a4.286 4.286 0 0 0-.503-1.421c-.21-.351-.75-.935-1.057-1.142a4.67 4.67 0 0 0-1.23-.562l-.388-.107-5.36-.006c-2.948-.003-5.479.008-5.625.026m11.216 1.608c.657.263 1.077.684 1.343 1.346l.106.265.011 6.37.01 6.37h-3.13c-1.922 0-3.231.016-3.391.041-.353.056-.725.25-.997.523-.265.265-.434.565-.584 1.036-.196.615-.432 1.015-.838 1.424-.419.423-.754.634-1.301.823-.365.126-.404.131-1 .131-.59.001-.638-.006-.991-.125a3.088 3.088 0 0 1-1.293-.809A3.077 3.077 0 0 1 2.912 19l-.132-.38V4.5l.106-.265c.306-.761.907-1.283 1.654-1.435.088-.017 2.59-.029 5.56-.026l5.4.006.271.109m-5.689 3.393A3.26 3.26 0 0 0 7.43 8.455c-.291.821-.224 1.729.188 2.541l.109.216-.679.684c-.374.376-.709.742-.744.812-.122.244-.065.603.131.826.106.121.35.226.525.226.297 0 .432-.095 1.144-.805l.684-.682.216.109c1.325.672 2.843.408 3.856-.669.998-1.062 1.171-2.55.445-3.846-.284-.508-.871-1.044-1.429-1.306-.515-.24-1.246-.354-1.794-.279m1.172 1.651c.363.18.662.485.838.857.12.253.128.298.128.71s-.008.457-.128.71a1.828 1.828 0 0 1-.847.861c-.293.145-.313.149-.745.149s-.452-.004-.745-.149a1.828 1.828 0 0 1-.847-.861c-.12-.253-.128-.298-.128-.71s.008-.457.128-.71c.159-.337.462-.662.768-.825.32-.17.483-.204.915-.189.332.012.402.028.663.157m9.876 10.85c.037.037-.109.425-.296.786-.131.252-.258.418-.533.695-.418.422-.752.633-1.301.824l-.38.132-4.574.011-4.574.011.179-.211c.39-.458.705-1.037.875-1.605.103-.345.167-.478.282-.585.087-.081.118-.081 5.193-.081 2.808 0 5.116.011 5.129.023'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileSearchBent);
export default ForwardRef;
