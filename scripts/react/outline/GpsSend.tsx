import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGpsSend = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.815 1.277a.8.8 0 0 0-.462.354c-.087.139-.094.197-.107.897l-.013.748-.187.025c-2.041.276-3.664 1.036-5.12 2.399-1.103 1.031-2.042 2.67-2.42 4.223-.079.325-.226 1.162-.226 1.288 0 .012-.338.028-.75.035-.707.013-.759.019-.903.109a.714.714 0 0 0-.36.648c0 .2.019.267.116.405.208.294.33.33 1.165.346l.728.014.025.186c.205 1.512.642 2.712 1.409 3.866a8.351 8.351 0 0 0 2.51 2.498c1.125.742 2.337 1.179 3.826 1.381l.187.025.013.748c.013.7.02.758.107.897.357.574 1.223.443 1.363-.207.024-.113.044-.483.044-.822v-.615l.19-.026c.459-.062.919-.149 1.263-.238 1.698-.441 3.339-1.47 4.436-2.781 1.154-1.378 1.797-2.861 2.05-4.73l.026-.19h.615c.782 0 .98-.04 1.18-.24.398-.398.21-1.097-.331-1.234-.102-.025-.472-.046-.825-.046h-.64l-.02-.13a66.07 66.07 0 0 1-.065-.45c-.236-1.674-1.082-3.391-2.324-4.719-.594-.635-1.6-1.367-2.455-1.785-.931-.455-1.765-.7-2.91-.855l-.19-.026-.001-.627c-.001-.698-.038-.927-.179-1.112-.159-.209-.502-.325-.765-.259m1.565 3.601a7.246 7.246 0 0 1 3.738 2.004 7.257 7.257 0 0 1 2.01 3.765c.08.393.092.573.092 1.353s-.012.96-.092 1.353a7.257 7.257 0 0 1-2.01 3.765 7.257 7.257 0 0 1-3.765 2.01c-.393.08-.573.092-1.353.092-.784 0-.959-.012-1.36-.093a7.251 7.251 0 0 1-3.758-2.009 7.251 7.251 0 0 1-2.009-3.758c-.081-.401-.093-.576-.093-1.36 0-.784.012-.959.093-1.36a7.251 7.251 0 0 1 2.009-3.758c1.171-1.171 2.545-1.841 4.298-2.097.066-.01.489-.013.94-.007.657.009.907.028 1.26.1m.259 3.897c-.415.16-4.615 1.973-4.815 2.078-.885.466-.871 1.759.024 2.195.117.057.513.199.88.315l.668.211.265.783c.145.431.313.854.373.942.522.763 1.681.696 2.113-.123.068-.13.572-1.28 1.119-2.556l.994-2.32-.001-.36c0-.295-.017-.391-.09-.529a1.264 1.264 0 0 0-.536-.551c-.174-.095-.269-.117-.533-.127-.201-.008-.372.008-.461.042m-.079 1.676c0 .006-.331.781-.734 1.723l-.735 1.713-.174-.512c-.287-.843-.461-1.016-1.301-1.296l-.506-.169 1.695-.731c1.6-.69 1.755-.755 1.755-.728'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGpsSend);
export default ForwardRef;
