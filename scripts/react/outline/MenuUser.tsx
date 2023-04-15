import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMenuUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.555 4.279a4.153 4.153 0 0 0-1.713.651c-.307.207-.847.791-1.057 1.142a4.05 4.05 0 0 0-.512 1.52 3.811 3.811 0 0 0 .512 2.337c.262.442.844 1.024 1.286 1.286a3.749 3.749 0 0 0 3.138.33c.569-.195.978-.454 1.43-.906.452-.452.711-.861.906-1.43a3.684 3.684 0 0 0-.865-3.81c-.382-.389-.559-.519-1.034-.758-.587-.297-1.436-.443-2.091-.362m1.21 1.613c.649.246 1.087.682 1.344 1.337.095.242.107.324.107.771s-.012.529-.107.771C8.752 9.68 7.948 10.24 7 10.24s-1.752-.56-2.109-1.469c-.095-.242-.107-.324-.107-.771 0-.444.012-.53.104-.765.298-.756.891-1.272 1.652-1.437.301-.065.933-.016 1.225.094m6.046.386a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.224.063 8.214.063 8.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-4.143-.006c-2.279-.004-4.201.007-4.272.024m0 5a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.224.063 8.214.063 8.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-4.143-.006c-2.279-.004-4.201.007-4.272.024M6.296 12.28c-1.499.125-2.848.607-3.778 1.351-1.223.978-1.589 2.359-.958 3.608.519 1.028 1.784 1.871 3.42 2.277 1.216.302 2.824.302 4.04 0 1.625-.404 2.829-1.197 3.393-2.236.432-.797.442-1.699.025-2.523-.605-1.199-2.25-2.145-4.198-2.414a10.85 10.85 0 0 0-1.944-.063m1.522 1.522c1.365.156 2.595.702 3.106 1.379.089.117.196.305.239.417.395 1.041-.811 2.126-2.812 2.53-.39.079-.573.091-1.351.091s-.961-.012-1.351-.091c-2.001-.404-3.207-1.489-2.812-2.53.331-.871 1.689-1.607 3.31-1.796a9.92 9.92 0 0 1 1.671 0m7.993 2.476a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.143-.006c-1.729-.004-3.201.007-3.272.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMenuUser);
export default ForwardRef;