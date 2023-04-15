import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSquareRoot = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.435 6.28a1.843 1.843 0 0 0-1.142.749c-.14.211-.272.622-1.312 4.087-1.249 4.164-1.204 4.039-1.44 3.932-.053-.024-.474-.547-.937-1.161-.462-.615-.912-1.174-.999-1.243a1.932 1.932 0 0 0-.895-.371c-.159-.022-.659-.034-1.112-.026l-.824.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.092.026.505.045.981.045.598 0 .84.014.885.05.035.028.413.518.841 1.09.797 1.066 1.055 1.347 1.369 1.494a1.766 1.766 0 0 0 2.067-.428c.09-.102.198-.251.238-.331.041-.08.589-1.862 1.218-3.96.723-2.409 1.168-3.833 1.21-3.865.051-.039 1.068-.05 4.768-.05 3.307 0 4.749-.014 4.861-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-4.803-.006c-2.642-.003-4.886.009-4.988.026'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSquareRoot);
export default ForwardRef;