import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpringNotesEditAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.98.823a.9.9 0 0 0-.373.357c-.052.097-.068.281-.08.97L7.512 3h-.207a4.023 4.023 0 0 0-3.983 3.52c-.034.277-.043 1.905-.034 5.98l.013 5.6.105.38c.207.752.575 1.381 1.101 1.882.366.349.644.54 1.101.759.555.265.864.328 1.715.349.693.017.756.013.941-.067.17-.073 1.136-1.023 6.543-6.434 6.076-6.08 6.347-6.358 6.413-6.563.102-.316.066-1.878-.053-2.346a4.001 4.001 0 0 0-3.694-3.047l-.426-.025-.014-.844c-.015-.936-.027-.985-.29-1.216-.34-.299-.874-.186-1.123.236-.072.122-.081.223-.094.986l-.014.85H9.047l-.014-.85c-.015-.923-.027-.977-.259-1.197-.209-.198-.555-.254-.794-.13m4.717 7.059a.89.89 0 0 1 .244.296c.094.188.099.233.099.887v.69l.753.013c.727.012.758.015.901.112.168.114.346.432.346.62s-.178.506-.346.62c-.143.097-.174.1-.901.112l-.753.013v.69c0 .654-.005.699-.099.887-.29.576-1.077.552-1.346-.042-.062-.135-.073-.269-.074-.85l-.001-.69h-.697c-.396 0-.747-.018-.81-.043-.249-.093-.491-.438-.491-.697 0-.259.242-.604.491-.697.063-.025.414-.043.81-.043h.697v-.681c0-.742.029-.877.232-1.094.16-.17.316-.228.574-.213.158.009.27.042.371.11m6.473 4.7a2.457 2.457 0 0 0-.38.141c-.208.104-5.438 5.305-5.548 5.517-.108.21-.722 2.398-.722 2.575 0 .12.029.182.134.287a.696.696 0 0 0 .246.162c.083.02.422-.059 1.277-.301.639-.182 1.235-.364 1.323-.405.108-.051 1.023-.941 2.825-2.747 2.901-2.908 2.823-2.818 2.911-3.364.187-1.16-.933-2.17-2.066-1.865'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesEditAdd);
export default ForwardRef;