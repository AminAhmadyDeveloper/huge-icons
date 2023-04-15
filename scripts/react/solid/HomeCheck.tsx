import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.52 2.025a4.519 4.519 0 0 0-1.682.622c-.181.116-3.694 2.984-5.253 4.289-.865.724-1.349 1.53-1.526 2.539-.088.499-.088 8.671 0 9.17a4.017 4.017 0 0 0 3.168 3.272c.398.081.507.083 5.773.083s5.375-.002 5.773-.083a4.017 4.017 0 0 0 3.168-3.272c.088-.499.088-8.671 0-9.17-.177-1.009-.661-1.815-1.526-2.539-1.559-1.305-5.072-4.173-5.253-4.289a4.586 4.586 0 0 0-1.202-.525c-.335-.084-1.124-.138-1.44-.097m4.782 8.29c.318.145.504.502.43.825-.025.106-.524.89-1.479 2.32-1.224 1.835-1.484 2.2-1.726 2.428a2.643 2.643 0 0 1-1.83.711 2.712 2.712 0 0 1-1.497-.431c-.3-.187-1.748-1.622-1.844-1.828a.735.735 0 0 1 .955-.998c.094.039.431.342.909.817.875.87.973.933 1.46.935.347.002.614-.096.834-.306.073-.07.769-1.074 1.546-2.23.778-1.157 1.442-2.126 1.476-2.155.091-.075.345-.159.484-.16a.83.83 0 0 1 .282.072'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeCheck);
export default ForwardRef;