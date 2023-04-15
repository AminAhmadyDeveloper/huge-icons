import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPeopleCircleBelow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.62 2.039a2.042 2.042 0 0 0-1.51 1.317c-.117.319-.116.971.002 1.294.157.431.46.805.852 1.053.195.123.565.257.709.257.183 0 .059.045-.237.086-1.739.241-3.149 1.658-3.393 3.409-.066.479-.056 1.608.018 1.855.116.392.531.686.976.692.327.004.652.203.832.509l.111.189.022 1.86c.021 1.775.026 1.871.108 2.09a2.082 2.082 0 0 0 1.246 1.24c.319.117.971.116 1.294-.002a2.082 2.082 0 0 0 1.242-1.244c.08-.212.085-.323.106-2.084l.022-1.86.111-.189c.18-.306.505-.505.832-.509.445-.006.86-.3.976-.692.073-.244.084-1.308.019-1.824a4.035 4.035 0 0 0-1.136-2.308 4.067 4.067 0 0 0-2.258-1.132c-.296-.041-.42-.086-.237-.086.144 0 .514-.134.709-.257a2.11 2.11 0 0 0 .852-1.053c.066-.179.084-.323.084-.65s-.018-.471-.084-.65a2.05 2.05 0 0 0-1.244-1.236c-.255-.089-.786-.128-1.024-.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPeopleCircleBelow);
export default ForwardRef;
