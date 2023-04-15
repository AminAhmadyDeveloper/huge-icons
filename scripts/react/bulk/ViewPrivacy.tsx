import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgViewPrivacy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.38 8.057c-1.169.27-2.01 1.096-2.305 2.262-.11.439-.091 1.11.046 1.541.315.996 1.037 1.713 2.039 2.026.252.079.386.094.84.094.454 0 .588-.015.84-.094 1.008-.314 1.729-1.036 2.046-2.047.079-.252.094-.384.094-.839 0-.454-.015-.588-.094-.84a3.028 3.028 0 0 0-2.026-2.04c-.358-.113-1.122-.146-1.48-.063m6.548 4.264c-.42.11-.667.256-1.009.598-.5.501-.679.968-.679 1.777v.444l-.217.113c-.264.138-.657.538-.794.81-.214.422-.238.59-.219 1.511.015.726.029.878.099 1.07a2.097 2.097 0 0 0 1.241 1.248c.225.086.27.088 2.15.088s1.925-.002 2.15-.088a2.108 2.108 0 0 0 1.243-1.248c.077-.204.084-.305.084-1.144 0-.845-.007-.939-.086-1.15a2.152 2.152 0 0 0-.933-1.099l-.186-.105-.025-.523c-.041-.863-.213-1.29-.708-1.757-.318-.3-.575-.443-.982-.547a2.183 2.183 0 0 0-1.129.002m.985 1.569c.233.155.327.379.327.783V15h-1.488l.014-.373c.012-.324.028-.394.121-.534a.744.744 0 0 1 1.026-.203'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgViewPrivacy);
export default ForwardRef;
