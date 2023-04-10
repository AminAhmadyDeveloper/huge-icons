import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCallIn = (
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
            d='M19 9.75a.75.75 0 0 0 0-1.5v1.5ZM17 9v-.75V9Zm-2-2h.75H15Zm.75-2a.75.75 0 0 0-1.5 0h1.5Zm5.78-1.47a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-6.06 3.94a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM15 16l-.147.735a.75.75 0 0 0 .818-.4L15 16ZM8 9l-.335-.67a.75.75 0 0 0-.4.817L8 9Zm.354-.177.335.67-.335-.67Zm.963-2.532.696-.278-.696.278Zm-.814-2.034-.696.279.696-.279Zm11.24 11.24.278-.696-.278.696Zm-2.034-.813.278-.697-.278.697Zm-2.532.962.67.335-.67-.335ZM19 8.25h-2v1.5h2v-1.5ZM15.75 7V5h-1.5v2h1.5Zm4.72-4.53-5 5 1.06 1.06 5-5-1.06-1.06ZM17 8.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 17 9.75v-1.5Zm3.25 9.104V19h1.5v-1.646h-1.5ZM5 3.75h1.646v-1.5H5v1.5ZM15 16l.148-.735h-.001l-.014-.004a6.128 6.128 0 0 1-.343-.09 8.997 8.997 0 0 1-.995-.36c-.815-.35-1.851-.928-2.765-1.841l-1.06 1.06c1.086 1.087 2.3 1.759 3.235 2.16.468.2.872.335 1.162.42a7.586 7.586 0 0 0 .443.116l.028.007.01.001.003.001h.001L15 16Zm-3.97-3.03c-.913-.914-1.491-1.95-1.84-2.765a8.993 8.993 0 0 1-.436-1.27 3.287 3.287 0 0 1-.019-.082v-.002.001L8 9l-.735.148v.004a1.333 1.333 0 0 0 .009.038l.023.099c.02.083.05.2.093.345.085.29.22.693.42 1.161.401.935 1.073 2.149 2.16 3.235l1.06-1.06Zm-2.695-3.3.354-.176-.67-1.342-.354.177.67 1.342Zm1.678-3.657-.814-2.034-1.392.557.813 2.034 1.393-.557ZM20.02 14.8l-2.034-.814-.557 1.393 2.034.813.557-1.392Zm-5.515.51-.177.354 1.342.67.177-.354-1.342-.67Zm3.481-1.324a2.75 2.75 0 0 0-3.48 1.324l1.34.67a1.25 1.25 0 0 1 1.583-.601l.557-1.393ZM8.69 9.494a2.75 2.75 0 0 0 1.324-3.481L8.62 6.57a1.25 1.25 0 0 1-.601 1.582l.67 1.342ZM6.646 3.75c.511 0 .97.311 1.16.786L9.2 3.979A2.75 2.75 0 0 0 6.646 2.25v1.5ZM21.75 17.354a2.75 2.75 0 0 0-1.729-2.553l-.557 1.393c.475.19.786.649.786 1.16h1.5ZM19 20.25C10.578 20.25 3.75 13.422 3.75 5h-1.5c0 9.25 7.5 16.75 16.75 16.75v-1.5Zm0 1.5A2.75 2.75 0 0 0 21.75 19h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM3.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 2.25 5h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallIn);
export default ForwardRef;
