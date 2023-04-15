import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAccessibility = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.601 2.064c-.557.15-.969.607-1.078 1.196-.118.64.253 1.323.877 1.613.187.088.276.103.6.103.324 0 .413-.015.6-.103.624-.29.995-.973.877-1.613-.111-.598-.523-1.049-1.096-1.198a1.354 1.354 0 0 0-.78.002m-6.79 3.215a.752.752 0 0 0-.535.905c.072.268.252.443.55.535.827.255 3.345.741 4.534.875l.62.07.01 2.127.011 2.127-.384 3.051c-.426 3.382-.421 3.276-.165 3.546a.753.753 0 0 0 .84.191c.172-.072.375-.31.424-.495.021-.083.203-1.474.403-3.091.2-1.617.372-2.981.383-3.03.019-.087.034-.09.498-.09.464 0 .479.003.498.09.011.049.183 1.413.383 3.03.2 1.617.382 3.008.403 3.091.049.185.252.423.424.495.287.12.616.045.84-.191.256-.27.261-.165-.165-3.543L14 11.924V7.656l.61-.071c1.549-.183 4.534-.781 4.816-.965a.958.958 0 0 0 .203-.227.577.577 0 0 0 .108-.389c-.001-.266-.083-.439-.276-.586-.27-.206-.363-.203-1.454.039-2.499.554-3.86.739-5.692.772-2.165.039-3.764-.165-6.775-.867-.562-.131-.539-.128-.729-.083m2.853 14.784a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212.984.984 0 0 0 0-1.402.996.996 0 0 0-1.037-.236m4 0a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937m4 0a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAccessibility);
export default ForwardRef;
