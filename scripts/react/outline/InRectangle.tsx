import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.579 2.278C4.45 2.476 2.763 4.011 2.333 6.14c-.068.338-.073.701-.073 5.86 0 5.159.005 5.522.073 5.86.397 1.966 1.841 3.41 3.807 3.807.325.066.602.073 2.86.073s2.535-.007 2.86-.073c1.939-.392 3.393-1.822 3.784-3.723.112-.545.13-1.583.03-1.764-.253-.456-.811-.564-1.168-.227-.212.201-.237.296-.268 1.027-.025.573-.046.731-.133 1-.172.526-.39.874-.821 1.304-.426.426-.766.642-1.304.826l-.32.11H6.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V6.34l.11-.32c.184-.538.4-.878.826-1.304.426-.426.766-.642 1.304-.826l.32-.11h5.32l.32.11c.538.184.878.4 1.304.826.431.43.649.778.821 1.304.087.269.108.427.133 1 .031.731.056.826.268 1.027A.667.667 0 0 0 15 8.24c.283 0 .525-.151.674-.42.1-.181.082-1.219-.03-1.764-.383-1.864-1.794-3.283-3.68-3.702-.364-.081-.503-.086-2.724-.096-1.287-.005-2.484.003-2.661.02M11.9 8.26a2.397 2.397 0 0 1-.16.039c-.088.02-.54.446-1.712 1.614-.876.873-1.63 1.648-1.677 1.723-.06.096-.084.2-.084.364 0 .164.024.268.084.364.047.075.801.85 1.677 1.722 1.516 1.51 1.601 1.587 1.782 1.625.58.12 1.022-.322.9-.901-.037-.177-.102-.253-.963-1.12l-.923-.93h5.066c3.549 0 5.128-.013 5.272-.044.742-.159.762-1.245.027-1.43-.135-.034-1.549-.046-5.275-.046h-5.09l.923-.93c.863-.869.926-.943.964-1.121.074-.354-.078-.709-.359-.839-.139-.064-.384-.113-.452-.09'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInRectangle);
export default ForwardRef;
