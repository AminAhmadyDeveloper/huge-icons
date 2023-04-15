import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAlignTop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.811 4.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 14.213.063 14.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-7.143-.006c-3.929-.004-7.201.008-7.272.025M7.9 8.259a2.108 2.108 0 0 1-.16.041c-.151.033-2.266 2.121-2.388 2.357a.773.773 0 0 0 .063.759c.212.278.625.386.917.24.07-.035.303-.237.518-.449l.39-.385v4.119c0 2.882.014 4.167.045 4.278.059.213.293.441.513.5.4.108.812-.12.92-.51.027-.098.042-1.558.042-4.268v-4.12l.41.408c.229.228.476.435.559.469a.734.734 0 0 0 1.031-.678.847.847 0 0 0-.077-.332c-.079-.152-2.199-2.286-2.343-2.359-.091-.045-.38-.092-.44-.07m8 0a2.108 2.108 0 0 1-.16.041c-.147.032-2.305 2.159-2.423 2.388-.246.475.112 1.072.642 1.072.272 0 .441-.103.871-.531l.41-.408v4.12c0 2.882.014 4.167.045 4.278.059.213.293.441.513.5.4.108.812-.12.92-.51.027-.098.042-1.558.042-4.268v-4.12l.41.408c.229.228.476.435.559.469a.734.734 0 0 0 1.031-.678.847.847 0 0 0-.077-.332c-.079-.152-2.199-2.286-2.343-2.359-.091-.045-.38-.092-.44-.07'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlignTop);
export default ForwardRef;
