import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowRightCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.32 1.281c-4.279.244-8.068 3.128-9.477 7.216a10.886 10.886 0 0 0-.279 6.053 10.76 10.76 0 0 0 7.886 7.886 10.96 10.96 0 0 0 5.1 0 10.76 10.76 0 0 0 7.886-7.886 10.96 10.96 0 0 0 0-5.1 10.758 10.758 0 0 0-8.694-8.052c-.408-.067-1.668-.169-1.862-.151l-.56.034m1.826 1.541a9.086 9.086 0 0 1 2.914.874c2.817 1.383 4.708 4.026 5.118 7.158.123.932.066 2.172-.144 3.144-.289 1.345-1.031 2.857-1.913 3.902a9.31 9.31 0 0 1-3.061 2.404 8.94 8.94 0 0 1-4.06.936 8.93 8.93 0 0 1-4.06-.936c-2.817-1.383-4.708-4.026-5.118-7.158-.123-.932-.066-2.172.144-3.144.211-.982.737-2.227 1.302-3.082a9.335 9.335 0 0 1 6.552-4.097c.56-.077 1.749-.077 2.326-.001m-.331 5.456a.792.792 0 0 0-.459.348c-.103.167-.123.529-.038.694.029.055.458.509.955 1.009l.902.909-3.2.011-3.201.011-.162.107a.7.7 0 0 0-.345.64c0 .196.019.263.116.401a.939.939 0 0 0 .277.248c.158.083.204.084 3.338.095l3.177.011-.902.909c-.497.5-.926.954-.955 1.009a.953.953 0 0 0-.051.331c0 .191.02.26.116.397a.91.91 0 0 0 .268.243.856.856 0 0 0 .675.013c.076-.036.855-.785 1.742-1.675 1.528-1.533 1.605-1.618 1.643-1.799a.935.935 0 0 0 0-.38c-.038-.181-.115-.266-1.643-1.799-.883-.885-1.659-1.635-1.726-1.666a.881.881 0 0 0-.527-.067'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowRightCircle);
export default ForwardRef;
