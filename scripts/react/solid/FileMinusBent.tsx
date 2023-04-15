import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileMinusBent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.503 2.042c-1.016.173-1.947.934-2.301 1.883-.208.557-.201.297-.201 7.207-.001 5.714.006 6.466.062 6.74a3.288 3.288 0 0 0 2.157 2.443c1.188.397 2.375.139 3.275-.713.604-.572.934-1.289 1.005-2.182.034-.438.138-.649.395-.799l.172-.101H18v-5.902c0-6.457.01-6.17-.234-6.769a2.99 2.99 0 0 0-1.47-1.537c-.653-.314-.125-.289-6.176-.297-2.981-.003-5.509.008-5.617.027m8.885 7.325a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.064.092-.18.204-.257.249-.137.081-.186.082-3.359.082s-3.222-.001-3.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 1.539-.028 3.268-.024l3.143.006.162.107m-2.733 8.698c-.213.075-.469.296-.598.516a3.64 3.64 0 0 0-.223.545c-.316.965-.866 1.704-1.65 2.215a4.327 4.327 0 0 1-1.684.632c-.066.009 2.634.014 6 .011l6.12-.005.334-.093c.765-.215 1.37-.562 1.883-1.08a3.954 3.954 0 0 0 1.018-1.755c.054-.195.06-.282.027-.4a.832.832 0 0 0-.564-.592c-.251-.088-10.413-.083-10.663.006'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileMinusBent);
export default ForwardRef;
