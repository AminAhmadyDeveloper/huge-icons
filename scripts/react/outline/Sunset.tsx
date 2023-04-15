import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSunset = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278a.883.883 0 0 0-.481.374c-.063.115-.072.32-.09 2.079l-.02 1.951-.4-.404c-.22-.222-.454-.432-.519-.467-.152-.08-.488-.08-.642 0a.89.89 0 0 0-.376.402.848.848 0 0 0 .013.558c.03.071.431.501.89.957.911.904 1.044.996 1.556 1.084.32.055.673.002 1.006-.15.19-.088.381-.255 1.062-.933.889-.885.934-.949.901-1.292a.72.72 0 0 0-.731-.653c-.275.001-.419.087-.849.507l-.368.361-.012-1.936c-.011-1.868-.014-1.941-.093-2.075a.807.807 0 0 0-.847-.363M19.6 7.49c-.163.035-.26.118-1.015.864-.529.523-.862.885-.909.986a.74.74 0 0 0 .584 1.05c.345.039.449-.034 1.366-.96.75-.759.847-.871.893-1.042.149-.546-.338-1.022-.919-.898m-15.66.065c-.233.105-.409.323-.442.547-.055.367-.007.441.876 1.333.506.511.865.842.966.889.59.275 1.219-.286 1.02-.909-.064-.201-1.577-1.745-1.82-1.859a.677.677 0 0 0-.6-.001m7.48 1.728c-2.013.157-3.9 1.276-5.049 2.997-.45.672-.851 1.653-.991 2.42-.036.198-.073.399-.083.447-.017.088-.018.088-1.27.1l-1.253.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.114.032 2.732.045 9.219.045 6.487 0 9.105-.013 9.219-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.253-.013c-1.252-.012-1.253-.012-1.27-.1-.01-.048-.047-.249-.083-.447-.14-.767-.541-1.748-.991-2.42a6.735 6.735 0 0 0-5.121-3c-.536-.042-.517-.042-1.088.003m1.287 1.519a5.662 5.662 0 0 1 2.327.917 5.375 5.375 0 0 1 2.141 3.391l.023.13H6.802l.023-.13c.119-.682.495-1.582.894-2.144A5.155 5.155 0 0 1 9.7 11.3c.775-.38 1.396-.529 2.247-.536.246-.002.588.015.76.038m-6.896 7.477a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 12.213.063 12.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-6.143-.006c-3.379-.004-6.201.008-6.272.025m3 2.999a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.143-.006c-1.729-.004-3.201.007-3.272.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSunset);
export default ForwardRef;
