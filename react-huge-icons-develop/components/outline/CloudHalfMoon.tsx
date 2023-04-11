import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudHalfMoon = (
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
            d='M12.975 11.894a.75.75 0 0 0 1.05 1.07l-1.05-1.07Zm2.464-.645.234.712-.234-.712ZM16.106 3l.73.172a.75.75 0 0 0-.863-.91l.133.738Zm5.867 4.4.746-.077a.75.75 0 0 0-1.116-.575l.37.653Zm-9.967.276-.323.678.323-.678Zm7.94 4.284-.442.606.443-.606ZM9 20.25A6.25 6.25 0 0 1 2.75 14h-1.5A7.75 7.75 0 0 0 9 21.75v-1.5ZM2.75 14A6.25 6.25 0 0 1 9 7.75v-1.5A7.75 7.75 0 0 0 1.25 14h1.5Zm18.5 2A4.25 4.25 0 0 1 17 20.25v1.5A5.75 5.75 0 0 0 22.75 16h-1.5Zm-7.225-3.035a4.25 4.25 0 0 1 1.648-1.004l-.469-1.425a5.748 5.748 0 0 0-2.229 1.358l1.05 1.07Zm1.648-1.004A4.244 4.244 0 0 1 17 11.75v-1.5c-.626 0-1.23.1-1.796.286l.469 1.425ZM17 20.25H9v1.5h8v-1.5Zm3-13.08a3.25 3.25 0 0 1-3.25-3.25h-1.5A4.75 4.75 0 0 0 20 8.67v-1.5Zm-3.25-3.25c0-.258.03-.509.086-.748l-1.46-.344a4.759 4.759 0 0 0-.126 1.092h1.5Zm4.853 2.828A3.232 3.232 0 0 1 20 7.17v1.5c.85 0 1.652-.224 2.344-.617l-.741-1.305Zm-.376.73c.015.145.023.293.023.442h1.5c0-.2-.01-.4-.03-.597l-1.493.155Zm-8.472.234a4.252 4.252 0 0 1 3.485-3.974l-.267-1.476a5.752 5.752 0 0 0-4.716 5.378l1.498.072ZM9 7.75c.962 0 1.871.217 2.683.604l.645-1.355A7.723 7.723 0 0 0 9 6.25v1.5Zm2.683.604a6.276 6.276 0 0 1 3.066 3.19l1.38-.59a7.776 7.776 0 0 0-3.8-3.955l-.646 1.355Zm9.567-.434c0 1.41-.686 2.66-1.746 3.435l.885 1.21A5.743 5.743 0 0 0 22.75 7.92h-1.5ZM17 11.75c.938 0 1.802.303 2.504.816l.885-1.211A5.727 5.727 0 0 0 17 10.25v1.5Zm2.504.816A4.243 4.243 0 0 1 21.25 16h1.5c0-1.91-.931-3.6-2.36-4.645l-.886 1.21Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudHalfMoon);
export default ForwardRef;