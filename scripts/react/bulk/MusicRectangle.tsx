import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMusicRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.46 6.297c-1.025.237-1.791.934-2.11 1.92-.061.187-.084.397-.099.91l-.02.666-.185-.079c-.457-.196-1.172-.252-1.686-.132-.894.209-1.691.949-1.984 1.844-.104.317-.116.406-.113.854.002.429.018.546.109.82.139.419.352.772.648 1.075.332.339.651.539 1.12.701.366.126.439.138.86.138.411-.001.5-.015.834-.128a2.81 2.81 0 0 0 1.799-1.795l.105-.311.021-2.04.021-2.04.111-.226c.22-.448.613-.694 1.109-.692.405.002.516.059 1.799.924.755.509 1.096.763 1.189.886.235.311.252.437.252 1.894v1.311l-.19-.081c-.462-.198-1.174-.255-1.69-.134-.894.209-1.691.949-1.984 1.844-.104.317-.116.406-.113.854.002.429.018.546.109.82.139.419.352.772.648 1.075.332.339.651.539 1.12.701.366.126.439.138.86.138.411-.001.5-.015.834-.128a2.817 2.817 0 0 0 1.8-1.795l.106-.311.012-2.845c.012-3.069.009-3.123-.201-3.642-.268-.665-.579-.963-1.979-1.897-1.204-.803-1.368-.899-1.773-1.035-.333-.112-.995-.144-1.339-.064'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicRectangle);
export default ForwardRef;