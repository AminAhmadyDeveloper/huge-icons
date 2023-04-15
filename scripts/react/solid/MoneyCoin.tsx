import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyCoin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.491 2.822c-.502.135-1.01.533-1.246.974-.254.478-.244.224-.244 5.966-.001 4.56.007 5.251.06 5.46a2.02 2.02 0 0 0 1.611 1.496c.185.03 1.286.041 3.548.033l3.28-.011.026-.3a3.402 3.402 0 0 1 .452-1.446l.134-.226-.211-.42c-.304-.607-.361-.87-.36-1.648.002-.617.006-.654.132-1.02.182-.53.415-.918.781-1.307a3.515 3.515 0 0 1 1.197-.847c.639-.266.518-.257 4.099-.275L20 9.236l-.001-2.348c0-2.583-.005-2.643-.244-3.092-.151-.282-.544-.668-.826-.811-.469-.238-.005-.225-7.947-.222-6.135.002-7.315.011-7.491.059m10 8a1.953 1.953 0 0 0-.875.505 1.962 1.962 0 0 0-.036 2.816c.274.281.63.479.996.555l.244.051-.231.048c-.544.115-1.12.551-1.364 1.033a2.005 2.005 0 0 0 1.37 2.872c.39.083 6.42.083 6.81 0a1.996 1.996 0 0 0 1.535-2.413 1.864 1.864 0 0 0-.512-.919 2.047 2.047 0 0 0-1.017-.573l-.231-.048.244-.051c.366-.076.722-.274.996-.555a1.962 1.962 0 0 0-.036-2.816 1.92 1.92 0 0 0-.892-.507c-.331-.087-6.681-.085-7.001.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyCoin);
export default ForwardRef;