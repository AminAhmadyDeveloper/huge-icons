import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSearchMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.04 1.265a10.264 10.264 0 0 0-8.72 5.686C1.073 9.458.911 12.337 1.867 15c.821 2.285 2.502 4.251 4.676 5.469 1.658.93 3.72 1.395 5.59 1.26 1.9-.136 3.533-.692 5.087-1.73.22-.147.524-.369.675-.493.151-.124.286-.226.3-.226.014 0 .772.749 1.685 1.664 1.102 1.104 1.714 1.689 1.82 1.739a.733.733 0 0 0 1.06-.663.847.847 0 0 0-.077-.332c-.043-.081-.826-.895-1.74-1.808-.915-.913-1.663-1.671-1.663-1.685 0-.014.102-.149.226-.3a11.28 11.28 0 0 0 1.293-2.078c.712-1.558 1.048-3.351.93-4.964-.187-2.558-1.212-4.822-2.987-6.594-1.653-1.65-3.839-2.701-6.102-2.935a13.902 13.902 0 0 0-1.6-.059m1.352 1.537c3.336.36 6.148 2.535 7.305 5.649a8.748 8.748 0 0 1-2.016 9.229 8.644 8.644 0 0 1-6.181 2.56 8.727 8.727 0 0 1-8.74-8.74c0-2.335.909-4.532 2.559-6.181a8.739 8.739 0 0 1 5.241-2.515 11.55 11.55 0 0 1 1.832-.002m-5.191 8.021a.647.647 0 0 0-.365.345c-.139.273-.069.682.151.88.219.198.076.192 4.522.191 3.942-.001 4.159-.004 4.311-.074a.61.61 0 0 0 .358-.375.74.74 0 0 0 0-.58.61.61 0 0 0-.358-.375c-.152-.07-.367-.073-4.32-.073-3.615.001-4.178.009-4.299.061'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSearchMinus);
export default ForwardRef;
