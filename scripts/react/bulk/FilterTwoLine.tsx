import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFilterTwoLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.44 4.058c-.642.138-1.073.373-1.542.841-.389.388-.594.725-.783 1.281-.081.24-.095.357-.095.82 0 .463.014.58.095.82.188.554.395.893.783 1.283.306.308.421.393.742.55.523.257.801.323 1.36.323s.837-.066 1.36-.323c.32-.157.437-.243.743-.55.307-.306.393-.423.55-.743.257-.523.323-.801.323-1.36s-.066-.837-.323-1.36c-.157-.32-.243-.437-.55-.743-.306-.307-.423-.393-.743-.55a4.168 4.168 0 0 0-.62-.249c-.337-.089-.981-.108-1.3-.04m6 10c-.641.138-1.072.372-1.543.841-.308.305-.392.419-.55.741-.259.527-.325.803-.325 1.36s.066.833.325 1.36c.157.32.243.437.55.743.306.307.423.393.743.55.523.257.801.323 1.36.323s.837-.066 1.36-.323c.321-.157.436-.242.742-.55.388-.39.595-.729.783-1.283.081-.24.095-.357.095-.82 0-.463-.014-.58-.095-.82-.188-.554-.395-.893-.783-1.283-.306-.308-.42-.392-.742-.55a4.168 4.168 0 0 0-.62-.249c-.337-.089-.981-.108-1.3-.04'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterTwoLine);
export default ForwardRef;