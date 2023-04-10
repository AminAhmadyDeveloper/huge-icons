import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoonRainLow = (
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
            d='M17 18.25a.75.75 0 0 0 0 1.5v-1.5Zm-4.025-8.356a.75.75 0 0 0 1.05 1.07l-1.05-1.07Zm2.464-.645.234.712-.234-.712ZM12.456 5.91l-.37.652.37-.652ZM21 11l-.6.45.6-.45ZM7.894 19.672a.75.75 0 0 0 .212-1.485l-.212 1.485ZM2.75 12A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12h1.5Zm18.5 2A4.25 4.25 0 0 1 17 18.25v1.5A5.75 5.75 0 0 0 22.75 14h-1.5Zm-7.225-3.035a4.25 4.25 0 0 1 1.648-1.004l-.469-1.425a5.749 5.749 0 0 0-2.229 1.358l1.05 1.07Zm1.648-1.004A4.245 4.245 0 0 1 17 9.75v-1.5c-.626 0-1.23.1-1.796.286l.469 1.425ZM17 3.75A4.25 4.25 0 0 1 21.25 8h1.5A5.75 5.75 0 0 0 17 2.25v1.5Zm-3.863 2.475A4.25 4.25 0 0 1 17 3.75v-1.5a5.75 5.75 0 0 0-5.225 3.348l1.362.627ZM9 5.75c1.123 0 2.175.296 3.085.813l.742-1.304A7.718 7.718 0 0 0 9 4.25v1.5Zm3.085.813a6.277 6.277 0 0 1 2.664 2.98l1.38-.59a7.778 7.778 0 0 0-3.302-3.694l-.742 1.304ZM21.25 8c0 .958-.316 1.84-.85 2.55l1.2.9A5.728 5.728 0 0 0 22.75 8h-1.5ZM17 9.75a4.24 4.24 0 0 1 3.4 1.7l1.2-.9a5.742 5.742 0 0 0-4.6-2.3v1.5Zm3.4 1.7c.534.71.85 1.592.85 2.55h1.5c0-1.294-.428-2.49-1.15-3.45l-1.2.9ZM8.107 18.187A6.252 6.252 0 0 1 2.75 12h-1.5a7.752 7.752 0 0 0 6.644 7.672l.212-1.485ZM12 17l.51-.55a.75.75 0 0 0-1.02 0L12 17Zm.75 2.5c0 .395-.114.54-.182.6-.088.075-.26.15-.568.15v1.5c.52 0 1.098-.123 1.554-.52.474-.415.696-1.02.696-1.73h-1.5Zm-.75.75c-.308 0-.48-.075-.568-.15-.068-.06-.182-.205-.182-.6h-1.5c0 .71.222 1.315.696 1.73.456.397 1.034.52 1.554.52v-1.5Zm-.75-.75c0-.116.043-.292.158-.526a4.17 4.17 0 0 1 .436-.68 7.02 7.02 0 0 1 .657-.736l.009-.008.002-.002h-.001L12 17c-.51-.55-.511-.549-.511-.549h-.001l-.002.002a.507.507 0 0 0-.02.02l-.056.054a8.54 8.54 0 0 0-.754.851 5.647 5.647 0 0 0-.595.935c-.166.338-.311.75-.311 1.187h1.5ZM12 17c-.51.55-.51.549-.511.549h.001l.009.01.04.038a7.02 7.02 0 0 1 .617.696c.169.22.325.455.436.681.115.234.158.41.158.526h1.5c0-.436-.145-.849-.311-1.187a5.647 5.647 0 0 0-.595-.935 8.54 8.54 0 0 0-.754-.85 1.493 1.493 0 0 0-.077-.074l-.001-.002c-.001-.001-.001-.001-.512.548Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonRainLow);
export default ForwardRef;
