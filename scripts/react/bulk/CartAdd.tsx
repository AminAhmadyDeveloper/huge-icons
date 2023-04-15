import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCartAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.66 1.258a1.38 1.38 0 0 1-.147.038c-.25.055-.51.409-.512.695a.88.88 0 0 0 .211.522c.207.222.23.225 1.608.247 1.248.019 1.285.022 1.46.114.376.197.643.554.701.937L6.009 4h1.499l-.017-.21c-.054-.655-.321-1.219-.81-1.715-.291-.294-.397-.372-.721-.527-.209-.1-.47-.203-.58-.229-.186-.044-2.623-.099-2.72-.061M13.7 7.316a.734.734 0 0 0-.398.413c-.05.12-.062.331-.062 1.09v.941h-.971c-1.09 0-1.135.01-1.368.298-.11.136-.121.176-.121.442s.011.306.121.442c.233.288.278.298 1.368.298h.971l.001.95c.001.838.009.969.075 1.11a.743.743 0 0 0 1.368 0c.066-.141.074-.272.075-1.11l.001-.95h.971c1.09 0 1.135-.01 1.368-.298.11-.136.121-.176.121-.442s-.011-.306-.121-.442c-.233-.288-.278-.298-1.368-.298h-.971l-.001-.95c-.001-.838-.009-.969-.075-1.11-.181-.392-.607-.558-.984-.384M9.117 19.052c-.417.119-.798.45-.99.861-.09.192-.106.282-.106.588-.001.327.011.386.129.624.156.318.442.599.761.747.194.091.284.107.59.107.327.001.386-.011.624-.129.318-.156.599-.442.747-.761.091-.195.107-.283.107-.589s-.016-.394-.107-.589a1.523 1.523 0 0 0-1.276-.894c-.176-.01-.37.004-.479.035m9 0c-.417.119-.798.45-.99.861-.09.192-.106.282-.106.588-.001.327.011.386.129.624.156.318.442.599.761.747.194.091.284.107.59.107.327.001.386-.011.624-.129.318-.156.599-.442.747-.761.091-.195.107-.283.107-.589s-.016-.394-.107-.589a1.523 1.523 0 0 0-1.276-.894c-.176-.01-.37.004-.479.035'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCartAdd);
export default ForwardRef;
