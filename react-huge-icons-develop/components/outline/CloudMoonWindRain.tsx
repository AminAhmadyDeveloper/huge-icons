import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoonWindRain = (
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
            d='M12.975 8.894a.75.75 0 0 0 1.05 1.07l-1.05-1.07Zm2.464-.645.234.712-.234-.712ZM12.456 4.91l-.37.652.37-.652ZM21 10l-.6.45.6-.45ZM4.57 17.36a.75.75 0 1 0 .86-1.23l-.86 1.23Zm14.13-.463a.75.75 0 0 0 .6 1.374l-.6-1.374Zm-10.03.438a.75.75 0 1 0-1.34-.67l1.34.67Zm-2.34 1.33a.75.75 0 1 0 1.34.67l-1.34-.67Zm10.34-1.33a.75.75 0 1 0-1.34-.67l1.34.67Zm-2.34 1.33a.75.75 0 1 0 1.34.67l-1.34-.67Zm-1.634-1.386a.75.75 0 0 0-1.392-.558l1.392.558ZM9.304 21.72a.75.75 0 0 0 1.392.558l-1.392-.558ZM2.75 11A6.25 6.25 0 0 1 9 4.75v-1.5A7.75 7.75 0 0 0 1.25 11h1.5Zm11.275-1.035a4.25 4.25 0 0 1 1.648-1.004l-.469-1.425a5.749 5.749 0 0 0-2.229 1.358l1.05 1.07Zm1.648-1.004A4.245 4.245 0 0 1 17 8.75v-1.5c-.626 0-1.23.1-1.796.286l.469 1.425ZM17 2.75A4.25 4.25 0 0 1 21.25 7h1.5A5.75 5.75 0 0 0 17 1.25v1.5Zm-3.863 2.475A4.25 4.25 0 0 1 17 2.75v-1.5a5.75 5.75 0 0 0-5.225 3.348l1.362.627ZM9 4.75c1.123 0 2.175.296 3.085.813l.742-1.304A7.718 7.718 0 0 0 9 3.25v1.5Zm3.085.813a6.277 6.277 0 0 1 2.664 2.98l1.38-.59a7.778 7.778 0 0 0-3.302-3.694l-.742 1.304ZM21.25 7c0 .958-.316 1.84-.85 2.55l1.2.9A5.728 5.728 0 0 0 22.75 7h-1.5ZM17 8.75a4.24 4.24 0 0 1 3.4 1.7l1.2-.9a5.742 5.742 0 0 0-4.6-2.3v1.5Zm3.4 1.7c.534.71.85 1.592.85 2.55h1.5c0-1.294-.428-2.49-1.15-3.45l-1.2.9ZM5.43 16.13A6.242 6.242 0 0 1 2.75 11h-1.5a7.742 7.742 0 0 0 3.32 6.36l.86-1.23ZM21.25 13a4.251 4.251 0 0 1-2.55 3.897l.6 1.374A5.751 5.751 0 0 0 22.75 13h-1.5ZM7.33 16.665l-1 2 1.34.67 1-2-1.34-.67Zm8 0-1 2 1.34.67 1-2-1.34-.67Zm-4.026.056-2 5 1.392.558 2-5-1.392-.558Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonWindRain);
export default ForwardRef;