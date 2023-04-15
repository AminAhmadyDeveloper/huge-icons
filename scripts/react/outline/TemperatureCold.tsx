import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTemperatureCold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.555 1.279a4.153 4.153 0 0 0-1.713.651c-.307.207-.847.791-1.057 1.142a4.286 4.286 0 0 0-.503 1.421c-.027.202-.042 1.7-.042 4.243v3.931l-.159.127c-.351.282-.915 1.034-1.2 1.6-.704 1.395-.823 2.952-.337 4.406A5.788 5.788 0 0 0 11 22.666c.514.093 1.486.093 2 0a5.788 5.788 0 0 0 4.456-3.866c.485-1.452.366-3.012-.337-4.406-.285-.566-.849-1.318-1.2-1.6l-.159-.127V8.736c0-2.543-.015-4.041-.042-4.243a4.286 4.286 0 0 0-.503-1.421c-.21-.351-.75-.935-1.057-1.142-.75-.506-1.752-.756-2.603-.651m1.21 1.613c.648.246 1.082.677 1.346 1.337l.109.271.02 4.36c.018 4.022.025 4.37.089 4.485.037.069.213.246.39.394A4.275 4.275 0 0 1 16.24 17 4.232 4.232 0 0 1 12 21.24a4.238 4.238 0 0 1-4.181-3.515 4.293 4.293 0 0 1 1.462-3.986c.177-.148.353-.325.39-.394.064-.115.071-.463.089-4.485l.02-4.36.106-.265c.306-.761.894-1.272 1.654-1.437.301-.065.933-.016 1.225.094'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTemperatureCold);
export default ForwardRef;
