import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLoadingDoted = (
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
            d='M13.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 4h-1.5ZM12 5.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 6.75v-1.5ZM10.75 4c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 4h1.5ZM12 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 1.25v1.5ZM13.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 20h-1.5ZM12 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 22.75v-1.5ZM10.75 20c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 20h1.5ZM12 18.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 17.25v1.5Zm7.553-9.667a1.25 1.25 0 0 1-1.707-.458l-1.3.75a2.75 2.75 0 0 0 3.757 1.007l-.75-1.3Zm-1.707-.458a1.25 1.25 0 0 1 .457-1.708l-.75-1.299a2.75 2.75 0 0 0-1.007 3.757l1.3-.75Zm.457-1.708a1.25 1.25 0 0 1 1.707.458l1.3-.75a2.75 2.75 0 0 0-3.757-1.007l.75 1.3Zm1.707.458a1.25 1.25 0 0 1-.457 1.708l.75 1.299a2.75 2.75 0 0 0 1.007-3.757l-1.3.75ZM5.697 17.082a1.25 1.25 0 0 1-1.708-.457l-1.299.75a2.75 2.75 0 0 0 3.757 1.007l-.75-1.3Zm-1.708-.457a1.25 1.25 0 0 1 .458-1.707l-.75-1.3a2.75 2.75 0 0 0-1.007 3.757l1.3-.75Zm.458-1.707a1.25 1.25 0 0 1 1.707.457l1.3-.75a2.75 2.75 0 0 0-3.757-1.007l.75 1.3Zm1.707.457a1.25 1.25 0 0 1-.457 1.707l.75 1.3a2.75 2.75 0 0 0 1.006-3.757l-1.299.75Zm12.149 1.707a1.25 1.25 0 0 1-.457-1.707l-1.3-.75a2.75 2.75 0 0 0 1.007 3.757l.75-1.3Zm-.457-1.707a1.25 1.25 0 0 1 1.707-.457l.75-1.3a2.75 2.75 0 0 0-3.757 1.007l1.3.75Zm1.707-.457a1.25 1.25 0 0 1 .457 1.707l1.3.75a2.75 2.75 0 0 0-1.007-3.757l-.75 1.3Zm.457 1.707a1.25 1.25 0 0 1-1.707.457l-.75 1.3a2.75 2.75 0 0 0 3.757-1.007l-1.3-.75ZM4.447 9.083a1.25 1.25 0 0 1-.458-1.708l-1.299-.75a2.75 2.75 0 0 0 1.007 3.757l.75-1.3Zm-.458-1.708a1.25 1.25 0 0 1 1.708-.458l.75-1.299A2.75 2.75 0 0 0 2.69 6.625l1.3.75Zm1.708-.458a1.25 1.25 0 0 1 .457 1.708l1.3.75a2.75 2.75 0 0 0-1.007-3.757l-.75 1.3Zm.457 1.708a1.25 1.25 0 0 1-1.707.458l-.75 1.299a2.75 2.75 0 0 0 3.756-1.007l-1.299-.75Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLoadingDoted);
export default ForwardRef;