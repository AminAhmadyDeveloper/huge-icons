import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGlobeEarth = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.08 2.046A10.09 10.09 0 0 0 4.186 5.76c-.9 1.125-1.661 2.716-1.943 4.06-.046.22-.092.439-.103.486-.02.086-.017.087.91.104.806.015.969.029 1.223.105.548.163 1.098.494 1.456.877.502.537.867 1.379.871 2.008.006 1.114.737 1.92 1.743 1.92 1.046 0 2.117.587 2.691 1.475.615.953.684 2.108.186 3.145-.364.76-.986 1.31-1.86 1.65-.086.033-.04.052.34.141.844.198 1.291.247 2.28.248.576.001 1.054-.019 1.28-.053 1.98-.299 3.504-.952 5.04-2.159.342-.269 1.211-1.141 1.469-1.474l.188-.243-.568-.02c-.645-.023-.924-.092-1.433-.355a3.154 3.154 0 0 1-1.397-1.455c-.197-.411-.277-.73-.32-1.278-.04-.517-.104-.749-.28-1.023-.328-.511-.891-.798-1.571-.8-.498-.001-1.172-.211-1.609-.502-.939-.623-1.46-1.576-1.464-2.677-.002-.541.078-.921.291-1.38a3.13 3.13 0 0 1 1.534-1.543c.39-.185.758-.271 1.4-.33.47-.042.767-.146 1.024-.356.446-.366.624-.749.678-1.457.049-.648.146-.995.406-1.462l.116-.209-.285-.143c-1.621-.817-3.566-1.182-5.399-1.014m6.818 2.207a2.092 2.092 0 0 0-.178.854c0 .954-.597 2.008-1.454 2.564-.513.333-.966.474-1.694.527-.536.039-.828.137-1.135.38-.891.705-.833 2.098.114 2.75.274.188.564.27 1.102.311.528.041.9.136 1.287.331a3.124 3.124 0 0 1 1.451 1.45c.193.386.286.749.326 1.274.056.741.244 1.15.689 1.496.393.307.561.345 1.596.362l.902.014.146-.313c.434-.934.686-1.794.877-2.993.08-.5.068-2.094-.02-2.66-.325-2.104-1.239-3.991-2.652-5.477-.367-.386-1.156-1.082-1.227-1.083-.018 0-.076.096-.13.213M2.013 12.45a10.006 10.006 0 0 0 2.059 5.647c.404.531 1.324 1.449 1.843 1.837l.414.31 1.226-.012 1.225-.012.26-.124c.374-.178.65-.443.821-.791.441-.891.091-1.893-.806-2.313-.212-.099-.337-.126-.725-.158-.738-.059-1.284-.224-1.719-.518-.54-.365-.907-.783-1.171-1.336-.193-.405-.273-.734-.317-1.306-.064-.834-.341-1.284-.992-1.609-.279-.14-.616-.183-1.447-.184l-.696-.001.025.57'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobeEarth);
export default ForwardRef;
