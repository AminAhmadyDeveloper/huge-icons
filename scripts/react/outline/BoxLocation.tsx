import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBoxLocation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M5.579 1.279C3.458 1.47 1.763 3.011 1.333 5.14c-.069.339-.073.734-.073 6.86s.004 6.521.073 6.86c.39 1.929 1.782 3.353 3.703 3.788.379.085.442.087 4.637.101 3.089.011 4.314.003 4.474-.03.679-.142.805-1.076.185-1.383-.146-.073-.34-.077-4.572-.096l-4.42-.02-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V5.34l.11-.32c.184-.538.4-.878.826-1.304.428-.428.771-.645 1.304-.824.304-.101.369-.108 1.27-.123l.95-.016v3.413c0 2.18.016 3.508.042 3.674a1.727 1.727 0 0 0 1.174 1.399c.436.149 1.006.09 1.424-.149.099-.056.596-.514 1.103-1.016.677-.669.949-.914 1.018-.914.068 0 .34.244 1.016.914.508.503 1.004.961 1.103 1.017a1.808 1.808 0 0 0 1.866-.068c.398-.269.659-.699.732-1.204.025-.17.041-1.61.041-3.673l.001-3.393.95.016c.901.015.966.022 1.27.123.533.179.876.396 1.304.824.427.426.642.767.826 1.304l.109.32.02 2.94.021 2.94.093.149c.363.585 1.228.441 1.367-.227.033-.163.042-.974.029-2.973-.016-2.632-.02-2.765-.102-3.133-.42-1.878-1.795-3.254-3.683-3.684l-.384-.088-6.34-.007c-3.487-.004-6.484.006-6.661.022m9.661 4.959v3.477l-.089.063a.36.36 0 0 1-.166.062c-.048 0-.435-.353-1.002-.913-.507-.502-.989-.952-1.069-1a1.816 1.816 0 0 0-1.828 0c-.08.048-.562.498-1.069 1-.567.56-.954.913-1.002.913a.36.36 0 0 1-.166-.062l-.089-.063V2.76h6.48v3.478m3.257 7.042c-1.383.117-2.477.866-2.935 2.008-.315.788-.386 1.844-.178 2.648.278 1.072 1.008 2.289 2.193 3.656.496.573.858.768 1.423.768.57 0 .92-.189 1.423-.768 1.183-1.363 1.915-2.584 2.193-3.656.151-.582.152-1.442.004-2.082-.316-1.361-1.335-2.295-2.76-2.528a6.523 6.523 0 0 0-1.363-.046m1.243 1.54c1.028.217 1.539.98 1.488 2.22-.014.358-.041.525-.122.753-.202.574-.623 1.316-1.107 1.956-.375.496-.936 1.131-.999 1.131-.063 0-.624-.635-.999-1.131-.484-.64-.905-1.382-1.107-1.956-.136-.384-.172-1.069-.079-1.506.169-.797.656-1.298 1.425-1.464.348-.076 1.148-.077 1.5-.003m-1.073 1.245c-.364.112-.667.537-.667.935 0 .517.483 1 1 1s1-.483 1-1c0-.402-.312-.827-.69-.939a.941.941 0 0 0-.643.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxLocation);
export default ForwardRef;