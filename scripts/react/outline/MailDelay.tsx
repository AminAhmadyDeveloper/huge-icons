import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMailDelay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.82 1.802a4.85 4.85 0 0 0-1.448.459c-1.586.779-2.563 2.284-2.662 4.099l-.01.18-3.3.021c-3.291.021-3.301.021-3.6.112-1.223.372-2.151 1.255-2.551 2.427-.192.563-.189.49-.189 5.2 0 4.05.006 4.467.069 4.748a3.824 3.824 0 0 0 2.751 2.879l.34.093h11.16l.34-.093a3.728 3.728 0 0 0 1.822-1.097c.356-.376.617-.802.786-1.28.234-.661.232-.615.232-5.219v-4.218l.24-.236c1.355-1.335 1.765-3.372 1.042-5.179-.562-1.402-1.847-2.481-3.362-2.822-.401-.09-1.256-.128-1.66-.074m1.44 1.558a3.295 3.295 0 0 1 2.204 1.914c.183.453.232.717.229 1.246a3.116 3.116 0 0 1-.577 1.865c-.564.822-1.632 1.375-2.656 1.375-1.492 0-2.754-.989-3.164-2.48-.1-.362-.099-1.157.001-1.54.399-1.535 1.797-2.569 3.343-2.473.187.012.466.054.62.093m-1.1.963a.779.779 0 0 0-.364.365c-.068.134-.076.243-.076 1.072 0 1.042.02 1.129.306 1.348l.148.112.976.012c.927.011.985.008 1.152-.073.304-.147.452-.492.36-.845-.107-.414-.359-.552-1.012-.553l-.45-.001-.001-.45c-.001-.527-.063-.713-.299-.893-.121-.092-.197-.116-.395-.125a1.086 1.086 0 0 0-.345.031M12.009 8.17c.1.288.408.846.639 1.159a4.738 4.738 0 0 0 2.986 1.849c.637.118 1.739.051 2.219-.135a.717.717 0 0 1 .15-.043c.055 0 .049 7.497-.007 7.768-.161.78-.794 1.444-1.618 1.699-.226.069-.511.073-5.578.073H5.46l-.28-.088a2.336 2.336 0 0 1-1.498-1.411l-.102-.261-.011-4.369c-.012-4.862-.023-4.644.258-5.18.307-.584.959-1.054 1.613-1.163.055-.01 1.545-.02 3.312-.023l3.212-.005.045.13M6.41 11.663a.745.745 0 0 0-.204 1.076c.094.12 2.154 1.679 2.594 1.963a3.527 3.527 0 0 0 1.81.567c.718.034 1.237-.072 1.87-.381.326-.16 2.76-1.954 2.912-2.147a.68.68 0 0 0 .134-.61c-.065-.243-.179-.396-.368-.492-.184-.094-.513-.105-.67-.022-.059.031-.639.455-1.288.942-.649.486-1.288.938-1.42 1.003a2.627 2.627 0 0 1-.98.237c-.251 0-.659-.093-.92-.208-.121-.054-.763-.505-1.426-1.001-.664-.497-1.261-.932-1.328-.967-.192-.099-.515-.081-.716.04'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailDelay);
export default ForwardRef;
