import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFilterBigCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.6 5.026c-1.056.165-1.958.855-2.365 1.811a1.674 1.674 0 0 0-.114.331c-.001.063-.132.069-1.674.08l-1.673.012-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.104.029.711.045 1.744.045H6.11l.026.13c.06.3.353.794.67 1.129.488.516.956.784 1.603.917.975.202 1.948-.092 2.683-.81 1.734-1.693.834-4.608-1.566-5.07a3.314 3.314 0 0 0-.926-.03m5.211 2.252a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 7.215.062 7.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.643-.006c-2.004-.004-3.701.007-3.772.024m.661 5.782a3.007 3.007 0 0 0-2.312 2.011c-.566 1.708.481 3.5 2.259 3.867.534.111 1.069.067 1.638-.134.383-.134.659-.32 1.047-.704.387-.384.598-.708.722-1.11l.07-.23h1.582c1.031 0 1.637-.016 1.741-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.666-.012-1.666-.012-.07-.234c-.112-.375-.335-.714-.725-1.106-.306-.308-.421-.393-.741-.55a3.996 3.996 0 0 0-.615-.245 3.422 3.422 0 0 0-1.271-.041M2.811 15.278a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 7.215.062 7.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.643-.006c-2.004-.004-3.701.007-3.772.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterBigCircle);
export default ForwardRef;
