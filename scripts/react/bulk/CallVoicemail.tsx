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
            d='M13.158 2.281a2.362 2.362 0 0 0-1.336.725c-.325.362-.581 1.02-.581 1.494 0 .277.112.709.264 1.017.289.587.888 1.043 1.555 1.183.415.087 6.465.087 6.88 0a2.28 2.28 0 0 0 1.76-1.76 1.772 1.772 0 0 0 0-.88 2.293 2.293 0 0 0-1.6-1.723c-.524-.154-1.233-.064-1.724.22-.821.474-1.287 1.499-1.08 2.375.035.15.064.281.064.29 0 .01-.389.018-.865.018h-.864l.025-.09c.014-.049.047-.227.072-.395.156-1.024-.576-2.122-1.608-2.409a2.548 2.548 0 0 0-.962-.065m.632 1.541a.61.61 0 0 1 .375.358c.129.282.06.681-.151.868a.799.799 0 0 1-.804.13.61.61 0 0 1-.375-.358.798.798 0 0 1 .117-.834c.179-.203.565-.278.838-.164m6 0a.61.61 0 0 1 .375.358c.129.282.06.681-.151.868a.799.799 0 0 1-.804.13.61.61 0 0 1-.375-.358.798.798 0 0 1 .117-.834c.179-.203.565-.278.838-.164'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallVoicemail);
export default ForwardRef;