import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClockCircleShort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.31 1.283C6.564 1.568 2.534 5.02 1.505 9.68c-.189.859-.241 1.353-.241 2.32 0 1.526.255 2.795.841 4.195 1.327 3.167 4.197 5.554 7.575 6.3.859.189 1.353.241 2.32.241 1.526 0 2.795-.255 4.195-.841 2.527-1.059 4.641-3.173 5.7-5.7.586-1.4.841-2.669.841-4.195 0-1.526-.255-2.795-.841-4.195-1.418-3.385-4.59-5.857-8.238-6.422-.354-.055-1.615-.152-1.777-.137-.033.003-.29.02-.57.037m2.09 1.576a9.28 9.28 0 0 1 7.747 7.781c.099.642.099 2.078 0 2.72-.463 3.008-2.356 5.605-5.047 6.921a9.193 9.193 0 0 1-2.693.867c-.607.102-2.207.102-2.814 0a9.193 9.193 0 0 1-2.693-.867 8.573 8.573 0 0 1-2.374-1.692 9.232 9.232 0 0 1-2.674-5.229c-.099-.642-.099-2.078 0-2.72A9.287 9.287 0 0 1 8.64 3.386c.737-.291 1.519-.475 2.56-.601.314-.039 1.798.011 2.2.074m-2.007 1.423C9.06 4.45 6.87 5.737 5.542 7.72c-.932 1.392-1.408 3.214-1.268 4.85.063.737.166 1.242.392 1.91.405 1.204 1.032 2.186 1.979 3.101a7.359 7.359 0 0 0 2.88 1.755 7.58 7.58 0 0 0 4.95 0 7.359 7.359 0 0 0 2.88-1.755c.947-.915 1.574-1.897 1.979-3.101a7.57 7.57 0 0 0 0-4.96c-.405-1.204-1.032-2.186-1.979-3.101-1.328-1.282-2.957-2.004-4.828-2.139a10.77 10.77 0 0 0-.627-.034l-.507.036m1.85 1.595c1.247.266 2.253.813 3.16 1.72.911.911 1.449 1.902 1.726 3.18.127.586.127 1.86 0 2.446-.277 1.279-.816 2.271-1.726 3.179-.906.903-1.816 1.409-3.066 1.703-.445.105-.534.113-1.337.113-.803 0-.892-.008-1.337-.113-1.297-.305-2.273-.861-3.188-1.815-.805-.84-1.345-1.871-1.604-3.067-.127-.586-.127-1.86 0-2.446.277-1.278.815-2.269 1.726-3.18C8.602 6.593 9.81 5.988 11.18 5.803c.458-.062 1.619-.02 2.063.074m-1.432 2.401a.883.883 0 0 0-.481.374c-.062.113-.071.283-.082 1.482-.013 1.468.001 1.616.192 2.02.212.447.425.614 1.427 1.119.487.244.957.456 1.045.47.541.087.999-.503.786-1.014a.974.974 0 0 0-.15-.243c-.048-.052-.461-.281-.917-.51-.653-.327-.834-.435-.85-.506-.011-.049-.025-.675-.031-1.39-.009-1.228-.015-1.308-.092-1.439a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClockCircleShort);
export default ForwardRef;
