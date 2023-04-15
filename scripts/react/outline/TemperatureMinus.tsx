import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTemperatureMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.66 1.265c-1.609.162-2.881 1.267-3.311 2.875-.084.315-.085.38-.099 4.408l-.014 4.087-.328.336A5.768 5.768 0 0 0 6.837 14.5c-.399.817-.568 1.558-.568 2.5s.169 1.683.568 2.5A5.642 5.642 0 0 0 9.5 22.163c.817.399 1.558.568 2.5.568s1.683-.169 2.5-.568c1.571-.768 2.679-2.142 3.082-3.821a5.764 5.764 0 0 0-1.49-5.371l-.328-.336-.014-4.087c-.014-4.075-.014-4.089-.103-4.424-.437-1.651-1.797-2.772-3.467-2.857a4.733 4.733 0 0 0-.52-.002m.828 1.539c.375.078.773.297 1.069.589.292.289.437.509.575.874l.088.233.02 4.36.02 4.36.09.145c.049.079.222.253.383.386.664.55 1.153 1.327 1.396 2.222.076.28.089.428.089 1.027s-.013.747-.089 1.027c-.421 1.549-1.553 2.681-3.102 3.102-.28.076-.428.089-1.027.089s-.747-.013-1.027-.089c-1.044-.284-1.934-.913-2.502-1.77a4.196 4.196 0 0 1-.584-1.279c-.096-.345-.106-.445-.106-1.08 0-.598.012-.747.088-1.023.248-.911.737-1.686 1.41-2.236a2.14 2.14 0 0 0 .37-.375l.091-.146.02-4.36.02-4.36.088-.233c.138-.364.283-.585.573-.872a2.21 2.21 0 0 1 1.01-.578c.264-.064.762-.07 1.037-.013m5.319.483a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.283.06 4.041.06 4.324 0 .758-.163.758-1.269 0-1.432-.259-.055-4.104-.053-4.355.003m-6 9.002c-.249.053-.465.281-.523.549-.025.12-.044.645-.045 1.254l-.001 1.048-.243.139A2.05 2.05 0 0 0 10 17c0 1.08.92 2 2 2s2-.92 2-2a2.05 2.05 0 0 0-.995-1.721l-.243-.139-.002-1.06c-.001-.583-.021-1.141-.043-1.239-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTemperatureMinus);
export default ForwardRef;
