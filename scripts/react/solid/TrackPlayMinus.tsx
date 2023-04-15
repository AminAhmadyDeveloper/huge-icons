import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrackPlayMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.31 1.283C6.564 1.568 2.534 5.02 1.505 9.68c-.189.859-.241 1.353-.241 2.32 0 .967.052 1.461.241 2.32 1.233 5.583 6.652 9.231 12.295 8.277a6.33 6.33 0 0 0 .643-.138c.2-.066.408-.255.475-.432.116-.308-.014-.717-.285-.897-.205-.135-.421-.138-1.073-.016-.7.131-1.892.163-2.623.07-2.766-.352-5.099-1.787-6.644-4.084-1.525-2.267-1.938-5.272-1.09-7.924a9.313 9.313 0 0 1 4.411-5.313c2.647-1.437 5.939-1.468 8.624-.082.423.218 1.202.724 1.562 1.014 1.518 1.222 2.662 2.994 3.139 4.859.237.931.28 1.296.279 2.366-.001.849-.013 1.02-.1 1.48-.128.681-.126.924.012 1.132.186.282.605.406.922.274.172-.072.375-.309.425-.497.083-.307.199-1.085.245-1.649.191-2.303-.503-4.875-1.833-6.8-1.716-2.483-4.309-4.124-7.232-4.577-.354-.055-1.615-.152-1.777-.137-.033.003-.29.02-.57.037m-1.108 7.679c-.453.094-.869.43-1.075.869l-.107.229v3.882l.131.266c.308.626 1.016.982 1.654.832.12-.029.988-.438 1.959-.924 1.908-.954 2.027-1.032 2.219-1.451.216-.472.216-.858 0-1.33-.191-.417-.316-.5-2.157-1.421a61.29 61.29 0 0 0-1.834-.897 1.81 1.81 0 0 0-.79-.055m5.609 8.316a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.143-.006c-1.729-.004-3.201.007-3.272.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPlayMinus);
export default ForwardRef;
