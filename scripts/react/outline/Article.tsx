import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArticle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.579 1.279c-2.122.192-3.816 1.732-4.246 3.861-.069.339-.073.734-.073 6.86s.004 6.521.073 6.86c.397 1.966 1.841 3.41 3.807 3.807.338.068.701.073 5.86.073 5.159 0 5.522-.005 5.86-.073 1.966-.397 3.41-1.841 3.807-3.807.069-.339.073-.734.073-6.86s-.004-6.521-.073-6.86c-.39-1.929-1.779-3.35-3.703-3.788-.384-.087-.389-.088-5.724-.095-2.937-.004-5.484.006-5.661.022M17.98 2.89c.538.184.878.4 1.304.826.426.426.642.766.826 1.304l.11.32v13.32l-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H6.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V5.34l.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.498-.19.347-.186 6.248-.178l5.56.007.32.11M7.807 6.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.289.062 8.035.062 8.324 0 .758-.163.758-1.269 0-1.432-.265-.057-8.099-.054-8.355.003m0 5a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.289.062 8.035.062 8.324 0a.65.65 0 0 0 .358-.196c.409-.409.205-1.115-.358-1.236-.265-.057-8.099-.054-8.355.003m0 5a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.283.06 4.041.06 4.324 0 .758-.163.758-1.269 0-1.432-.259-.055-4.104-.053-4.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArticle);
export default ForwardRef;
