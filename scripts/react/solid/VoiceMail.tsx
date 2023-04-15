import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVoiceMail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.42 1.281a5.803 5.803 0 0 0-4.218 2.553c-.252.375-.58 1.088-.72 1.563a5.73 5.73 0 0 0 .382 4.171 5.644 5.644 0 0 0 2.67 2.614c.72.344 1.338.5 2.256.57l.371.028-2.201 2.2-2.2 2.2v-.221c0-.526-.137-1.287-.33-1.839a5.703 5.703 0 0 0-2.93-3.283c-.815-.398-1.553-.566-2.5-.568-.935-.001-1.68.167-2.5.568-1.689.825-2.816 2.313-3.165 4.183-.098.524-.098 1.446-.001 1.98.425 2.33 2.208 4.147 4.558 4.646.541.115 1.546.125 2.108.021 1.165-.215 2.261-.794 3.045-1.607 1.173-1.216 9.355-9.399 9.679-9.681a5.906 5.906 0 0 0 1.945-3.394c.102-.546.09-1.559-.023-2.093-.503-2.367-2.33-4.15-4.665-4.55-.433-.074-1.17-.103-1.561-.061m1.305 1.538A4.25 4.25 0 0 1 21.24 7 4.232 4.232 0 0 1 17 11.24a4.238 4.238 0 0 1-4.181-3.515c-.399-2.279 1.149-4.491 3.434-4.906a5.113 5.113 0 0 1 1.472 0m-10 10a4.261 4.261 0 0 1 3.455 3.462c.454 2.579-1.552 4.958-4.18 4.958A4.227 4.227 0 0 1 2.819 17.7a4.249 4.249 0 0 1 2.874-4.739 4.487 4.487 0 0 1 2.032-.142'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVoiceMail);
export default ForwardRef;
