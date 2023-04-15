import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHoodedBell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.627 1.282a3.021 3.021 0 0 0-2.548 2.255 3.27 3.27 0 0 1-.089.32c-.006.002-.2.097-.433.213-1.752.867-2.993 2.369-3.415 4.132-.065.272-.184 1.165-.34 2.558-.133 1.177-.268 2.257-.302 2.4-.09.382-.309.813-.621 1.221-.322.422-.488.763-.576 1.189-.079.384-.079.554 0 .942.167.822.728 1.528 1.517 1.908.722.347.113.32 7.18.32 7.067 0 6.458.027 7.18-.32.809-.39 1.363-1.099 1.527-1.956.135-.707-.046-1.37-.557-2.041-.331-.434-.522-.796-.627-1.191-.045-.168-.183-1.217-.325-2.472-.183-1.626-.274-2.294-.358-2.627-.437-1.732-1.671-3.209-3.397-4.063a31.274 31.274 0 0 0-.433-.213 3.27 3.27 0 0 1-.089-.32 3.996 3.996 0 0 0-.249-.657c-.137-.276-.241-.412-.551-.722-.325-.327-.436-.41-.761-.569a3.034 3.034 0 0 0-1.733-.307m1.002 1.616c.302.136.613.448.755.759.07.154.109.331.132.598.044.522.176.706.621.87 1.629.596 2.88 1.902 3.244 3.385.061.25.182 1.16.338 2.542.134 1.183.27 2.269.304 2.413.135.584.435 1.209.821 1.715.314.411.394.585.395.86.001.432-.284.828-.759 1.055l-.26.125H5.78l-.24-.112c-.475-.222-.78-.64-.779-1.068.001-.276.081-.451.397-.86a5.131 5.131 0 0 0 .779-1.58c.07-.267.172-1.021.343-2.54.157-1.39.278-2.299.339-2.55.318-1.296 1.298-2.453 2.641-3.118.198-.098.469-.219.603-.267.445-.164.577-.348.621-.87.039-.461.149-.725.422-1.018.321-.343.669-.483 1.154-.464.246.01.377.038.569.125M8.647 19.324a.754.754 0 0 0-.397.577c-.044.393.408 1.198.98 1.745.759.725 1.681 1.087 2.77 1.087 1.085 0 2.011-.362 2.763-1.081.515-.491 1-1.299.993-1.652-.009-.544-.537-.903-1.027-.698-.224.094-.321.206-.498.578a2.454 2.454 0 0 1-1.632 1.298 2.79 2.79 0 0 1-1.812-.226c-.389-.204-.816-.655-1.031-1.089-.225-.457-.38-.592-.707-.613a.659.659 0 0 0-.402.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoodedBell);
export default ForwardRef;
