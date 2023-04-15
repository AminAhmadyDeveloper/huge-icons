import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBriefcaseDashed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.555 1.279a4.148 4.148 0 0 0-1.713.651c-.307.207-.847.791-1.057 1.142a4.286 4.286 0 0 0-.503 1.421 8.946 8.946 0 0 0-.042.905v.593l-.93.02c-1.076.023-1.363.077-1.973.365-1.134.538-1.871 1.41-2.208 2.613l-.109.391v9.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V9.38l-.106-.385c-.332-1.199-1.077-2.081-2.211-2.619-.61-.288-.897-.342-1.973-.365l-.93-.02v-.593c0-.326-.019-.733-.042-.905a4.286 4.286 0 0 0-.503-1.421c-.21-.351-.75-.935-1.057-1.142a4.558 4.558 0 0 0-1.23-.559c-.376-.1-.431-.103-1.748-.114-.748-.006-1.479.004-1.625.022m3.216 1.611c.657.26 1.084.69 1.34 1.345.095.243.104.327.12 1.015l.018.75H8.751l.018-.75c.016-.688.025-.772.12-1.015.247-.633.682-1.083 1.275-1.317.362-.143.487-.152 1.936-.144l1.4.008.271.108m3.602 6.465c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.082-.17.082-5.359.082s-5.221 0-5.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 2.438-.028 5.265-.024l5.14.006.153.095m0 4c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.082-.17.082-5.359.082s-5.221 0-5.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 2.438-.028 5.265-.024l5.14.006.153.095m0 4c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.082-.17.082-5.359.082s-5.221 0-5.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 2.438-.028 5.265-.024l5.14.006.153.095'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseDashed);
export default ForwardRef;
