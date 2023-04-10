import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArchiveFavourite = (
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
            d='m11.22 11.024.585-.469-.586.469ZM9.364 8.706l.586-.468-.586.468Zm2.351-2.24-.53.53.53-.53ZM12 6.75l-.53.53a.75.75 0 0 0 1.06 0L12 6.75Zm.284-.284.53.53-.53-.53Zm2.351 2.24.586.469-.586-.469Zm-1.854 2.318-.586-.469.586.469ZM7.6 13.8l-.6.45.6-.45Zm1.2 1.6.6-.45-.6.45Zm6.4 0-.6-.45.6.45Zm1.2-1.6-.6-.45.6.45Zm-4.595-3.245L9.95 8.238l-1.172.937 1.854 2.317 1.172-.937ZM9.75 7.665v-.074h-1.5v.075h1.5Zm1.436-.669.284.284 1.06-1.06-.284-.284-1.06 1.06Zm1.344.284.284-.284-1.06-1.06-.284.284 1.06 1.06Zm1.72.311v.075h1.5V7.59h-1.5Zm-.2.647-1.855 2.317 1.171.937 1.855-2.317-1.172-.937Zm.2-.572c0 .208-.07.41-.2.572l1.17.937c.343-.429.53-.96.53-1.51h-1.5Zm-.841-.916c.464 0 .841.377.841.841h1.5a2.341 2.341 0 0 0-2.341-2.341v1.5Zm-2.818 0c.223 0 .437.089.595.246l1.06-1.06a2.34 2.34 0 0 0-1.655-.686v1.5Zm-.841.841c0-.464.377-.841.841-.841v-1.5A2.341 2.341 0 0 0 8.25 7.591h1.5Zm.2.647a.916.916 0 0 1-.2-.572h-1.5c0 .548.187 1.08.53 1.509l1.17-.937Zm2.864-1.242a.841.841 0 0 1 .595-.246v-1.5a2.34 2.34 0 0 0-1.655.686l1.06 1.06Zm-2.18 4.496a1.75 1.75 0 0 0 2.732 0l-1.17-.937a.25.25 0 0 1-.391 0l-1.171.937ZM21.25 16v3h1.5v-3h-1.5ZM19 21.25H5v1.5h14v-1.5ZM2.75 19v-3h-1.5v3h1.5ZM5 13.75h1v-1.5H5v1.5Zm2 .5 1.2 1.6 1.2-.9-1.2-1.6-1.2.9Zm11-.5h1v-1.5h-1v1.5Zm-2.2 2.1 1.2-1.6-1.2-.9-1.2 1.6 1.2.9Zm-3.8 1.9a4.75 4.75 0 0 0 3.8-1.9l-1.2-.9a3.25 3.25 0 0 1-2.6 1.3v1.5Zm6-5.5a2.75 2.75 0 0 0-2.2 1.1l1.2.9a1.25 1.25 0 0 1 1-.5v-1.5Zm-9.8 3.6a4.75 4.75 0 0 0 3.8 1.9v-1.5a3.25 3.25 0 0 1-2.6-1.3l-1.2.9ZM6 13.75c.393 0 .764.185 1 .5l1.2-.9a2.75 2.75 0 0 0-2.2-1.1v1.5Zm-1 7.5A2.25 2.25 0 0 1 2.75 19h-1.5A3.75 3.75 0 0 0 5 22.75v-1.5ZM21.25 19A2.25 2.25 0 0 1 19 21.25v1.5A3.75 3.75 0 0 0 22.75 19h-1.5Zm1.5-3A3.75 3.75 0 0 0 19 12.25v1.5A2.25 2.25 0 0 1 21.25 16h1.5Zm-20 0A2.25 2.25 0 0 1 5 13.75v-1.5A3.75 3.75 0 0 0 1.25 16h1.5Zm18-3V6h-1.5v7h1.5ZM16 1.25H8v1.5h8v-1.5ZM3.25 6v7h1.5V6h-1.5ZM8 1.25A4.75 4.75 0 0 0 3.25 6h1.5A3.25 3.25 0 0 1 8 2.75v-1.5ZM20.75 6A4.75 4.75 0 0 0 16 1.25v1.5A3.25 3.25 0 0 1 19.25 6h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArchiveFavourite);
export default ForwardRef;
