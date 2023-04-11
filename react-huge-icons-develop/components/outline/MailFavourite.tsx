import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailFavourite = (
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
            d='m18.22 7.024.585-.469-.586.469Zm-1.855-2.318.586-.468-.586.468Zm2.351-2.24-.53.53.53-.53ZM19 2.75l-.53.53a.75.75 0 0 0 1.06 0L19 2.75Zm.284-.284.53.53-.53-.53Zm2.351 2.24.586.469-.586-.469Zm-1.854 2.318-.586-.469.586.469ZM6.45 12.4a.75.75 0 1 0-.9 1.2l.9-1.2Zm1.75 2.25.45-.6-.45.6Zm3.6 0 .45.6-.45-.6Zm2.65-1.05a.75.75 0 1 0-.9-1.2l.9 1.2Zm4.355-7.045L16.95 4.238l-1.172.937 1.855 2.317 1.17-.937Zm-2.055-2.89v-.074h-1.5v.075h1.5Zm1.436-.669.284.284 1.06-1.06-.284-.284-1.06 1.06Zm1.344.284.284-.284-1.06-1.06-.284.284 1.06 1.06Zm1.72.311v.075h1.5V3.59h-1.5Zm-.2.647-1.855 2.317 1.171.937 1.855-2.317-1.172-.937Zm.2-.572c0 .208-.07.41-.2.572l1.17.937c.343-.429.53-.96.53-1.51h-1.5Zm-.841-.916c.465 0 .841.377.841.841h1.5a2.341 2.341 0 0 0-2.341-2.341v1.5Zm-2.818 0c.223 0 .437.089.595.246l1.06-1.06a2.34 2.34 0 0 0-1.655-.686v1.5Zm-.841.841c0-.464.377-.841.841-.841v-1.5a2.341 2.341 0 0 0-2.341 2.341h1.5Zm.2.647a.916.916 0 0 1-.2-.572h-1.5c0 .548.187 1.08.53 1.509l1.17-.937Zm2.864-1.242a.841.841 0 0 1 .595-.246v-1.5a2.34 2.34 0 0 0-1.655.686l1.06 1.06Zm-2.18 4.496a1.75 1.75 0 0 0 2.732 0l-1.17-.937a.25.25 0 0 1-.391 0l-1.171.937ZM5 8.75h10v-1.5H5v1.5ZM17.25 11v8h1.5v-8h-1.5ZM15 21.25H5v1.5h10v-1.5ZM2.75 19v-8h-1.5v8h1.5ZM5 21.25A2.25 2.25 0 0 1 2.75 19h-1.5A3.75 3.75 0 0 0 5 22.75v-1.5ZM17.25 19A2.25 2.25 0 0 1 15 21.25v1.5A3.75 3.75 0 0 0 18.75 19h-1.5ZM15 8.75A2.25 2.25 0 0 1 17.25 11h1.5A3.75 3.75 0 0 0 15 7.25v1.5ZM5 7.25A3.75 3.75 0 0 0 1.25 11h1.5A2.25 2.25 0 0 1 5 8.75v-1.5Zm.55 6.35 2.2 1.65.9-1.2-2.2-1.65-.9 1.2Zm6.7 1.65 2.2-1.65-.9-1.2-2.2 1.65.9 1.2Zm-4.5 0c1.333 1 3.167 1 4.5 0l-.9-1.2c-.8.6-1.9.6-2.7 0l-.9 1.2Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailFavourite);
export default ForwardRef;