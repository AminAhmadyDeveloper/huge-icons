import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.433 2.042A4.211 4.211 0 0 0 9.27 3.078c-.376.344-.95 1.18-.95 1.385 0 .049.944.057 6.684.057h6.685l-.027-.11c-.071-.292-.586-1.022-.954-1.353a4.542 4.542 0 0 0-1.75-.944c-.337-.089-.353-.09-3.818-.097-1.914-.004-3.582.007-3.707.026m-6 4.001a4.302 4.302 0 0 0-1.702.669 4.015 4.015 0 0 0-1.595 2.256c-.08.291-.107.501-.125.962l-.022.59h2.223c2.412 0 2.512.007 3.062.227.465.185.808.415 1.186.793.696.696 1.02 1.477 1.02 2.46 0 .97-.323 1.758-1 2.441-.512.517-.942.766-1.671.968-.295.082-.408.087-2.564.101l-2.256.016.022.567c.018.437.047.654.127.945a3.992 3.992 0 0 0 3.088 2.879c.394.08.523.083 4.163.083 4.125 0 3.956.01 4.26-.241.079-.065.186-.204.237-.309.092-.185.095-.226.119-1.63.027-1.641.053-1.811.371-2.483.232-.489.459-.818.801-1.16a4.263 4.263 0 0 1 1.865-1.062c.318-.083.452-.089 2.278-.111 1.93-.024 1.941-.024 2.13-.118.105-.051.244-.158.309-.237.252-.306.241-.103.241-4.576V6l-8.17.005c-4.494.003-8.272.02-8.397.038M2 14v2h2.098c1.377 0 2.171-.015 2.31-.044C7.31 15.768 8 14.92 8 14c0-.932-.71-1.791-1.617-1.957-.151-.027-.994-.043-2.31-.043H2v2m18.098 3.315c-.299.136-.498.491-.436.778.049.227.143.361.529.755l.38.388-1.898.012-1.899.012-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.105.03.774.045 1.975.045h1.817l-.423.434c-.461.473-.542.628-.492.944.073.463.602.752 1.033.567.071-.031.5-.431.953-.89.899-.911.991-1.043 1.081-1.545a1.293 1.293 0 0 0 0-.54c-.09-.5-.184-.635-1.061-1.525-.51-.517-.863-.842-.964-.889a.681.681 0 0 0-.602-.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletArrowRight);
export default ForwardRef;
