import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackageCube = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278a.883.883 0 0 0-.481.374c-.055.102-.072.254-.083.751-.008.377.004.688.031.788.15.56.837.743 1.247.334.209-.209.244-.384.228-1.122-.011-.541-.024-.641-.095-.762a.807.807 0 0 0-.847-.363m-8.08 1.92a.752.752 0 0 0-.53.926c.038.143.134.265.513.651.268.273.534.506.626.549a.739.739 0 0 0 1.049-.579c.035-.308-.042-.447-.524-.938-.245-.249-.499-.485-.565-.525a.846.846 0 0 0-.569-.084m16.009.068c-.19.099-.941.858-1.023 1.034a.758.758 0 0 0-.002.64.61.61 0 0 0 .375.358c.388.163.635.052 1.215-.544.393-.404.45-.48.486-.652a.905.905 0 0 0 .029-.238 3.046 3.046 0 0 1-.037-.153c-.029-.134-.235-.374-.387-.453-.146-.076-.504-.071-.656.008m-8.2 2.988c-.245.065-.102.003-2.3 1.005-1.797.82-2.36 1.087-2.36 1.118 0 .029 5.066 2.743 5.12 2.743.054 0 5.12-2.714 5.12-2.743 0-.009-.112-.072-.248-.141-.428-.216-4.001-1.842-4.232-1.926-.277-.1-.825-.128-1.1-.056M6.023 9.707C6.01 9.74 6 10.994 6 12.495c0 2.999-.003 2.964.246 3.431.141.264.426.577.658.724.118.075 3.99 1.862 4.286 1.979.04.016.048-.606.04-3.088l-.01-3.107-2.28-1.228-2.587-1.394c-.249-.134-.311-.154-.33-.105m9.337 1.337-2.58 1.39-.01 3.107c-.008 2.482 0 3.104.04 3.088.296-.117 4.168-1.904 4.286-1.979.232-.147.517-.46.658-.724.249-.467.246-.43.245-3.444 0-1.508-.013-2.762-.03-2.785-.019-.028-.949.452-2.609 1.347m-13.549.233a.745.745 0 0 0-.336 1.247c.197.197.364.236 1.025.236.661 0 .828-.039 1.025-.236.345-.345.285-.877-.13-1.152-.166-.11-.181-.112-.812-.12-.354-.004-.701.007-.772.025m19 0a.745.745 0 0 0-.336 1.247c.197.197.364.236 1.025.236.661 0 .828-.039 1.025-.236.345-.345.285-.877-.13-1.152-.166-.11-.181-.112-.812-.12-.354-.004-.701.007-.772.025m-16.471 7.4c-.208.097-1.038.937-1.118 1.132-.119.287-.068.555.15.786.236.249.544.31.848.169.231-.107 1.075-.981 1.139-1.179.201-.621-.43-1.184-1.019-.908m14.667.009a.745.745 0 0 0-.352.927c.077.202.933 1.074 1.126 1.148.166.064.472.055.611-.017.155-.08.361-.32.391-.455.013-.06.03-.129.037-.153a.91.91 0 0 0-.029-.239c-.037-.172-.093-.247-.506-.671-.273-.28-.531-.507-.625-.55a.735.735 0 0 0-.653.01m-7.196 1.592a.883.883 0 0 0-.481.374c-.055.102-.072.254-.083.751-.008.377.004.688.031.788.15.56.837.743 1.247.334.209-.209.244-.384.228-1.122-.011-.541-.024-.641-.095-.762a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageCube);
export default ForwardRef;
