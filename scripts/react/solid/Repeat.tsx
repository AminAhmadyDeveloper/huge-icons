import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRepeat = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.672 4.362a.692.692 0 0 0-.384.595c-.023.312.04.421.505.893l.385.39-3.619.001c-2.01.001-3.795.018-4.015.04a4.585 4.585 0 0 0-1.644.478c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.053.422-.053 1.565.001 1.757.142.511.789.709 1.198.365.241-.203.255-.267.282-1.274.024-.899.028-.929.154-1.3.179-.531.397-.88.8-1.284.401-.4.749-.618 1.284-.804l.38-.132 3.9-.011 3.9-.011-.406.411c-.455.461-.534.586-.534.851 0 .55.555.898 1.06.664.101-.047.452-.369.949-.872.683-.691.806-.835.92-1.075.124-.263.131-.3.131-.737s-.007-.474-.131-.737c-.113-.239-.236-.383-.9-1.055-.483-.489-.828-.805-.929-.852a.799.799 0 0 0-.668.006m1.139 6.916a.88.88 0 0 0-.27.139c-.261.198-.275.262-.303 1.283-.024.897-.028.929-.152 1.294a3.048 3.048 0 0 1-.802 1.29c-.403.402-.77.632-1.293.81l-.371.126-3.9.011-3.9.011.406-.411c.455-.461.534-.586.534-.851a.734.734 0 0 0-1.06-.664c-.101.047-.452.369-.949.872-.683.691-.806.835-.92 1.075-.124.263-.131.3-.131.737s.007.474.131.737c.113.239.236.382.9 1.053.423.428.836.811.917.854.271.139.686.068.877-.15.196-.223.253-.582.131-.826-.035-.07-.237-.304-.449-.518l-.385-.39h3.7c2.28 0 3.825-.016 4.026-.041a4.948 4.948 0 0 0 1.967-.688c.47-.289 1.227-1.046 1.516-1.516.548-.89.749-1.741.722-3.057-.011-.596-.023-.695-.095-.817a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRepeat);
export default ForwardRef;
