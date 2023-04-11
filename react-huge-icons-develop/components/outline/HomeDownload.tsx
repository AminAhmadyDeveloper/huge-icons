import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHomeDownload = (
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
            d='m4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58Zm-9 7.443a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm2.177 1.823-.53-.53.53.53Zm1.823-.763a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-3.28.47a.75.75 0 0 0 1.5 0h-1.5Zm1.5-7a.75.75 0 0 0-1.5 0h1.5Zm7.5 1.15v7.817h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm5.72 5.38 1.293 1.293 1.06-1.06-1.293-1.293-1.06 1.06Zm3.767 1.293 1.293-1.293-1.06-1.06-1.293 1.293 1.06 1.06Zm-2.474 0a1.75 1.75 0 0 0 2.474 0l-1.06-1.06a.25.25 0 0 1-.354 0l-1.06 1.06ZM12.75 16V9h-1.5v7h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeDownload);
export default ForwardRef;