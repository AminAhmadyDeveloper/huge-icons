import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPinRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.66 2.278A2.744 2.744 0 0 0 9.357 4.26c-.177.647-.09 1.484.211 2.02.343.611.951 1.138 1.521 1.319l.149.047.011 4.787.011 4.787.093.149c.357.574 1.223.443 1.363-.207.031-.144.044-1.612.044-4.861V7.646l.15-.047c.571-.181 1.179-.708 1.522-1.319.4-.714.4-1.846 0-2.56-.575-1.026-1.636-1.578-2.772-1.442m.794 1.563c.458.172.786.655.786 1.159s-.328.987-.786 1.159c-.644.241-1.379-.083-1.617-.714-.109-.288-.094-.741.033-.987.149-.289.479-.572.77-.661.198-.06.592-.039.814.044M7.42 14.284c-1.033.093-2.161.619-2.875 1.339-.287.289-1.346 1.56-1.556 1.866a2.694 2.694 0 0 0-.328 2.341c.356 1.066 1.233 1.776 2.338 1.893.187.019 3.338.036 7.001.036 3.663 0 6.814-.017 7.001-.036 2.055-.217 3.163-2.55 2.011-4.232-.237-.346-1.144-1.434-1.506-1.805a4.841 4.841 0 0 0-2.172-1.266c-.487-.127-1.246-.193-1.992-.174-.538.014-.578.021-.731.122a.698.698 0 0 0-.344.639c0 .196.019.263.116.401.216.305.305.328 1.397.357 1.01.028 1.196.057 1.643.255.35.154.739.43 1.024.724.462.477 1.321 1.545 1.429 1.775.263.564-.008 1.309-.583 1.602l-.193.099H4.9l-.18-.093a1.208 1.208 0 0 1-.562-.58c-.153-.32-.181-.566-.098-.854.084-.286.105-.317.801-1.153.686-.825.875-1.016 1.245-1.26.613-.404 1.09-.52 2.13-.52.888 0 1.08-.036 1.284-.24.398-.398.21-1.097-.331-1.234-.207-.052-1.209-.053-1.769-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPinRectangle);
export default ForwardRef;