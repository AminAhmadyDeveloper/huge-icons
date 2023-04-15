import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGlobeEarth = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.073 3.79c-.414.435-.575.818-.635 1.51-.047.546-.149.891-.354 1.21a2.173 2.173 0 0 1-1.109.895 4.474 4.474 0 0 1-.755.137c-.549.058-.708.1-1.063.279-.293.149-.754.617-.909.922a2.226 2.226 0 0 0 .352 2.55c.422.449.871.652 1.58.713.242.021.539.066.66.099.52.145 1.063.574 1.306 1.036.175.331.246.605.291 1.121.062.712.27 1.172.718 1.587.272.251.613.441.953.528.207.054.463.062 1.559.054l1.311-.011.168-.38c.354-.798.634-1.796.779-2.78.07-.473.072-2.043.003-2.52-.272-1.876-.94-3.461-2.081-4.94-.338-.438-1.211-1.311-1.647-1.647-.415-.319-.816-.593-.869-.593-.021 0-.137.104-.258.23M2.049 10.95c-.016.039-.029.511-.028 1.05.001.743.018 1.089.073 1.432.378 2.386 1.505 4.472 3.26 6.035l.374.333 1.546-.001c1.737 0 1.905-.019 2.4-.263.333-.164.728-.525.904-.827.061-.105.156-.32.211-.478.131-.378.137-.923.015-1.311-.294-.931-1.175-1.595-2.124-1.6-.725-.004-1.449-.384-1.834-.961-.241-.361-.327-.631-.386-1.22-.08-.789-.238-1.164-.677-1.601a2.072 2.072 0 0 0-1.005-.579c-.276-.07-.445-.079-1.506-.079-1.1 0-1.197.006-1.223.07'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobeEarth);
export default ForwardRef;
