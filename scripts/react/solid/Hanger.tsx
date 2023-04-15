import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHanger = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.66 3.278a2.841 2.841 0 0 0-2.081 1.346c-.301.5-.456 1.284-.322 1.633.135.354.509.561.848.47.381-.102.544-.321.613-.825.065-.478.283-.793.702-1.015.176-.094.246-.107.58-.107.334 0 .404.013.58.107.422.224.66.567.691.995.036.511-.033.645-.85 1.658-.692.857-.952 1.302-1.1 1.885-.041.164-.078.191-4.511 3.277-4.991 3.475-4.969 3.458-5.284 4.098-.395.801-.372 1.654.067 2.5.222.428.73.922 1.167 1.134.688.335-.18.306 9.24.306s8.552.029 9.24-.306c.437-.212.945-.706 1.167-1.134.578-1.114.427-2.298-.402-3.145-.256-.261-1.02-.809-4.738-3.398-4.262-2.968-4.432-3.092-4.407-3.192.047-.186.283-.53.856-1.245.647-.807.805-1.057.952-1.5.093-.278.107-.386.107-.82 0-.434-.014-.543-.106-.82-.18-.544-.455-.934-.922-1.312a2.855 2.855 0 0 0-2.087-.59m4.713 10.686c2.402 1.674 4.427 3.101 4.501 3.17.073.069.181.216.239.326.091.171.106.249.106.54 0 .293-.015.369-.109.547a1.337 1.337 0 0 1-.585.582l-.185.091H3.66l-.194-.096a1.27 1.27 0 0 1-.575-.575c-.095-.18-.11-.256-.11-.549 0-.29.016-.369.106-.54.058-.11.162-.254.231-.319.102-.097 8.83-6.213 8.875-6.219.007-.001 1.978 1.368 4.38 3.042'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHanger);
export default ForwardRef;
