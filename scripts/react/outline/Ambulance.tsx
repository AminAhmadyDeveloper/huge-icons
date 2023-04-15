import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAmbulance = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.579 2.278C3.45 2.476 1.763 4.011 1.333 6.14c-.068.335-.073.667-.073 4.82 0 4.794 0 4.8.208 5.459.22.695.594 1.311 1.146 1.889.394.413.949.811 1.386.996.143.061.265.113.27.117.006.003.043.131.084.283.346 1.311 1.619 2.181 2.95 2.016.95-.119 1.711-.647 2.13-1.48a3.33 3.33 0 0 0 .175-.39l.024-.09h5.721l.047.15c.181.571.708 1.179 1.319 1.522.714.4 1.846.4 2.56 0 .63-.353 1.134-.942 1.319-1.54.069-.221.072-.224.293-.293.795-.246 1.508-1.001 1.756-1.859l.092-.32v-6.2l-.092-.32a3.088 3.088 0 0 0-.517-1.013c-.177-.216-3.023-2.889-3.304-3.101a2.908 2.908 0 0 0-.927-.45c-.199-.056-.494-.071-1.727-.086l-1.487-.018-.067-.302c-.394-1.771-1.823-3.169-3.655-3.576-.364-.081-.503-.086-2.724-.096-1.287-.005-2.484.003-2.661.02M10.98 3.89c.538.184.878.399 1.304.826.426.426.642.766.826 1.304l.11.32.011 5.95.011 5.95H9.646l-.047-.15a2.946 2.946 0 0 0-.181-.39c-.38-.683-1.036-1.191-1.762-1.364-.364-.087-.997-.085-1.336.003a2.836 2.836 0 0 0-1.728 1.33l-.119.209-.161-.089c-.26-.144-.83-.705-1.037-1.021a3.327 3.327 0 0 1-.473-1.188c-.035-.207-.044-1.449-.035-4.76l.013-4.48.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.48-.183.546-.187 3.248-.179l2.56.008.32.11M5.815 7.277a.8.8 0 0 0-.462.354l-.093.149v4.44l.093.149c.357.574 1.223.443 1.363-.207.024-.113.044-.475.044-.804v-.598h2.472l.014.73c.013.681.02.74.107.879.357.574 1.223.443 1.363-.207.06-.283.06-4.041 0-4.324-.141-.656-1.003-.787-1.363-.207-.087.139-.094.198-.107.879l-.014.73H6.76l-.001-.61c-.001-.68-.039-.91-.179-1.094-.159-.209-.502-.325-.765-.259m11.965.615c.117.065.832.707 1.716 1.54 1.175 1.106 1.54 1.473 1.62 1.628l.104.2.011 2.987c.01 2.925.009 2.991-.071 3.205a1.21 1.21 0 0 1-.287.423c-.112.113-.217.205-.233.205-.016 0-.085-.114-.154-.254a2.936 2.936 0 0 0-1.206-1.258c-.714-.4-1.846-.4-2.56 0-.611.343-1.138.951-1.319 1.522l-.047.15h-.594V7.756l1.41.012 1.41.012.2.112M7.454 17.841c.29.109.596.415.705.705a1.28 1.28 0 0 1-.604 1.578c-.264.135-.705.15-1.011.035a1.32 1.32 0 0 1-.668-.605c-.129-.251-.15-.706-.046-.979a1.243 1.243 0 0 1 1.624-.734m11 0c.29.109.596.415.705.705.176.471.068.975-.285 1.328a1.216 1.216 0 0 1-1.748 0c-.279-.278-.38-.549-.357-.954.021-.353.107-.547.355-.795.273-.272.473-.356.864-.362.16-.002.327.026.466.078'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAmbulance);
export default ForwardRef;