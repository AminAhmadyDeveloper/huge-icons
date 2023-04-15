import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOpenBox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.56 2.285c-.165.033-5.84 2.827-5.84 2.874 0 .012 1.413.728 3.14 1.591L12 8.32l3.14-1.57c1.727-.863 3.14-1.579 3.14-1.591 0-.011-1.273-.654-2.83-1.428-1.907-.949-2.899-1.422-3.042-1.45a2.44 2.44 0 0 0-.848.004m-8.542 5.22c-.757 1.124-.974 1.473-.932 1.5.03.02 1.83.926 4.001 2.015L10.033 13l.968-1.485c.749-1.15.956-1.493.913-1.521-.072-.049-7.866-3.954-7.89-3.954-.011 0-.463.659-1.006 1.465M16 8.025c-2.282 1.132-3.978 1.996-3.975 2.024.005.051 1.858 2.81 1.947 2.899.037.037.93-.388 4.007-1.911a343.108 343.108 0 0 0 3.991-1.991c.025-.025-1.846-2.851-1.966-2.97-.013-.014-1.815.864-4.004 1.949M4 14.35c.001 2.894-.001 2.86.225 3.325.063.13.221.337.374.491l.264.266 3.204 1.601c1.92.961 3.3 1.627 3.444 1.665.132.034.352.062.489.062s.357-.028.489-.062c.144-.038 1.524-.704 3.444-1.665 3.203-1.601 3.204-1.602 3.469-1.867.288-.289.477-.629.554-.998.029-.142.044-1.079.044-2.85V11.68l-2.71 1.354c-1.49.745-2.782 1.378-2.87 1.407-.245.08-.682.061-.95-.04-.344-.13-.599-.391-1.052-1.077-.219-.331-.407-.602-.418-.602-.011 0-.199.271-.418.602-.453.686-.708.947-1.052 1.077-.268.101-.705.12-.95.04-.088-.029-1.38-.662-2.87-1.407L4 11.68v2.67'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBox);
export default ForwardRef;
