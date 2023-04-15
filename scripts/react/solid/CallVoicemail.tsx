import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCallVoicemail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.18 2.281a2.23 2.23 0 0 0-1.68 1.213c-.147.298-.259.733-.259 1.006 0 .277.112.709.265 1.02.288.588.883 1.039 1.554 1.18.415.087 6.465.087 6.88 0a2.28 2.28 0 0 0 1.76-1.76 1.772 1.772 0 0 0 0-.88 2.293 2.293 0 0 0-1.6-1.723c-.524-.154-1.233-.064-1.724.22-.821.474-1.287 1.499-1.08 2.375.035.15.064.281.064.29 0 .01-.389.018-.865.018h-.864l.025-.09c.014-.049.047-.227.072-.395a1.477 1.477 0 0 0-.019-.639c-.239-1.214-1.317-1.996-2.529-1.835m-8.6.766c-.541.103-1.129.564-1.37 1.073-.191.403-.226.667-.197 1.475.126 3.461 1.332 6.685 3.532 9.445.552.692 1.723 1.863 2.415 2.415 2.395 1.91 5.089 3.051 8.088 3.426.866.108 1.981.147 2.317.082a2.049 2.049 0 0 0 1.591-1.555c.072-.345.058-2.243-.019-2.539a2.03 2.03 0 0 0-.834-1.173c-.112-.075-.752-.357-1.423-.626l-1.22-.49h-1.006l-.342.17a1.999 1.999 0 0 0-.95.93c-.194.373-.104.363-.902.101-2.153-.709-3.974-2.137-5.097-3.997a11.776 11.776 0 0 1-.938-2.026c-.269-.819-.278-.726.091-.918.319-.166.627-.439.823-.727.246-.363.368-.916.298-1.356-.042-.266-.822-2.295-1.049-2.728-.242-.465-.828-.888-1.365-.986-.289-.052-2.162-.05-2.443.004m9.21.775a.61.61 0 0 1 .375.358c.129.282.06.681-.151.868a.799.799 0 0 1-.804.13.61.61 0 0 1-.375-.358.798.798 0 0 1 .117-.834c.179-.203.565-.278.838-.164m6 0a.61.61 0 0 1 .375.358c.129.282.06.681-.151.868a.799.799 0 0 1-.804.13.61.61 0 0 1-.375-.358.798.798 0 0 1 .117-.834c.179-.203.565-.278.838-.164'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallVoicemail);
export default ForwardRef;
