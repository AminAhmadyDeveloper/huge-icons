import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTaskCheckPaper = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.579 1.278c-2.126.196-3.816 1.733-4.246 3.862-.069.339-.073.734-.073 6.86s.004 6.521.073 6.86c.397 1.966 1.841 3.41 3.807 3.807.338.068.701.073 5.86.073 5.159 0 5.522-.005 5.86-.073 1.966-.397 3.41-1.841 3.807-3.807.068-.334.073-.656.073-4.5 0-3.1-.012-4.211-.049-4.423a5.106 5.106 0 0 0-.776-1.957c-.307-.469-5.426-5.588-5.895-5.895a5.24 5.24 0 0 0-1.896-.77c-.261-.052-6.03-.084-6.545-.037M13 2.814l.22.046.025 1.34c.021 1.15.036 1.397.109 1.744a4.739 4.739 0 0 0 3.702 3.702c.347.073.594.088 1.744.109l1.34.025.049.24c.038.183.047 1.24.04 4.44l-.009 4.2-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H6.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V5.34l.11-.32c.185-.539.4-.878.826-1.304.5-.499.96-.76 1.584-.897.324-.071 6.364-.076 6.7-.005m6.031 5.42a16.38 16.38 0 0 1-.911-.004c-.712-.015-.808-.026-1.1-.123-.531-.177-.875-.394-1.304-.823-.429-.428-.645-.772-.823-1.304-.102-.302-.108-.371-.123-1.24l-.015-.92 2.203 2.2c2.145 2.141 2.2 2.2 2.073 2.214m-4.24 3.053a.893.893 0 0 0-.306.187c-.087.08-.789.87-1.562 1.755-1.384 1.587-1.522 1.723-1.654 1.622l-.849-.676c-.44-.351-.867-.689-.949-.751-.672-.506-1.524.259-1.098.987.071.121 2 1.654 2.217 1.762.319.158.542.201.912.175a1.726 1.726 0 0 0 1.02-.414c.189-.172 3.03-3.416 3.134-3.58.105-.166.105-.491-.001-.695a.763.763 0 0 0-.864-.372'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTaskCheckPaper);
export default ForwardRef;
