import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpringNotesEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.811 1.278a.88.88 0 0 0-.27.139c-.234.178-.276.302-.294.853l-.015.49h-.331c-.952 0-2.005.374-2.814.999-.895.691-1.469 1.61-1.752 2.801-.066.279-.072.7-.085 5.94-.015 5.824-.01 6.055.148 6.674.221.864.584 1.486 1.263 2.165.82.82 1.667 1.239 2.791 1.38.445.056 2.563.053 2.767-.004.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.423-.022-1.423-.021-.371-.125a3.072 3.072 0 0 1-1.293-.808A3.077 3.077 0 0 1 3.912 19l-.132-.38v-5.84c0-6.586-.028-6.003.319-6.72A3.252 3.252 0 0 1 5.59 4.579a3.38 3.38 0 0 1 1.266-.322l.384-.028v.416c0 .515.048.693.236.88a.74.74 0 0 0 1.098-.045c.144-.171.186-.357.186-.83v-.41h6.48v.41c.001.509.049.688.236.875.402.403 1.091.227 1.242-.316.023-.082.042-.336.042-.564v-.416l.384.028a3.38 3.38 0 0 1 1.266.322c.65.317 1.186.85 1.491 1.481.309.64.309.637.335 2.5.021 1.464.032 1.675.093 1.785a.759.759 0 0 0 1.245.135c.184-.219.194-.339.175-2.037-.015-1.31-.03-1.635-.087-1.883-.344-1.493-1.223-2.634-2.542-3.299a4.639 4.639 0 0 0-2.021-.501h-.331l-.014-.49c-.016-.564-.065-.69-.345-.886-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.28.196-.329.322-.345.886l-.014.49H8.768l-.014-.49c-.012-.405-.028-.514-.096-.629a.807.807 0 0 0-.847-.363m11.189 11c-.285.038-.476.101-.82.271-.26.129-.479.338-3.003 2.857-1.778 1.776-2.766 2.791-2.848 2.926-.093.156-.285.772-.768 2.463-.355 1.24-.637 2.262-.628 2.271.009.009 1.031-.273 2.271-.627 1.698-.484 2.307-.674 2.464-.768.278-.167 5.598-5.498 5.744-5.755.155-.272.303-.747.332-1.064.034-.367-.065-.859-.252-1.252-.199-.416-.67-.886-1.092-1.088a2.507 2.507 0 0 0-1.4-.234m.671 1.544c.325.136.567.483.568.818.001.431.125.289-2.708 3.126l-2.621 2.625-.876.251c-.481.137-.887.239-.901.225-.014-.014.088-.419.225-.901l.25-.875 2.606-2.604c1.666-1.664 2.657-2.625 2.746-2.664a1.11 1.11 0 0 1 .711-.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesEdit);
export default ForwardRef;