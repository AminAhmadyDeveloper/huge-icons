import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStopwatchCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.46 2.264c-1.125.067-2.49.315-2.844.519-.407.233-.484.76-.165 1.123.244.278.449.308 1.057.156a10.4 10.4 0 0 1 4.984 0c.608.152.813.122 1.057-.156.319-.363.242-.89-.165-1.123-.261-.15-1.29-.372-2.124-.459a17.056 17.056 0 0 0-1.8-.06m-.3 2.783c-1.534.144-3.093.766-4.38 1.747-.58.443-1.414 1.339-1.848 1.986-.718 1.072-1.203 2.386-1.374 3.72-.059.463-.059 1.537 0 2a8.732 8.732 0 0 0 1.554 3.978c.321.453 1.126 1.296 1.572 1.648 1.177.928 2.426 1.488 3.929 1.763.406.074.633.089 1.367.089.878.001 1.395-.053 1.946-.203.059-.016.068-.145.085-1.206.021-1.362.057-1.58.365-2.232.232-.489.459-.818.801-1.16.342-.342.671-.569 1.16-.801.669-.316.849-.344 2.422-.372l1.38-.024.109-.428a8.59 8.59 0 0 0-.009-4.137 8.508 8.508 0 0 0-9.079-6.368m1.245 3.334c.08.051.188.162.24.246l.095.153.012 1.964.011 1.963.153.115c.394.297.585.734.556 1.279-.022.428-.148.693-.472.993-.306.283-.589.395-1 .395-.411 0-.694-.112-1-.395-.324-.3-.45-.565-.472-.993-.029-.545.162-.982.556-1.279l.153-.115.011-1.963.012-1.964.093-.149c.233-.375.691-.484 1.052-.25m7.228 8.978c-.104.056-.409.416-1.05 1.238-.496.636-.938 1.169-.981 1.183-.115.036-.193-.018-.71-.484-.572-.517-.63-.549-.953-.529-.307.02-.51.157-.628.425-.093.209-.083.503.023.664.036.055.313.327.616.605.69.633.964.785 1.466.811.496.026.934-.119 1.266-.418.174-.158 1.857-2.297 1.968-2.503.09-.167.09-.491 0-.668a.969.969 0 0 0-.221-.258c-.2-.16-.568-.19-.796-.066'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStopwatchCheck);
export default ForwardRef;
