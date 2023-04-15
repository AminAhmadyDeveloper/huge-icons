import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeFlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.52 1.283a4.77 4.77 0 0 0-2.4.955c-1.082.851-5.381 4.436-5.594 4.664-.602.645-.993 1.413-1.195 2.35-.066.303-.071.673-.071 4.788 0 4.838-.007 4.663.227 5.397a4.76 4.76 0 0 0 3.059 3.077c.728.236.438.226 6.454.226s5.726.01 6.454-.226a4.76 4.76 0 0 0 3.059-3.077c.234-.734.227-.559.227-5.397 0-4.165-.005-4.482-.073-4.791-.208-.948-.592-1.704-1.19-2.344-.276-.295-5.156-4.347-5.747-4.771a4.373 4.373 0 0 0-1.758-.769 5.093 5.093 0 0 0-1.452-.082m1.3 1.575c.31.083.78.306 1.037.49.329.236 5.142 4.203 5.396 4.448a3.38 3.38 0 0 1 .924 1.692c.055.27.063.838.063 4.572s-.008 4.302-.063 4.572a3.285 3.285 0 0 1-2.534 2.551c-.39.083-10.896.083-11.286 0a3.285 3.285 0 0 1-2.534-2.551c-.055-.27-.063-.838-.063-4.572s.008-4.302.063-4.572a3.38 3.38 0 0 1 .924-1.692c.258-.249 5.076-4.219 5.393-4.444a3.224 3.224 0 0 1 1.22-.534c.332-.071 1.131-.049 1.46.04m-.023 5.419a1.108 1.108 0 0 0-.217.106c-.144.095-3.219 4.19-3.286 4.377a.9.9 0 0 0-.052.22.89.89 0 0 0 .184.5c.217.257.22.258 1.702.28l1.347.02-1.078 1.437c-1.12 1.494-1.187 1.606-1.136 1.906a.897.897 0 0 0 .388.544c.184.097.534.093.711-.008.193-.111 3.302-4.243 3.363-4.47.085-.316-.04-.626-.328-.817l-.169-.112-1.351-.02-1.35-.02 1.072-1.43c1.118-1.491 1.203-1.632 1.143-1.916a.808.808 0 0 0-.335-.494c-.161-.105-.45-.154-.608-.103'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeFlash);
export default ForwardRef;
