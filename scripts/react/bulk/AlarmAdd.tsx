import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAlarmAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.02 1.277c-.185.044-1.07.489-1.56.784-.548.331-1.198.797-1.72 1.233-1.019.853-2.399 2.504-2.472 2.956-.077.484.373.931.856.849.237-.04.391-.168.665-.558a11.396 11.396 0 0 1 4.227-3.624c.354-.179.668-.345.697-.369.106-.086.212-.356.213-.545.002-.23-.116-.482-.279-.598-.095-.068-.412-.172-.487-.16a4.503 4.503 0 0 0-.14.032m9.606.007a.71.71 0 0 0-.552.719c.001.189.107.459.213.545.029.024.343.19.697.369 1.725.87 3.074 2.028 4.243 3.639.307.423.45.524.744.524.452 0 .75-.299.749-.753-.001-.221-.078-.367-.469-.895a12.816 12.816 0 0 0-4.711-3.91c-.523-.252-.68-.292-.914-.238M11.7 9.316a.734.734 0 0 0-.398.413c-.051.123-.062.354-.062 1.33v1.181l-1.19.001c-1.071.001-1.206.008-1.35.075a.745.745 0 0 0 .029 1.382c.123.051.354.062 1.33.062h1.181l.001 1.19c.001 1.071.008 1.206.075 1.35a.743.743 0 0 0 1.368 0c.067-.144.074-.279.075-1.35l.001-1.19 1.19-.001c1.071-.001 1.206-.008 1.35-.075a.743.743 0 0 0 0-1.368c-.144-.067-.279-.074-1.35-.075l-1.19-.001-.001-1.19c-.001-1.071-.008-1.206-.075-1.35-.181-.392-.607-.558-.984-.384m-8.003 10.63c-1.478 1.821-1.436 1.761-1.436 2.047 0 .277.113.482.35.639a.77.77 0 0 0 .748.026c.085-.05.595-.641 1.311-1.52a85.02 85.02 0 0 0 1.191-1.478c.01-.022-.135-.202-.323-.4a9.642 9.642 0 0 1-.488-.55c-.081-.105-.157-.19-.171-.19-.014 0-.545.642-1.182 1.426m15.232-1.216a8.94 8.94 0 0 1-.485.55c-.178.187-.315.358-.305.38.01.022.546.687 1.191 1.478.716.879 1.226 1.47 1.311 1.52a.7.7 0 0 0 .363.081c.602 0 .95-.669.604-1.16-.203-.288-2.459-3.059-2.49-3.059-.016 0-.101.094-.189.21'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlarmAdd);
export default ForwardRef;
