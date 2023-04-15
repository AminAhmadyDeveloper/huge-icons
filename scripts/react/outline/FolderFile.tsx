import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolderFile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.656 1.281a2.751 2.751 0 0 0-2.112 1.496c-.276.565-.277.569-.294 2.563l-.015 1.8-.162.12c-.286.212-.887.881-1.104 1.23a4.891 4.891 0 0 0-.688 1.962c-.055.44-.055 7.656 0 8.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.444.056 10.652.056 11.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.055-.435.054-5.023 0-5.469a4.789 4.789 0 0 0-1.628-3.053l-.328-.279-.013-3.103c-.012-2.843-.019-3.124-.085-3.344-.237-.793-.748-1.408-1.463-1.762-.593-.293-.189-.274-6.042-.282-2.893-.004-5.37.008-5.504.025m10.881 1.596c.251.123.463.335.586.586l.097.197.011 2.693c.01 2.561.007 2.692-.06 2.671-.28-.089-.653-.115-2.031-.142-1.288-.026-1.605-.043-1.82-.101-.512-.137-.942-.384-1.94-1.115-1.016-.744-1.486-1.015-2.08-1.198-.617-.191-.821-.208-2.4-.206-1.249.001-1.527.012-1.78.069a4.996 4.996 0 0 1-.33.069c-.016 0-.03-.592-.03-1.315 0-1.422.007-1.475.224-1.804.121-.183.373-.375.607-.461.124-.046 1.031-.054 5.449-.047l5.3.007.197.097m-7.798 4.98c.549.161.782.301 2.06 1.237 1.032.756 1.53 1.003 2.391 1.188.341.073.568.086 1.81.103 1.657.022 1.824.045 2.42.335a3.13 3.13 0 0 1 1.5 1.497c.312.651.3.505.3 3.623v2.78l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H6.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 3.912 19l-.132-.38v-8.24l.132-.38c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 5.214 8.29c.308-.204.858-.429 1.194-.487.117-.02.86-.032 1.652-.026 1.231.009 1.475.02 1.679.08'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderFile);
export default ForwardRef;
