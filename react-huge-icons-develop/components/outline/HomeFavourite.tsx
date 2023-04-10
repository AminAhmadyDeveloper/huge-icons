import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHomeFavourite = (
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
            d='m4.47 7.027-.477-.58.477.58Zm5-4.118-.477-.579.477.58Zm5.06 0-.477.58.477-.58Zm5 4.118-.477.579.477-.58ZM12 12l-.53.53a.75.75 0 0 0 1.06 0L12 12Zm.31-.31.53.531-.53-.53Zm-.62 0-.53.531.53-.53Zm-3.093 3.094-.53.53.53-.53Zm2.166 2.166.53-.53-.53.53Zm2.474 0-.53-.53.53.53Zm2.166-2.166.53.53-.53-.53Zm-6.806-3.093-.53-.53.53.53Zm11.653-1.54v7.816h1.5V10.15h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 17.967V10.15h-1.5v7.817h1.5ZM4.947 7.606l5-4.118-.954-1.158-5 4.118.954 1.157Zm9.106-4.118 5 4.117.954-1.157-5-4.118-.954 1.158Zm-4.106 0a3.225 3.225 0 0 1 4.106 0l.954-1.158a4.725 4.725 0 0 0-6.014 0l.954 1.158ZM7 21.25c-1.79 0-3.25-1.464-3.25-3.283h-1.5c0 2.636 2.12 4.783 4.75 4.783v-1.5Zm13.25-3.283c0 1.819-1.46 3.283-3.25 3.283v1.5c2.63 0 4.75-2.147 4.75-4.783h-1.5Zm1.5-7.817a4.796 4.796 0 0 0-1.743-3.702l-.954 1.157a3.296 3.296 0 0 1 1.197 2.545h1.5Zm-18 0c0-.988.44-1.922 1.197-2.545l-.954-1.157A4.796 4.796 0 0 0 2.25 10.15h1.5Zm8.78 2.38.31-.309-1.061-1.06-.31.309 1.061 1.06Zm-1.37-.309.31.31 1.06-1.061-.309-.31-1.06 1.061Zm-3.093 3.094 2.165 2.165 1.06-1.06-2.165-2.166-1.06 1.06Zm5.7 2.165 2.166-2.165-1.06-1.061-2.166 2.165 1.06 1.061Zm1.106-5.259a1.437 1.437 0 0 1 0 2.033l1.06 1.06a2.938 2.938 0 0 0 0-4.154l-1.06 1.061Zm1.06-1.06a2.937 2.937 0 0 0-4.154 0l1.06 1.06a1.437 1.437 0 0 1 2.034 0l1.06-1.06Zm-6.806 1.06a1.437 1.437 0 0 1 2.033 0l1.061-1.06a2.937 2.937 0 0 0-4.154 0l1.06 1.06Zm1.105 5.26a2.5 2.5 0 0 0 3.536 0l-1.06-1.062a1 1 0 0 1-1.415 0l-1.06 1.061Zm-2.165-6.32a2.938 2.938 0 0 0 0 4.154l1.06-1.061a1.437 1.437 0 0 1 0-2.033l-1.06-1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeFavourite);
export default ForwardRef;
