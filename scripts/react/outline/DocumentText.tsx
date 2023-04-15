import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDocumentText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.579 1.278c-2.124.194-3.816 1.733-4.246 3.862-.069.339-.073.734-.073 6.86s.004 6.521.073 6.86c.397 1.966 1.841 3.41 3.807 3.807.338.068.701.073 5.86.073 5.159 0 5.522-.005 5.86-.073 1.966-.397 3.41-1.841 3.807-3.807.068-.337.073-.689.073-5.5 0-3.892-.012-5.209-.049-5.423a5.1 5.1 0 0 0-.776-1.957c-.303-.462-3.433-3.592-3.895-3.895a5.284 5.284 0 0 0-1.896-.771c-.258-.052-8.01-.084-8.545-.036m8.681 1.597c.367.124.704.294 1 .506.292.21 3.24 3.166 3.409 3.419.185.276.354.632.457.961l.094.299v10.6l-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H7.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V5.34l.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.493-.188.437-.186 4.908-.178l4.22.007.28.095M8.807 6.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.289.062 8.035.062 8.324 0 .758-.163.758-1.269 0-1.432-.265-.057-8.099-.054-8.355.003m0 5a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.289.062 8.035.062 8.324 0a.65.65 0 0 0 .358-.196c.409-.409.205-1.115-.358-1.236-.265-.057-8.099-.054-8.355.003m0 5a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.283.06 4.041.06 4.324 0 .758-.163.758-1.269 0-1.432-.259-.055-4.104-.053-4.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDocumentText);
export default ForwardRef;
