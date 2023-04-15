import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTelescope = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.517 2.052c-.434.123-.879.524-1.041.938-.123.312-.127.859-.011 1.15.044.11.679 1.271 1.409 2.58 1.203 2.154 1.351 2.401 1.564 2.606.311.298.585.408 1.022.408.463 0 .724-.111 1.064-.45.349-.35.452-.6.454-1.104.002-.259-.019-.414-.073-.554-.072-.187-2.504-4.566-2.752-4.956-.319-.501-1.06-.781-1.636-.618M11.18 6.977C8.208 8.75 7.283 9.32 7.089 9.499a2.022 2.022 0 0 0-.662 1.541c.001.399.083.716.275 1.069l.136.25-1.883 1.123c-1.035.618-1.894 1.113-1.909 1.099a6.786 6.786 0 0 1-.246-.411c-.282-.495-.446-.623-.797-.623-.19 0-.271.021-.396.104a.715.715 0 0 0-.346.63c0 .212.03.274.814 1.68.448.802.87 1.518.939 1.591a.767.767 0 0 0 .327.19c.36.105.695-.055.879-.419.12-.237.069-.488-.196-.962-.188-.338-.22-.421-.177-.461.135-.126 3.73-2.228 3.743-2.189.044.13.359.561.532.727.417.4 1.079.613 1.637.527.359-.055.642-.187 1.461-.677.33-.198.606-.353.614-.346.008.007-.878 1.754-1.97 3.882-1.091 2.128-2.003 3.938-2.026 4.022-.075.28.072.627.333.788a.735.735 0 0 0 .892-.086c.102-.095.704-1.235 2.361-4.468a627.693 627.693 0 0 1 2.25-4.369c.015-.015 1.007 1.884 2.204 4.22 1.197 2.337 2.234 4.34 2.305 4.452.327.521 1.049.476 1.302-.081.124-.275.099-.439-.139-.904l-2.44-4.761c-1.224-2.389-2.226-4.36-2.225-4.38 0-.02.774-.496 1.719-1.057.945-.561 1.718-1.033 1.719-1.05a1.11 1.11 0 0 0-.134-.22c-.166-.235-2.814-4.966-2.871-5.131-.023-.065-.054-.117-.068-.116a539.89 539.89 0 0 0-3.866 2.294'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTelescope);
export default ForwardRef;