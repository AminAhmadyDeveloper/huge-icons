import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAirplaneMode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.48 2.062c-.881.19-1.633.95-1.82 1.838-.044.208-.059.573-.059 1.422-.001 1.248-.021 1.402-.237 1.83a2.369 2.369 0 0 1-.661.766c-.092.063-1.3.757-2.685 1.542s-2.576 1.471-2.647 1.525a1.19 1.19 0 0 0-.24.286c-.095.162-.111.232-.11.489.001.356.084.545.341.777.327.296.183.281 2.898.303l2.44.02.22.103c.274.129.464.316.586.576.093.2.093.212.094 1.723 0 1.671-.013 1.788-.243 2.215-.066.123-.577.841-1.134 1.597-.58.787-1.032 1.439-1.058 1.525-.246.822.584 1.596 1.455 1.356.088-.024.654-.268 1.257-.541 1.501-.681 1.467-.671 2.123-.671.656 0 .622-.01 2.123.671.603.273 1.169.517 1.257.541a1.23 1.23 0 0 0 1.078-.225c.36-.274.504-.707.377-1.131-.026-.087-.478-.737-1.06-1.525-1.039-1.408-1.256-1.754-1.333-2.126-.03-.141-.041-.738-.033-1.751.01-1.427.017-1.548.088-1.693.111-.222.321-.418.58-.539l.223-.105 2.44-.02c2.731-.022 2.574-.005 2.916-.321.449-.413.441-1.157-.016-1.522-.077-.061-1.273-.753-2.658-1.538a152.19 152.19 0 0 1-2.685-1.541 2.369 2.369 0 0 1-.661-.766c-.216-.428-.236-.582-.237-1.83 0-1.298-.03-1.522-.264-2.002-.2-.408-.644-.851-1.058-1.055a2.408 2.408 0 0 0-1.597-.203'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAirplaneMode);
export default ForwardRef;
