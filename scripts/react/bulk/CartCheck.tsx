import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCartCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.66 1.258a1.38 1.38 0 0 1-.147.038c-.25.055-.51.409-.512.695a.88.88 0 0 0 .211.522c.207.222.23.225 1.608.247 1.248.019 1.285.022 1.46.114.376.197.643.554.701.937L6.009 4h1.499l-.017-.21c-.054-.655-.321-1.219-.81-1.715-.291-.294-.397-.372-.721-.527-.209-.1-.47-.203-.58-.229-.186-.044-2.623-.099-2.72-.061m14.034 7.059c-.133.061-.473.425-1.674 1.798-.829.947-1.543 1.733-1.586 1.747-.102.032-.133.011-1.174-.821-.879-.703-1.037-.802-1.276-.8-.158.001-.418.121-.532.244a.895.895 0 0 0-.212.525c0 .312.118.44 1.214 1.319 1.165.933 1.269.991 1.83 1.021.582.032.978-.132 1.411-.583.356-.373 2.87-3.258 2.948-3.384.23-.371.066-.883-.341-1.068a.687.687 0 0 0-.608.002M9.117 19.052c-.417.119-.798.45-.99.861-.09.192-.106.282-.106.588-.001.327.011.386.129.624.156.318.442.599.761.747.194.091.284.107.59.107.327.001.386-.011.624-.129.318-.156.599-.442.747-.761.091-.195.107-.283.107-.589s-.016-.394-.107-.589a1.523 1.523 0 0 0-1.276-.894c-.176-.01-.37.004-.479.035m9 0c-.417.119-.798.45-.99.861-.09.192-.106.282-.106.588-.001.327.011.386.129.624.156.318.442.599.761.747.194.091.284.107.59.107.327.001.386-.011.624-.129.318-.156.599-.442.747-.761.091-.195.107-.283.107-.589s-.016-.394-.107-.589a1.523 1.523 0 0 0-1.276-.894c-.176-.01-.37.004-.479.035'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCartCheck);
export default ForwardRef;
