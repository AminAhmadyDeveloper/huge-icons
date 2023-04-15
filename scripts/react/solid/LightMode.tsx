import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLightMode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278a.883.883 0 0 0-.481.374c-.061.112-.072.272-.082 1.255-.008.723.003 1.185.031 1.288a.742.742 0 0 0 1.246.33c.225-.226.241-.341.227-1.618-.011-1.051-.017-1.136-.094-1.266a.807.807 0 0 0-.847-.363M3.105 6.299a.734.734 0 0 0-.26 1.245c.192.176 1.951 1.174 2.118 1.201.506.082.975-.433.838-.922a.917.917 0 0 0-.155-.298c-.108-.124-1.825-1.138-2.084-1.231-.181-.064-.265-.064-.457.005m17.333-.005c-.262.094-1.977 1.107-2.084 1.231-.412.476-.049 1.219.592 1.213.19-.002.281-.045 1.14-.536.514-.294.995-.59 1.069-.658a.716.716 0 0 0-.008-1.092c-.134-.118-.365-.214-.507-.21a.943.943 0 0 0-.202.052m-9.098.752a4.934 4.934 0 0 0-1.52.471C8.374 8.226 7.39 9.51 7.075 11.1c-.073.368-.073 1.432 0 1.8a5.076 5.076 0 0 0 4.025 4.025c.368.073 1.432.073 1.8 0 1.823-.361 3.291-1.652 3.853-3.386.187-.578.227-.859.225-1.579-.002-.579-.015-.713-.109-1.091-.191-.765-.495-1.396-.943-1.957a5.04 5.04 0 0 0-4.586-1.866m-6.5 8.247c-.213.08-1.884 1.059-2.015 1.18a.747.747 0 0 0-.171.818c.126.299.498.509.801.453.133-.025 1.836-.975 2.089-1.166.377-.283.347-.934-.055-1.195-.187-.122-.463-.16-.649-.09m13.895-.015c-.264.063-.474.297-.55.612-.041.168.051.461.19.605.117.121 1.63 1.02 1.999 1.188.224.101.373.096.608-.022a.696.696 0 0 0 .409-.578c.024-.25-.04-.438-.202-.592-.14-.134-1.799-1.112-2.029-1.196-.156-.057-.242-.061-.425-.017m-6.924 4a.883.883 0 0 0-.481.374c-.061.112-.072.272-.082 1.255-.008.723.003 1.185.031 1.288a.742.742 0 0 0 1.246.33c.225-.226.241-.341.227-1.618-.011-1.051-.017-1.136-.094-1.266a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLightMode);
export default ForwardRef;
