import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBatteryHorizontalSavingMode = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
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
            d='M3.66 5.279c-1.088.129-2 .913-2.308 1.981l-.092.32v8.84l.092.32a2.797 2.797 0 0 0 1.908 1.908l.32.092h14.84l.32-.092a2.797 2.797 0 0 0 1.908-1.908l.092-.32V7.58l-.092-.32a2.822 2.822 0 0 0-1.888-1.907l-.3-.092-7.28-.005c-4.004-.004-7.388.007-7.52.023m14.794 1.562c.29.109.596.415.705.705.08.213.081.294.081 4.454s-.001 4.241-.081 4.454c-.109.29-.415.596-.705.705-.215.08-.28.081-7.454.081-7.174 0-7.239-.001-7.454-.081a1.341 1.341 0 0 1-.706-.707c-.08-.216-.081-.27-.071-4.525L2.78 7.62l.087-.162c.157-.293.484-.573.773-.661.055-.016 3.362-.032 7.348-.034 7.19-.003 7.251-.002 7.466.078m-7.639 1.436a.8.8 0 0 0-.462.354c-.091.146-.093.173-.106 1.376l-.012 1.228-1.231.012-1.23.013-.162.107a.7.7 0 0 0-.345.64c0 .196.019.263.116.401.227.321.273.33 1.644.345l1.208.012.012 1.228c.013 1.203.015 1.23.106 1.376.357.574 1.223.443 1.363-.207.026-.122.044-.653.044-1.304V12.76h1.098c1.286 0 1.445-.023 1.662-.24.398-.398.21-1.097-.331-1.234-.118-.029-.589-.046-1.307-.046H11.76l-.001-1.11c-.001-1.176-.025-1.392-.179-1.594-.159-.209-.502-.325-.765-.259m11 1a.8.8 0 0 0-.462.354l-.093.149v4.44l.093.149c.357.574 1.223.443 1.363-.207.058-.271.059-4.069.001-4.321a.747.747 0 0 0-.902-.564'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryHorizontalSavingMode);
export default ForwardRef;