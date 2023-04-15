import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatNegative = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.739 2.282C8.397 2.432 6.187 3.444 4.5 5.14a9.764 9.764 0 0 0-2.779 5.84c-.033.307-.043 1.398-.033 3.62l.014 3.18.104.38c.542 1.965 2.119 3.331 4.108 3.561.266.031 1.505.04 3.986.029 3.907-.017 3.798-.011 4.876-.253 3.497-.783 6.353-3.568 7.248-7.068.331-1.294.39-2.937.151-4.189a9.8 9.8 0 0 0-3.85-6.113 9.909 9.909 0 0 0-4.167-1.745c-.783-.129-2.275-.173-3.419-.1m2.693 1.519c2.854.305 5.298 2.013 6.55 4.579.586 1.202.832 2.276.83 3.62-.003 1.364-.245 2.421-.83 3.62-1.243 2.549-3.665 4.255-6.502 4.581-.256.029-1.577.039-4.04.031l-3.66-.012-.28-.095c-1.154-.389-1.909-1.176-2.233-2.325-.081-.29-.085-.394-.098-3.1-.009-1.808.001-2.991.03-3.34a7.978 7.978 0 0 1 .783-2.912A8.199 8.199 0 0 1 10.4 3.821c.517-.064 2.494-.077 3.032-.02m-4.505 7.486c-.234.053-.459.28-.521.527a.753.753 0 0 0 .5.897c.235.07 5.953.07 6.188 0 .364-.109.6-.523.503-.882a.702.702 0 0 0-.37-.48l-.167-.089-2.98-.006c-1.83-.004-3.047.008-3.153.033'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatNegative);
export default ForwardRef;