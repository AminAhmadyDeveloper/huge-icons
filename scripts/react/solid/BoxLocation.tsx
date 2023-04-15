import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBoxLocation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.225 2.142a3.538 3.538 0 0 0-1.005.349 3.322 3.322 0 0 0-.95.664 3.906 3.906 0 0 0-1.211 2.24c-.088.502-.088 12.828 0 13.33.071.406.202.801.391 1.175.415.825 1.275 1.586 2.145 1.901.731.265.649.259 3.825.259 2.871 0 2.881 0 3.165-.09a2.019 2.019 0 0 0 1.355-1.438c.05-.189.06-.612.061-2.45 0-2.444.006-2.52.244-2.965.211-.396.567-.713 1.035-.92l.22-.097 2.92-.021c2.886-.021 2.923-.022 3.186-.111a2.04 2.04 0 0 0 1.334-1.436c.088-.338.089-6.635.001-7.137a3.852 3.852 0 0 0-1.036-2.065 4.225 4.225 0 0 0-1.885-1.14l-.32-.09-6.6-.007c-5.456-.005-6.648.003-6.875.049M15.991 5.75c-.011 2.157-.012 2.192-.097 2.35-.237.439-.73.636-1.229.493-.136-.039-.336-.217-1.125-.995-.528-.522-1.023-.981-1.1-1.022-.194-.103-.685-.103-.88-.001-.077.041-.554.485-1.06.988-1.003.996-1.114 1.075-1.5 1.075-.377 0-.712-.202-.894-.538-.085-.158-.086-.193-.097-2.35l-.012-2.19h8.006l-.012 2.19m1.282 9.368c-.928.169-1.618.654-1.949 1.368-.245.528-.3.801-.3 1.494.001.538.012.636.108.951.289.938.988 2.069 1.981 3.203.392.447.526.526.887.526.362 0 .495-.079.887-.527 1.148-1.314 1.85-2.521 2.055-3.533.085-.417.059-1.11-.058-1.552-.253-.959-.854-1.573-1.811-1.851-.233-.068-.428-.088-.953-.099-.363-.007-.744.002-.847.02m1.101 2.017c.189.079.417.291.517.481.121.229.121.659.001.887-.18.34-.521.551-.892.551s-.712-.211-.892-.551c-.12-.228-.12-.658.001-.887.098-.185.325-.4.508-.479.161-.071.591-.072.757-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxLocation);
export default ForwardRef;