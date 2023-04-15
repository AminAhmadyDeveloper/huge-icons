import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyBagEuro = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.88 6.024c-.551.064-1.366.253-1.456.337-.02.02.081.164.235.337L9.93 7h4.14l.271-.302c.151-.17.255-.317.235-.335-.059-.054-.416-.159-.839-.247-.337-.071-.572-.085-1.557-.095a29.165 29.165 0 0 0-1.3.003m1.02 4.257c-1.239.194-2.455 1-3.028 2.007l-.201.352-.07.12h-.405c-.473 0-.641.068-.825.334-.092.132-.111.202-.111.406 0 .206.019.274.114.412a.783.783 0 0 0 .659.328h.207v.52h-.225a.736.736 0 0 0-.644.334c-.092.131-.111.202-.111.403.001.3.111.499.357.643.151.089.215.1.577.1h.407l.07.12.201.352c.495.87 1.532 1.637 2.588 1.915.352.093.477.106 1.04.106.563 0 .688-.013 1.04-.106.767-.202 1.755-.798 2.072-1.25.208-.298.183-.643-.066-.926A.687.687 0 0 0 15 16.2c-.224 0-.377.076-.68.34a2.815 2.815 0 0 1-1.04.587c-.244.076-.39.093-.78.093s-.536-.017-.78-.093a2.627 2.627 0 0 1-1.074-.63l-.266-.254.897-.002c1.031-.001 1.14-.028 1.349-.329.095-.138.114-.206.114-.412s-.019-.274-.114-.412c-.219-.316-.281-.328-1.659-.328H9.76v-.52h1.207c1.378 0 1.44-.012 1.659-.328.095-.138.114-.206.114-.412s-.019-.274-.114-.412c-.209-.301-.318-.328-1.349-.329l-.897-.002.28-.268a2.609 2.609 0 0 1 1.96-.718 2.63 2.63 0 0 1 1.7.691c.299.262.452.338.68.338a.687.687 0 0 0 .546-.251c.252-.286.271-.643.052-.946-.327-.451-1.305-1.033-2.058-1.224-.452-.115-1.231-.161-1.64-.098'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagEuro);
export default ForwardRef;
