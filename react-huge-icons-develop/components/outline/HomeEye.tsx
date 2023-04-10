import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHomeEye = (
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
        <path
            fill='currentColor'
            d='m4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm-11.52 8.07-.514.547.514-.547Zm0-2.194.513.546-.513-.546Zm7.982 2.194-.513-.546.513.546Zm0-2.194.514-.547-.514.547Zm4.259-2.753v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm11.728 4.4c-.881.828-2.147 1.7-3.478 1.7v1.5c1.93 0 3.56-1.22 4.505-2.106l-1.027-1.093ZM12 16.25c-1.33 0-2.596-.872-3.478-1.7l-1.027 1.094C8.44 16.53 10.07 17.75 12 17.75v-1.5Zm-3.478-2.8c.882-.828 2.147-1.7 3.478-1.7v-1.5c-1.93 0-3.56 1.22-4.505 2.106l1.027 1.093ZM12 11.75c1.33 0 2.597.872 3.478 1.7l1.027-1.094C15.56 11.47 13.93 10.25 12 10.25v1.5Zm-3.478 2.8a.736.736 0 0 1 0-1.1l-1.027-1.094a2.236 2.236 0 0 0 0 3.288l1.027-1.093Zm7.983 1.094a2.236 2.236 0 0 0 0-3.288l-1.027 1.093c.33.31.33.792 0 1.102l1.027 1.093Z'
        />
        <circle cx={12} cy={14} r={1} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeEye);
export default ForwardRef;
