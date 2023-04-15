import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBarChartArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.815 1.278c-.476.114-.714.707-.447 1.111.187.282.279.315 1.335.469 2.374.348 4.065.735 5.765 1.32 3.285 1.131 6.431 3.001 10.863 6.457l.75.585-.654.02c-.632.02-.659.024-.822.132-.294.194-.413.501-.324.832.059.218.288.453.5.511.098.028.578.044 1.259.044 1.169 0 1.429-.03 1.768-.203.23-.117.579-.457.716-.696.21-.367.242-.633.228-1.922-.014-1.311-.017-1.325-.343-1.554-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.303.212-.329.298-.344 1.106-.008.391-.02.71-.029.71-.009 0-.309-.231-.667-.514C14.09 4.591 9.938 2.537 4.129 1.561c-.719-.121-2.108-.324-2.16-.317a3.443 3.443 0 0 0-.154.034M3.58 8.047c-.721.138-1.381.801-1.536 1.545-.062.298-.062 10.518 0 10.816C2.232 21.31 3.08 22 4 22c.92 0 1.768-.69 1.956-1.592.062-.298.062-10.518 0-10.816-.159-.762-.818-1.411-1.573-1.549a2.106 2.106 0 0 0-.803.004m8 4c-.721.138-1.381.801-1.536 1.545-.061.295-.061 6.521 0 6.816C10.232 21.31 11.08 22 12 22c.92 0 1.768-.69 1.956-1.592.03-.144.044-1.229.044-3.408s-.014-3.264-.044-3.408c-.159-.762-.818-1.411-1.573-1.549a2.106 2.106 0 0 0-.803.004m8 4c-.721.138-1.381.801-1.536 1.545-.026.127-.044.689-.044 1.408s.018 1.281.044 1.408C18.232 21.31 19.08 22 20 22c.92 0 1.768-.69 1.956-1.592.026-.127.044-.689.044-1.408s-.018-1.281-.044-1.408c-.159-.762-.818-1.411-1.573-1.549a2.106 2.106 0 0 0-.803.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartArrowDown);
export default ForwardRef;
