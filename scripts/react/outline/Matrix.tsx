import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMatrix = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.281a4.719 4.719 0 0 0-1.593.478c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.445.056 2.563.053 2.767-.004.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.423-.022-1.423-.021-.371-.125a3.072 3.072 0 0 1-1.293-.808A3.077 3.077 0 0 1 2.912 19l-.132-.38V5.38L2.912 5c.186-.535.404-.883.804-1.284A3.052 3.052 0 0 1 5 2.914l.38-.131 1.42-.021c1.561-.024 1.556-.023 1.774-.282.292-.347.21-.85-.179-1.108l-.169-.112-1.203-.006c-.662-.003-1.35.009-1.53.027m10.318-.002c-.519.123-.732.788-.385 1.201.218.259.213.258 1.774.282l1.42.021.374.129c.538.186.891.405 1.29.804.397.398.617.749.805 1.29l.131.374v13.24l-.131.374a3.104 3.104 0 0 1-.805 1.29 3.062 3.062 0 0 1-1.293.808l-.371.125-1.423.021-1.423.022-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.204.057 2.322.06 2.767.004 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.056-.446.056-12.65 0-13.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.464-.046-2.457-.047-2.645-.002M6.664 6.063a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212.984.984 0 0 0 0-1.402.996.996 0 0 0-1.037-.236m5 0a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937m5 0a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937m-10 5a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212.984.984 0 0 0 0-1.402.996.996 0 0 0-1.037-.236m5 0a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937m5 0a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937m-10 5a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212.984.984 0 0 0 0-1.402.996.996 0 0 0-1.037-.236m5 0a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937m5 0a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMatrix);
export default ForwardRef;