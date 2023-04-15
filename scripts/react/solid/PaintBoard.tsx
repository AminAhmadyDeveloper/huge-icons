import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPaintBoard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-1.804.181-3.413.768-4.84 1.767A9.995 9.995 0 0 0 2 12.023c0 2.199.806 4.492 2.186 6.217a10.109 10.109 0 0 0 5.081 3.376c.714.205 1.04.251 1.344.189.653-.135 1.145-.632 1.328-1.343.051-.199.061-.574.061-2.244 0-1.867.005-2.027.079-2.315.109-.427.252-.675.58-1.007.444-.45.935-.656 1.561-.656.396 0 .708.078 1.066.266.533.28 1.004.921 1.111 1.511.024.131.043.613.043 1.072 0 .963.047 1.252.263 1.617.425.72 1.243 1.014 1.925.693.508-.241 1.612-1.595 2.191-2.689a10.01 10.01 0 0 0 .996-6.607c-.742-3.811-3.65-6.882-7.385-7.8-.984-.241-2.402-.355-3.31-.264m-1.01 4.1c.305.139.615.45.756.757.096.209.112.295.112.604.001.31-.015.393-.111.6a1.687 1.687 0 0 1-.763.767c-.21.098-.293.113-.604.113-.31 0-.393-.015-.6-.112a1.682 1.682 0 0 1-.766-.764c-.096-.209-.112-.295-.112-.604-.001-.31.015-.393.111-.6a1.618 1.618 0 0 1 1.017-.859c.257-.065.702-.019.96.098m7.537 2.513c.265.13.603.473.725.738.073.157.088.262.088.61 0 .376-.011.443-.109.641-.29.591-.948.94-1.579.838a1.563 1.563 0 0 1-1.121-.833c-.137-.282-.171-.767-.076-1.094.12-.412.502-.812.918-.96.316-.113.859-.085 1.154.06M8.52 14.099c.397.14.723.471.882.895.131.349.101.82-.073 1.175a1.512 1.512 0 0 1-.729.704c-.187.088-.276.103-.6.103-.324 0-.413-.015-.6-.103a1.512 1.512 0 0 1-.729-.704 1.569 1.569 0 0 1-.071-1.18 1.472 1.472 0 0 1 1.48-.971c.143.01.341.046.44.081'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPaintBoard);
export default ForwardRef;
