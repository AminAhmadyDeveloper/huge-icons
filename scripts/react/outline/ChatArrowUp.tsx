import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.34 2.279c-1.896.127-3.693.801-5.256 1.973-.501.375-1.468 1.344-1.839 1.84-1.002 1.341-1.608 2.77-1.893 4.46-.081.481-.086.668-.102 3.548-.017 3.153-.005 3.474.148 4.074.221.864.584 1.486 1.263 2.165.679.679 1.301 1.042 2.165 1.263.609.155.895.164 5.054.148 3.864-.014 4.04-.018 4.54-.099a9.927 9.927 0 0 0 2.84-.89c1.051-.513 1.77-1.029 2.621-1.88s1.367-1.57 1.88-2.621c1.616-3.305 1.23-7.202-1.006-10.164-1.297-1.719-3.215-2.988-5.343-3.538-.906-.234-1.399-.282-3.072-.297a40.85 40.85 0 0 0-2 .018m3.98 1.576c1.82.323 3.403 1.158 4.628 2.438 1.167 1.222 1.903 2.696 2.199 4.407.097.562.097 2.038 0 2.6a8.5 8.5 0 0 1-.847 2.529 8.25 8.25 0 0 1-6.4 4.37c-.276.031-1.656.041-4.46.033l-4.06-.012-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 18l-.132-.38v-3.26c0-3.596-.005-3.505.263-4.516C3.64 7.596 5.221 5.67 7.342 4.61c.736-.368 1.725-.674 2.478-.766.198-.024.405-.051.46-.06a58.38 58.38 0 0 1 1.88-.007c1.462.008 1.848.022 2.16.078m-2.803 4.877c-.1.029-.271.103-.38.165-.244.141-1.715 1.588-1.82 1.791-.246.475.112 1.072.642 1.072.272 0 .441-.103.871-.531l.41-.408v2.12c0 1.423.015 2.171.045 2.278.059.213.293.441.513.5.4.108.812-.12.92-.51.026-.094.042-.934.042-2.268v-2.12l.41.408c.229.228.476.435.559.469a.734.734 0 0 0 1.031-.678.847.847 0 0 0-.077-.332c-.042-.081-.433-.501-.87-.932-.969-.958-1.103-1.04-1.724-1.062-.239-.008-.459.006-.572.038'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatArrowUp);
export default ForwardRef;