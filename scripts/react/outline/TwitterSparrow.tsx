import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTwitterSparrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.874 3.284c-1.516.127-2.901 1.088-3.61 2.504-.311.62-.446 1.113-.51 1.86-.024.292-.048.536-.052.542a7.082 7.082 0 0 1-.522-.051c-2.278-.266-4.141-1.138-5.64-2.638a11.654 11.654 0 0 1-.751-.824c-.318-.403-.491-.517-.786-.517-.288 0-.492.113-.631.35l-.112.19.01.78c.062 4.655 1.162 8.155 3.208 10.203.321.321.591.546.882.737.231.151.435.287.453.302.071.06-.926.617-1.593.89-.738.301-1.265.442-2.204.589-.341.053-.496.141-.643.362-.207.314-.117.758.207 1.011.684.535 2.075.922 3.98 1.109.579.056 1.821.056 2.32-.001 2.198-.251 4.152-1.025 5.891-2.334 1.831-1.378 3.276-3.287 4.146-5.479.511-1.285.777-2.491.895-4.058.015-.194.035-.228.28-.488.609-.646 1.108-1.608 1.546-2.982.093-.29.12-.437.101-.538-.074-.397-.355-.643-.735-.643-.241 0-.293.023-.635.286-.355.271-.699.374-1.254.374h-.425l-.315-.301a4.442 4.442 0 0 0-3.501-1.235m1.306 1.612c.491.167.833.389 1.255.814.206.208.436.404.51.435.298.124.678.182 1.185.181.28 0 .51.01.51.023 0 .014-.065.143-.144.288a3.187 3.187 0 0 1-.756.916c-.304.237-.367.377-.399.888-.1 1.596-.337 2.702-.847 3.959-1.473 3.633-4.589 6.153-8.341 6.748-.625.099-2.237.098-2.952-.003a5.1 5.1 0 0 1-.515-.086c-.009-.009.063-.047.159-.085.986-.393 2.267-1.208 2.931-1.866.338-.334.422-.539.342-.836-.095-.351-.264-.49-.699-.574-2.047-.391-3.736-2.969-4.354-6.648-.119-.707-.278-2.13-.238-2.13.01 0 .165.123.345.274C6.065 8.779 8.55 9.665 11.18 9.693c.607.007.648.002.79-.086a.927.927 0 0 0 .255-.272c.094-.16.102-.204.079-.446-.067-.701-.071-1.311-.011-1.594.255-1.203 1.158-2.176 2.286-2.462.435-.111 1.177-.082 1.601.063'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTwitterSparrow);
export default ForwardRef;
