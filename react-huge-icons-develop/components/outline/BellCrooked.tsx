import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBellCrooked = (
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
            d='m5.761 7.184-.06-.748.06.748Zm2.065-.822.468.586-.468-.586Zm9.426 9.426.587.467-.587-.467Zm-.821 2.065.747.061-.747-.06ZM4.527 10.362l.53-.53-.53.53Zm8.725 8.725-.53.53.53-.53Zm5.91-5.696-.587-.467.586.467Zm-8.939-8.938-.467-.587.467.587Zm1.806 16.611a.75.75 0 1 0-.621-1.365l.62 1.365Zm-3.87-4.615a.75.75 0 1 0-1.366-.62l1.365.62Zm5.624 2.108L5.057 9.831l-1.06 1.061 8.725 8.726 1.06-1.061Zm4.792-5.633-1.91 2.397 1.174.934 1.909-2.396-1.173-.935ZM8.294 6.948 10.69 5.04l-.934-1.174-2.397 1.91.935 1.172Zm-2.472.983a4.567 4.567 0 0 0 2.472-.983l-.935-1.173c-.48.383-1.06.612-1.659.661l.122 1.495Zm10.844 7.39a4.567 4.567 0 0 0-.983 2.471l1.495.122c.049-.6.278-1.178.661-1.659l-1.173-.934ZM5.057 9.83c-.627-.627-.232-1.819.765-1.9L5.7 6.436c-2.184.178-3.296 2.864-1.703 4.456l1.06-1.06Zm7.665 9.787c1.592 1.592 4.278.48 4.456-1.704l-1.495-.122c-.081.998-1.273 1.392-1.9.765l-1.06 1.06Zm7.026-5.76c2.298-2.885 2.137-6.998-.428-9.563l-1.061 1.06c2.001 2.002 2.16 5.253.316 7.569l1.173.934ZM10.69 5.04c2.316-1.845 5.568-1.686 7.569.315l1.06-1.06c-2.565-2.566-6.678-2.727-9.563-.429l.934 1.174Zm.718 14.659c-.838.38-1.928.212-2.695-.555l-1.06 1.06c1.191 1.192 2.947 1.51 4.376.86l-.621-1.365Zm-2.695-.555c-.767-.767-.936-1.858-.555-2.695l-1.365-.62c-.65 1.428-.333 3.184.86 4.376l1.06-1.061Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellCrooked);
export default ForwardRef;
