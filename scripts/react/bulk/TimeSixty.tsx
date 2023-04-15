import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTimeSixty = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.64 15.284c-1.046.135-1.904.854-2.255 1.888-.12.352-.155.901-.134 2.098.022 1.195.039 1.337.217 1.77a2.768 2.768 0 0 0 1.955 1.644c.365.082 1.378.07 1.677-.019.38-.114.699-.304.98-.585.443-.443.651-.948.651-1.58 0-.632-.208-1.137-.651-1.58a2.564 2.564 0 0 0-.5-.386c-.463-.244-.58-.263-1.75-.284l-1.07-.019v-.234c0-.336.125-.638.362-.875.339-.339.45-.362 1.738-.362.649 0 1.18-.018 1.302-.044.758-.163.758-1.269 0-1.432-.239-.051-2.125-.052-2.522 0m6.016-.003a2.752 2.752 0 0 0-2.112 1.496c-.273.558-.284.641-.284 2.223 0 1.25.009 1.451.073 1.68a2.819 2.819 0 0 0 1.987 1.985c.351.096 1.01.095 1.36 0a2.822 2.822 0 0 0 1.987-1.985c.064-.23.073-.425.073-1.68 0-1.56-.012-1.656-.262-2.183-.497-1.047-1.679-1.69-2.822-1.536m.881 1.597c.25.122.463.334.586.585.097.197.097.2.097 1.537v1.34l-.098.199A1.245 1.245 0 0 1 20 21.24c-.478 0-.91-.269-1.122-.701-.097-.197-.098-.214-.11-1.459-.009-.866.001-1.31.033-1.42.107-.371.414-.698.79-.841.232-.089.705-.059.946.059m-5.725 2.947a.73.73 0 0 1 .428.675.73.73 0 0 1-.428.675c-.202.102-.98.091-1.272-.018-.461-.173-.78-.646-.78-1.159v-.238h.962c.808 0 .983.01 1.09.065'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeSixty);
export default ForwardRef;