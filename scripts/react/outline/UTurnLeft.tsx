import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUTurnLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.53 1.284a4.847 4.847 0 0 0-1.42.348l-.39.157V1.46L6.079 5.1C2.216 8.962 2.128 9.058 1.778 9.78c-.363.751-.503 1.369-.503 2.22 0 .817.132 1.428.467 2.153.338.732.371.768 3.794 4.198 3.403 3.41 3.527 3.524 4.244 3.871.751.363 1.369.503 2.22.503.851 0 1.469-.14 2.22-.503.717-.347.841-.461 4.244-3.871 3.423-3.43 3.456-3.466 3.794-4.198.335-.725.467-1.336.467-2.153s-.132-1.428-.467-2.153c-.338-.732-.371-.768-3.794-4.198-2.32-2.325-3.295-3.276-3.533-3.446a5.081 5.081 0 0 0-3.401-.919m1.182 1.539a4.3 4.3 0 0 1 1.161.463c.167.097 1.066.968 3.38 3.273 1.735 1.728 3.233 3.252 3.331 3.387.209.29.462.816.556 1.154.103.373.124 1.175.043 1.583-.073.36-.254.821-.469 1.19-.097.167-.968 1.066-3.273 3.38-1.728 1.735-3.252 3.233-3.387 3.331-.29.209-.816.462-1.154.556-.373.103-1.175.124-1.583.043a4.253 4.253 0 0 1-1.19-.469c-.167-.097-1.066-.968-3.38-3.273-1.735-1.728-3.233-3.252-3.331-3.387A4.419 4.419 0 0 1 2.86 12.9a4.48 4.48 0 0 1-.088-.743c-.026-.586.04-.995.237-1.477.269-.658.325-.721 3.718-4.101 2.33-2.321 3.233-3.196 3.4-3.293.345-.201.821-.394 1.133-.46.376-.08 1.069-.081 1.452-.003m-.972 4.443c-1.323.119-2.416.822-3.017 1.941-.378.703-.443 1.022-.471 2.323l-.023 1.03-.41-.396c-.449-.432-.587-.505-.902-.475a.71.71 0 0 0-.648.728c0 .112.028.258.063.324.087.166 1.569 1.627 1.783 1.758.252.156.532.227.885.227s.633-.071.885-.227c.214-.131 1.696-1.592 1.783-1.758a.844.844 0 0 0 .063-.324.71.71 0 0 0-.648-.728c-.315-.03-.452.042-.907.481l-.416.4v-.957c0-1.061.028-1.245.25-1.67.165-.314.619-.768.933-.933.134-.07.349-.155.479-.189a2.885 2.885 0 0 1 1.156 0c.677.177 1.269.716 1.551 1.413l.091.226.02 2.88.02 2.88.093.149c.363.584 1.228.441 1.366-.225.034-.161.042-.978.03-2.934-.014-2.332-.025-2.748-.081-2.985-.317-1.329-1.202-2.326-2.453-2.762-.422-.147-1.066-.233-1.475-.197'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUTurnLeft);
export default ForwardRef;
