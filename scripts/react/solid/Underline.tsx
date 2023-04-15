import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUnderline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.811 3.278a.883.883 0 0 0-.481.374c-.065.119-.07.391-.07 4.048 0 4.375-.008 4.226.284 5.1A5.79 5.79 0 0 0 11 16.666c.514.093 1.486.093 2 0a5.79 5.79 0 0 0 4.456-3.866c.292-.874.284-.725.284-5.1 0-3.879-.001-3.921-.082-4.059a1.003 1.003 0 0 0-.249-.257c-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.092.064-.204.18-.249.257-.081.137-.082.201-.104 4.099-.017 2.931-.036 4.007-.072 4.14-.193.714-.48 1.306-.865 1.787-1.161 1.45-3.164 1.966-4.907 1.262-1.282-.517-2.156-1.559-2.56-3.049-.036-.133-.055-1.209-.072-4.14-.022-3.898-.023-3.962-.104-4.099a.807.807 0 0 0-.847-.363m-2 16.001a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 14.213.063 14.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-7.143-.006c-3.929-.004-7.201.008-7.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUnderline);
export default ForwardRef;
