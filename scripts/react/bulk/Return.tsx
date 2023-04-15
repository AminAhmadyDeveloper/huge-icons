import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgReturn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.74 1.281a1.673 1.673 0 0 0-.71.274c-.094.065-.515.466-.937.892-.831.838-.847.863-.803 1.255.051.451.577.742 1.011.56.077-.032.318-.231.536-.443l.397-.386.013 1.134c.014 1.257.016 1.264.29 1.505.34.299.874.186 1.123-.236.074-.126.081-.221.093-1.271l.013-1.134.387.379c.448.439.59.525.867.526.486.002.816-.42.721-.923-.024-.13-.148-.273-.835-.965-.443-.447-.887-.863-.986-.926a1.82 1.82 0 0 0-1.18-.241m-7.5 6.756a1.055 1.055 0 0 0-.465.29c-.069.073-.477.604-.906 1.179-.686.918-.788 1.074-.832 1.271a.994.994 0 0 0 .703 1.179c.108.029 1.117.043 3.08.043 2.792-.001 2.927-.004 3.08-.077.088-.042.2-.109.248-.149.048-.04.702-.892 1.453-1.893.75-1.001 1.38-1.82 1.399-1.82.019 0 .649.819 1.399 1.82.75 1.001 1.404 1.853 1.453 1.893.048.04.16.107.248.149.153.073.288.076 3.083.077 3.271.001 3.198.007 3.484-.271a.912.912 0 0 0 .312-.728c.001-.193-.022-.304-.088-.43-.099-.187-1.468-2.031-1.666-2.244a1.382 1.382 0 0 0-.285-.22l-.16-.086-7.72-.007c-4.246-.003-7.765.007-7.82.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReturn);
export default ForwardRef;
