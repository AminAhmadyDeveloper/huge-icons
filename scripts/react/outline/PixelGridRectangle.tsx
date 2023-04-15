import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPixelGridRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.656 1.28c-.926.129-1.716.688-2.112 1.497-.273.558-.284.641-.284 2.223 0 1.25.009 1.451.073 1.68.219.783.75 1.436 1.446 1.777a2.78 2.78 0 0 0 1.111.29l.35.025v6.458l-.33.027c-.467.04-.786.12-1.114.282a2.799 2.799 0 0 0-1.463 1.781c-.064.229-.073.43-.073 1.68s.009 1.451.073 1.68a2.823 2.823 0 0 0 1.987 1.987c.229.064.43.073 1.68.073 1.255 0 1.45-.009 1.68-.073.974-.275 1.724-1.02 1.978-1.967.035-.132.075-.397.089-.59l.025-.35h6.456l.025.35c.031.435.113.749.29 1.111.341.696.994 1.227 1.777 1.446.229.064.43.073 1.68.073 1.255 0 1.45-.009 1.68-.073a2.83 2.83 0 0 0 1.987-1.987c.064-.23.073-.425.073-1.68s-.009-1.45-.073-1.68a2.794 2.794 0 0 0-1.465-1.782c-.326-.161-.645-.241-1.112-.281l-.33-.027V8.772l.35-.025c.193-.014.458-.054.59-.089.947-.254 1.692-1.004 1.967-1.978.064-.23.073-.425.073-1.68s-.009-1.45-.073-1.68a2.822 2.822 0 0 0-2.017-1.99c-.401-.103-2.899-.103-3.3 0-.775.198-1.465.751-1.806 1.447-.178.364-.26.677-.291 1.113l-.025.35H8.772l-.025-.35c-.075-1.057-.628-1.898-1.545-2.352-.5-.247-.642-.266-2.042-.28-.693-.006-1.37.003-1.504.022m2.881 1.597c.251.123.463.335.586.586.097.197.097.2.097 1.537v1.34l-.098.199a1.306 1.306 0 0 1-.665.619c-.205.076-.306.082-1.457.082s-1.252-.006-1.457-.082c-.267-.1-.53-.345-.665-.619-.097-.197-.098-.214-.11-1.459-.009-.866.001-1.31.033-1.42.071-.245.27-.53.465-.664.334-.23.358-.233 1.774-.224 1.287.008 1.302.009 1.497.105m14 0c.251.123.463.335.586.586.097.197.097.2.097 1.537v1.34l-.098.199a1.306 1.306 0 0 1-.665.619c-.205.076-.306.082-1.457.082s-1.252-.006-1.457-.082c-.267-.1-.53-.345-.665-.619-.097-.197-.098-.214-.11-1.459-.009-.866.001-1.31.033-1.42.071-.245.27-.53.465-.664.334-.23.358-.233 1.774-.224 1.287.008 1.302.009 1.497.105M15.253 6.11c.059.835.398 1.509 1.015 2.02.439.363.989.572 1.622.617l.35.025v6.458l-.33.027c-.877.074-1.501.38-2.018.99-.38.448-.593.996-.639 1.643l-.025.35H8.772l-.025-.35c-.075-1.057-.627-1.898-1.545-2.352-.326-.161-.645-.241-1.112-.281l-.33-.027V8.772l.35-.025c.848-.06 1.565-.43 2.049-1.057.365-.473.543-.952.588-1.58l.025-.35h6.456l.025.35M6.537 16.877c.251.123.463.335.586.586.097.197.097.2.097 1.537v1.34l-.098.199a1.306 1.306 0 0 1-.665.619c-.205.076-.306.082-1.457.082s-1.252-.006-1.457-.082c-.267-.1-.53-.345-.665-.619-.097-.197-.098-.214-.11-1.459-.009-.866.001-1.31.033-1.42.071-.245.27-.53.465-.664.334-.23.358-.233 1.774-.224 1.287.008 1.302.009 1.497.105m14 0c.251.123.463.335.586.586.097.197.097.2.097 1.537v1.34l-.098.199a1.306 1.306 0 0 1-.665.619c-.205.076-.306.082-1.457.082s-1.252-.006-1.457-.082c-.267-.1-.53-.345-.665-.619-.097-.197-.098-.214-.11-1.459-.009-.866.001-1.31.033-1.42.071-.245.27-.53.465-.664.334-.23.358-.233 1.774-.224 1.287.008 1.302.009 1.497.105'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPixelGridRectangle);
export default ForwardRef;
