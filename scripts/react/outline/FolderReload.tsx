import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolderReload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 2.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.444-.056 10.652 0 11.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.055-.44.055-7.656 0-8.096a4.886 4.886 0 0 0-.688-1.962c-.247-.396-.805-1.004-1.184-1.289a5.587 5.587 0 0 0-1.329-.695c-.676-.226-.795-.237-2.858-.266-1.629-.022-1.956-.037-2.16-.094-.506-.143-.858-.357-2.028-1.231-.632-.472-1.284-.936-1.449-1.031a4.626 4.626 0 0 0-1.947-.604c-.495-.044-3.116-.043-3.583.003m4.06 1.59c.498.151.808.339 1.875 1.139 1.471 1.101 1.715 1.254 2.332 1.466.708.243.785.25 2.9.279l1.96.025.374.13a3.08 3.08 0 0 1 1.29.804c.397.398.617.749.805 1.29l.131.374v8.24l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 18l-.132-.38V6.38L2.912 6c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 4.214 4.29c.309-.204.859-.429 1.194-.486.117-.02 1.031-.033 2.032-.028 1.754.008 1.831.011 2.113.097M11.6 9.28c-.376.039-.794.145-.951.24a.784.784 0 0 0-.331.893c.06.182.31.408.522.472.143.043.213.037.544-.044 1.291-.315 2.476.38 2.8 1.642.078.303.057.897-.042 1.213-.083.262-.078.436.016.621a.753.753 0 0 0 1.133.275c.32-.228.539-1.272.43-2.055-.285-2.041-2.092-3.47-4.121-3.257m-2.74 2.063c-.286.149-.416.361-.518.848-.271 1.29.094 2.534 1.013 3.454a3.69 3.69 0 0 0 1.794 1.003c.684.171 1.782.087 2.201-.168a.782.782 0 0 0 .332-.893c-.061-.187-.314-.411-.53-.47-.147-.04-.222-.034-.516.038-.866.214-1.624.017-2.216-.575-.592-.591-.789-1.354-.573-2.223.076-.304.081-.373.038-.515-.132-.441-.651-.694-1.025-.499'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderReload);
export default ForwardRef;
