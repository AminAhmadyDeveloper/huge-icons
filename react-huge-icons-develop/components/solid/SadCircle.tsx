import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSadCircle = (
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
            fillRule='evenodd'
            d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-2.505-5.436a.75.75 0 0 1-.993-1.125l.275-.21c.162-.114.395-.26.693-.404A5.79 5.79 0 0 1 12 14.25a5.79 5.79 0 0 1 2.53.575 5.149 5.149 0 0 1 .885.545l.083.07a.75.75 0 0 1-.992 1.124l-.14-.105a3.654 3.654 0 0 0-.49-.284A4.29 4.29 0 0 0 12 15.75a4.29 4.29 0 0 0-1.876.425c-.218.105-.383.21-.49.284l-.14.105ZM17 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSadCircle);
export default ForwardRef;