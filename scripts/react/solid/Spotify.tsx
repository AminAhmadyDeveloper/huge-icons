import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpotify = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m1.38 5.657c2.241.237 4.042.721 5.551 1.492.469.239.591.358.669.649.129.487-.34.996-.833.903-.077-.014-.34-.126-.583-.248-1.611-.808-3.679-1.275-6.063-1.368-1.944-.077-3.668.113-4.87.535-.329.115-.337.116-.542.059-.188-.053-.424-.255-.495-.426-.13-.312-.011-.724.262-.904.448-.297 2.019-.634 3.484-.747.642-.05 2.747-.015 3.42.055m-.18 3.206c1.864.193 3.423.617 4.731 1.285.469.24.591.359.669.65.128.482-.34.996-.824.905-.072-.014-.388-.149-.703-.301-1.561-.752-3.458-1.121-5.767-1.121-1.36 0-2.603.122-3.478.342a3.75 3.75 0 0 1-.482.098c-.154 0-.481-.191-.582-.341a.867.867 0 0 1-.086-.672c.065-.197.315-.41.57-.486.572-.171 1.792-.352 2.812-.419.761-.05 2.384-.019 3.14.06m-1.353 2.94c1.866.127 3.492.547 4.956 1.28.557.279.69.384.779.619a.749.749 0 0 1-.359.938c-.288.139-.415.113-1.142-.236-1.629-.781-3.218-1.123-5.221-1.123-1.149 0-2.17.115-3.051.344-.46.119-.507.119-.751-.003-.321-.161-.47-.473-.401-.839.03-.162.218-.397.387-.484.184-.095 1.014-.283 1.656-.374a14.699 14.699 0 0 1 3.147-.122'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpotify);
export default ForwardRef;