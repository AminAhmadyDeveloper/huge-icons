import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgProfitCoin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.76 1.285c-.293.038-.432.084-.643.214-.216.133-1.697 1.594-1.785 1.76a.844.844 0 0 0-.063.324c0 .388.27.691.648.728.315.03.452-.043.905-.479l.414-.399.012 1.894.012 1.893.093.149c.357.574 1.223.443 1.363-.207.028-.133.044-.832.044-1.969V3.43l.416.4c.455.439.592.511.907.481a.71.71 0 0 0 .648-.728.864.864 0 0 0-.062-.324c-.094-.179-1.622-1.67-1.829-1.786a1.768 1.768 0 0 0-1.08-.188m-6.1 7.993c-.884.107-1.633.623-2.092 1.442-.4.714-.4 1.845 0 2.56.067.121.212.333.321.47l.198.25-.198.25c-.446.562-.62 1.054-.62 1.75 0 .308.024.505.088.74.246.897.971 1.631 1.883 1.905.297.09.326.091 3.186.105l2.886.015.026.147c.143.806.619 1.713 1.24 2.361.398.415.73.666 1.22.921a4.602 4.602 0 0 0 2.222.541 4.7 4.7 0 0 0 3.702-1.797 4.717 4.717 0 0 0 .54-5 4.602 4.602 0 0 0-2.205-2.202 4.258 4.258 0 0 0-.571-.241c-.069-.014-.126-.038-.126-.055 0-.016.044-.109.098-.205.275-.494.356-1.352.185-1.975-.245-.896-.968-1.628-1.883-1.906l-.3-.092-4.78-.006c-2.629-.004-4.888.006-5.02.022m9.794 1.563c.458.172.786.655.786 1.159s-.328.987-.786 1.159c-.214.08-.292.081-4.954.081s-4.74-.001-4.954-.081a1.34 1.34 0 0 1-.709-.714c-.109-.288-.094-.741.033-.987.149-.289.479-.572.77-.661.055-.016 2.237-.032 4.848-.034 4.678-.003 4.752-.002 4.966.078m-3.173 4.221a4.571 4.571 0 0 0-.896 1.828l-.084.35H8.532c-2.684 0-2.776-.002-2.986-.081a1.34 1.34 0 0 1-.709-.714c-.109-.288-.094-.741.033-.987.149-.289.479-.572.77-.661.055-.016 1.626-.032 3.49-.034l3.391-.003-.24.302m4.477-.218c.62.157 1.085.419 1.53.861.628.623.952 1.399.952 2.279 0 .906-.295 1.63-.934 2.291-.653.675-1.473.994-2.461.957-.401-.016-.522-.038-.873-.159-.518-.179-.791-.342-1.165-.693-.707-.666-1.046-1.432-1.047-2.367 0-.972.333-1.723 1.073-2.419a3.151 3.151 0 0 1 1.387-.75 3.593 3.593 0 0 1 1.538 0'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProfitCoin);
export default ForwardRef;
