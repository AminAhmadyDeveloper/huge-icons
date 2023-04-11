import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPress = (
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
            d='m10 13-.53.53a.75.75 0 0 0 1.28-.53H10Zm4 0h-.75c0 .414.336.75.75.75V13Zm-5.414-1.414-.53.53.53-.53Zm-3.3 2.242-.683.31.682-.31Zm2.648 5.827.683-.31-.683.31Zm11.218.33-.651-.373.65.373Zm.321-.563.651.372-.651-.372ZM5.25 8a.75.75 0 1 0 1.5 0h-1.5Zm12 0a.75.75 0 0 0 1.5 0h-1.5Zm-6.5 5V7h-1.5v6h1.5Zm2.5-6v6h1.5V7h-1.5Zm.75 6.75h2v-1.5h-2v1.5Zm1.679 7.5h-4.103v1.5h4.103v-1.5Zm-8.573-9.5h.066v-1.5h-.066v1.5Zm.95.366L9.47 13.53l1.06-1.06-1.414-1.415-1.06 1.061Zm-3.453 2.022 2.648 5.828 1.366-.621-2.649-5.828-1.365.621Zm15.2 6.219.321-.563-1.302-.744-.321.562 1.302.745Zm.947-2.92V17h-1.5v.438h1.5Zm-.626 2.357a4.75 4.75 0 0 0 .626-2.356h-1.5a3.25 3.25 0 0 1-.428 1.612l1.302.744ZM7.172 11.75c.331 0 .65.132.884.366l1.06-1.06a2.75 2.75 0 0 0-1.944-.806v1.5Zm-.066-1.5c-2 0-3.331 2.067-2.503 3.888l1.365-.62a1.25 1.25 0 0 1 1.138-1.768v-1.5Zm8.573 12.5a4.75 4.75 0 0 0 4.124-2.393l-1.302-.745a3.25 3.25 0 0 1-2.822 1.638v1.5Zm.321-9A3.25 3.25 0 0 1 19.25 17h1.5A4.75 4.75 0 0 0 16 12.25v1.5Zm-4-8c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 4.25v1.5Zm-.424 15.5a3.25 3.25 0 0 1-2.959-1.905l-1.366.62a4.75 4.75 0 0 0 4.325 2.785v-1.5ZM10.75 7c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 7h1.5Zm-4 1c0-2.9 2.35-5.25 5.25-5.25v-1.5A6.75 6.75 0 0 0 5.25 8h1.5ZM12 2.75c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 1.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPress);
export default ForwardRef;