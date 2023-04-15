import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStudent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.8 1.296c-.099.025-1.98.721-4.179 1.545-3.609 1.353-4.014 1.513-4.144 1.642a.73.73 0 0 0-.001 1.031c.13.129.362.226 1.956.821l1.808.675v1.011c0 1.619.1 2.231.497 3.041a4.74 4.74 0 0 0 6.916 1.87c.656-.436 1.24-1.114 1.61-1.87.397-.81.497-1.422.497-3.041V7.01l1.23-.461 1.23-.461.02 2.306c.022 2.529.01 2.411.266 2.653a.667.667 0 0 0 .494.193.667.667 0 0 0 .494-.193c.26-.246.245-.057.257-3.247.013-3.18.018-3.101-.224-3.333-.083-.08-1.147-.495-4.209-1.641-2.254-.844-4.152-1.544-4.218-1.556a.863.863 0 0 0-.3.026m3.135 2.599c1.604.602 2.899 1.104 2.879 1.116-.019.012-1.337.51-2.928 1.107l-2.893 1.084-2.916-1.091c-1.604-.6-2.916-1.1-2.916-1.111 0-.021 5.747-2.189 5.819-2.195.022-.002 1.352.488 2.955 1.09M10.36 8.179c1.084.408 1.506.549 1.64.549.134 0 .556-.141 1.64-.549.803-.302 1.492-.558 1.53-.569.065-.018.07.043.07.895-.001 1.015-.048 1.329-.276 1.832a3.445 3.445 0 0 1-1.621 1.625c-1.023.463-2.3.345-3.197-.297a3.512 3.512 0 0 1-1.11-1.328c-.228-.503-.275-.817-.276-1.832 0-.852.005-.913.07-.895.039.011.727.267 1.53.569m-1.82 6.259c-1.023.268-2.353.942-3.2 1.62-1.194.957-1.924 2.2-2.058 3.505-.056.541-.054 2.337.002 2.599.143.666 1.078.781 1.38.17.068-.137.078-.289.099-1.532.022-1.297.029-1.396.114-1.64.491-1.409 1.766-2.497 3.729-3.18.221-.077.412-.14.424-.14.013 0 .448.42.967.934.518.513 1.024.98 1.123 1.036a1.766 1.766 0 0 0 1.906-.106c.129-.096.594-.538 1.034-.983.44-.444.83-.824.867-.844.129-.071 1.229.361 1.915.751 1.158.659 1.925 1.51 2.281 2.532.085.244.092.343.114 1.64.021 1.243.031 1.395.099 1.532.219.442.833.539 1.185.187.233-.233.253-.394.227-1.859-.028-1.547-.091-1.873-.519-2.715-.687-1.348-2.055-2.479-3.869-3.198-1.137-.451-1.582-.487-2.173-.175-.178.093-.453.344-1.16 1.055-.718.723-.95.933-1.027.933-.077 0-.312-.213-1.028-.933-.971-.976-1.124-1.094-1.553-1.206-.304-.079-.531-.074-.879.017'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStudent);
export default ForwardRef;