import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDisLike = (
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
            d='m4.243 6.03-.728-.182.728.182ZM2.62 12.515l.728.182-.728-.182ZM10 15l.624.416A.75.75 0 0 0 10 14.25V15Zm-1.409 2.113-.624-.416.624.416ZM12 21v.75a.75.75 0 0 0 .651-.378L12 21Zm3.868-6.77-.651-.372.651.373Zm-.313-9.527.416-.624-.416.624Zm-1.547-1.031-.416.624.416-.624ZM20 14.25h-2v1.5h2v-1.5ZM16.75 13V6h-1.5v7h1.5ZM18 4.75h2v-1.5h-2v1.5ZM21.25 6v7h1.5V6h-1.5ZM20 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 3.25v1.5ZM16.75 6c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 15.25 6h1.5ZM18 14.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 18 15.75v-1.5Zm2 1.5A2.75 2.75 0 0 0 22.75 13h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Zm-8.211-13.5H8.123v1.5h3.666v-1.5ZM3.515 5.848l-1.621 6.485 1.455.364L4.97 6.212l-1.455-.364Zm1.047 9.902H10v-1.5H4.562v1.5Zm4.814-1.166-1.409 2.113 1.248.832 1.409-2.113-1.248-.832Zm1.295 7.166H12v-1.5h-1.329v1.5Zm1.98-.378 3.868-6.77-1.302-.744-3.868 6.77 1.302.744Zm4.099-7.638V5.535h-1.5v8.2h1.5Zm-.78-9.655-1.546-1.031-.832 1.248 1.547 1.031.832-1.248Zm.78 1.456a1.75 1.75 0 0 0-.78-1.456l-.831 1.248a.25.25 0 0 1 .111.208h1.5ZM1.894 12.333a2.75 2.75 0 0 0 2.668 3.417v-1.5a1.25 1.25 0 0 1-1.213-1.553l-1.455-.364ZM8.124 2.25a4.75 4.75 0 0 0-4.61 3.598l1.456.364A3.25 3.25 0 0 1 8.123 3.75v-1.5Zm3.665 1.5c.642 0 1.269.19 1.803.546l.832-1.248a4.75 4.75 0 0 0-2.635-.798v1.5ZM7.967 16.697c-1.44 2.16.109 5.053 2.704 5.053v-1.5c-1.397 0-2.231-1.558-1.456-2.72l-1.248-.833Zm8.552-2.094a1.75 1.75 0 0 0 .231-.869h-1.5a.25.25 0 0 1-.033.124l1.302.745Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDisLike);
export default ForwardRef;
