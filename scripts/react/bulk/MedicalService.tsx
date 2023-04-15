import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMedicalService = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.555 1.279a4.148 4.148 0 0 0-1.713.651c-.307.207-.847.791-1.057 1.142a4.286 4.286 0 0 0-.503 1.421c-.023.172-.042.838-.041 1.48.001 1.049.008 1.183.075 1.327a.734.734 0 0 0 .413.398c.349.146.751-.007.945-.358.056-.103.069-.317.088-1.48.021-1.356.022-1.361.128-1.631.258-.653.682-1.077 1.345-1.343l.265-.106h3l.271.109c.658.263 1.081.688 1.341 1.346.104.263.105.277.126 1.625.024 1.465.026 1.48.249 1.688.389.364 1.002.223 1.211-.277.051-.122.062-.352.062-1.307 0-.637-.019-1.299-.042-1.471a4.286 4.286 0 0 0-.503-1.421c-.21-.351-.75-.935-1.057-1.142a4.558 4.558 0 0 0-1.23-.559c-.376-.1-.431-.103-1.748-.114-.748-.006-1.479.004-1.625.022m1.145 9.037a.734.734 0 0 0-.398.413c-.051.123-.062.354-.062 1.33v1.181l-1.19.001c-1.071.001-1.206.008-1.35.075a.745.745 0 0 0 .029 1.382c.123.051.354.062 1.33.062h1.181l.001 1.19c.001 1.071.008 1.206.075 1.35a.743.743 0 0 0 1.368 0c.067-.144.074-.279.075-1.35l.001-1.19 1.19-.001c1.071-.001 1.206-.008 1.35-.075a.743.743 0 0 0 0-1.368c-.144-.067-.279-.074-1.35-.075l-1.19-.001-.001-1.19c-.001-1.071-.008-1.206-.075-1.35-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMedicalService);
export default ForwardRef;
