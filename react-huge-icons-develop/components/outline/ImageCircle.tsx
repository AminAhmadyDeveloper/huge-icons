import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgImageCircle = (
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
            d='m19.061 11.884-.438.609.438-.61Zm-5.013.273.502.557-.502-.557Zm-4.096 3.686.502.558-.502-.558Zm-5.013.273.438-.609-.438.61Zm16.886-2.242.737.14-.737-.14Zm-19.589.296-.732.162.732-.162ZM10.25 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 11.75 9h-1.5ZM9 10.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 9 11.75v-1.5ZM7.75 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 6.25 9h1.5ZM9 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 9 6.25v1.5Zm4.546 3.85L9.45 15.285l1.004 1.115 4.096-3.687-1.004-1.115ZM9.45 15.285a3.25 3.25 0 0 1-4.073.221l-.876 1.218a4.75 4.75 0 0 0 5.953-.324L9.45 15.286Zm10.05-4.01a4.75 4.75 0 0 0-5.954.323l1.004 1.115a3.25 3.25 0 0 1 4.073-.221l.876-1.218ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5ZM21.25 12a9.31 9.31 0 0 1-.162 1.734l1.474.28A10.8 10.8 0 0 0 22.75 12h-1.5Zm-.162 1.734A9.253 9.253 0 0 1 12 21.25v1.5c5.25 0 9.619-3.762 10.562-8.736l-1.474-.28Zm1.175-.469-2.764-1.99-.876 1.218 2.764 1.99.876-1.218ZM12 21.25c-4.418 0-8.115-3.099-9.032-7.242l-1.464.324C2.569 19.148 6.864 22.75 12 22.75v-1.5Zm-9.032-7.242A9.287 9.287 0 0 1 2.75 12h-1.5c0 .8.088 1.58.254 2.332l1.464-.324Zm2.41 1.5L2.673 13.56l-.876 1.218L4.5 16.725l.876-1.218Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageCircle);
export default ForwardRef;