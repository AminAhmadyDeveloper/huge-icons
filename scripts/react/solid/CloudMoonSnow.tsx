import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudMoonSnow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.34 3.043a5.12 5.12 0 0 0-2.747 1.311l-.313.294.41.272c.93.616 1.7 1.377 2.344 2.315l.203.295.692-.007c.535-.005.796.012 1.158.074 1.263.218 2.529.855 3.399 1.711l.266.261.062-.214c.411-1.415.132-3.027-.734-4.243a5.095 5.095 0 0 0-3.1-2.012c-.386-.08-1.254-.11-1.64-.057m-7.92 1.98c-.066.01-.264.036-.44.059-.929.122-1.985.523-2.817 1.071-3.326 2.188-4.16 6.661-1.851 9.927.342.484 1.119 1.262 1.608 1.61.319.227 1.502.87 1.601.87.016 0 .042-.062.056-.137.031-.166.265-.638.395-.799l.093-.115-.168-.252c-.256-.381-.344-.65-.367-1.117a2.96 2.96 0 0 1 .028-.631c.166-.8.908-1.538 1.714-1.705 1.288-.267 2.546.629 2.709 1.927.015.126.04.229.054.229.014 0 .124-.04.245-.088.186-.074.298-.088.72-.088s.534.014.72.088c.121.048.231.088.245.088.014 0 .039-.103.054-.229a2.273 2.273 0 0 1 1.165-1.7c.903-.474 1.932-.324 2.639.385.495.496.683.997.647 1.724-.023.466-.111.737-.364 1.113l-.166.247.167.248c.209.313.331.635.361.959.027.295.022.293.514.191 1.98-.409 3.489-1.924 3.922-3.938.101-.472.101-1.448 0-1.92-.436-2.029-1.919-3.511-3.946-3.944-.248-.053-.509-.072-.978-.071-.611.001-.916.043-1.446.197-.076.022-.113-.028-.331-.448-1.012-1.953-2.828-3.275-5.049-3.677-.325-.058-1.493-.108-1.734-.074m.24 10.237a1.87 1.87 0 0 1-.147.036c-.254.056-.511.411-.511.704 0 .462.472.842.903.727.248-.066.362-.15.481-.354.268-.457-.011-1.022-.546-1.105a.587.587 0 0 0-.18-.008m6.434.018a.737.737 0 0 0-.48 1.095c.119.204.233.288.481.354.325.087.68-.095.83-.425.25-.552-.245-1.163-.831-1.024m-3.283 2c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916m-3.151.982a1.87 1.87 0 0 1-.147.036c-.254.056-.511.411-.511.704 0 .462.472.842.903.727.248-.066.362-.15.481-.354.268-.457-.011-1.022-.546-1.105a.587.587 0 0 0-.18-.008m6.434.018a.737.737 0 0 0-.48 1.095c.119.204.233.288.481.354.325.087.68-.095.83-.425.25-.552-.245-1.163-.831-1.024m-3.283 2c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonSnow);
export default ForwardRef;
