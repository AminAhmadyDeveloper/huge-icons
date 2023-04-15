import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTeacher = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.58 3.047c-.721.138-1.381.801-1.536 1.545-.027.13-.044.723-.044 1.532 0 1.474.025 1.684.251 2.085.132.234 5.914 6.875 6.321 7.26.118.111.307.25.421.307.434.22.474.223 3.455.223 1.854.001 2.817-.013 2.96-.043a2.062 2.062 0 0 0 1.548-1.548c.062-.298.062-9.518 0-9.816-.159-.762-.818-1.411-1.573-1.549-.306-.055-11.509-.052-11.803.004m9.687 3.756a.75.75 0 0 1 .464.697.75.75 0 0 1-.464.697c-.157.06-7.377.06-7.534 0a.75.75 0 0 1-.464-.697c0-.3.189-.591.451-.695.143-.057 7.397-.059 7.547-.002m0 4a.75.75 0 0 1 .464.697.75.75 0 0 1-.464.697c-.074.029-.842.043-2.267.043-1.425 0-2.193-.014-2.267-.043a.75.75 0 0 1-.464-.697c0-.3.189-.591.451-.695.142-.057 4.399-.059 4.547-.002m-11.687.244c-.721.138-1.381.801-1.536 1.545-.139.665.061 1.32.552 1.812.797.796 2.011.796 2.808 0 .796-.797.796-2.011 0-2.808-.491-.49-1.127-.682-1.824-.549m-3 5c-.721.138-1.381.801-1.536 1.545-.057.274-.057 1.542 0 1.816.157.75.798 1.391 1.548 1.548.295.061 6.521.061 6.816 0a2.062 2.062 0 0 0 1.548-1.548c.057-.274.057-1.542 0-1.816-.159-.762-.818-1.411-1.573-1.549-.546-.099-1.133-.016-1.518.215a4.68 4.68 0 0 0-.487.359c-.448.38-.861.543-1.378.543-.517 0-.93-.163-1.378-.543-.375-.318-.667-.483-.984-.555a2.959 2.959 0 0 0-1.058-.015'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTeacher);
export default ForwardRef;
