import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionRightDoubleCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264M9.393 7.368c.175.108 2.383 3.047 2.556 3.402.22.451.27.679.27 1.23 0 .551-.05.779-.27 1.231-.183.374-2.412 3.327-2.589 3.428-.176.1-.527.105-.708.009a.83.83 0 0 1-.376-.508c-.074-.328-.026-.411 1.172-2.007.616-.821 1.157-1.574 1.203-1.673.059-.131.082-.262.082-.48 0-.218-.023-.349-.082-.48-.046-.099-.587-.852-1.203-1.673C8.279 8.289 8.21 8.173 8.266 7.873a.75.75 0 0 1 1.127-.505m5 0c.175.108 2.383 3.047 2.556 3.402.22.451.27.679.27 1.23 0 .551-.05.779-.27 1.231-.183.374-2.412 3.327-2.589 3.428-.176.1-.527.105-.708.009a.83.83 0 0 1-.376-.508c-.074-.328-.026-.411 1.172-2.007.616-.821 1.157-1.574 1.203-1.673.059-.131.082-.262.082-.48 0-.218-.023-.349-.082-.48-.046-.099-.587-.852-1.203-1.673-1.169-1.558-1.238-1.674-1.182-1.974a.75.75 0 0 1 1.127-.505'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionRightDoubleCircle);
export default ForwardRef;
