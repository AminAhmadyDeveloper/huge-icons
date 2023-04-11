import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCameraOnePieceSilent = (
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
            d='M2.53 1.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm18.94 21.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM15.594 3.89l-.624.417.624-.416ZM17 6l-.624.416A.75.75 0 0 0 17 6.75V6ZM8.406 3.89l.624.417-.624-.416ZM6 6.75a.75.75 0 0 0 0-1.5v1.5Zm1.576-2.966a.75.75 0 0 0 1.248.832l-1.248-.832Zm13.592 13.947a.75.75 0 1 0 1.462.335l-1.462-.335Zm-.51 3.207a.75.75 0 0 0-.84-1.243l.84 1.243ZM1.47 2.53l20 20 1.06-1.06-20-20-1.06 1.06ZM12 15.75a2.25 2.25 0 0 1-2.25-2.25h-1.5A3.75 3.75 0 0 0 12 17.25v-1.5Zm2.051-1.323A2.25 2.25 0 0 1 12 15.75v1.5a3.75 3.75 0 0 0 3.418-2.205l-1.367-.618ZM9.75 13.5c0-.832.451-1.56 1.126-1.95l-.752-1.298A3.749 3.749 0 0 0 8.25 13.5h1.5Zm.32-9.75h3.86v-1.5h-3.86v1.5Zm4.9.557 1.406 2.109 1.248-.832-1.406-2.11-1.248.833Zm-1.04-.557c.418 0 .808.209 1.04.557l1.248-.832A2.75 2.75 0 0 0 13.93 2.25v1.5Zm-4.9.557a1.25 1.25 0 0 1 1.04-.557v-1.5c-.92 0-1.778.46-2.288 1.225l1.248.832ZM21.25 10v7h1.5v-7h-1.5ZM18 20.25H6v1.5h12v-1.5ZM2.75 17v-7h-1.5v7h1.5ZM6 20.25A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75v-1.5Zm12-13.5A3.25 3.25 0 0 1 21.25 10h1.5A4.75 4.75 0 0 0 18 5.25v1.5ZM6 5.25A4.75 4.75 0 0 0 1.25 10h1.5A3.25 3.25 0 0 1 6 6.75v-1.5Zm12 0h-1v1.5h1v-1.5Zm-9.176-.634.206-.31-1.248-.831-.206.309 1.248.832ZM21.25 17c0 .252-.029.497-.082.73l1.462.337c.079-.344.12-.701.12-1.067h-1.5Zm-1.433 2.695A3.231 3.231 0 0 1 18 20.25v1.5c.983 0 1.899-.3 2.657-.812l-.84-1.243Z'
        />
        <circle cx={12} cy={6} r={1} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraOnePieceSilent);
export default ForwardRef;