import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDestinationDashedTwo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.442 2.044c-.936.144-1.675.662-2.058 1.442-.203.414-.28.676-.348 1.189-.144 1.075.229 2.116 1.241 3.463.417.557.671.802.98.947.677.316 1.454.126 1.96-.481.254-.305.726-.971.953-1.344.617-1.015.871-1.802.815-2.527-.105-1.372-.84-2.293-2.085-2.614-.376-.096-1.082-.133-1.458-.075m1.07 2.103c.63.387.642 1.299.023 1.692a.998.998 0 0 1-1.394-.336c-.107-.174-.121-.232-.121-.5 0-.259.016-.33.111-.492a.955.955 0 0 1 .941-.496.836.836 0 0 1 .44.132m-2.819 6.669c-.184.083-.449.364-.542.574a.725.725 0 0 0 .669 1.01c.242 0 .419-.079.614-.274.22-.22.297-.385.297-.632 0-.245-.086-.413-.302-.587-.121-.098-.195-.125-.38-.135a.85.85 0 0 0-.356.044m-2.087 2.105c-.206.093-.631.514-.71.703a.733.733 0 0 0 .198.845c.381.335.839.232 1.285-.29.212-.248.261-.362.261-.603a.708.708 0 0 0-.45-.674.67.67 0 0 0-.584.019m-8.936 1.6c-.447.113-.84.441-1.043.871-.111.235-.126.309-.126.608s.015.373.126.608c.162.341.424.603.765.765.235.111.309.126.608.126s.373-.015.608-.126c.341-.162.603-.424.765-.765.111-.235.126-.309.126-.608s-.015-.373-.126-.608a1.529 1.529 0 0 0-1.279-.893 1.773 1.773 0 0 0-.424.022m6.819.598c-.253.06-.592.366-.689.622-.116.303.009.704.272.879.336.222.718.154 1.05-.186.199-.205.278-.372.278-.59a.745.745 0 0 0-.911-.725'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDestinationDashedTwo);
export default ForwardRef;
