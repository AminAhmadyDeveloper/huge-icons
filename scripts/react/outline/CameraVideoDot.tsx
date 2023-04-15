import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCameraVideoDot = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 3.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.442-.056 8.654 0 9.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.44.055 7.656.055 8.096 0 1.095-.137 1.958-.556 2.755-1.339.762-.747 1.191-1.542 1.376-2.55l.05-.27.349.331c.579.552 1.175.799 1.918.795a2.772 2.772 0 0 0 2.671-2.046c.068-.242.073-.496.073-3.64s-.005-3.398-.073-3.64a2.805 2.805 0 0 0-1.807-1.903 3.039 3.039 0 0 0-1.48-.078c-.47.104-.896.343-1.304.731l-.347.33-.05-.27a4.683 4.683 0 0 0-1.247-2.433c-.445-.464-.762-.697-1.332-.978a4.585 4.585 0 0 0-1.644-.478c-.472-.046-7.487-.045-7.963.002m8.501 1.628c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374v9.24l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 17l-.132-.38V7.38L2.912 7c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 4.214 5.29c.309-.205.86-.429 1.194-.486.117-.02 2-.033 4.212-.03l4 .006.374.131m-3.338 2.37a2.752 2.752 0 0 0-2.112 1.496c-.209.426-.28.737-.28 1.223 0 .485.071.797.279 1.221a2.804 2.804 0 0 0 1.777 1.444c.351.096 1.01.095 1.36 0 .784-.215 1.461-.773 1.798-1.482.188-.396.258-.716.258-1.183 0-.657-.175-1.169-.575-1.688a2.78 2.78 0 0 0-2.505-1.031m9.843.634c.237.105.487.342.614.582l.107.203v6.6l-.107.203a1.215 1.215 0 0 1-1.113.675c-.515-.001-.609-.064-1.485-.994l-.755-.801V9.619l.718-.765c.396-.421.786-.807.868-.858a1.296 1.296 0 0 1 1.153-.081m-8.962.963c.25.122.463.334.586.585.14.284.139.791-.001 1.076-.564 1.146-2.282.806-2.355-.465a1.44 1.44 0 0 1 .033-.42c.12-.378.42-.694.791-.835.232-.089.705-.059.946.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraVideoDot);
export default ForwardRef;