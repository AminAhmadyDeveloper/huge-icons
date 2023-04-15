import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUTurnRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.313 2.062c-.602.094-1.154.313-1.733.689-.209.136-1.069.968-3.373 3.266C4.41 7.808 3.012 9.234 2.87 9.42a4.831 4.831 0 0 0-.738 1.527c-.094.35-.106.466-.106 1.053 0 .586.012.704.105 1.051.125.464.396 1.054.654 1.423.246.351 6.203 6.326 6.635 6.655a4.802 4.802 0 0 0 1.527.739c.35.094.466.106 1.053.106.586 0 .704-.012 1.051-.105a5.096 5.096 0 0 0 1.423-.654c.316-.222 6.203-6.075 6.592-6.555.325-.4.657-1.065.801-1.6.096-.357.107-.47.107-1.06 0-.586-.012-.704-.105-1.051a5.096 5.096 0 0 0-.654-1.423c-.221-.315-6.079-6.206-6.544-6.582a4.297 4.297 0 0 0-3.358-.882m1.635 5.319c.373.095.877.323 1.21.55.234.159.752.677.911.911.227.334.455.837.558 1.23.094.355.104.478.123 1.441l.02 1.052.385-.377c.412-.404.543-.491.8-.532.217-.035.544.122.682.326.127.188.157.514.066.706-.036.077-.439.508-.895.959-.904.896-1.036.988-1.538 1.078a1.31 1.31 0 0 1-.54.001c-.513-.092-.677-.208-1.602-1.14-.907-.913-.926-.941-.876-1.311.048-.359.451-.674.793-.619.257.041.388.128.805.537l.39.382v-.939c0-1.038-.028-1.23-.245-1.663-.242-.484-.676-.867-1.224-1.082-.242-.095-.324-.107-.771-.107s-.529.012-.771.107a2.29 2.29 0 0 0-1.361 1.381c-.085.224-.087.281-.107 3.095l-.021 2.866-.121.172c-.166.237-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172.001-2.886.001-2.887.106-.388c.482-1.761 2.043-2.903 3.832-2.805.209.012.546.063.748.114'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUTurnRight);
export default ForwardRef;
