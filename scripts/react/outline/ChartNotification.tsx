import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChartNotification = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.282a4.698 4.698 0 0 0-1.593.477c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.124-.141 1.971-.56 2.791-1.38.679-.679 1.042-1.301 1.263-2.165.154-.603.162-.901.15-5.214-.012-4.13-.013-4.182-.094-4.319a1.003 1.003 0 0 0-.249-.257c-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.092.064-.204.18-.249.257-.081.137-.082.195-.102 4.559l-.02 4.42-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38V5.38L2.912 5c.186-.535.404-.883.804-1.284.401-.4.749-.618 1.284-.804l.38-.132 4.42-.02c4.898-.022 4.539-.001 4.774-.28.292-.347.21-.85-.18-1.108l-.168-.112-4.203-.005c-2.312-.003-4.35.009-4.53.027m13.589 0a3.26 3.26 0 0 0-2.652 2.173c-.309.873-.215 1.816.267 2.685.209.376.787.954 1.163 1.163 1.376.764 2.944.532 4-.59.998-1.062 1.171-2.55.445-3.846-.284-.508-.871-1.044-1.429-1.306-.515-.24-1.246-.354-1.794-.279m1.172 1.651c.363.18.662.485.838.857.12.253.128.298.128.71s-.008.457-.128.71a1.828 1.828 0 0 1-.847.861c-.293.145-.313.149-.745.149s-.452-.004-.745-.149a1.828 1.828 0 0 1-.847-.861c-.12-.253-.128-.298-.128-.71s.008-.457.128-.71c.159-.337.462-.662.768-.825.32-.17.483-.204.915-.189.332.012.402.028.663.157M9.656 6.281a2.75 2.75 0 0 0-2.112 1.496c-.237.484-.27.669-.298 1.663-.024.844-.032.912-.123 1.097-.124.252-.36.488-.597.596-.163.075-.282.088-.969.106-.774.021-.785.022-.952.133-.294.194-.413.501-.324.832a.797.797 0 0 0 .52.516c.264.071 1.585.03 1.899-.059A2.832 2.832 0 0 0 8.661 10.7c.05-.176.075-.48.093-1.14.024-.844.032-.912.123-1.097.123-.251.335-.463.586-.586.162-.08.258-.097.537-.097s.375.017.537.097c.251.123.463.335.586.586l.097.197.022 3.4c.024 3.776.009 3.564.301 4.16a2.803 2.803 0 0 0 1.777 1.445c.351.096 1.01.095 1.36 0a2.825 2.825 0 0 0 1.981-1.965c.05-.176.075-.48.093-1.14.024-.844.032-.912.123-1.097.123-.251.335-.463.586-.586.182-.09.256-.099.977-.118.854-.023.935-.043 1.134-.279.292-.347.21-.851-.18-1.108l-.168-.112-.803.003c-.911.003-1.158.045-1.627.276a2.76 2.76 0 0 0-1.252 1.238c-.237.484-.27.669-.298 1.663-.024.847-.032.912-.124 1.099a1.25 1.25 0 0 1-2.244 0l-.098-.199-.022-3.4c-.024-3.746-.011-3.557-.28-4.123-.497-1.046-1.679-1.69-2.822-1.536'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartNotification);
export default ForwardRef;