import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudSnow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.28 4.044c-3.265.367-5.791 2.831-6.222 6.07-.227 1.71.228 3.515 1.254 4.966.342.484 1.119 1.262 1.608 1.61.319.227 1.502.87 1.601.87.016 0 .042-.062.056-.137.031-.166.265-.638.395-.799l.093-.115-.168-.252c-.256-.381-.344-.65-.367-1.117a2.96 2.96 0 0 1 .028-.631c.166-.8.908-1.538 1.714-1.705 1.288-.267 2.546.629 2.709 1.927.015.126.04.229.054.229.014 0 .124-.04.245-.088.186-.074.298-.088.72-.088s.534.014.72.088c.121.048.231.088.245.088.014 0 .039-.103.054-.229a2.273 2.273 0 0 1 1.165-1.7c.903-.474 1.932-.324 2.639.385.495.496.683.997.647 1.724-.023.466-.111.734-.363 1.112l-.167.248.166.247c.209.312.332.636.362.96.027.295.022.293.514.191 1.98-.409 3.489-1.924 3.922-3.938.101-.472.101-1.448 0-1.92-.436-2.029-1.919-3.511-3.946-3.944-.248-.053-.509-.072-.978-.071-.611.001-.916.043-1.446.197-.076.022-.113-.028-.331-.448-1.315-2.538-4.114-4.046-6.923-3.73m.38 10.216a1.87 1.87 0 0 1-.147.036c-.254.056-.511.411-.511.704 0 .462.472.842.903.727.248-.066.362-.15.481-.354.268-.457-.011-1.022-.546-1.105a.587.587 0 0 0-.18-.008m6.434.018a.737.737 0 0 0-.48 1.095c.119.204.233.288.481.354.325.087.68-.095.83-.425.25-.552-.245-1.163-.831-1.024m-3.283 2c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916m-3.151.982a1.87 1.87 0 0 1-.147.036c-.254.056-.511.411-.511.704 0 .462.472.842.903.727.248-.066.362-.15.481-.354.268-.457-.011-1.022-.546-1.105a.587.587 0 0 0-.18-.008m6.434.018a.737.737 0 0 0-.48 1.095c.119.204.233.288.481.354.325.087.68-.095.83-.425.25-.552-.245-1.163-.831-1.024m-3.283 2c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSnow);
export default ForwardRef;
