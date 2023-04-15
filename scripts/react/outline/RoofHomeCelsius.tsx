import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeCelsius = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.68 1.265a5.282 5.282 0 0 0-1.958.535c-.247.124-1.545.999-3.682 2.481a422.721 422.721 0 0 0-3.517 2.454c-.505.384-.939 1.037-1.147 1.727-.094.313-.108.426-.108.898 0 .469.014.586.107.892.177.589.41.983.892 1.509.303.332.417.499.522.763.062.159.071.462.094 3.156.027 3.225.02 3.117.257 3.825.221.658.584 1.227 1.136 1.779.725.725 1.535 1.155 2.604 1.383.318.068.653.073 5.12.073 4.467 0 4.802-.005 5.12-.073 1.068-.228 1.876-.657 2.605-1.383.638-.636 1.03-1.326 1.265-2.224l.105-.4.023-2.98c.022-2.696.031-2.997.093-3.156.105-.264.219-.431.522-.763.482-.526.715-.92.892-1.509.093-.306.107-.423.107-.892 0-.469-.014-.586-.106-.892a4.75 4.75 0 0 0-.244-.624c-.168-.334-.539-.808-.805-1.027-.424-.352-6.895-4.807-7.239-4.985a5.202 5.202 0 0 0-1.432-.491 6.562 6.562 0 0 0-1.226-.076m1.253 1.61c.173.046.455.154.628.241.274.137 6.587 4.477 7.026 4.83.515.414.765 1.207.592 1.873-.09.344-.22.556-.603.979-.554.612-.833 1.18-.933 1.897-.027.197-.043 1.285-.043 2.97 0 2.275-.009 2.703-.064 2.966-.208 1.008-.878 1.83-1.862 2.285-.706.326-.301.304-5.674.304s-4.968.022-5.674-.304c-.795-.368-1.396-.986-1.712-1.763-.206-.508-.214-.631-.214-3.494 0-1.68-.016-2.767-.043-2.964-.098-.703-.382-1.29-.899-1.857-.385-.422-.52-.629-.619-.952-.208-.672.04-1.51.574-1.94.225-.182 6.554-4.568 6.799-4.713a3.53 3.53 0 0 1 1.028-.398c.453-.099 1.24-.081 1.693.04m2.307 6.16a1.074 1.074 0 0 0-.488.317c-.445.493-.272 1.265.348 1.554.389.181.843.08 1.145-.254a.969.969 0 0 0 .003-1.3 1.269 1.269 0 0 0-.302-.239c-.175-.089-.547-.13-.706-.078m-3.854 1.764c-1.163.211-2.204.975-2.725 2.001-.322.635-.467 1.412-.389 2.079.11.936.478 1.677 1.153 2.322a3.756 3.756 0 0 0 1.985 1c.421.068 1.159.03 1.57-.08.686-.183 1.513-.692 1.69-1.041a.73.73 0 0 0-.65-1.08c-.206 0-.347.062-.641.284a2.372 2.372 0 0 1-.926.417c-.753.159-1.454-.055-2.017-.617-.457-.457-.676-.969-.676-1.584 0-.82.472-1.601 1.191-1.971a2.05 2.05 0 0 1 1.092-.261c.544.004.957.153 1.413.507.13.101.298.195.373.209.657.124 1.136-.483.841-1.064-.179-.352-1.016-.862-1.71-1.042-.377-.098-1.229-.141-1.574-.079'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeCelsius);
export default ForwardRef;
