import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHeadphones = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.34 2.281c-1.875.117-3.691.798-5.256 1.971-.501.375-1.468 1.344-1.839 1.84-1.002 1.341-1.607 2.766-1.893 4.46-.083.488-.087.647-.102 4.048-.01 2.448-.001 3.645.03 3.88.107.821.472 1.55 1.081 2.159.452.452.861.711 1.43.906a3.749 3.749 0 0 0 3.138-.33c.442-.262 1.024-.844 1.286-1.286.233-.391.444-.989.503-1.422.068-.503.054-2.666-.02-3.092-.262-1.507-1.315-2.662-2.775-3.043a4.07 4.07 0 0 0-1.781-.016c-.377.091-1.024.375-1.255.551l-.137.105.021-.976c.022-1.054.068-1.424.272-2.192.743-2.797 3.004-5.058 5.802-5.801.818-.217 1.168-.259 2.155-.259.987 0 1.337.042 2.155.259 2.798.743 5.059 3.004 5.802 5.801.204.768.25 1.138.272 2.192l.021.976-.137-.105c-.231-.176-.878-.46-1.255-.551a4.07 4.07 0 0 0-1.781.016c-1.46.381-2.513 1.536-2.775 3.043-.074.426-.088 2.589-.02 3.092.059.433.27 1.031.503 1.422.262.442.844 1.024 1.286 1.286a3.749 3.749 0 0 0 3.138.33c.569-.195.978-.454 1.43-.906a3.678 3.678 0 0 0 1.081-2.159c.031-.234.04-1.434.03-3.86-.014-3.35-.019-3.545-.099-4.04-.456-2.813-1.947-5.15-4.284-6.713-.894-.598-2.219-1.162-3.247-1.381a10.753 10.753 0 0 0-2.78-.205'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeadphones);
export default ForwardRef;