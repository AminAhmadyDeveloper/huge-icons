import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStandbyMode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m1.336 5.242a5.034 5.034 0 0 1 2.228.802c.324.219.866.74 1.121 1.076.278.364.653 1.142.773 1.601.3 1.15.186 2.28-.337 3.34-.289.585-.527.905-1.018 1.367-.784.738-1.682 1.144-2.793 1.262-.978.104-2.07-.155-2.94-.698-.394-.246-1.001-.802-1.291-1.184-.278-.366-.655-1.145-.778-1.606a4.874 4.874 0 0 1 0-2.481c.122-.459.499-1.241.774-1.601.255-.336.797-.857 1.121-1.076.604-.411 1.482-.733 2.177-.8.464-.045.521-.045.963-.002m-1.048 1.521a3.87 3.87 0 0 0-1.194.488 3.828 3.828 0 0 0-1.013 1.064 4.138 4.138 0 0 0-.294.655c-.119.352-.125.402-.125.991s.006.639.125.991c.176.522.406.889.809 1.293.404.403.771.633 1.293.809.352.119.402.125.991.125s.639-.006.991-.125a3.088 3.088 0 0 0 1.293-.809c.404-.405.634-.772.808-1.293.117-.351.124-.405.125-.991.002-.591-.004-.637-.124-.991a3.088 3.088 0 0 0-.809-1.293 3.029 3.029 0 0 0-1.29-.8c-.324-.109-.441-.128-.874-.139a4.915 4.915 0 0 0-.712.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStandbyMode);
export default ForwardRef;
