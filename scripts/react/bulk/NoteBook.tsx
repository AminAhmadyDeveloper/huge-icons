import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgNoteBook = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.807 5.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.135.029.906.044 2.254.043 1.906-.001 2.059-.006 2.208-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.298-.074-2.24-.071-1.178.002-2.155.02-2.253.042m7.893.029a.745.745 0 0 0 .029 1.382c.131.055.64.062 4.28.061 3.931-.001 4.139-.004 4.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.152-.071-.359-.074-4.3-.074s-4.148.003-4.3.074m0 4a.745.745 0 0 0 .029 1.382c.128.053.445.062 2.28.061 1.986-.001 2.142-.006 2.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.304-.074-2.3-.074-1.996 0-2.151.005-2.3.074m-7.893 1.971a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.135.029.906.044 2.254.043 1.906-.001 2.059-.006 2.208-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.298-.074-2.24-.071-1.178.002-2.155.02-2.253.042m0 6a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.135.029.906.044 2.254.043 1.906-.001 2.059-.006 2.208-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.298-.074-2.24-.071-1.178.002-2.155.02-2.253.042'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNoteBook);
export default ForwardRef;
