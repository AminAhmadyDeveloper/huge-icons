import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPen = (
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
            d='m3 21-.731-.168a.75.75 0 0 0 .899.899L3 21Zm1.928-5.43-.53-.53.53.53Zm-1.163 2.101.73.168-.73-.168Zm4.665 1.4.53.531-.53-.53Zm-2.101 1.164-.168-.73.168.73ZM19.463 8.04l-.53-.53.53.53ZM15.96 4.538l.53.53-.53-.53Zm5.57-1.008a.75.75 0 0 0-1.061-1.06l1.06 1.06Zm-2.837 9.464-.53-.53.53.53ZM16.626 14a.75.75 0 0 0 1.06 1.06L16.626 14Zm2.068-4.082-.53.53.53-.53ZM15.38 5.545a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm-9.543 9.543a.75.75 0 1 0-1.061 1.061l1.06-1.06Zm2.014 4.136a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM18.932 7.509 7.9 18.541l1.06 1.061L19.993 8.57l-1.06-1.061ZM5.458 16.1 16.491 5.068l-1.06-1.06L4.397 15.04l1.06 1.06Zm.703 3.404-3.329.765.336 1.462 3.329-.765-.336-1.462Zm-2.43 1.664.765-3.329-1.462-.336-.765 3.329 1.462.336Zm.667-6.128a5.099 5.099 0 0 0-1.364 2.463l1.462.336a3.598 3.598 0 0 1 .962-1.739l-1.06-1.06ZM7.9 18.542a3.599 3.599 0 0 1-1.74.962l.337 1.462a5.099 5.099 0 0 0 2.463-1.364l-1.06-1.06ZM18.932 5.067a1.726 1.726 0 0 1 0 2.441l1.06 1.06a3.226 3.226 0 0 0 0-4.562l-1.06 1.06Zm1.06-1.06a3.226 3.226 0 0 0-4.562 0l1.061 1.06a1.726 1.726 0 0 1 2.441 0l1.06-1.06Zm.478-1.538-1.538 1.537 1.06 1.06L21.53 3.53l-1.06-1.06Zm-2.307 9.994L16.626 14l1.06 1.06 1.538-1.537-1.06-1.06Zm1.061-3.075L15.38 5.545l-1.06 1.06 3.843 3.844 1.061-1.06Zm0 4.135a2.924 2.924 0 0 0 0-4.135l-1.06 1.06a1.425 1.425 0 0 1 0 2.015l1.06 1.06ZM4.776 16.15l3.075 3.075 1.06-1.06-3.074-3.076-1.061 1.061Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPen);
export default ForwardRef;