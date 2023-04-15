import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowBackRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M5.579 1.279C3.458 1.47 1.763 3.011 1.333 5.14c-.069.339-.073.734-.073 6.86s.004 6.521.073 6.86c.397 1.966 1.841 3.41 3.807 3.807.339.069.734.073 6.86.073s6.521-.004 6.86-.073c1.966-.397 3.41-1.841 3.807-3.807.069-.339.073-.734.073-6.86s-.004-6.521-.073-6.86c-.39-1.929-1.778-3.349-3.703-3.788l-.384-.088-6.34-.007c-3.487-.004-6.484.006-6.661.022M18.98 2.89c.538.184.878.4 1.304.826.426.426.642.766.826 1.304l.11.32v13.32l-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H5.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V5.34l.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.501-.191.28-.186 7.248-.178l6.56.007.32.11M9.7 6.316c-.104.049-.545.463-1.265 1.189C7.396 8.552 7.327 8.632 7.289 8.81a.935.935 0 0 0 0 .38c.038.178.107.258 1.146 1.305.72.726 1.161 1.14 1.265 1.189a.74.74 0 0 0 1.049-.579c.035-.305-.044-.448-.502-.915l-.422-.43h1.725c1.097 0 1.803.016 1.938.044.806.167 1.541.902 1.708 1.708.056.271.056.705 0 .976-.167.806-.902 1.541-1.708 1.708-.141.029-1.085.044-2.828.044-1.759 0-2.684.014-2.822.044-.77.165-.757 1.274.017 1.435.159.033.993.042 2.953.031 3.125-.018 3.035-.009 3.812-.387.843-.412 1.38-.959 1.783-1.82.234-.5.329-.942.329-1.543 0-1.755-1.133-3.194-2.872-3.649-.297-.077-.454-.085-2.174-.101l-1.855-.017.419-.426c.455-.464.534-.608.499-.912A.74.74 0 0 0 9.7 6.316'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowBackRectangle);
export default ForwardRef;