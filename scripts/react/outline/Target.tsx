import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTarget = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.31 1.283C6.564 1.568 2.534 5.02 1.505 9.68c-.189.859-.241 1.353-.241 2.32 0 1.526.255 2.795.841 4.195 1.327 3.167 4.197 5.554 7.575 6.3.859.189 1.353.241 2.32.241 1.526 0 2.795-.255 4.195-.841 2.527-1.059 4.641-3.173 5.7-5.7.586-1.4.841-2.669.841-4.195 0-1.526-.255-2.795-.841-4.195-1.418-3.385-4.59-5.857-8.238-6.422-.354-.055-1.615-.152-1.777-.137-.033.003-.29.02-.57.037m2.09 1.576a9.28 9.28 0 0 1 7.747 7.781c.099.642.099 2.078 0 2.72-.463 3.008-2.356 5.605-5.047 6.921a9.193 9.193 0 0 1-2.693.867c-.607.102-2.207.102-2.814 0a9.193 9.193 0 0 1-2.693-.867 8.573 8.573 0 0 1-2.374-1.692 9.232 9.232 0 0 1-2.674-5.229c-.099-.642-.099-2.078 0-2.72A9.287 9.287 0 0 1 8.64 3.386c.737-.291 1.519-.475 2.56-.601.314-.039 1.798.011 2.2.074M11.473 6.28A5.773 5.773 0 0 0 6.334 11c-.095.515-.095 1.485 0 2A5.815 5.815 0 0 0 11 17.666c.514.093 1.486.093 2 0A5.815 5.815 0 0 0 17.666 13c.093-.514.093-1.486 0-2-.534-2.935-3.24-4.998-6.193-4.72m1.252 1.539A4.25 4.25 0 0 1 16.24 12 4.232 4.232 0 0 1 12 16.24a4.238 4.238 0 0 1-4.181-3.515c-.399-2.279 1.149-4.491 3.434-4.906a5.113 5.113 0 0 1 1.472 0m-1.058 3.246c-.364.112-.667.537-.667.935 0 .517.483 1 1 1s1-.483 1-1c0-.402-.312-.827-.69-.939a.941.941 0 0 0-.643.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTarget);
export default ForwardRef;