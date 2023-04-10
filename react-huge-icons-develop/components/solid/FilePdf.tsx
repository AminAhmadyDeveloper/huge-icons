import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilePdf = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3 18V6a4 4 0 0 1 4-4h4.343a4 4 0 0 1 .907.104V6A4.75 4.75 0 0 0 17 10.75h3.896c.069.295.104.6.104.907V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4ZM13.75 6V2.805c.148.112.289.234.422.367l5.656 5.656c.133.133.255.274.367.422H17A3.25 3.25 0 0 1 13.75 6ZM6.437 18v-4.295h1.391c.527 0 .871.022 1.031.065.246.064.453.205.619.421.166.215.249.494.249.835 0 .264-.048.486-.144.665-.096.18-.218.322-.366.425a1.255 1.255 0 0 1-.448.202 4.952 4.952 0 0 1-.9.062h-.565V18h-.867Zm.867-3.568v1.218h.474c.342 0 .57-.022.686-.067a.571.571 0 0 0 .37-.545.555.555 0 0 0-.139-.387.6.6 0 0 0-.348-.19 4.172 4.172 0 0 0-.624-.03h-.42Zm3.131-.727h1.585c.358 0 .63.027.818.082.252.074.468.206.647.396.18.19.317.421.41.697.094.273.141.611.141 1.014 0 .353-.044.658-.132.914-.107.312-.26.565-.46.758-.15.147-.353.261-.609.343-.191.06-.447.091-.768.091h-1.632v-4.295Zm.868.727v2.844h.647c.242 0 .417-.013.525-.04a.79.79 0 0 0 .348-.18c.094-.083.17-.221.229-.412.058-.194.088-.456.088-.788 0-.333-.03-.587-.088-.765a.984.984 0 0 0-.246-.416.825.825 0 0 0-.402-.202c-.12-.028-.358-.041-.712-.041h-.39Zm3.477-.727V18h.868v-1.825h1.792v-.727h-1.793v-1.016h2.078v-.727H14.78Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilePdf);
export default ForwardRef;
