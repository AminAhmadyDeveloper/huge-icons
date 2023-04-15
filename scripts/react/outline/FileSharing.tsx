import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileSharing = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.656 1.282a2.748 2.748 0 0 0-2.112 1.495c-.298.607-.284.406-.284 4.223 0 3.183.005 3.438.073 3.68a2.823 2.823 0 0 0 1.987 1.987c.238.067.464.073 2.68.073 2.224 0 2.441-.006 2.68-.073a2.841 2.841 0 0 0 1.985-1.967c.065-.219.072-.494.085-3.095.011-2.367.003-2.908-.045-3.16-.152-.8-.399-1.165-1.367-2.018-.976-.861-1.345-1.065-2.074-1.149-.388-.045-3.26-.041-3.608.004M8.411 2.84c.314.117 1.521 1.177 1.689 1.482l.12.218v5.8l-.098.199a1.306 1.306 0 0 1-.665.619c-.213.079-.296.082-2.457.082s-2.244-.003-2.457-.082c-.267-.1-.53-.345-.665-.619l-.098-.199-.012-3.26c-.009-2.35.001-3.305.034-3.42a1.31 1.31 0 0 1 .789-.839c.117-.044.517-.056 1.877-.058 1.636-.003 1.741.001 1.943.077m5.009 2.418a1.597 1.597 0 0 1-.149.039c-.147.032-.39.251-.457.411a.742.742 0 0 0 .139.786c.235.248.207.244 1.867.266 1.508.02 1.522.021 1.717.117.251.123.463.335.586.586.093.189.098.239.117 1.217.022 1.108.028 1.142.266 1.367a.716.716 0 0 0 1.043-.06c.205-.234.22-.344.2-1.448-.014-.785-.032-1.05-.087-1.239a2.799 2.799 0 0 0-1.46-1.762c-.515-.254-.621-.268-2.262-.282-.814-.008-1.498-.007-1.52.002m1.236 6.024a2.748 2.748 0 0 0-2.112 1.495c-.298.607-.284.406-.284 4.223 0 3.183.005 3.438.073 3.68a2.823 2.823 0 0 0 1.987 1.987c.238.067.464.073 2.68.073 2.224 0 2.441-.006 2.68-.073a2.841 2.841 0 0 0 1.985-1.967c.065-.219.072-.494.085-3.1.014-3.143.011-3.196-.229-3.769-.193-.462-.434-.747-1.194-1.416-.967-.849-1.337-1.054-2.063-1.137-.388-.045-3.26-.041-3.608.004m3.753 1.557c.16.06.38.227.898.68.585.511.704.636.8.831l.113.23v5.76l-.098.199a1.306 1.306 0 0 1-.665.619c-.213.079-.296.082-2.457.082s-2.244-.003-2.457-.082c-.267-.1-.53-.345-.665-.619l-.098-.199-.012-3.26c-.009-2.35.001-3.305.034-3.42a1.31 1.31 0 0 1 .789-.839c.117-.044.517-.056 1.877-.058 1.629-.003 1.741.002 1.941.076m-12.71.977c-.163.071-.365.309-.421.495-.073.244-.028 2.084.059 2.389.219.769.754 1.42 1.443 1.757.546.268.602.275 2.26.293 1.638.017 1.706.01 1.947-.201a.716.716 0 0 0 .06-1.043c-.235-.248-.207-.244-1.867-.266-1.448-.019-1.529-.024-1.706-.106a1.356 1.356 0 0 1-.597-.597c-.093-.189-.098-.239-.117-1.217-.022-1.108-.028-1.142-.266-1.367a.756.756 0 0 0-.795-.137'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileSharing);
export default ForwardRef;