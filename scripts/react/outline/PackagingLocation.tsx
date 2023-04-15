import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackagingLocation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.497 1.281A4.784 4.784 0 0 0 4.71 2.52c-.393.364-2.545 3.036-2.79 3.465a5.242 5.242 0 0 0-.519 1.237c-.154.614-.167 1.141-.151 6.358.015 4.969.015 5.002.102 5.384.437 1.923 1.859 3.313 3.788 3.703.339.069.734.073 6.86.073s6.521-.004 6.86-.073c1.929-.39 3.351-1.78 3.788-3.703.087-.382.087-.415.102-5.384.015-5.062.002-5.705-.131-6.277a4.928 4.928 0 0 0-.653-1.503c-.317-.482-2.362-2.989-2.676-3.28a4.72 4.72 0 0 0-2.857-1.241c-.529-.044-8.401-.042-8.936.002m9.577 1.63c.47.164.854.387 1.172.68.209.193 2.154 2.566 2.154 2.628 0 .012-3.78.021-8.4.021-4.62 0-8.4-.009-8.4-.021 0-.062 1.945-2.435 2.154-2.628a3.295 3.295 0 0 1 1.506-.772c.194-.043 1.129-.052 4.84-.046l4.6.007.374.131M21.22 7.94c.014.11.019 2.567.012 5.46l-.012 5.26-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H5.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32-.012-5.26c-.007-2.893-.002-5.35.012-5.46l.023-.2h18.394l.023.2m-9.723 1.34c-1.383.117-2.477.866-2.935 2.008-.315.788-.386 1.844-.178 2.648.278 1.072 1.008 2.289 2.193 3.656.496.573.858.768 1.423.768.57 0 .92-.189 1.423-.768 1.183-1.363 1.915-2.584 2.193-3.656.151-.582.152-1.442.004-2.082-.316-1.361-1.335-2.295-2.76-2.528a6.523 6.523 0 0 0-1.363-.046m1.243 1.54c1.028.217 1.539.98 1.488 2.22-.014.358-.041.525-.122.753-.202.574-.623 1.316-1.107 1.956-.375.496-.936 1.131-.999 1.131-.063 0-.624-.635-.999-1.131-.484-.64-.905-1.382-1.107-1.956-.136-.384-.172-1.069-.079-1.506.169-.797.656-1.298 1.425-1.464.348-.076 1.148-.077 1.5-.003m-1.073 1.245c-.364.112-.667.537-.667.935 0 .517.483 1 1 1s1-.483 1-1c0-.402-.312-.827-.69-.939a.941.941 0 0 0-.643.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingLocation);
export default ForwardRef;