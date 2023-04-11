import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpeaker = (
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
            d='M17.35 9.892a.75.75 0 0 1 1.025-.274 2.75 2.75 0 0 1 0 4.764.75.75 0 1 1-.75-1.299 1.25 1.25 0 0 0 0-2.166.75.75 0 0 1-.274-1.025Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.265 6.951a.75.75 0 0 1 .884-.586 5.752 5.752 0 0 1 0 11.27.75.75 0 0 1-.298-1.47 4.252 4.252 0 0 0 0-8.33.75.75 0 0 1-.586-.884Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='m11.8 4.403-4.267 3.2a2 2 0 0 1-1.2.399H4A2 2 0 0 0 2 10v3.998a2 2 0 0 0 2 2h2.334a2 2 0 0 1 1.2.399l4.266 3.199c1.318.988 3.2.048 3.2-1.6V6.003c0-1.648-1.882-2.588-3.2-1.6Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeaker);
export default ForwardRef;