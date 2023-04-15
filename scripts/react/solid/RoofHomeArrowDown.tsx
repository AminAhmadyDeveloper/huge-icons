import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.336 2.058a4.172 4.172 0 0 0-1.236.39c-.394.198-.069-.021-3.86 2.605-3.573 2.475-3.662 2.546-3.958 3.158-.218.451-.296.827-.268 1.289.042.679.261 1.151.809 1.745.257.279.386.461.52.733.298.604.295.568.297 3.662.001 2.515.007 2.77.076 3.1.316 1.526 1.446 2.695 3.024 3.13l.4.11h9.72l.4-.11c.22-.06.598-.208.84-.328 1.1-.547 1.815-1.416 2.151-2.615.083-.298.086-.397.108-3.287l.022-2.98.109-.323c.137-.406.338-.718.743-1.155.809-.87.983-1.941.485-2.972-.296-.61-.385-.682-3.958-3.155-3.842-2.66-3.473-2.411-3.86-2.605a4.303 4.303 0 0 0-2.564-.392m-4.127 8.224c.307.085.338.135 1.477 2.413.596 1.191 1.111 2.197 1.145 2.235.034.038.11.07.169.07a.258.258 0 0 0 .169-.07c.034-.038.359-.664.724-1.391.58-1.156.689-1.346.875-1.532a1.74 1.74 0 0 1 2.465.001c.189.188.299.382.98 1.742.422.841.777 1.53.789 1.53.012 0 .093-.148.18-.328.267-.554.453-.712.838-.712.336 0 .549.141.678.449.129.31.105.385-.528 1.641-.542 1.075-.604 1.18-.763 1.29l-.174.12h-1.226c-1.391 0-1.391 0-1.623-.331-.098-.138-.117-.206-.117-.402 0-.285.105-.481.342-.638.147-.097.202-.107.656-.122.272-.009.495-.024.495-.032 0-.045-1.538-3.086-1.59-3.145A.26.26 0 0 0 13 13a.258.258 0 0 0-.169.07c-.034.038-.359.664-.724 1.391-.58 1.156-.689 1.346-.875 1.532a1.73 1.73 0 0 1-2.465-.001c-.195-.193-.313-.41-1.347-2.474-.623-1.244-1.145-2.326-1.16-2.404-.06-.322.164-.702.48-.814a.62.62 0 0 1 .469-.018'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeArrowDown);
export default ForwardRef;
