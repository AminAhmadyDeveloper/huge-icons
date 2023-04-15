import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgReloadCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.32 1.281c-4.279.244-8.068 3.128-9.477 7.216a10.886 10.886 0 0 0-.279 6.053 10.76 10.76 0 0 0 7.886 7.886 10.96 10.96 0 0 0 5.1 0 10.76 10.76 0 0 0 7.886-7.886 10.96 10.96 0 0 0 0-5.1 10.758 10.758 0 0 0-8.694-8.052c-.408-.067-1.668-.169-1.862-.151l-.56.034m1.826 1.541a9.086 9.086 0 0 1 2.914.874c2.817 1.383 4.708 4.026 5.118 7.158.123.932.066 2.172-.144 3.144-.289 1.345-1.031 2.857-1.913 3.902a9.31 9.31 0 0 1-3.061 2.404 8.94 8.94 0 0 1-4.06.936 8.93 8.93 0 0 1-4.06-.936c-2.817-1.383-4.708-4.026-5.118-7.158-.123-.932-.066-2.172.144-3.144.211-.982.737-2.227 1.302-3.082a9.335 9.335 0 0 1 6.552-4.097c.56-.077 1.749-.077 2.326-.001m.465 2.456a.736.736 0 0 0-.434.303c-.151.198-.17.449-.058.759.049.132.097.269.108.304.017.058-.014.059-.354.007-.57-.088-1.647-.047-2.193.082-1.137.27-2.075.784-2.861 1.567a5.236 5.236 0 0 0-1.486 2.773c-.145.728-.059 1.986.17 2.467.211.445.825.541 1.181.185.237-.237.266-.401.162-.936-.259-1.336.106-2.515 1.075-3.469 1.317-1.296 3.366-1.601 5.103-.758.178.087.381.169.451.183.289.058.667-.159.791-.454.11-.263.074-.415-.369-1.528-.233-.585-.457-1.118-.498-1.185-.14-.226-.513-.368-.788-.3m3.049 4.798a.745.745 0 0 0-.545.526c-.04.133-.033.232.044.635.22 1.139-.038 2.199-.749 3.085-.766.953-1.886 1.513-3.175 1.587-.754.043-1.479-.107-2.273-.472-.393-.18-.471-.203-.616-.179-.395.063-.666.364-.666.742 0 .263.842 2.36 1.02 2.537a.726.726 0 0 0 .885.106c.342-.208.449-.563.296-.983-.149-.409-.172-.375.206-.313.41.067 1.349.074 1.753.012 2.221-.337 4.008-1.784 4.656-3.77.13-.399.216-.854.248-1.32.047-.661-.121-1.666-.322-1.93a.796.796 0 0 0-.762-.263'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReloadCircle);
export default ForwardRef;
