import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWifiOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.811 2.278c-.396.097-.638.519-.531.926.041.155.178.308 1.132 1.265.65.653 1.07 1.104 1.047 1.124-.022.019-.216.156-.432.305-.845.581-1.6 1.235-1.712 1.482-.288.634.389 1.274 1.012.956.058-.03.256-.184.44-.342.544-.47 1.715-1.314 1.824-1.314.016 0 .603.574 1.303 1.274l1.274 1.275-.34.186c-.692.377-1.463.928-2.018 1.442-.204.189-.262.272-.312.444a.806.806 0 0 0-.035.325c.048.208.206.433.363.519.397.218.593.164 1.141-.312a9.25 9.25 0 0 1 1.853-1.236l.48-.235 1.43 1.429c.787.786 1.43 1.44 1.43 1.453 0 .014-.132.037-.293.052-.645.058-1.459.36-2.08.772-.357.237-.929.781-1.031.98a.766.766 0 0 0 .149.879.684.684 0 0 0 .515.193c.265 0 .347-.047.763-.439.315-.296.457-.397.791-.561.5-.246.77-.319 1.286-.348.611-.034 1.05.052 1.62.316.241.112.494.355 3.48 3.335 2.256 2.252 3.265 3.232 3.369 3.276a.735.735 0 0 0 1.031-.679.847.847 0 0 0-.077-.332C21.603 20.535 3.485 2.401 3.34 2.329a.984.984 0 0 0-.529-.051M11.6 3.282c-.911.048-1.705.167-2.7.405-.611.146-.776.221-.926.417-.087.115-.114.198-.125.391-.016.292.058.461.279.638.222.177.435.183 1.04.032 3.276-.82 6.722-.386 9.641 1.216.596.327 1.587 1.002 2.067 1.408.675.571.696.584.958.603.181.013.269-.002.399-.068a.777.777 0 0 0 .368-.9c-.121-.366-1.668-1.572-2.908-2.266-2.057-1.151-4.144-1.752-6.523-1.878-.772-.041-.729-.041-1.57.002m1.1 5.061a.767.767 0 0 0-.401.474.705.705 0 0 0 .205.741c.183.161.255.188.598.221 1.907.187 3.509.88 4.889 2.115.316.283.463.36.689.36a.756.756 0 0 0 .742-.634c.054-.362-.123-.613-.842-1.193a9.837 9.837 0 0 0-4.851-2.085c-.573-.079-.876-.078-1.029.001m-.587 9.718c-.37.118-.673.541-.673.939 0 .401.297.813.679.94A.998.998 0 0 0 13.44 19c0-.679-.667-1.151-1.327-.939'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiOff);
export default ForwardRef;
