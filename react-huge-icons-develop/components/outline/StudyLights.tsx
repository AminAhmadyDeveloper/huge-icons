import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStudyLights = (
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
            d='m8.15 5.233.694-.286-.693.286Zm4.914 4.66-.53-.53.53.53ZM9.8 9.24l.694-.286-.694.286Zm5.44-5.44-.286.694.286-.693Zm.652 3.264.53.53-.53-.53Zm-4.66-4.913.286-.694-.285.694Zm6.78 7.654a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm.354 2.475a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.256.177a.75.75 0 0 0-1.5 0h1.5Zm-1.5 1.414a.75.75 0 0 0 1.5 0h-1.5Zm4.993-6.407a.75.75 0 0 0 0 1.5v-1.5Zm1.414 1.5a.75.75 0 0 0 0-1.5v1.5ZM8.57 6.488a.75.75 0 1 0-1.139-.976l1.14.976Zm-5.364 5.106-.57-.488.57.488Zm.104 2.716.53-.53-.53.53ZM15 22.75a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3.948-18.406 4.007 1.65.571-1.387-4.007-1.65-.57 1.387Zm4.415 3.69-2.828 2.828 1.06 1.06 2.829-2.827-1.06-1.061Zm-4.868 2.42-1.65-4.007-1.387.572 1.65 4.006 1.387-.57ZM9.116 3.588l.471-.472-1.06-1.06-.472.47 1.061 1.062Zm-.272 1.36a1.25 1.25 0 0 1 .272-1.36l-1.06-1.061a2.75 2.75 0 0 0-.599 2.992l1.387-.572Zm3.69 4.414a1.25 1.25 0 0 1-2.04-.408l-1.387.571c.747 1.815 3.1 2.285 4.487.898l-1.06-1.06Zm2.42-4.868a1.25 1.25 0 0 1 .408 2.04l1.06 1.06c1.388-1.387.918-3.74-.897-4.487l-.57 1.387Zm-3.436-3.037a2.75 2.75 0 0 0-2.991.599l1.06 1.06a1.25 1.25 0 0 1 1.36-.272l.571-1.387Zm5.433 9.409 1.415 1.414 1.06-1.06-1.414-1.415-1.06 1.06Zm-2.34 1.59v1.415h1.5v-1.414h-1.5Zm4.992-3.492h1.414v-1.5h-1.414v1.5ZM7.43 5.512l-4.794 5.594 1.139.976 4.794-5.594-1.139-.976ZM2.78 14.84l7.69 7.69 1.06-1.06-7.69-7.69-1.06 1.06ZM11 22.75h4v-1.5h-4v1.5Zm0-1.5H7v1.5h4v-1.5ZM2.636 11.106a2.75 2.75 0 0 0 .143 3.734l1.06-1.06a1.25 1.25 0 0 1-.064-1.698l-1.14-.976Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStudyLights);
export default ForwardRef;