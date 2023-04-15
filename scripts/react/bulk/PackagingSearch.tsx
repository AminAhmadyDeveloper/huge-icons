import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackagingSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.973 2.059a4.27 4.27 0 0 0-1.693.722c-.331.243-2.242 2.155-2.497 2.499a4.33 4.33 0 0 0-.697 1.55L2.049 7h19.904l-.054-.23a4.293 4.293 0 0 0-.711-1.53c-.288-.385-2.26-2.326-2.568-2.527-.543-.356-1.024-.551-1.615-.654-.466-.082-9.581-.081-10.032 0m4.443 8.222c-1.919.345-3.272 2.018-3.165 3.915a3.69 3.69 0 0 0 1.157 2.508c.37.351.587.501 1.005.697.556.261.917.337 1.587.337.707 0 1.055-.08 1.674-.385l.414-.204.506.504c.631.629.825.72 1.197.565a.734.734 0 0 0 .413-.398c.178-.384.087-.585-.551-1.226l-.504-.506.204-.414c.303-.616.383-.966.384-1.674.001-.484-.015-.636-.092-.92-.37-1.352-1.396-2.376-2.725-2.722-.382-.099-1.16-.139-1.504-.077m1.007 1.522a2.38 2.38 0 0 1 1.146.61c.448.449.65.941.65 1.587 0 .642-.202 1.139-.641 1.578-.439.439-.936.641-1.578.641-.646 0-1.138-.202-1.587-.65-1.071-1.071-.762-2.911.599-3.567.478-.23.904-.29 1.411-.199'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingSearch);
export default ForwardRef;
