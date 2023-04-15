import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileAcceptBent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.555 1.281a4.123 4.123 0 0 0-1.713.649c-.307.207-.847.791-1.057 1.142a4.286 4.286 0 0 0-.503 1.421c-.057.424-.059 13.597-.001 14.055.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.095-.137 1.958-.556 2.755-1.339.658-.645 1.038-1.273 1.259-2.078.112-.408.095-.827-.044-1.122-.207-.436-.737-.815-1.263-.901-.129-.021-.743-.039-1.365-.039h-1.13v-6.217c0-4.153-.014-6.321-.042-6.53a4.286 4.286 0 0 0-.503-1.421c-.21-.351-.75-.935-1.057-1.142a4.67 4.67 0 0 0-1.23-.562l-.388-.107-5.36-.006c-2.948-.003-5.479.008-5.625.026m11.216 1.608c.657.263 1.077.684 1.343 1.346l.106.265.011 6.37.01 6.37h-3.13c-1.922 0-3.231.016-3.391.041-.353.056-.725.25-.997.523-.265.265-.434.565-.584 1.036-.196.615-.432 1.015-.838 1.424-.419.423-.754.634-1.301.823-.365.126-.404.131-1 .131-.59.001-.638-.006-.991-.125a3.088 3.088 0 0 1-1.293-.809A3.077 3.077 0 0 1 2.912 19l-.132-.38V4.5l.106-.265c.306-.761.907-1.283 1.654-1.435.088-.017 2.59-.029 5.56-.026l5.4.006.271.109m-3.062 4.418c-.118.049-.485.443-1.668 1.794-.834.953-1.553 1.744-1.597 1.758a.256.256 0 0 1-.168-.021 24.927 24.927 0 0 1-.979-.76 24.495 24.495 0 0 0-.984-.762.924.924 0 0 0-.316-.052.716.716 0 0 0-.641.363.763.763 0 0 0-.004.741c.077.124 1.663 1.433 2.11 1.742.413.285 1.135.332 1.618.105.143-.067.322-.175.398-.239.076-.064.825-.901 1.665-1.86 1.048-1.197 1.543-1.792 1.577-1.895.201-.609-.412-1.163-1.011-.914m8.421 11.476c.037.037-.109.425-.296.786-.131.252-.258.418-.533.695-.418.422-.752.633-1.301.824l-.38.132-4.574.011-4.574.011.179-.211c.39-.458.705-1.037.875-1.605.103-.345.167-.478.282-.585.087-.081.118-.081 5.193-.081 2.808 0 5.116.011 5.129.023'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileAcceptBent);
export default ForwardRef;