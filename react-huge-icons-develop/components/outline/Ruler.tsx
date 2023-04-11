import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRuler = (
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
            d='m8.882 21.354.53.53-.53-.53Zm-3.118 0-.53.53.53-.53Zm15.59-15.59.53-.53-.53.53Zm0 3.118-.53-.53.53.53Zm-6.236-6.236.53.53-.53-.53Zm3.118 0-.53.53.53-.53ZM2.646 15.118l-.53-.53.53.53Zm0 3.118.53-.53-.53.53Zm16.12-9.884a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm.499 2.62a.75.75 0 0 0 1.06-1.061l-1.06 1.06Zm-3.617.498a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm.499 2.62a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-3.617.498a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm.499 2.62a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-3.617.498a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm.499 2.62a.75.75 0 0 0 1.06-1.061l-1.06 1.06Zm-6.735-4.678L15.648 3.176l-1.06-1.06L2.115 14.587l1.061 1.06Zm14.53-12.472 3.118 3.118 1.06-1.06-3.117-3.119-1.061 1.061Zm3.118 5.176L8.352 20.824l1.06 1.06L21.885 9.413l-1.061-1.06ZM6.294 20.824l-3.118-3.118-1.06 1.06 3.118 3.119 1.06-1.061Zm2.058 0a1.455 1.455 0 0 1-2.058 0l-1.06 1.06a2.955 2.955 0 0 0 4.178 0l-1.06-1.06Zm12.472-14.53c.568.568.568 1.49 0 2.058l1.06 1.06a2.955 2.955 0 0 0 0-4.178l-1.06 1.06Zm-5.176-3.118a1.455 1.455 0 0 1 2.058 0l1.06-1.06a2.955 2.955 0 0 0-4.178 0l1.06 1.06ZM2.115 14.588a2.955 2.955 0 0 0 0 4.179l1.061-1.061a1.455 1.455 0 0 1 0-2.058l-1.06-1.06Zm15.59-5.176 1.56 1.56 1.06-1.061-1.558-1.56-1.061 1.061Zm-3.117 3.118 1.559 1.56 1.06-1.061-1.559-1.56-1.06 1.061Zm-3.118 3.118 1.559 1.56 1.06-1.061-1.559-1.56-1.06 1.061Zm-3.118 3.119 1.559 1.559 1.06-1.061-1.559-1.56-1.06 1.062Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRuler);
export default ForwardRef;