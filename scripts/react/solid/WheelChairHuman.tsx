import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWheelChairHuman = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.58 2.047c-.721.138-1.381.801-1.536 1.545C9.789 4.816 10.751 6 12 6c1.08 0 2-.92 2-2 0-.523-.21-1.017-.596-1.404-.491-.49-1.127-.682-1.824-.549m-.211 5.235c-1.865.148-3.598.971-4.932 2.343a7.384 7.384 0 0 0-1.694 2.67c-.303.809-.503 1.887-.503 2.705 0 1.145.323 2.459.866 3.526.382.751.761 1.272 1.387 1.907a7.066 7.066 0 0 0 2.087 1.51 7.735 7.735 0 0 0 4.958.652c1.315-.271 2.668-.946 3.588-1.788a1.94 1.94 0 0 1 .247-.207c.012 0 .125.176.25.39.441.756.466.768 1.597.769.492 0 .906-.018.999-.044.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832-.163-.108-.19-.112-.824-.132l-.656-.02-1.667-2.858c-1.491-2.554-1.686-2.871-1.841-2.98l-.174-.122-1.236-.013-1.237-.012V8.76h1.15c.716 0 1.21-.017 1.309-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.723-.005c-.948-.003-1.908.009-2.134.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWheelChairHuman);
export default ForwardRef;
