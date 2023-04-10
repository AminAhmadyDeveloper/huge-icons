import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoofHomeInformation = (
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
            d='m3.153 7.197.427.616-.427-.616ZM9.54 2.763l-.427-.616.427.616Zm4.918 0 .427-.616-.427.616Zm6.389 4.434-.428.616.427-.616ZM2.82 11.245l-.518.542.518-.542Zm18.36 0-.517-.543.517.543ZM12.75 12a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm4.93 4.25H7.82v1.5h8.36v-1.5ZM3.58 7.813 9.97 3.38l-.855-1.232-6.39 4.434.856 1.232ZM14.031 3.38l6.389 4.434.855-1.232-6.389-4.434-.855 1.232Zm5.58 9.754v4.878h1.5v-4.878h-1.5ZM4.389 18.011v-4.878h-1.5v4.878h1.5Zm0-4.878a3.36 3.36 0 0 0-1.052-2.43l-1.035 1.084c.38.363.587.848.587 1.346h1.5Zm16.274-2.43a3.36 3.36 0 0 0-1.052 2.43h1.5c0-.498.207-.982.587-1.346l-1.035-1.085ZM9.969 3.378a3.593 3.593 0 0 1 4.062 0l.855-1.232a5.093 5.093 0 0 0-5.772 0l.855 1.232ZM7.819 21.25c-1.927 0-3.43-1.483-3.43-3.24h-1.5c0 2.65 2.241 4.74 4.93 4.74v-1.5Zm8.361 1.5c2.69 0 4.93-2.09 4.93-4.74h-1.5c0 1.757-1.502 3.24-3.43 3.24v1.5Zm4.24-14.937c1.006.698 1.11 2.061.242 2.89l1.036 1.084c1.564-1.492 1.352-3.974-.423-5.206l-.855 1.232ZM2.725 6.581C.95 7.813.738 10.295 2.302 11.787l1.035-1.085c-.867-.828-.763-2.19.243-2.889l-.855-1.232ZM11.25 12v5h1.5v-5h-1.5ZM13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeInformation);
export default ForwardRef;
