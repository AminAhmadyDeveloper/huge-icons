import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEdit = (
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
            d='M3 20.25a.75.75 0 0 0 0 1.5v-1.5Zm18 1.5a.75.75 0 0 0 0-1.5v1.5ZM7.32 17.988l-.106-.742.106.742ZM6.012 16.68l-.743-.106.743.106Zm1.144-4.74-.53-.53.53.53Zm-.654 1.308.743.106-.743-.106Zm5.558 3.596.53.53-.53-.53Zm-1.308.654.106.742-.106-.742Zm9.57-12.186-.53.53.53-.53Zm0 3.269-.53-.53.53.53Zm-1.634-4.904.53-.53-.53.53Zm-3.269 0 .53.53-.53-.53Zm-.885 1.635a.75.75 0 0 0-1.5 0h1.5Zm4.154 5.654a.75.75 0 0 0 0-1.5v1.5ZM3 21.75h18v-1.5H3v1.5ZM18.158 4.207l1.635 1.635 1.06-1.06-1.634-1.635-1.061 1.06Zm1.635 3.844-8.263 8.263 1.06 1.06 8.263-8.263-1.06-1.06ZM7.686 12.47l8.263-8.264-1.06-1.06-8.263 8.263 1.06 1.06Zm2.96 4.284-3.432.49.212 1.485 3.432-.49-.212-1.485Zm-3.892.031.49-3.432-1.484-.212-.49 3.432 1.484.212Zm.46.46a.406.406 0 0 1-.46-.46l-1.485-.212a1.906 1.906 0 0 0 2.157 2.156l-.212-1.484Zm-.588-5.836a3.062 3.062 0 0 0-.866 1.732l1.485.212c.048-.335.203-.645.441-.884l-1.06-1.06Zm4.904 4.904a1.562 1.562 0 0 1-.884.441l.212 1.485a3.062 3.062 0 0 0 1.732-.866l-1.06-1.06Zm8.263-10.472c.61.61.61 1.599 0 2.209l1.06 1.06a3.062 3.062 0 0 0 0-4.33l-1.06 1.061Zm-.574-2.695a3.062 3.062 0 0 0-4.33 0l1.06 1.06c.61-.61 1.6-.61 2.209 0l1.06-1.06Zm-5.435 2.165h-.75v.017a1.791 1.791 0 0 0 .005.106 3.5 3.5 0 0 0 .029.264c.03.218.091.518.21.872.236.71.702 1.631 1.61 2.54l1.061-1.06c-.725-.726-1.077-1.44-1.249-1.955a3.522 3.522 0 0 1-.148-.61 2.13 2.13 0 0 1-.016-.15l-.002-.03v-.001.006h-.75Zm1.105 3.8c.909.908 1.83 1.374 2.54 1.61.354.119.654.18.872.21a3.497 3.497 0 0 0 .37.033h.016l.001-.75.001-.75h.006-.031a2.056 2.056 0 0 1-.15-.017 3.558 3.558 0 0 1-.61-.148c-.516-.172-1.229-.524-1.955-1.25l-1.06 1.061Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEdit);
export default ForwardRef;
