import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278a.883.883 0 0 0-.481.374c-.055.102-.072.254-.083.751-.008.377.004.688.031.788.15.56.837.743 1.247.334.209-.209.244-.384.228-1.122-.011-.541-.024-.641-.095-.762a.807.807 0 0 0-.847-.363m-8.08 1.92a.752.752 0 0 0-.53.926c.038.143.134.265.513.651.268.273.534.506.626.549a.739.739 0 0 0 1.049-.579c.035-.308-.042-.447-.524-.938-.245-.249-.499-.485-.565-.525a.846.846 0 0 0-.569-.084m16.009.068c-.19.099-.941.858-1.023 1.034a.758.758 0 0 0-.002.64.61.61 0 0 0 .375.358c.388.163.635.052 1.215-.544.393-.404.45-.48.486-.652a.905.905 0 0 0 .029-.238 3.046 3.046 0 0 1-.037-.153c-.029-.134-.235-.374-.387-.453-.146-.076-.504-.071-.656.008M8.503 6.042c-1.018.174-1.947.934-2.301 1.883-.2.535-.201.552-.201 4.067-.001 2.809.008 3.335.061 3.589a2.993 2.993 0 0 0 2.357 2.357c.445.092 6.717.092 7.162 0a3.003 3.003 0 0 0 2.357-2.357c.092-.445.092-6.717 0-7.162a2.96 2.96 0 0 0-1.642-2.107c-.638-.307-.364-.288-4.176-.296-1.881-.005-3.509.007-3.617.026m4.885 2.325a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.232.331-.233.331-1.616.331s-1.384 0-1.616-.331c-.286-.406-.056-1.011.431-1.132.069-.017.639-.028 1.268-.024l1.143.007.162.107m-11.577 2.91a.745.745 0 0 0-.336 1.247c.197.197.364.236 1.025.236.661 0 .828-.039 1.025-.236.345-.345.285-.877-.13-1.152-.166-.11-.181-.112-.812-.12-.354-.004-.701.007-.772.025m19 0a.745.745 0 0 0-.336 1.247c.197.197.364.236 1.025.236.661 0 .828-.039 1.025-.236.345-.345.285-.877-.13-1.152-.166-.11-.181-.112-.812-.12-.354-.004-.701.007-.772.025m-16.471 7.4c-.208.097-1.038.937-1.118 1.132-.119.287-.068.555.15.786.236.249.544.31.848.169.231-.107 1.075-.981 1.139-1.179.201-.621-.43-1.184-1.019-.908m14.667.009a.745.745 0 0 0-.352.927c.077.202.933 1.074 1.126 1.148.166.064.472.055.611-.017.155-.08.361-.32.391-.455.013-.06.03-.129.037-.153a.91.91 0 0 0-.029-.239c-.037-.172-.093-.247-.506-.671-.273-.28-.531-.507-.625-.55a.735.735 0 0 0-.653.01m-7.196 1.592a.883.883 0 0 0-.481.374c-.055.102-.072.254-.083.751-.008.377.004.688.031.788.15.56.837.743 1.247.334.209-.209.244-.384.228-1.122-.011-.541-.024-.641-.095-.762a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackage);
export default ForwardRef;
