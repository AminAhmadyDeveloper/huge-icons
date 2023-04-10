import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGlobePhysics = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.84 5.063c-.36.905-.652 2.006-.85 3.241A33.116 33.116 0 0 1 12 8.17c1.043 0 2.053.047 3.01.134-.198-1.235-.49-2.336-.85-3.241-.346-.871-.738-1.524-1.135-1.947-.395-.422-.742-.563-1.025-.563-.283 0-.63.141-1.025.563-.397.423-.79 1.076-1.135 1.947Zm-1.41-.57c-.45 1.13-.793 2.492-1.004 3.998-1.038.154-1.986.36-2.808.609-.956.289-1.785.648-2.392 1.082a4.007 4.007 0 0 0-.226.174C2.67 6.181 5.851 2.854 9.93 2l-.06.063c-.572.61-1.053 1.453-1.44 2.43ZM14.07 2l.06.063c.572.61 1.053 1.453 1.44 2.43.45 1.13.793 2.492 1.004 3.998 1.038.154 1.986.36 2.808.609.956.289 1.785.648 2.392 1.082.077.055.152.113.226.174-.67-4.175-3.851-7.502-7.93-8.356ZM22 13.643c-.074.061-.15.12-.226.174-.607.434-1.436.794-2.392 1.083-.822.249-1.77.455-2.808.609-.21 1.505-.555 2.867-1.003 3.997-.388.978-.869 1.82-1.442 2.43a4.02 4.02 0 0 1-.06.064c4.08-.854 7.261-4.18 7.931-8.357ZM9.931 22l-.06-.063c-.573-.61-1.054-1.453-1.442-2.43-.448-1.131-.792-2.493-1.003-3.998a19.931 19.931 0 0 1-2.808-.609c-.956-.29-1.785-.649-2.392-1.083A3.964 3.964 0 0 1 2 13.643C2.67 17.82 5.851 21.146 9.931 22Zm-4.876-8.567c.644.195 1.386.364 2.203.5a26.337 26.337 0 0 1 0-3.865c-.817.135-1.559.304-2.203.499-.877.265-1.532.566-1.95.865-.438.313-.476.516-.476.568 0 .052.038.255.476.568.418.299 1.073.6 1.95.865ZM8.708 12c0 .736.031 1.452.091 2.138 1 .103 2.076.16 3.201.16s2.202-.057 3.2-.16a24.621 24.621 0 0 0 0-4.276 31.274 31.274 0 0 0-3.2-.16c-1.125 0-2.202.057-3.2.16-.06.686-.092 1.401-.092 2.138Zm1.132 6.937c-.36-.906-.652-2.006-.85-3.241.957.087 1.967.134 3.01.134 1.043 0 2.053-.047 3.01-.134-.198 1.235-.49 2.335-.85 3.241-.346.87-.738 1.524-1.135 1.947-.395.421-.742.563-1.025.563-.283 0-.63-.142-1.025-.563-.397-.423-.79-1.076-1.135-1.947Zm9.105-5.504c-.645.195-1.386.364-2.203.5a26.32 26.32 0 0 0 0-3.865c.817.135 1.558.304 2.203.499.877.265 1.532.566 1.95.865.438.313.476.516.476.568 0 .052-.038.255-.476.568-.418.299-1.073.6-1.95.865Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobePhysics);
export default ForwardRef;
