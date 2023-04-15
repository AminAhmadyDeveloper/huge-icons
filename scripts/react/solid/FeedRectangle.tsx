import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFeedRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M6.74 5.281c2.72.173 5.129 1.099 7.26 2.793.489.388 1.538 1.437 1.926 1.926 1.699 2.138 2.621 4.54 2.794 7.28.049.774.031.946-.124 1.159-.152.21-.325.297-.596.298-.271.002-.452-.094-.615-.326-.113-.16-.116-.182-.149-.865-.061-1.274-.267-2.308-.684-3.444-1.111-3.023-3.539-5.471-6.566-6.619-1.112-.422-2.252-.652-3.551-.717-.754-.037-.849-.069-1.051-.357-.286-.406-.054-1.015.431-1.131.178-.042.213-.042.925.003m.053 5.103c1.009.2 2.208.7 3.092 1.292a8.925 8.925 0 0 1 3.472 4.551c.302.912.438 1.833.307 2.085a.75.75 0 0 1-1.012.324c-.238-.115-.359-.335-.432-.782-.495-3.035-2.834-5.454-5.82-6.017-.708-.134-.752-.149-.916-.313-.41-.41-.221-1.112.335-1.247.152-.037.354-.015.974.107m.854 5.268c.265.13.603.473.725.738.073.157.088.262.088.61 0 .376-.011.443-.109.641-.29.591-.948.94-1.579.838a1.563 1.563 0 0 1-1.121-.833c-.137-.282-.171-.767-.076-1.094.12-.412.502-.812.918-.96.316-.113.859-.085 1.154.06'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFeedRectangle);
export default ForwardRef;