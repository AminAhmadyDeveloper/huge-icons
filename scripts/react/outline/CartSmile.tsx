import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCartSmile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.811 1.277c-.522.132-.732.79-.385 1.203.216.256.227.258 1.634.28 1.254.02 1.284.022 1.477.117.251.123.463.335.586.586l.097.197.022 5c.022 4.929.024 5.005.108 5.34.257 1.027.617 1.665 1.347 2.38.797.783 1.66 1.202 2.755 1.339.442.056 8.654.056 9.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.055-.434.055-5.662 0-6.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.232-.023-2.753-.039-6.101-.04L6.651 3.24l-.07-.19a2.803 2.803 0 0 0-1.379-1.512c-.498-.246-.645-.266-2.022-.281-.682-.007-1.298.002-1.369.02m17.183 3.634c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374v6.24l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H9.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 6.912 14l-.132-.38-.011-4.431-.011-4.431 5.931.011 5.931.011.374.131m-8.268 6.372a.755.755 0 0 0-.485.708c-.002.411.164.57 1.048 1.006 1.093.539 1.82.739 2.691.739.599.001 1.022-.071 1.657-.281.505-.167 1.675-.735 1.874-.91.49-.431.225-1.233-.429-1.296-.183-.017-.242.004-.873.321-.987.495-1.563.67-2.206.67-.669 0-1.177-.152-2.166-.648-.723-.362-.874-.404-1.111-.309M9.18 18.281a2.23 2.23 0 0 0-1.68 1.213c-.147.298-.259.733-.259 1.006 0 .54.274 1.182.676 1.583.401.402 1.043.676 1.583.676s1.182-.274 1.583-.676c.402-.401.676-1.043.676-1.583 0-.088-.027-.286-.059-.44a2.256 2.256 0 0 0-2.52-1.779m9 0a2.23 2.23 0 0 0-1.68 1.213c-.147.298-.259.733-.259 1.006 0 .54.274 1.182.676 1.583.401.402 1.043.676 1.583.676.277 0 .709-.112 1.02-.265.588-.288 1.039-.883 1.18-1.554a1.772 1.772 0 0 0 0-.88 2.256 2.256 0 0 0-2.52-1.779m-8.39 1.541a.61.61 0 0 1 .375.358c.129.282.06.681-.151.868a.799.799 0 0 1-.804.13.61.61 0 0 1-.375-.358.798.798 0 0 1 .117-.834c.179-.203.565-.278.838-.164m9 0a.61.61 0 0 1 .375.358c.129.282.06.681-.151.868a.799.799 0 0 1-.804.13.61.61 0 0 1-.375-.358.798.798 0 0 1 .117-.834c.179-.203.565-.278.838-.164'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCartSmile);
export default ForwardRef;