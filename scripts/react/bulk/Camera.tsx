import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.7 3.041a1.976 1.976 0 0 0-1.071.593c-.098.105-.505.681-.904 1.279L6.999 6h10.002l-.726-1.087c-.399-.598-.806-1.174-.904-1.279a2.06 2.06 0 0 0-.794-.523c-.234-.088-.266-.089-2.477-.097-1.232-.004-2.312.008-2.4.027m1.825 7.481a3.035 3.035 0 0 0-1.628.854 3.036 3.036 0 0 0-.764 1.204c-.102.295-.111.367-.111.92s.009.625.111.92c.168.481.395.836.783 1.222.284.282.41.374.724.528.53.26.804.325 1.36.325s.83-.065 1.36-.325c.678-.333 1.246-.993 1.505-1.75.101-.293.11-.37.11-.92s-.009-.627-.11-.92c-.164-.478-.392-.835-.781-1.222-.284-.282-.41-.374-.724-.527a4.168 4.168 0 0 0-.62-.249c-.302-.079-.933-.11-1.215-.06'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCamera);
export default ForwardRef;
