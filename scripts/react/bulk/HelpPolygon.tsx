import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHelpPolygon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.421 6.306c-1.04.223-1.881 1.066-2.117 2.122-.148.667-.024 1.063.396 1.256a.665.665 0 0 0 .571.014c.312-.13.441-.331.495-.77.061-.489.299-.839.714-1.052.143-.073.246-.092.5-.093.39-.002.647.099.892.349.244.25.346.505.347.869.001.26-.016.335-.129.56-.071.142-.311.484-.531.759-.745.927-1.001 1.337-1.2 1.92-.07.206-.093.381-.107.84-.018.555-.015.588.078.76a.75.75 0 0 0 1.045.305c.3-.176.36-.319.388-.926.024-.514.027-.527.19-.841.091-.175.378-.589.637-.918.634-.806.762-.991.913-1.32.286-.623.33-1.319.122-1.96a2.689 2.689 0 0 0-.715-1.149 2.723 2.723 0 0 0-2.489-.725m.279 9.01c-.384.177-.46.374-.459 1.193.001.684.04.852.244 1.039a.746.746 0 0 0 1.199-.248c.062-.134.074-.262.074-.8s-.012-.666-.074-.8c-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHelpPolygon);
export default ForwardRef;
