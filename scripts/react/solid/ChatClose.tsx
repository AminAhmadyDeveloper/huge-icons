import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.34 3.025c-1.269.123-2.251.39-3.28.893a9.009 9.009 0 0 0-5.02 7.242c-.031.311-.041 1.436-.031 3.48l.014 3.02.11.378c.437 1.504 1.584 2.572 3.093 2.879.395.081.521.083 4.341.083 3.223 0 4.025-.011 4.441-.059a8.992 8.992 0 0 0 7.075-5.001 8.974 8.974 0 0 0-1.07-9.571c-1.215-1.517-2.984-2.648-4.853-3.102-.889-.217-1.134-.237-2.96-.248a64.757 64.757 0 0 0-1.86.006m-.069 6.276c.095.04.434.347.939.85l.789.787.791-.784c.434-.431.835-.807.89-.836.166-.086.527-.065.697.04a.696.696 0 0 1 .351.635c0 .131-.022.28-.049.332-.027.052-.402.451-.833.885l-.784.791.787.789c.503.505.81.844.85.939.203.491-.142 1.031-.659 1.031-.303 0-.429-.092-1.25-.911l-.79-.788-.79.788c-.504.503-.844.81-.939.85-.491.203-1.031-.142-1.031-.659 0-.303.092-.429.911-1.25l.788-.79-.788-.79c-.503-.504-.81-.844-.85-.939a.736.736 0 0 1 .97-.97'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatClose);
export default ForwardRef;