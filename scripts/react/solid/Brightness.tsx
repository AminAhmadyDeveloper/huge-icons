import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBrightness = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.698 2.075a.8.8 0 0 0-.42.477c-.027.09-.039.391-.031.768.015.732.062.866.365 1.055a.694.694 0 0 0 .776 0c.303-.189.35-.323.365-1.055.015-.68-.014-.844-.182-1.044a.739.739 0 0 0-.873-.201M11.2 6.058a5.739 5.739 0 0 0-1.88.582c-1.662.835-2.793 2.311-3.209 4.19-.125.565-.125 1.775 0 2.34.54 2.438 2.282 4.18 4.715 4.717.571.126 1.777.126 2.348 0 2.431-.536 4.177-2.282 4.713-4.713.126-.571.126-1.777 0-2.348-.546-2.475-2.413-4.297-4.846-4.729-.489-.087-1.381-.106-1.841-.039m-7.54.649a.744.744 0 0 0-.419.67c-.001.197.132.478.272.578.264.187 1.099.638 1.226.662.311.058.725-.185.823-.484a.865.865 0 0 0-.085-.67c-.089-.129-.537-.423-1.093-.719-.229-.122-.535-.137-.724-.037m15.93.051c-.431.23-.852.49-.963.595-.423.399-.216 1.106.363 1.245.256.061.384.016 1.029-.361.556-.325.697-.474.73-.771.073-.64-.561-1.027-1.159-.708m-14.896 8.64c-.069.017-.373.172-.676.346-.606.348-.732.479-.767.791a.715.715 0 0 0 .786.817c.189-.013.301-.06.733-.309.281-.162.558-.341.616-.399a.733.733 0 0 0 .021-1.018.748.748 0 0 0-.713-.228m14.165.056c-.17.077-.368.316-.419.508a.775.775 0 0 0 .208.702c.073.068.347.246.609.397.384.22.519.277.688.291a.728.728 0 0 0 .776-.929c-.071-.254-.202-.372-.78-.702-.446-.256-.55-.299-.74-.31a.86.86 0 0 0-.342.043m-7.264 4.181c-.289.183-.333.314-.348 1.045-.008.377.004.678.031.768.091.304.413.55.722.55s.631-.246.722-.55c.027-.09.039-.391.031-.768-.015-.731-.059-.862-.348-1.045A.627.627 0 0 0 12 19.52a.627.627 0 0 0-.405.115'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBrightness);
export default ForwardRef;
