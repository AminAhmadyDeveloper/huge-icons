import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeNotification = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.52 1.283a4.77 4.77 0 0 0-2.4.955c-1.082.851-5.381 4.436-5.594 4.664-.602.645-.993 1.413-1.195 2.35-.066.303-.071.673-.071 4.788 0 4.838-.007 4.663.227 5.397a4.76 4.76 0 0 0 3.059 3.077c.728.236.438.226 6.454.226s5.726.01 6.454-.226a4.76 4.76 0 0 0 3.059-3.077c.234-.734.227-.559.227-5.397 0-4.165-.005-4.482-.073-4.791-.208-.948-.592-1.704-1.19-2.344-.276-.295-5.156-4.347-5.747-4.771a4.373 4.373 0 0 0-1.758-.769 5.093 5.093 0 0 0-1.452-.082m1.3 1.575c.31.083.78.306 1.037.49.329.236 5.142 4.203 5.396 4.448a3.38 3.38 0 0 1 .924 1.692c.055.27.063.838.063 4.572s-.008 4.302-.063 4.572a3.285 3.285 0 0 1-2.534 2.551c-.39.083-10.896.083-11.286 0a3.285 3.285 0 0 1-2.534-2.551c-.055-.27-.063-.838-.063-4.572s.008-4.302.063-4.572a3.38 3.38 0 0 1 .924-1.692c.258-.249 5.076-4.219 5.393-4.444a3.224 3.224 0 0 1 1.22-.534c.332-.071 1.131-.049 1.46.04m-1.16 5.407c-1.75.166-3.164 1.369-3.628 3.088-.07.261-.086.474-.108 1.427-.025 1.096-.028 1.125-.13 1.343a2.535 2.535 0 0 1-.355.5c-.439.484-.62 1.028-.522 1.574a1.87 1.87 0 0 0 1.243 1.468c.208.071.412.075 3.84.075s3.632-.004 3.84-.075a1.87 1.87 0 0 0 1.243-1.468c.098-.546-.083-1.09-.522-1.574a2.535 2.535 0 0 1-.355-.5c-.102-.218-.105-.247-.13-1.343-.028-1.23-.056-1.41-.321-2.045-.252-.606-.828-1.326-1.375-1.718a4.458 4.458 0 0 0-1.54-.675 5.63 5.63 0 0 0-1.18-.077m1.104 1.607c.468.166.692.304 1.019.628.337.333.52.611.664 1.007.075.206.088.358.113 1.333.022.821.047 1.171.098 1.38.106.432.382.956.682 1.292.296.332.329.462.162.63l-.098.098H8.596l-.098-.098c-.165-.165-.133-.299.145-.61.629-.705.797-1.304.797-2.842 0-.539.017-.821.06-.992.189-.743.804-1.457 1.504-1.743.378-.154.627-.195 1.096-.178.303.011.51.04.664.095m-1.953 8.406a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.214.06 2.224.06 2.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.143-.007c-.629-.004-1.201.007-1.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeNotification);
export default ForwardRef;