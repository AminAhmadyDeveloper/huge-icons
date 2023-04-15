import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMailPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.811 3.278a.883.883 0 0 0-.481.374c-.058.106-.072.255-.083.854l-.013.726-.73.014c-.721.014-.732.015-.899.126-.294.194-.413.501-.324.832.059.218.288.453.5.511.087.025.452.045.809.045h.65v.65c0 .358.02.722.045.809.059.213.293.441.513.5.4.108.812-.12.92-.51.023-.082.042-.441.042-.799v-.65h.65c.358 0 .722-.02.809-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832-.167-.111-.178-.112-.899-.126l-.73-.014-.013-.726c-.012-.645-.022-.741-.095-.865a.807.807 0 0 0-.847-.363M5.698 11.315a.779.779 0 0 0-.416.476c-.062.222-.052.333.048.531.078.154.292.33 1.61 1.325 1.941 1.466 2.184 1.592 3.06 1.592.876 0 1.119-.126 3.06-1.592 1.318-.995 1.532-1.171 1.61-1.325a.833.833 0 0 0 .09-.28c-.001-.546-.544-.944-1.016-.746-.074.031-.787.546-1.585 1.145-.798.599-1.548 1.133-1.666 1.188a1.242 1.242 0 0 1-.986 0c-.118-.055-.868-.589-1.666-1.188-.798-.599-1.511-1.114-1.585-1.145a.67.67 0 0 0-.558.019'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailPlus);
export default ForwardRef;
