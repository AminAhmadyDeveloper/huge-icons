import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.985 2.288c-.216.059-.441.295-.499.523-.061.244-.065 4.66-.004 4.88.053.188.255.424.426.495.104.043.603.054 2.521.054 2.684 0 2.536.016 2.79-.298.11-.136.121-.176.121-.439 0-.255-.013-.307-.112-.436-.222-.291-.182-.285-1.988-.307l-1.619-.02.432-.447C7.317 4.984 8.868 4.17 10.7 3.853c.562-.097 2.038-.097 2.6 0 1.711.296 3.185 1.032 4.407 2.199 1.287 1.231 2.125 2.828 2.44 4.648.097.562.097 2.038 0 2.6a8.5 8.5 0 0 1-.847 2.529 8.247 8.247 0 0 1-9.14 4.212c-2.31-.516-4.328-2.071-5.456-4.205-.571-1.08-.862-2.16-.938-3.487-.038-.661-.079-.77-.357-.965-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.292.205-.332.317-.326.916.019 1.918.733 3.94 1.98 5.608.377.504 1.343 1.47 1.847 1.847a9.95 9.95 0 0 0 4.608 1.911c.656.095 1.944.095 2.6 0a10.025 10.025 0 0 0 2.96-.904c1.052-.515 1.77-1.03 2.621-1.881s1.367-1.57 1.88-2.621c1.616-3.305 1.23-7.202-1.006-10.164-1.519-2.012-3.816-3.361-6.363-3.738-.664-.099-1.935-.119-2.532-.042-2.116.276-4.077 1.19-5.527 2.577l-.373.356V4.063c0-1.27-.013-1.363-.212-1.576a.784.784 0 0 0-.763-.199'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUndo);
export default ForwardRef;
