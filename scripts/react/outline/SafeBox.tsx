import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSafeBox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.579 1.279C3.458 1.47 1.763 3.011 1.333 5.14c-.069.339-.073.734-.073 6.86s.004 6.521.073 6.86c.397 1.966 1.841 3.41 3.807 3.807.339.069.734.073 6.86.073s6.521-.004 6.86-.073c1.966-.397 3.41-1.841 3.807-3.807.069-.339.073-.734.073-6.86s-.004-6.521-.073-6.86c-.39-1.929-1.778-3.349-3.703-3.788l-.384-.088-6.34-.007c-3.487-.004-6.484.006-6.661.022M18.98 2.89c.538.184.878.4 1.304.826.426.426.642.766.826 1.304l.11.32v13.32l-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H5.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V5.34l.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.501-.191.28-.186 7.248-.178l6.56.007.32.11M7.66 5.278A2.76 2.76 0 0 0 5.352 7.26l-.092.32v8.84l.092.32a2.797 2.797 0 0 0 1.908 1.908l.32.092h8.84l.32-.092c.912-.263 1.648-.995 1.9-1.888.108-.383.157-1.532.082-1.894a.74.74 0 0 0-1.369-.235c-.086.139-.094.203-.113.929-.019.676-.032.804-.104.96a1.412 1.412 0 0 1-.683.639c-.212.079-.302.081-4.453.081-4.16 0-4.241-.001-4.454-.081a1.341 1.341 0 0 1-.706-.707c-.08-.216-.081-.27-.071-4.525L6.78 7.62l.087-.162c.111-.208.383-.48.591-.591l.162-.087 4.307-.011c4.246-.01 4.309-.009 4.524.071.261.098.566.383.685.64.072.156.085.284.104.96.019.726.027.79.113.929a.741.741 0 0 0 1.369-.235c.075-.362.026-1.511-.082-1.894-.249-.882-.976-1.612-1.88-1.886l-.3-.091-4.28-.007c-2.354-.004-4.388.006-4.52.022m3.84 4.529c-.581.109-1.23.623-1.508 1.193a2.213 2.213 0 0 0 .427 2.581c1.077 1.077 2.895.791 3.582-.564l.131-.257h1.912c1.245 0 1.984-.015 2.118-.044.742-.159.762-1.245.027-1.43-.127-.032-.786-.046-2.121-.046h-1.936l-.136-.27c-.283-.562-.937-1.06-1.533-1.167a2.992 2.992 0 0 0-.963.004m.771 1.495a.748.748 0 0 1 0 1.396.65.65 0 0 1-.542 0 .745.745 0 0 1-.029-1.382.665.665 0 0 1 .571-.014'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSafeBox);
export default ForwardRef;
