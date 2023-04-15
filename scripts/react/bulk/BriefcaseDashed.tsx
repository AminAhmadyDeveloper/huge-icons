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
            d='M10.555 1.279a4.148 4.148 0 0 0-1.713.651c-.307.207-.847.791-1.057 1.142a4.286 4.286 0 0 0-.503 1.421 9.01 9.01 0 0 0-.042.91V6h1.511l.018-.75c.016-.693.025-.771.123-1.021.253-.65.68-1.076 1.343-1.343l.265-.106h3l.271.109c.659.263 1.084.692 1.34 1.346.095.243.104.327.12 1.015l.018.75h1.511v-.597a9.01 9.01 0 0 0-.042-.91 4.286 4.286 0 0 0-.503-1.421c-.21-.351-.75-.935-1.057-1.142a4.558 4.558 0 0 0-1.23-.559c-.376-.1-.431-.103-1.748-.114-.748-.006-1.479.004-1.625.022M5.7 9.316a.745.745 0 0 0 .029 1.382c.132.055.835.062 6.271.062s6.139-.007 6.271-.062a.748.748 0 0 0 0-1.396c-.132-.055-.835-.062-6.28-.061-5.875.001-6.138.004-6.291.075m0 4a.745.745 0 0 0 .029 1.382c.132.055.835.062 6.271.062s6.139-.007 6.271-.062a.748.748 0 0 0 0-1.396c-.132-.055-.835-.062-6.28-.061-5.875.001-6.138.004-6.291.075m0 4a.745.745 0 0 0 .029 1.382c.132.055.835.062 6.271.062s6.139-.007 6.271-.062a.748.748 0 0 0 0-1.396c-.132-.055-.835-.062-6.28-.061-5.875.001-6.138.004-6.291.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseDashed);
export default ForwardRef;
