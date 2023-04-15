import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyWithdraw = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.74 1.266a3.841 3.841 0 0 0-2.334 1.031c-.526.494-.95 1.287-1.093 2.045-.077.406-.077 8.91 0 9.316a3.762 3.762 0 0 0 2.473 2.88c.596.208.377.202 7.214.202 6.837 0 6.618.006 7.214-.202a3.762 3.762 0 0 0 2.473-2.88c.077-.406.077-8.91 0-9.316-.285-1.509-1.376-2.636-2.912-3.011-.251-.061-.828-.068-6.575-.073a830.09 830.09 0 0 0-6.46.008m12.838 1.555c.13.034.345.119.479.189.314.165.768.619.933.933.261.498.25.273.25 5.057 0 4.784.011 4.559-.25 5.057-.165.314-.619.768-.933.933-.507.266-.065.25-7.057.25s-6.55.016-7.057-.25c-.314-.165-.768-.619-.933-.933-.261-.498-.25-.273-.25-5.057 0-3.771.008-4.374.061-4.578.19-.73.857-1.403 1.583-1.599.335-.09 12.829-.092 13.174-.002M5.667 4.065C5.303 4.177 5 4.602 5 5c0 .517.483 1 1 1s1-.483 1-1c0-.402-.312-.827-.69-.939a.941.941 0 0 0-.643.004m5.993 2.213c-.884.107-1.633.623-2.092 1.442-.4.714-.4 1.846 0 2.56.526.939 1.385 1.451 2.432 1.451s1.906-.512 2.432-1.451c.4-.714.4-1.846 0-2.56-.575-1.026-1.636-1.578-2.772-1.442m.794 1.563c.29.109.596.415.705.705A1.246 1.246 0 0 1 12 10.24c-.508 0-.986-.327-1.163-.795-.109-.288-.094-.741.033-.987.149-.289.479-.572.77-.661.198-.06.592-.039.814.044m5.213 4.224c-.364.112-.667.537-.667.935 0 .517.483 1 1 1s1-.483 1-1c0-.402-.312-.827-.69-.939a.941.941 0 0 0-.643.004m-5.947 5.74c-.129.051-.309.223-.394.375-.056.102-.068.288-.079 1.252l-.013 1.133-.413-.398c-.452-.435-.589-.508-.904-.478a.71.71 0 0 0-.648.728c0 .112.028.258.063.324.087.166 1.569 1.627 1.783 1.758.252.156.532.227.885.227s.633-.071.885-.227c.214-.131 1.696-1.592 1.783-1.758a.844.844 0 0 0 .063-.324.71.71 0 0 0-.648-.728c-.315-.03-.452.043-.904.478l-.413.398-.013-1.133c-.011-.964-.023-1.15-.079-1.252-.088-.159-.267-.325-.407-.377a.952.952 0 0 0-.547.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyWithdraw);
export default ForwardRef;
