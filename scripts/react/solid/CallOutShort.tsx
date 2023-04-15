import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCallOutShort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.66 2.307a.696.696 0 0 0-.344.341.807.807 0 0 0-.012.644c.036.07.396.462.8.87.54.545.736.768.736.838 0 .07-.191.288-.716.818-.393.397-.746.783-.784.858-.103.205-.068.554.075.74.219.288.628.387.937.228.081-.043.494-.426.917-.854.664-.671.787-.814.9-1.053.124-.263.131-.3.131-.737s-.007-.474-.131-.737c-.114-.24-.237-.384-.92-1.075-.497-.503-.848-.825-.949-.872-.195-.091-.478-.095-.64-.009m-3.988.055a.692.692 0 0 0-.384.595c-.023.311.04.422.503.89l.382.388-1.199.012-1.2.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.098.028.585.045 1.278.045h1.12l-.406.41c-.454.46-.533.585-.533.85 0 .55.555.898 1.06.664.101-.047.452-.369.949-.872.683-.691.806-.835.92-1.075.124-.263.131-.3.131-.737s-.007-.474-.131-.737c-.113-.239-.236-.383-.9-1.055-.483-.489-.828-.805-.929-.852a.799.799 0 0 0-.668.006M4.58 3.047c-.541.103-1.129.564-1.37 1.073-.191.403-.226.667-.197 1.475.126 3.461 1.332 6.685 3.532 9.445.552.692 1.723 1.863 2.415 2.415 2.395 1.91 5.089 3.051 8.088 3.426.866.108 1.981.147 2.317.082a2.049 2.049 0 0 0 1.591-1.555c.072-.345.058-2.243-.019-2.539a2.03 2.03 0 0 0-.834-1.173c-.112-.075-.752-.357-1.423-.626l-1.22-.49h-1.006l-.342.17a1.999 1.999 0 0 0-.95.93c-.194.373-.104.363-.902.101-2.153-.709-3.974-2.137-5.097-3.997a11.776 11.776 0 0 1-.938-2.026c-.269-.819-.278-.726.091-.918.319-.166.627-.439.823-.727.246-.363.368-.916.298-1.356-.042-.266-.822-2.295-1.049-2.728-.242-.465-.828-.888-1.365-.986-.289-.052-2.162-.05-2.443.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallOutShort);
export default ForwardRef;