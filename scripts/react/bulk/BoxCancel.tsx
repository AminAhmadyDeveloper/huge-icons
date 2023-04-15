import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBoxCancel = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8 5.912v3.912l.104.208c.233.468.735.671 1.239.502.17-.058.331-.198 1.177-1.033C11.567 8.47 11.608 8.44 12 8.44c.392 0 .433.03 1.48 1.061.846.835 1.007.975 1.177 1.033.504.169 1.006-.034 1.239-.502L16 9.824V2H8v3.912m12.945 10.227c-.177.046-.274.131-1.069.925l-.875.874-.871-.865c-.954-.949-1.017-.991-1.391-.935-.154.023-.225.064-.381.22s-.197.227-.22.381c-.056.374-.014.437.935 1.391l.865.871-.845.849c-.464.468-.867.894-.894.948-.07.136-.063.48.012.623.071.136.244.306.387.38.126.065.477.065.604 0 .054-.027.481-.43.948-.895l.85-.845.85.848c.871.869 1.006.971 1.29.971.16 0 .398-.089.514-.192.113-.1.224-.366.225-.539.002-.293-.095-.422-.97-1.299l-.848-.85.871-.872c.773-.773.878-.894.93-1.068.167-.554-.347-1.071-.917-.921'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxCancel);
export default ForwardRef;
