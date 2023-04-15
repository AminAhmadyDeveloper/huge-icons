import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStudentCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.58 2.047c-.721.138-1.381.801-1.536 1.545-.024.117-.044.598-.044 1.07v.858h4v-.858c0-.472-.02-.953-.044-1.07-.159-.762-.818-1.411-1.573-1.549a2.106 2.106 0 0 0-.803.004M4.503 7.042c-1.016.172-1.947.934-2.301 1.883-.205.549-.201.431-.201 5.567-.001 5.239-.008 5.067.233 5.659a3.046 3.046 0 0 0 1.615 1.615c.604.246.175.234 8.151.234 6.4 0 7.32-.007 7.581-.062a3.003 3.003 0 0 0 2.357-2.357c.093-.448.093-9.714 0-10.162a2.96 2.96 0 0 0-1.642-2.107c-.66-.318.116-.289-8.176-.297-4.081-.003-7.509.009-7.617.027m4.88 3.001c.802.147 1.456.829 1.584 1.652.158 1.017-.507 2.013-1.501 2.247-.226.053-.21.065.174.136.345.064.919.34 1.233.592.53.427.941 1.109 1.064 1.764.119.635.056.975-.236 1.267-.302.302-.274.299-2.701.299-2.429 0-2.399.003-2.702-.3-.233-.233-.316-.497-.285-.903.033-.428.09-.64.285-1.057a2.905 2.905 0 0 1 1.442-1.444c.198-.093.477-.192.62-.218.384-.071.4-.083.174-.136-.545-.129-1.088-.565-1.327-1.067a1.98 1.98 0 0 1 .389-2.279c.489-.488 1.102-.678 1.787-.553m8.99 1.312c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.134.079-.198.082-1.859.082s-1.725-.003-1.859-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.055-1.012.431-1.132.069-.017.863-.028 1.765-.024l1.64.007.153.095m0 4c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.134.079-.198.082-1.859.082s-1.725-.003-1.859-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.055-1.012.431-1.132.069-.017.863-.028 1.765-.024l1.64.007.153.095'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStudentCard);
export default ForwardRef;
