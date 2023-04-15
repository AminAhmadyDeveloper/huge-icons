import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolderOpenAccept = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='m6.62 2.024-.298.061c-.871.177-1.728.897-2.086 1.752C4.043 4.299 4 4.624 4 5.618v.902h7.98c4.389 0 7.98-.014 7.98-.03 0-.07-.157-.572-.232-.741-.18-.406-.619-.934-.991-1.191a3.865 3.865 0 0 0-.928-.448c-.251-.078-.397-.085-2.209-.11-2.138-.03-2.135-.03-2.702-.301-.162-.077-.594-.374-1.014-.697-.74-.569-1.088-.773-1.544-.906-.209-.061-.461-.071-1.94-.079-.935-.006-1.736-.003-1.78.007M3.014 8.057a1.95 1.95 0 0 0-.938.54c-.401.399-.596.856-.596 1.397 0 .367 1.834 8.926 2.018 9.416.451 1.203 1.448 2.102 2.731 2.461l.391.109h10.76l.391-.109c1.283-.359 2.28-1.258 2.731-2.461.184-.49 2.018-9.049 2.018-9.416 0-.54-.195-.997-.596-1.397a1.982 1.982 0 0 0-.996-.553c-.324-.067-17.634-.055-17.914.013m12.402 4.337a.743.743 0 0 1 .242.937c-.087.162-2.889 3.379-3.146 3.611a2.054 2.054 0 0 1-.427.271c-.489.229-1.208.183-1.623-.103-.448-.309-2.033-1.618-2.11-1.742a.78.78 0 0 1 .007-.746.716.716 0 0 1 .638-.358.924.924 0 0 1 .316.052c.05.027.493.37.984.762.49.392.931.734.979.76a.256.256 0 0 0 .168.021c.044-.014.711-.749 1.482-1.632.771-.884 1.473-1.674 1.561-1.755a.726.726 0 0 1 .929-.078'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenAccept);
export default ForwardRef;