import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowBackCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m-.788 4.266c.271.137.428.378.428.655 0 .27-.103.44-.527.867l-.405.406 1.856.016c1.85.017 1.857.017 2.244.121.395.106.899.336 1.23.561.234.159.752.677.911.911.227.334.455.837.558 1.23a4.014 4.014 0 0 1 0 1.856 4.473 4.473 0 0 1-.557 1.23c-.207.307-.791.847-1.142 1.057a4.225 4.225 0 0 1-1.448.505c-.225.029-1.245.04-3.02.032-2.618-.012-2.683-.014-2.819-.094a1.003 1.003 0 0 1-.257-.249c-.098-.138-.117-.206-.117-.402a.7.7 0 0 1 .345-.64l.162-.107 2.863-.02 2.863-.02.261-.102c.909-.354 1.479-1.171 1.479-2.118 0-.947-.556-1.746-1.469-2.111L13.5 9.78l-1.84-.012-1.84-.011.408.411c.228.229.436.478.47.561a.735.735 0 0 1-.998.955c-.224-.104-2.362-2.26-2.405-2.424a1.142 1.142 0 0 1 0-.52c.043-.164 2.181-2.32 2.405-2.424.198-.092.463-.097.632-.011'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowBackCircle);
export default ForwardRef;