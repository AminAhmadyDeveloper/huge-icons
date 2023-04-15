import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.58 2.264c-.927.119-1.638.619-2.035 1.434-.308.631-.285.08-.285 6.882v6.08l.094.298c.257.82.763 1.44 1.481 1.816.408.214.691.293 1.376.384 1.727.229 3.438.659 4.68 1.176.519.216 1.24.588 1.649.849.198.126.451.28.562.342.209.116.629.234.838.234.35.001.691-.236.775-.54.032-.113.045-2.285.045-7.566V6.247l.17-.098c.093-.053.332-.2.53-.327 1.459-.93 3.544-1.617 6.02-1.983.626-.093.95-.087 1.156.019a1.2 1.2 0 0 1 .519.599c.085.225.085.239.085 4.915 0 3.297.014 4.735.045 4.847a.84.84 0 0 0 .191.306.742.742 0 0 0 1.244-.325c.029-.107.039-1.683.031-4.948L22.74 4.46l-.132-.378c-.167-.478-.36-.796-.669-1.101-.604-.597-1.277-.8-2.258-.68-2.802.343-5.328 1.161-7.099 2.298-.573.368-.591.368-1.164 0C9.769 3.54 7.47 2.757 4.911 2.383c-.712-.104-1.145-.142-1.331-.119m.96 1.578c2.487.365 4.649 1.087 6.099 2.039.196.129.412.263.479.298l.122.063v13.603l-.17-.105c-.552-.338-1.685-.849-2.53-1.139-1.066-.366-2.584-.717-3.82-.882a10.93 10.93 0 0 1-.86-.143c-.427-.109-.751-.371-.97-.787l-.11-.209-.011-5.947c-.01-5.855-.009-5.951.07-6.16a1.05 1.05 0 0 1 .529-.609c.256-.128.423-.131 1.172-.022m.132 3.76c-.428.226-.529.808-.2 1.154.172.181.299.223 1.168.382.841.153 1.759.391 2.565.664.387.131.757.238.82.237.442-.003.811-.486.699-.915-.104-.394-.258-.491-1.344-.842a21.653 21.653 0 0 0-2.554-.643c-.736-.138-.95-.145-1.154-.037m-.012 3.985c-.185.098-.265.179-.345.353a.739.739 0 0 0 .01.65c.137.283.289.355 1.039.493.361.066.848.165 1.083.219.487.112.661.121.845.044.242-.101.467-.446.468-.717 0-.125-.12-.365-.251-.5-.141-.146-.276-.194-.975-.345-1.221-.263-1.661-.31-1.874-.197m16.037 4.726c-.126.059-.503.465-1.67 1.799-.829.948-1.543 1.734-1.586 1.748a.256.256 0 0 1-.165-.022 24.927 24.927 0 0 1-.979-.76 24.495 24.495 0 0 0-.984-.762.924.924 0 0 0-.316-.052.716.716 0 0 0-.641.363.792.792 0 0 0-.015.729c.114.198 2.006 1.703 2.337 1.86.244.115.293.124.702.124.411 0 .458-.008.707-.127a2.14 2.14 0 0 0 .449-.294c.315-.29 3.081-3.475 3.153-3.631.286-.615-.374-1.264-.992-.975'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookCheck);
export default ForwardRef;