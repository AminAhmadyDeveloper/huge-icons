import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowMoveCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.34 3.024c-1.314.136-2.249.391-3.28.894a8.993 8.993 0 0 0-5.001 7.074c-.393 3.36 1.18 6.677 4.061 8.568.809.53 2.006 1.029 2.972 1.237a9.01 9.01 0 0 0 9.991-4.857 8.947 8.947 0 0 0 0-7.88 8.921 8.921 0 0 0-4.139-4.137 8.623 8.623 0 0 0-2.624-.822c-.409-.062-1.658-.11-1.98-.077m1 2.305c.166.084 2.228 2.17 2.304 2.331a.734.734 0 0 1-.664 1.06c-.263 0-.39-.079-.83-.513l-.39-.385v3.418h3.419l-.408-.41c-.228-.229-.435-.476-.469-.559a.735.735 0 0 1 .998-.955c.168.079 2.287 2.179 2.379 2.359a.934.934 0 0 1 .049.325.934.934 0 0 1-.049.325c-.092.18-2.211 2.28-2.379 2.359a.735.735 0 0 1-.998-.955c.034-.083.241-.33.469-.559l.408-.41H12.76v3.419l.41-.408c.229-.228.476-.435.559-.469a.735.735 0 0 1 .955.998c-.049.104-.467.549-1.19 1.266-.926.92-1.141 1.114-1.274 1.15-.199.054-.241.054-.44 0-.133-.036-.348-.23-1.274-1.15-.723-.717-1.141-1.162-1.19-1.266-.23-.494.113-1.06.644-1.06.271 0 .44.103.87.531l.41.408V12.76H7.821l.408.41c.228.229.435.476.469.559.206.495-.142 1.033-.666 1.03a.938.938 0 0 1-.332-.075c-.224-.104-2.362-2.26-2.405-2.424a1.142 1.142 0 0 1 0-.52c.039-.149 2.132-2.269 2.353-2.383a.78.78 0 0 1 .846.118c.121.106.226.35.226.525 0 .268-.103.44-.511.85l-.387.39h3.418V7.821l-.41.408c-.229.228-.476.435-.559.469-.495.206-1.033-.142-1.03-.666 0-.095.034-.244.075-.332.108-.231 2.262-2.364 2.424-2.4.066-.015.138-.033.16-.041.06-.022.349.025.44.07'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowMoveCircle);
export default ForwardRef;
