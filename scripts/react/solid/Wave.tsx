import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWave = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.98 4.162a5.24 5.24 0 0 0-1.36.433c-.395.192-2.834 1.637-3.094 1.834A.8.8 0 0 0 1.242 7c0 .305.237.621.541.721.286.094.398.043 1.988-.908 1.649-.986 1.893-1.099 2.53-1.171.37-.042.812-.013 1.2.08.371.087.903.379 1.449.794 1.36 1.033 2.739 1.338 4.27.944.602-.155 1.19-.46 1.866-.969.88-.662 1.41-.865 2.252-.862.485.002.836.069 1.23.234.136.058.913.503 1.726.99 1.413.846 1.486.884 1.683.884.657 0 1.011-.77.568-1.233-.133-.138-2.591-1.63-3.127-1.897-.707-.353-1.231-.468-2.118-.465-.597.002-.729.014-1.082.105a4.905 4.905 0 0 0-1.878.929c-.854.675-1.362.89-2.2.932-.91.046-1.546-.193-2.48-.932a4.872 4.872 0 0 0-1.858-.923c-.432-.11-1.39-.158-1.822-.091m.12 5.982a5.038 5.038 0 0 0-1.54.475c-.371.186-2.817 1.646-3.034 1.81a.8.8 0 0 0-.284.571c0 .452.46.833.889.734.1-.023.758-.392 1.61-.902.792-.475 1.553-.91 1.69-.968.395-.166.746-.233 1.231-.235.837-.003 1.409.219 2.288.887.631.48 1.235.791 1.83.944 1.531.394 2.91.089 4.27-.944.546-.415 1.078-.707 1.449-.794.388-.093.83-.122 1.2-.08.639.072.88.184 2.547 1.182 1.51.904 1.531.915 1.751.913.275-.001.446-.087.601-.3.215-.297.193-.695-.052-.937-.14-.139-2.626-1.643-3.128-1.893a5.631 5.631 0 0 0-1.198-.412c-.391-.088-1.479-.069-1.922.034a4.838 4.838 0 0 0-1.911.912c-.591.455-.848.619-1.159.74a2.983 2.983 0 0 1-1.368.227c-.838-.042-1.334-.252-2.2-.933a4.913 4.913 0 0 0-1.858-.922c-.3-.076-.511-.101-.982-.112a8.83 8.83 0 0 0-.72.003m0 6a5.038 5.038 0 0 0-1.54.475c-.371.186-2.817 1.646-3.034 1.81a.8.8 0 0 0-.284.571c0 .452.46.833.889.734.1-.023.758-.392 1.61-.902.792-.475 1.553-.91 1.69-.968.395-.166.746-.233 1.231-.235.837-.003 1.409.219 2.288.887.631.48 1.235.791 1.83.944 1.531.394 2.91.089 4.27-.944.546-.415 1.078-.707 1.449-.794.388-.093.83-.122 1.2-.08.639.072.88.184 2.547 1.182 1.51.904 1.531.915 1.751.913.275-.001.446-.087.601-.3.215-.297.193-.695-.052-.937-.14-.139-2.626-1.643-3.128-1.893a5.631 5.631 0 0 0-1.198-.412c-.391-.088-1.479-.069-1.922.034a4.838 4.838 0 0 0-1.911.912c-.591.455-.848.619-1.159.74a2.983 2.983 0 0 1-1.368.227c-.838-.042-1.334-.252-2.2-.933a4.913 4.913 0 0 0-1.858-.922c-.3-.076-.511-.101-.982-.112a8.83 8.83 0 0 0-.72.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWave);
export default ForwardRef;
