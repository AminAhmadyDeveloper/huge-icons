import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookOpenWritten = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.58 2.264c-.927.119-1.638.619-2.035 1.434-.308.631-.285.08-.285 6.882v6.08l.094.298c.257.82.763 1.44 1.481 1.816.408.214.691.293 1.376.384 1.731.229 3.435.658 4.689 1.18.533.222 1.309.626 1.74.906.683.445 1.107.569 1.64.482.352-.059.6-.169 1.08-.482 1.531-.996 3.656-1.694 6.28-2.062.811-.114 1.124-.198 1.525-.408.718-.376 1.224-.996 1.481-1.816l.094-.298v-6.08c0-5.785-.004-6.093-.074-6.34-.278-.983-.993-1.703-1.906-1.921-.48-.115-1.333-.031-2.88.281-2.113.427-3.9 1.102-5.298 1.999-.573.368-.591.368-1.164 0C9.769 3.54 7.47 2.757 4.911 2.383c-.712-.104-1.145-.142-1.331-.119m.96 1.578c2.487.365 4.649 1.087 6.099 2.039.196.129.412.263.479.298l.122.063v13.603l-.17-.105c-.552-.338-1.685-.849-2.53-1.139-1.066-.366-2.584-.717-3.82-.882a10.93 10.93 0 0 1-.86-.143c-.427-.109-.751-.371-.97-.787l-.11-.209-.011-5.947c-.01-5.855-.009-5.951.07-6.16a1.05 1.05 0 0 1 .529-.609c.256-.128.423-.131 1.172-.022m16.092.022c.25.124.422.322.529.609.079.209.08.305.07 6.16l-.011 5.947-.108.204a1.473 1.473 0 0 1-.496.579c-.256.176-.449.232-1.11.32-1.678.224-3.369.639-4.654 1.14-.494.193-1.631.735-1.922.916l-.17.106V6.247l.17-.098c.093-.053.332-.2.53-.327 1.446-.922 3.521-1.609 5.98-1.98.721-.108.939-.104 1.192.022M4.65 7.604a.719.719 0 0 0-.373.827c.047.171.231.419.366.491.04.021.357.091.705.155 1.208.223 2.166.471 3.085.801.506.181.634.194.869.087.552-.251.599-1.002.082-1.304-.435-.255-2.263-.78-3.552-1.021-.762-.143-.954-.149-1.182-.036m.01 3.983c-.185.098-.265.179-.345.353a.739.739 0 0 0 .01.65c.137.283.293.358 1.02.489.349.063.84.161 1.09.218.517.117.673.126.857.049.246-.103.469-.45.467-.726-.001-.141-.142-.397-.289-.526-.118-.104-.236-.148-.665-.25-.675-.16-1.613-.324-1.844-.322-.1 0-.235.03-.301.065'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookOpenWritten);
export default ForwardRef;
