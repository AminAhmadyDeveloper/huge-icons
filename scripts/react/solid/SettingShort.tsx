import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSettingShort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.738 4.056c-.474.115-.88.419-1.086.811-.143.274-.168.365-.212.799-.056.532-.314.924-.751 1.139-.157.077-.253.093-.569.094-.359.001-.397-.007-.688-.149-.393-.191-.651-.246-1.04-.219a1.658 1.658 0 0 0-1.032.453c-.255.238-1.178 1.724-1.29 2.076-.148.463-.036 1.009.291 1.422.068.085.246.236.396.336.534.355.737.68.737 1.182 0 .502-.203.827-.737 1.182-.464.308-.716.726-.747 1.236-.025.421.066.648.626 1.562.639 1.041.829 1.24 1.36 1.419.462.155.991.094 1.504-.173.22-.115.272-.126.62-.126.337 0 .404.013.589.11.442.233.675.592.731 1.124.044.433.069.525.211.796.203.387.595.69 1.047.808.344.089 2.26.089 2.604 0a1.665 1.665 0 0 0 1.047-.808c.142-.271.167-.363.211-.796.056-.532.289-.891.731-1.124.185-.097.252-.11.589-.11.348 0 .4.011.62.126.513.267 1.042.328 1.504.173.531-.179.721-.377 1.359-1.419.561-.915.652-1.143.627-1.562-.031-.509-.283-.927-.741-1.229-.546-.361-.742-.673-.745-1.188-.002-.511.189-.817.739-1.183.15-.1.328-.251.396-.336.327-.413.439-.96.291-1.422-.113-.352-1.037-1.839-1.29-2.076a1.658 1.658 0 0 0-1.032-.453c-.387-.026-.648.028-1.041.217-.286.138-.333.148-.687.15-.339.001-.403-.01-.589-.108-.442-.233-.675-.592-.731-1.124-.044-.434-.069-.525-.212-.799-.213-.405-.647-.719-1.14-.822-.293-.062-2.205-.053-2.47.011m2.018 5.041c.337.092.839.35 1.117.574C14.554 10.219 15 11.14 15 12c0 1.17-.775 2.329-1.849 2.766-1.509.614-3.162-.032-3.853-1.506-.226-.481-.277-.714-.277-1.26s.051-.779.277-1.26a3.033 3.033 0 0 1 2.205-1.7c.267-.049.988-.016 1.253.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSettingShort);
export default ForwardRef;
