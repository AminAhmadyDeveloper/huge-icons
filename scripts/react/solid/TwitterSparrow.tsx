import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTwitterSparrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.74 4.044c-.786.114-1.534.509-2.123 1.122-.506.526-.805 1.056-1.007 1.783-.098.353-.109.456-.109 1.051.001.384.02.723.047.81l.046.15h-.407a11.73 11.73 0 0 1-.958-.059c-2.405-.256-4.391-1.136-6.018-2.667-.409-.385-.563-.445-.843-.33a.473.473 0 0 0-.266.223c-.075.139-.076.175-.029.859.298 4.246 1.643 7.432 3.74 8.851.406.275 1.235.603 1.523.603.047 0-.005.069-.159.21-.972.889-2.285 1.604-3.687 2.007-.556.16-.667.219-.725.387-.093.267.039.375.656.535.983.256 2.16.397 3.319.398 1.112.002 1.917-.108 2.932-.401 1.375-.396 2.852-1.165 3.95-2.056a12.259 12.259 0 0 0 3.454-4.566c.595-1.388 1.004-3.191 1.004-4.428V8.26l.266-.238c.473-.423.918-1.118 1.255-1.962.157-.393.16-.489.022-.608-.137-.118-.223-.116-.652.014-.296.089-.429.106-.851.108-.69.004-.783-.029-1.157-.41-.87-.887-2.034-1.291-3.223-1.12'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTwitterSparrow);
export default ForwardRef;