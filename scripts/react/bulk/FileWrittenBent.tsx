import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileWrittenBent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.7 6.316a.745.745 0 0 0 .029 1.382c.131.055.64.062 4.28.061 3.931-.001 4.139-.004 4.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.152-.071-.359-.074-4.3-.074s-4.148.003-4.3.074m0 5a.745.745 0 0 0 .029 1.382c.128.053.445.062 2.28.061 1.986-.001 2.142-.006 2.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.304-.074-2.3-.074-1.996 0-2.151.005-2.3.074m4.955 6.749c-.213.075-.469.296-.598.516a3.64 3.64 0 0 0-.223.545c-.3.918-.843 1.672-1.549 2.151-.504.342-1.264.635-1.805.695-.077.009 2.623.014 6 .011l6.14-.006.3-.086c.949-.271 1.658-.72 2.18-1.381.44-.555.78-1.31.78-1.729 0-.342-.245-.632-.624-.737-.108-.03-1.723-.043-5.296-.041-4.398.003-5.164.012-5.305.062'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileWrittenBent);
export default ForwardRef;