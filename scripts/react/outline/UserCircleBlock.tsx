import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUserCircleBlock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.4 1.281C6.378 1.543 2.97 4.187 1.739 8a9.914 9.914 0 0 0-.142 5.542c.478 1.83 1.625 3.643 3.075 4.864 2.457 2.067 5.645 2.81 8.727 2.034.252-.064.46-.112.461-.108.036.113.47.688.696.924.677.703 1.605 1.222 2.504 1.402.547.109 1.477.091 2.04-.039 1.275-.296 2.486-1.238 3.087-2.4 1.128-2.185.452-4.848-1.567-6.173a18.557 18.557 0 0 0-.288-.186 6.933 6.933 0 0 1 .108-.461 9.37 9.37 0 0 0 .278-2.899c-.038-.707-.041-.726-.16-1.36-.607-3.216-2.902-5.987-5.958-7.194a9.939 9.939 0 0 0-4.2-.665m1.521 1.52c2.838.343 5.245 2.045 6.477 4.578a7.93 7.93 0 0 1 .724 2.161c.123.629.152 1.778.062 2.48-.059.46-.225 1.235-.276 1.285-.01.01-.213-.001-.451-.025a4.821 4.821 0 0 0-3.045.74c-.467.302-1.157 1.004-1.443 1.467-.543.878-.807 2.029-.69 3.007.026.216.038.402.027.413-.051.052-.82.217-1.283.276-.632.081-1.813.061-2.363-.039a8.14 8.14 0 0 1-2.281-.745A8.224 8.224 0 0 1 3.158 8.46a8.012 8.012 0 0 1 2.02-3.282C6.282 4.074 7.52 3.376 9.08 2.979c.763-.195 2.042-.275 2.841-.178M10.74 4.266c-1.325.119-2.413.819-3.021 1.946A3.483 3.483 0 0 0 7.271 8c0 .682.129 1.197.45 1.792a3.518 3.518 0 0 0 1.491 1.489 3.483 3.483 0 0 0 1.788.448c.68 0 1.197-.129 1.788-.448a3.518 3.518 0 0 0 1.491-1.489c.321-.595.45-1.11.45-1.792 0-.68-.129-1.197-.448-1.788a3.674 3.674 0 0 0-2.066-1.749c-.422-.147-1.066-.233-1.475-.197m.838 1.555c.371.097.696.291 1.003.598.46.46.659.937.659 1.581 0 .644-.199 1.121-.659 1.581-.46.46-.937.659-1.581.659-.644 0-1.121-.199-1.581-.659-.46-.46-.659-.937-.659-1.581 0-.644.199-1.121.659-1.581.3-.301.631-.5.985-.596.288-.077.881-.078 1.174-.002m-1.118 7.446a9.993 9.993 0 0 0-3.724.971c-.598.293-.741.411-.814.673-.057.204-.053.306.02.48a.734.734 0 0 0 .398.413c.266.123.388.099 1.018-.199a8.444 8.444 0 0 1 2.322-.75c.292-.053.629-.07 1.46-.073.995-.004 1.09-.01 1.211-.082a.771.771 0 0 0 .203-1.119c-.16-.203-.347-.26-.984-.301-.576-.037-.699-.039-1.11-.013m8.283 1.571c.329.079.937.332.937.39 0 .042-4.41 4.452-4.452 4.452-.051 0-.289-.549-.373-.86-.106-.395-.105-1.249.002-1.64a3.127 3.127 0 0 1 .889-1.505c.512-.495.981-.733 1.754-.889.242-.05.943-.02 1.243.052m2.165 1.732c.39.788.437 1.717.13 2.56a3.29 3.29 0 0 1-2.358 2.05 3.776 3.776 0 0 1-1.433-.02c-.336-.081-.927-.328-.927-.387 0-.036 4.406-4.453 4.442-4.453.013 0 .078.113.146.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserCircleBlock);
export default ForwardRef;
