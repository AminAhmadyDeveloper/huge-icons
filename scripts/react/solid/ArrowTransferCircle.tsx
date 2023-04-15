import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowTransferCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m3.22 5.317c.171.08 2.247 2.141 2.342 2.324a.953.953 0 0 1 .051.331c0 .191-.02.26-.117.398-.064.092-.18.204-.257.249-.138.081-.178.082-4.359.082s-4.221-.001-4.359-.082a1.003 1.003 0 0 1-.257-.249c-.098-.138-.117-.206-.117-.402a.7.7 0 0 1 .345-.64l.162-.107 3.194-.02 3.194-.02-.365-.36c-.201-.198-.399-.432-.44-.52a.734.734 0 0 1 .983-.984m2.033 5.999c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.136.08-.205.082-3.33.102l-3.191.02.365.36c.201.198.399.432.44.52a.733.733 0 0 1-.663 1.06.847.847 0 0 1-.332-.077c-.163-.085-2.247-2.162-2.33-2.323-.085-.165-.065-.527.038-.694a.792.792 0 0 1 .459-.348c.069-.017 1.988-.028 4.265-.024l4.14.006.153.095'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowTransferCircle);
export default ForwardRef;
