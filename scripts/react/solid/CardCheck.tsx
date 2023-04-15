import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCardCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.52 3.028c-.837.094-1.896.637-2.463 1.263a5.13 5.13 0 0 0-.716 1.089c-.093.211-.261.744-.261.829 0 .017 4.465.031 9.923.031h9.923l-.028-.13c-.117-.545-.465-1.234-.868-1.718-.448-.538-1.313-1.073-2.07-1.279l-.34-.092-6.48-.005c-3.564-.002-6.543.003-6.62.012M2 9v1.24h20V7.76H2V9m.01 5.71.013 2.95.11.378c.437 1.504 1.584 2.572 3.093 2.879.394.08.523.083 4.163.083 4.125 0 3.956.01 4.26-.241.079-.065.186-.204.237-.309.088-.177.096-.254.12-1.13.031-1.087.086-1.383.37-1.983.232-.489.459-.818.801-1.16a4.263 4.263 0 0 1 1.865-1.062c.318-.083.452-.089 2.278-.111 1.93-.024 1.941-.024 2.13-.118.105-.051.244-.158.309-.237.225-.274.241-.385.241-1.696V11.76H1.997l.013 2.95m4.33 1.356c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299a.984.984 0 0 1 .001-1.403.977.977 0 0 1 1.04-.232m15.369.241c-.118.049-.485.443-1.668 1.794-.834.953-1.553 1.744-1.597 1.758a.256.256 0 0 1-.168-.021 24.927 24.927 0 0 1-.979-.76 24.495 24.495 0 0 0-.984-.762.924.924 0 0 0-.316-.052.716.716 0 0 0-.641.363.763.763 0 0 0-.004.741c.077.124 1.663 1.433 2.11 1.742.413.285 1.135.332 1.618.105.143-.067.322-.175.398-.239.076-.064.825-.901 1.665-1.86 1.048-1.197 1.543-1.792 1.577-1.895.201-.609-.412-1.163-1.011-.914'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardCheck);
export default ForwardRef;