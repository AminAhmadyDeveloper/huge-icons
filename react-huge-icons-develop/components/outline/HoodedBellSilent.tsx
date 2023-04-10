import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHoodedBellSilent = (
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
            d='M3.58 2.47a.75.75 0 0 0-1.062 1.06L3.58 2.47Zm16.939 19.06a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.742-2.78a.75.75 0 0 0 0-1.5v1.5Zm.463-9.775-.745.085.745-.085Zm.447 3.94.745-.084-.745.084Zm-13.374 0-.745-.084.745.084Zm.448-3.94.745.085-.745-.085Zm-1.313 5.897-.571-.486.571.486Zm15.104 0 .572-.486-.572.486ZM14.27 4.374h-.75c0 .32.204.605.507.71l.243-.71Zm-4.54 0 .243.71a.75.75 0 0 0 .507-.71h-.75Zm9.519 11.614a.75.75 0 0 0 1.498-.078l-1.498.078ZM8.469 4.1a.75.75 0 0 0 .692 1.33L8.468 4.1ZM7.231 7.12a.75.75 0 1 0-1.242-.84l1.242.84Zm8.47 13.144a.75.75 0 0 0-1.404-.526l1.405.526Zm-6-.526a.75.75 0 1 0-1.404.526l1.404-.526ZM2.518 3.53l18 18 1.061-1.06-18-18-1.06 1.06Zm15.26 13.72H6.222v1.5h11.554v-1.5Zm-.284-8.19.448 3.94 1.49-.17-.447-3.94-1.49.17ZM6.06 13l.447-3.94-1.49-.17-.448 3.94 1.49.17Zm-1.04 2.358A4.405 4.405 0 0 0 6.06 13l-1.49-.17a2.906 2.906 0 0 1-.692 1.556l1.142.972ZM17.942 13c.098.865.462 1.68 1.04 2.358l1.142-.972a2.906 2.906 0 0 1-.692-1.555l-1.49.169ZM6.223 17.25c-.655 0-1.118-.324-1.332-.7-.207-.365-.204-.802.128-1.192l-1.142-.972c-.765.899-.789 2.026-.29 2.904.49.864 1.463 1.46 2.636 1.46v-1.5ZM15.02 4.374V4.27h-1.5v.104h1.5Zm3.965 4.517c-.28-2.46-2.104-4.416-4.472-5.227l-.486 1.42c1.917.656 3.264 2.187 3.467 3.976l1.49-.17ZM10.48 4.374V4.27h-1.5v.104h1.5ZM12 2.75c.84 0 1.52.68 1.52 1.52h1.5A3.02 3.02 0 0 0 12 1.25v1.5Zm0-1.5a3.02 3.02 0 0 0-3.02 3.02h1.5c0-.84.68-1.52 1.52-1.52v-1.5Zm8.747 14.66a2.545 2.545 0 0 0-.623-1.524l-1.143.972c.183.215.258.432.268.63l1.498-.078ZM9.16 5.43a5.9 5.9 0 0 1 .812-.347l-.486-1.419a7.4 7.4 0 0 0-1.019.436l.693 1.33ZM6.506 9.06c.08-.703.333-1.36.726-1.941l-1.242-.84a5.822 5.822 0 0 0-.975 2.612l1.49.169Zm7.792 10.677c-.323.86-1.213 1.513-2.298 1.513v1.5c1.686 0 3.152-1.017 3.703-2.487l-1.405-.526ZM12 21.25c-1.084 0-1.975-.652-2.298-1.513l-1.404.526c.55 1.47 2.017 2.487 3.702 2.487v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoodedBellSilent);
export default ForwardRef;
