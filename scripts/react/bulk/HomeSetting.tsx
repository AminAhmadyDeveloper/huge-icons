import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeSetting = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.217 10.076c-.322.146-.461.366-.518.814-.058.461-.552.691-.991.462a.86.86 0 0 0-.431-.09c-.385-.003-.588.133-.869.58-.408.648-.482.903-.354 1.209.054.129.352.429.426.429.021 0 .086.072.144.159a.65.65 0 0 1 0 .722c-.058.087-.123.159-.144.159-.074 0-.372.3-.426.429A.966.966 0 0 0 8 15.26c0 .202.072.36.409.898.279.447.482.583.868.581.192-.002.309-.026.431-.09.438-.231.933 0 .991.461.04.321.094.464.227.605.231.245.376.283 1.074.283.713 0 .841-.036 1.086-.307.145-.161.166-.219.214-.581.061-.462.554-.691.992-.461.122.064.239.088.431.09.386.002.589-.134.868-.581.337-.538.409-.696.409-.898 0-.1-.024-.24-.054-.311-.054-.129-.352-.429-.426-.429-.021 0-.086-.072-.144-.159a.65.65 0 0 1 0-.722c.058-.087.123-.159.144-.159.074 0 .372-.3.426-.429A.966.966 0 0 0 16 12.74c0-.202-.072-.36-.409-.898-.279-.447-.483-.583-.868-.58a.86.86 0 0 0-.431.09c-.198.103-.482.116-.652.028a.714.714 0 0 1-.337-.47l-.045-.292c-.028-.179-.262-.445-.478-.543-.237-.108-1.325-.107-1.563.001m1.39 2.573a1.5 1.5 0 0 1 .723.705c.119.242.13.296.13.646 0 .35-.011.404-.13.646a1.515 1.515 0 0 1-.723.708c-.196.091-.279.106-.607.106-.328 0-.411-.015-.607-.106a1.515 1.515 0 0 1-.723-.708c-.119-.242-.13-.296-.13-.645 0-.328.015-.412.105-.606.186-.396.512-.684.926-.819.268-.088.762-.053 1.036.073'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeSetting);
export default ForwardRef;
