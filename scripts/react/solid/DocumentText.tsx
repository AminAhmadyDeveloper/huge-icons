import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDocumentText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.433 2.042a4.334 4.334 0 0 0-1.702.67c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.422 1.511 1.576 2.591 3.099 2.901.406.083.469.084 5.9.073l5.49-.011.391-.108c1.504-.415 2.597-1.581 2.906-3.098.082-.399.083-.503.083-5.925 0-5.963.004-5.832-.213-6.469-.266-.778-.504-1.1-1.725-2.324-1.29-1.292-1.584-1.52-2.318-1.796-.657-.247-.369-.234-5.444-.243-2.552-.005-4.742.007-4.867.025m9.94 4.313c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.081-.178.082-4.359.082s-4.221-.001-4.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 1.988-.028 4.265-.024l4.14.006.153.095m0 5c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.081-.178.082-4.359.082s-4.221-.001-4.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 1.988-.028 4.265-.024l4.14.006.153.095m-4 5c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.136.08-.194.082-2.359.082s-2.223-.002-2.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.055-1.013.431-1.132.069-.017 1.088-.027 2.265-.024l2.14.007.153.095'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDocumentText);
export default ForwardRef;