import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrackNextDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.62 5.76c-.923.13-1.789.787-2.136 1.62-.247.591-.244.531-.244 4.62 0 3.241.008 3.763.063 4.032.138.67.476 1.231.982 1.626.797.624 1.788.78 2.695.425.154-.061 1.173-.632 2.265-1.271l1.985-1.16.067.342c.137.697.471 1.26.988 1.664.778.609 1.71.769 2.628.452.148-.051 1.515-.823 3.28-1.853l3.027-1.766.02 1.105c.022 1.201.026 1.224.266 1.451a.724.724 0 0 0 1.022-.032c.247-.263.234.025.234-5.015s.013-4.752-.234-5.015a.724.724 0 0 0-1.022-.032c-.24.227-.244.25-.266 1.453l-.02 1.106-2.94-1.716c-1.617-.943-3.033-1.76-3.147-1.814-.343-.163-.679-.234-1.113-.235-.482-.002-.733.053-1.173.256-.838.388-1.367 1.073-1.551 2.006-.065.335-.07.344-.152.292-.27-.171-3.949-2.294-4.072-2.35-.374-.171-1.006-.255-1.452-.191m.72 1.525c.088.024 1.294.705 2.68 1.513 1.386.809 2.578 1.5 2.648 1.536.183.094.519.086.692-.018.342-.204.373-.305.398-1.316.02-.794.029-.875.115-1.048.117-.239.36-.482.594-.595.233-.113.648-.144.893-.066.255.081 6.348 3.645 6.535 3.822.247.235.344.484.344.887 0 .402-.096.651-.344.888-.176.168-6.261 3.732-6.526 3.822-.241.082-.658.053-.897-.064a1.41 1.41 0 0 1-.599-.598c-.086-.174-.094-.252-.113-1.048-.023-.997-.049-1.092-.355-1.285a.624.624 0 0 0-.406-.115c-.225 0-.238.007-2.843 1.526-1.439.84-2.697 1.552-2.796 1.583a1.44 1.44 0 0 1-.893-.066 1.403 1.403 0 0 1-.594-.595l-.093-.188-.012-3.74c-.009-2.629 0-3.801.031-3.946.081-.373.438-.759.813-.876.21-.066.518-.071.728-.013'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackNextDouble);
export default ForwardRef;