import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVerticalAlignTop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.811 3.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.087.025.451.045.808.045h.65l.011 6.85c.011 6.454.016 6.864.084 7.09.293.98 1.017 1.696 1.986 1.967.229.064.43.073 1.68.073 1.255 0 1.45-.009 1.68-.073.971-.274 1.69-.985 1.986-1.967.068-.227.073-.614.084-7.09l.011-6.85h2.477l.012 3.85c.012 3.555.018 3.868.084 4.09a2.843 2.843 0 0 0 1.986 1.967c.229.064.43.073 1.68.073 1.255 0 1.45-.009 1.68-.073.972-.274 1.692-.988 1.985-1.967.067-.222.073-.523.085-4.09l.012-3.85h.649c.357 0 .721-.02.808-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-10.143-.006c-5.579-.003-10.201.008-10.272.025M9.23 11.55l-.01 6.79-.098.199a1.306 1.306 0 0 1-.665.619c-.205.076-.306.082-1.457.082s-1.252-.006-1.457-.082c-.267-.1-.53-.345-.665-.619l-.098-.199-.01-6.79-.011-6.79h4.482l-.011 6.79m10.001-3-.011 3.79-.098.199a1.306 1.306 0 0 1-.665.619c-.205.076-.306.082-1.457.082s-1.252-.006-1.457-.082c-.267-.1-.53-.345-.665-.619l-.098-.199-.011-3.79-.01-3.79h4.482l-.01 3.79'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalAlignTop);
export default ForwardRef;
