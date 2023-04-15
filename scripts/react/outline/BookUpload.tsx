import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.555 1.281a4.123 4.123 0 0 0-1.713.649c-.307.207-.847.791-1.057 1.142a4.286 4.286 0 0 0-.503 1.421c-.059.435-.059 14.579 0 15.014.059.433.27 1.031.503 1.422.262.442.844 1.024 1.286 1.286.391.233.989.444 1.422.503.432.058 10.582.058 11.014 0a4.292 4.292 0 0 0 1.422-.503c.442-.262 1.024-.844 1.286-1.286.233-.391.444-.989.503-1.422.059-.435.059-14.579 0-15.014a4.286 4.286 0 0 0-.503-1.421c-.21-.351-.75-.935-1.057-1.142a4.67 4.67 0 0 0-1.23-.562l-.388-.107-5.36-.006c-2.948-.003-5.479.008-5.625.026m11.216 1.608c.657.263 1.077.684 1.343 1.346l.106.265.011 5.369.011 5.369-6.391.011-6.391.012-.388.107c-.366.1-.922.348-1.158.516a.51.51 0 0 1-.131.076c-.014 0-.02-2.578-.014-5.73L4.78 4.5l.106-.265c.306-.761.907-1.283 1.654-1.435.088-.017 2.59-.029 5.56-.026l5.4.006.271.109m-6.084 2.396c-.445.074-.609.19-1.48 1.051-.448.442-.837.849-.865.904a.703.703 0 0 0-.041.549.75.75 0 0 0 1.006.47c.08-.033.323-.234.539-.447l.394-.387v4.286l.111.212a.725.725 0 0 0 1.298 0l.111-.212V7.43l.433.418c.355.343.467.427.625.472a.731.731 0 0 0 .933-.637c.033-.346-.01-.407-.922-1.31-.926-.917-1.06-1.011-1.552-1.091-.288-.046-.294-.046-.59.003m7.545 12.845-.014 1.37-.108.271c-.286.721-.847 1.225-1.568 1.408-.36.092-10.724.092-11.084 0-.722-.184-1.285-.69-1.567-1.408-.095-.242-.107-.324-.107-.771 0-.444.012-.53.104-.765.298-.756.907-1.285 1.652-1.434.088-.018 2.983-.034 6.433-.037l6.273-.004-.014 1.37'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookUpload);
export default ForwardRef;
