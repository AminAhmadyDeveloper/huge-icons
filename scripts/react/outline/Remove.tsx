import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.379 5.04A2.776 2.776 0 0 0 5.14 6.929a2.726 2.726 0 0 0 .268 2.251c.129.218.443.559 1.426 1.55L8.096 12l-1.241 1.25c-1.242 1.253-1.46 1.511-1.636 1.945a2.714 2.714 0 0 0 .603 2.983 2.714 2.714 0 0 0 2.983.603c.434-.176.692-.394 1.945-1.637l1.25-1.24 1.25 1.24c.699.694 1.353 1.307 1.483 1.392.3.196.611.321.996.4.379.079.618.081.997.008a2.758 2.758 0 0 0 2.141-1.884c.146-.446.154-1.091.019-1.567-.179-.631-.324-.818-1.72-2.223L15.904 12l1.241-1.25c.693-.699 1.306-1.353 1.391-1.483a2.75 2.75 0 0 0-1.616-4.17c-.341-.089-1.014-.091-1.344-.003-.689.184-.887.334-2.326 1.761l-1.249 1.241-1.251-1.24C9.531 5.647 9.267 5.422 8.864 5.245a3.002 3.002 0 0 0-1.485-.205M8.3 6.637c.154.073.554.447 1.74 1.627C11.599 9.815 11.723 9.92 12 9.92c.277 0 .401-.105 1.98-1.677 1.45-1.443 1.576-1.558 1.792-1.638.874-.322 1.748.302 1.701 1.215-.026.496-.042.516-1.737 2.22-1.551 1.559-1.656 1.683-1.656 1.96 0 .277.105.401 1.656 1.96 1.695 1.704 1.711 1.724 1.737 2.22.047.915-.825 1.538-1.701 1.215-.216-.08-.342-.195-1.792-1.638-1.579-1.572-1.703-1.677-1.98-1.677-.277 0-.401.105-1.98 1.677-1.45 1.443-1.576 1.558-1.792 1.638a1.249 1.249 0 0 1-1.623-1.623c.08-.216.195-.342 1.638-1.792C9.815 12.401 9.92 12.277 9.92 12c0-.277-.105-.401-1.656-1.96-1.695-1.704-1.711-1.724-1.737-2.22-.028-.541.273-1.025.756-1.214a1.415 1.415 0 0 1 1.017.031'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemove);
export default ForwardRef;