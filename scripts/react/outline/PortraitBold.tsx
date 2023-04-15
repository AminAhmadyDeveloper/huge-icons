import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPortraitBold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.555 2.28a4.126 4.126 0 0 0-1.713.65c-.307.207-.847.791-1.057 1.142-.329.551-.545 1.321-.545 1.946v.211l-.83.023c-.929.025-1.17.068-1.614.287A2.799 2.799 0 0 0 2.333 8.32c-.068.242-.073.497-.073 3.68 0 3.183.005 3.438.073 3.68.219.783.75 1.436 1.446 1.777.486.238.671.271 1.611.292l.85.019v.213c0 .625.215 1.393.545 1.948.262.442.844 1.024 1.286 1.286.391.233.989.444 1.422.503.418.056 4.596.056 5.014 0a4.292 4.292 0 0 0 1.422-.503c.442-.262 1.024-.844 1.286-1.286.33-.555.545-1.323.545-1.948v-.213l.85-.019c.636-.014.91-.036 1.09-.087a2.832 2.832 0 0 0 1.967-1.982c.068-.243.073-.487.073-3.68s-.005-3.437-.073-3.68a2.792 2.792 0 0 0-1.465-1.782c-.442-.218-.684-.261-1.612-.286l-.83-.023v-.211c0-.625-.216-1.395-.545-1.946-.21-.351-.75-.935-1.057-1.142a4.617 4.617 0 0 0-1.23-.561l-.388-.105-2.36-.008c-1.298-.005-2.479.006-2.625.024m5.216 1.609c.657.263 1.077.684 1.343 1.346l.106.265v13l-.109.271c-.289.723-.848 1.225-1.569 1.408-.354.09-4.73.09-5.084 0-.721-.183-1.28-.685-1.569-1.408L7.78 18.5v-13l.106-.265c.306-.761.904-1.281 1.654-1.435.088-.018 1.24-.03 2.56-.026l2.4.006.271.109M6.24 12v4.24h-.738c-.648 0-.766-.01-.959-.082-.267-.1-.53-.345-.665-.619l-.098-.199-.012-3.26c-.009-2.35.001-3.305.034-3.42a1.31 1.31 0 0 1 .789-.839c.105-.039.369-.056.899-.058l.75-.003V12m13.297-4.123c.108.053.263.163.343.243.08.08.19.235.243.343l.097.197v6.68l-.098.199a1.306 1.306 0 0 1-.665.619c-.193.072-.311.082-.959.082h-.738V7.755l.79.013c.742.011.802.018.987.109'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPortraitBold);
export default ForwardRef;
