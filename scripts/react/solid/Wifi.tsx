import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWifi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.151 3.285c-2.974.154-5.969 1.292-8.311 3.158-.989.787-1.166 1.062-.964 1.497.137.297.381.46.688.46.236 0 .388-.08.739-.388a13.354 13.354 0 0 1 5.355-2.831c4.237-1.093 8.789-.023 12.039 2.831.361.316.502.388.768.388.5 0 .856-.513.678-.978-.109-.284-.836-.919-1.829-1.596-2.28-1.554-4.805-2.4-7.594-2.545a23.496 23.496 0 0 0-.86-.035 93.76 93.76 0 0 1-.709.039m.169 4.995a9.705 9.705 0 0 0-5.18 1.939c-.58.439-.966.796-1.062.985a.752.752 0 0 0 .25.942c.139.096.205.114.415.114.285 0 .293-.005.959-.569 1.15-.972 2.479-1.582 4.014-1.839.593-.1 1.975-.1 2.568 0 1.673.281 3.071.966 4.383 2.15.224.202.489.3.683.253.333-.08.531-.267.614-.579.1-.381-.061-.627-.804-1.225a9.828 9.828 0 0 0-3.748-1.893c-.905-.234-2.122-.343-3.092-.278m.173 5.003c-.702.068-1.568.386-2.181.802-.33.225-.901.776-.996.963-.139.273-.069.681.151.88a.904.904 0 0 0 .513.192c.233 0 .414-.104.759-.434A3.164 3.164 0 0 1 11 14.913c.365-.125.404-.13 1-.13s.635.005 1 .13c.509.175.868.395 1.261.773.179.172.391.34.471.373.611.256 1.23-.394.953-.999-.088-.191-.646-.737-1.001-.977a5.034 5.034 0 0 0-2.228-.802c-.442-.043-.499-.043-.963.002m.171 4.78a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifi);
export default ForwardRef;
