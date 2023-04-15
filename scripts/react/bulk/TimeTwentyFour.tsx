import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTimeTwentyFour = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.62 15.282a2.773 2.773 0 0 0-2.281 2.058c-.101.394-.108 1.307-.011 1.484.23.419.759.546 1.107.265.255-.206.295-.317.323-.903.031-.62.096-.806.38-1.082a1.246 1.246 0 0 1 1.74.018c.465.465.485 1.257.042 1.713-.086.089-.909.727-1.829 1.418-.919.691-1.692 1.293-1.718 1.337-.258.437-.037 1.004.438 1.124.25.063 4.059.064 4.351.002.666-.143.781-1.077.17-1.38-.132-.066-.277-.078-1.102-.096l-.95-.02.823-.619c.592-.444.88-.688 1.02-.865a2.754 2.754 0 0 0-.956-4.218 2.925 2.925 0 0 0-1.547-.236m4.187.007c-.261.056-.467.281-.529.577-.056.268-.028 1.437.041 1.734.107.461.412 1.013.74 1.341.327.327.874.629 1.341.741.099.024.553.053 1.01.066l.83.023v1.092c0 .647.018 1.177.044 1.299.163.758 1.269.758 1.432 0 .061-.287.061-6.037 0-6.324-.163-.758-1.269-.758-1.432 0-.026.122-.044.653-.044 1.304v1.098h-.738c-.888 0-1.064-.046-1.38-.362-.303-.303-.362-.506-.363-1.25-.001-.334-.02-.689-.042-.787-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeTwentyFour);
export default ForwardRef;
