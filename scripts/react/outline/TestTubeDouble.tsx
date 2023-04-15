import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTestTubeDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.42 2.259a1.675 1.675 0 0 1-.149.038c-.147.032-.39.251-.457.411a.742.742 0 0 0 .139.786c.153.162.291.223.566.252l.241.025v4.457l-.61.024c-.686.028-1.066.112-1.43.316-.683.383-1.16.973-1.368 1.692l-.092.32v8.84l.092.32a2.797 2.797 0 0 0 1.908 1.908l.32.092h16.84l.32-.092a2.797 2.797 0 0 0 1.908-1.908l.092-.32v-8.84l-.092-.32c-.208-.719-.685-1.309-1.368-1.692-.364-.204-.744-.288-1.43-.316l-.61-.024V3.771l.241-.025c.275-.029.413-.09.566-.252a.742.742 0 0 0 .139-.786c-.065-.155-.305-.375-.457-.417-.142-.04-6.316-.04-6.458 0-.152.042-.392.262-.457.417a.742.742 0 0 0 .139.786c.153.162.291.223.566.252l.241.025V8.24h-3.52V3.771l.241-.025c.275-.029.413-.09.566-.252a.72.72 0 0 0 0-.988c-.247-.261-.033-.245-3.467-.253a172.083 172.083 0 0 0-3.16.006M8.76 6v2.24H6.24V3.76h2.52V6m9 0v2.24h-2.52V3.76h2.52V6m-13 7.022c0 2.803.009 3.304.063 3.564A2.695 2.695 0 0 0 6.3 18.46c.427.206.713.27 1.2.27s.773-.064 1.2-.27a2.695 2.695 0 0 0 1.477-1.874c.054-.26.063-.761.063-3.564V9.76h3.52v3.262c0 2.803.009 3.304.063 3.564A2.695 2.695 0 0 0 15.3 18.46c.427.206.713.27 1.2.27s.773-.064 1.2-.27a2.695 2.695 0 0 0 1.477-1.874c.054-.26.063-.761.063-3.564V9.76h.498c.403 0 .541.016.716.081.29.109.596.415.705.705.08.213.081.294.081 4.454s-.001 4.241-.081 4.454c-.109.29-.415.596-.705.705-.215.08-.275.081-8.454.081s-8.239-.001-8.454-.081a1.341 1.341 0 0 1-.706-.707c-.08-.216-.081-.27-.071-4.525l.011-4.307.087-.162c.103-.194.381-.479.55-.567.211-.109.309-.124.833-.128l.51-.003v3.262m3.991.008c-.011 3.244-.012 3.271-.096 3.455-.302.651-1.049.938-1.675.641a1.362 1.362 0 0 1-.635-.641c-.084-.184-.085-.211-.096-3.455l-.011-3.27h2.524l-.011 3.27m9 0c-.011 3.244-.012 3.271-.096 3.455-.302.651-1.049.938-1.675.641a1.362 1.362 0 0 1-.635-.641c-.084-.184-.085-.211-.096-3.455l-.011-3.27h2.524l-.011 3.27'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTubeDouble);
export default ForwardRef;