import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapAccordion = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.821 1.563c-1.225.169-2.806.875-4.501 2.01-.657.44-1.151.816-1.355 1.03a2.585 2.585 0 0 0-.683 1.483c-.056.44-.056 9.866-.001 10.247.054.373.212.681.5.972.406.412.908.604 1.464.562.409-.032.611-.115 1.241-.514 1.006-.637 1.941-1.122 1.973-1.023l.123.43c.31 1.091.896 2.322 1.572 3.3.911 1.317 1.939 2.174 3.006 2.507.434.135 1.246.135 1.68 0 1.256-.391 2.459-1.513 3.462-3.227l.238-.409c.003-.005.184-.056.403-.112.917-.238 2.154-.828 3.377-1.613.553-.354 1.406-.969 1.611-1.161.428-.399.719-.994.791-1.617.051-.448.049-9.842-.003-10.208a1.83 1.83 0 0 0-1.333-1.484 2.49 2.49 0 0 0-.526-.054c-.431 0-.73.109-1.28.463-1.203.776-2.152 1.237-3.053 1.482-.32.087-.478.106-.907.109-1.018.008-1.532-.228-3.227-1.482-1.462-1.081-2.18-1.46-3.092-1.635-.388-.074-1.14-.103-1.48-.056m1.57 1.623c.569.184 1.077.49 2.169 1.309 1.493 1.12 2.263 1.516 3.29 1.694l.39.068v3.894l-.386-.213a5.822 5.822 0 0 0-2.091-.68 5.912 5.912 0 0 0-3.617.68l-.386.213V3.039l.17.026c.094.015.301.069.461.121M7.24 7.439v4.199l-.135.211c-.444.696-.756 1.597-.807 2.331-.041.585-.026.555-.329.681-.675.282-1.381.668-2.549 1.394-.268.167-.404.171-.568.017l-.092-.086V11.18c0-5.621-.02-5.244.296-5.551.422-.411 2.03-1.45 2.912-1.883.455-.224 1.129-.502 1.222-.505.04-.001.05.865.05 4.198m13.837-3.22c.062.032.124.087.138.123.014.035.025 2.318.025 5.071l-.001 5.007-.094.2a1.3 1.3 0 0 1-.23.325c-.319.295-1.344.991-2.122 1.441-.494.285-1.433.748-1.461.72a2.229 2.229 0 0 1 .085-.336c.55-1.839.372-3.52-.522-4.921l-.135-.211V8.859c0-2.544.006-2.779.065-2.779.036 0 .316-.083.622-.185.831-.277 1.796-.765 2.922-1.479.422-.267.52-.295.708-.197m-8.197 6.567c1.598.327 2.823 1.456 3.249 2.994.11.399.137 1.208.056 1.7-.382 2.326-2.121 5.019-3.619 5.606a1.782 1.782 0 0 1-1.132 0c-1.308-.512-2.802-2.597-3.431-4.788-.196-.681-.254-1.116-.23-1.718.043-1.082.426-1.917 1.247-2.714.967-.941 2.478-1.363 3.86-1.08m-1.474 1.495a2.2 2.2 0 0 0-1.635 2.006c-.045.694.163 1.252.644 1.73.461.458.949.662 1.585.662s1.124-.204 1.585-.662c.481-.478.689-1.036.644-1.73-.092-1.417-1.433-2.37-2.823-2.006m.803 1.441a.793.793 0 0 1 .549.718c0 .172-.114.43-.243.548a.746.746 0 0 1-1.199-.248.738.738 0 0 1 .43-1.002.614.614 0 0 1 .463-.016'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapAccordion);
export default ForwardRef;
