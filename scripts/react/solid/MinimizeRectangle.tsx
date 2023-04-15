import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMinimizeRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M20.66 2.346c-.066.034-2.32 2.26-5.009 4.947l-4.888 4.884-.012-2.198c-.011-2.133-.013-2.203-.093-2.338a1.003 1.003 0 0 0-.249-.257c-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.092.064-.204.18-.249.257-.08.136-.082.197-.093 3.271-.008 2.218.002 3.181.034 3.299a.816.816 0 0 0 .498.504c.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.193-.02-2.193-.02 4.863-4.86c2.752-2.751 4.896-4.924 4.94-5.008.14-.27.07-.685-.149-.877-.222-.195-.596-.253-.834-.129M6.493 4.282a4.691 4.691 0 0 0-1.593.477c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.442-.056 8.654 0 9.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.442.056 8.654.056 9.096 0 1.124-.141 1.971-.56 2.791-1.38.679-.679 1.042-1.301 1.263-2.165.148-.581.163-.943.15-3.714-.012-2.618-.014-2.683-.094-2.819a1.003 1.003 0 0 0-.249-.257c-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.092.064-.204.18-.249.257-.08.136-.082.207-.102 3.059l-.02 2.92-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H6.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 3.912 18l-.132-.38V8.38L3.912 8c.186-.535.404-.883.804-1.284.401-.4.749-.618 1.284-.804l.38-.132 2.92-.02c3.229-.022 3.044-.006 3.274-.28.292-.347.21-.85-.179-1.108l-.169-.112-2.703-.005c-1.487-.003-2.85.009-3.03.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMinimizeRectangle);
export default ForwardRef;
