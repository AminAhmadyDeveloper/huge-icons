import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolderOpenDownload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.44 2.061c-.63.128-1.07.367-1.543.838-.308.306-.392.419-.55.741-.325.662-.321.633-.337 2.61L3.995 8H20.01l-.021-.75c-.023-.866-.061-1.05-.336-1.61-.157-.32-.243-.437-.55-.743-.306-.307-.423-.393-.743-.55-.659-.323-.616-.318-2.78-.348-2.118-.029-2.114-.028-2.687-.302-.162-.078-.576-.36-.956-.653-.968-.744-1.186-.861-1.85-.988-.404-.077-3.264-.074-3.647.005m5.26 9.255a.734.734 0 0 0-.398.413c-.053.128-.062.446-.062 2.27 0 1.166-.013 2.121-.029 2.121s-.443-.412-.95-.916c-.868-.863-.932-.918-1.116-.956a.753.753 0 0 0-.888.534c-.051.17-.051.219.001.397.054.186.143.286 1.11 1.244.946.936 1.082 1.056 1.352 1.189a2.824 2.824 0 0 0 2.56 0c.269-.133.406-.254 1.313-1.15.558-.551 1.037-1.047 1.065-1.102a.706.706 0 0 0 .043-.544c-.137-.453-.653-.684-1.061-.473-.055.028-.487.44-.96.914-.472.475-.873.863-.89.863-.016 0-.03-.958-.031-2.13-.001-1.985-.006-2.141-.075-2.29-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenDownload);
export default ForwardRef;
