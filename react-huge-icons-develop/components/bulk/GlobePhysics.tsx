import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGlobePhysics = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <circle cx={12} cy={12} r={10} fill='currentColor' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.557 8.072c.162-.93.378-1.765.636-2.474.293-.806.627-1.414.966-1.808.34-.396.627-.513.841-.513.214 0 .5.117.841.513.34.394.673 1.002.966 1.808.258.709.475 1.544.637 2.474A25.789 25.789 0 0 0 12 7.957c-.841 0-1.66.04-2.443.115Zm-1.32.164c.177-1.148.435-2.19.756-3.074.323-.888.722-1.65 1.198-2.204.474-.551 1.083-.958 1.81-.958.725 0 1.334.407 1.808.958.476.553.875 1.316 1.198 2.204.322.885.58 1.926.757 3.074 1.148.178 2.19.435 3.074.757.888.323 1.651.722 2.204 1.198.551.474.958 1.083.958 1.809s-.407 1.335-.958 1.81c-.553.475-1.316.874-2.204 1.197-.884.322-1.926.58-3.074.757-.178 1.148-.435 2.19-.757 3.074-.323.887-.722 1.65-1.198 2.204-.474.551-1.083.958-1.809.958s-1.335-.407-1.809-.958c-.476-.553-.875-1.317-1.198-2.204-.321-.885-.579-1.926-.757-3.074-1.148-.178-2.19-.435-3.074-.757-.887-.323-1.65-.722-2.204-1.198C2.407 13.335 2 12.726 2 12s.407-1.335.958-1.81c.553-.475 1.317-.874 2.204-1.197.885-.322 1.926-.58 3.074-.757Zm-.165 6.207a14.69 14.69 0 0 1-2.473-.636c-.807-.293-1.414-.627-1.809-.966-.396-.34-.513-.627-.513-.841 0-.214.117-.5.513-.841.395-.339 1.002-.673 1.809-.966a14.686 14.686 0 0 1 2.473-.636A25.79 25.79 0 0 0 7.958 12c0 .841.04 1.66.114 2.443Zm1.302.183c-.09-.828-.14-1.71-.14-2.626 0-.917.05-1.798.14-2.627A24.39 24.39 0 0 1 12 9.234c.917 0 1.799.05 2.627.14.09.828.14 1.71.14 2.626 0 .917-.05 1.798-.14 2.626-.828.09-1.71.14-2.627.14-.916 0-1.798-.05-2.626-.14Zm.183 1.302c.162.93.378 1.765.636 2.473.293.807.627 1.415.966 1.809.34.396.627.513.841.513.214 0 .5-.117.841-.513.34-.394.673-1.002.966-1.809.258-.708.475-1.543.637-2.473-.783.075-1.602.114-2.444.114-.841 0-1.66-.039-2.443-.114Zm6.372-1.485a14.69 14.69 0 0 0 2.473-.636c.806-.293 1.414-.627 1.808-.966.396-.34.514-.627.514-.841 0-.214-.118-.5-.514-.841-.394-.339-1.002-.673-1.808-.966a14.686 14.686 0 0 0-2.473-.636 26.011 26.011 0 0 1 0 4.886Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobePhysics);
export default ForwardRef;