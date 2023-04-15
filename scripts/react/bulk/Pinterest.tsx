import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPinterest = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.26 2.025C9.189 2.24 7.415 3.08 6.055 4.488A7.303 7.303 0 0 0 4.096 8.3c-.092.504-.105 1.818-.022 2.229.131.648.633 1.027 1.301.982.5-.034.855-.271 1.06-.708.102-.217.105-.245.11-1.063.006-1.127.104-1.601.491-2.377.739-1.48 2.21-2.556 3.924-2.869.519-.095 1.561-.095 2.08 0 2.233.408 3.998 2.101 4.363 4.186.075.428.067 1.265-.017 1.691-.404 2.056-2.075 3.651-4.291 4.096-.261.052-.548.071-1.085.072l-.73.001-.058.18-.362 1.13c-.168.522-.295.966-.283.985.012.019.231.058.486.085.654.071 1.822.033 2.417-.078 1.881-.351 3.46-1.227 4.689-2.602a7.278 7.278 0 0 0 1.735-3.58c.102-.56.102-1.799 0-2.36-.58-3.192-3.167-5.629-6.584-6.201-.366-.061-1.717-.11-2.06-.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPinterest);
export default ForwardRef;
