import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolderUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.32 10.162a3.667 3.667 0 0 0-.6.226c-.27.133-.406.254-1.352 1.189-.966.957-1.056 1.058-1.11 1.244-.052.178-.052.226.001.402.114.386.49.611.885.529.185-.038.248-.092 1.117-.956.507-.504.934-.916.95-.916.016 0 .029.958.03 2.13.001 1.985.006 2.141.075 2.29a.734.734 0 0 0 .413.398c.368.154.78-.018.955-.398.069-.149.074-.305.075-2.29.001-1.172.015-2.13.031-2.13.017 0 .427.397.91.881.796.797.899.887 1.082.941a.53.53 0 0 0 .401-.001c.453-.134.684-.65.475-1.061-.028-.055-.507-.551-1.065-1.102-.907-.896-1.044-1.017-1.313-1.15-.616-.305-1.333-.388-1.96-.226'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderUpload);
export default ForwardRef;
