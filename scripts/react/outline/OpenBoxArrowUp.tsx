import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOpenBoxArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.76 1.285c-.293.038-.432.084-.643.214-.216.133-1.697 1.594-1.785 1.76a.844.844 0 0 0-.063.324c0 .388.27.691.648.728.315.03.452-.043.905-.479l.414-.399.012 1.894.012 1.893.093.149c.357.574 1.223.443 1.363-.207.028-.133.044-.832.044-1.969V3.43l.416.4c.455.439.592.511.907.481a.71.71 0 0 0 .648-.728.864.864 0 0 0-.062-.324c-.094-.179-1.622-1.67-1.829-1.786a1.768 1.768 0 0 0-1.08-.188m-5.98 3.01c-.254.083-2.233 1.088-2.305 1.17-.206.235-2.157 3.232-2.194 3.372a.58.58 0 0 0 .001.333c.087.326.177.396 1.099.859l.859.431v3.12c0 1.832.017 3.265.041 3.472.087.759.461 1.438 1.03 1.871.4.304 6.596 3.397 7.009 3.498.395.097.965.097 1.36 0 .409-.1 6.609-3.193 7.004-3.494.146-.111.351-.315.457-.454.213-.282.464-.788.541-1.093.039-.151.055-1.018.067-3.561l.015-3.36.857-.431c.92-.462 1.01-.533 1.097-.858a.58.58 0 0 0 .001-.333c-.037-.14-1.988-3.137-2.194-3.372-.081-.093-2.131-1.122-2.356-1.183-.517-.139-1.025.371-.886.89.073.274.203.404.616.614.209.107.381.203.381.214 0 .011-1.413.727-3.14 1.59L12 9.16 8.86 7.59C7.133 6.727 5.72 6.011 5.72 6c0-.011.172-.107.381-.214.414-.21.543-.34.617-.616.144-.542-.401-1.05-.938-.875m5.1 6.014c0 .016-.254.411-.565.878l-.564.849-3.316-1.658C4.612 9.466 3.12 8.707 3.12 8.691c0-.016.254-.411.565-.878l.564-.849 3.316 1.658c1.823.912 3.315 1.671 3.315 1.687m9.437-2.496c.29.436.537.817.549.848.015.04-.893.513-3.298 1.715l-3.319 1.66-.564-.849a17.584 17.584 0 0 1-.565-.878c0-.044 6.616-3.345 6.645-3.315.014.014.262.383.552.819M7.296 12.488c2.256 1.127 2.517 1.247 2.694 1.247.39 0 .433-.043 1.25-1.266.407-.608.749-1.107.76-1.107.011 0 .353.499.76 1.107.817 1.223.86 1.266 1.25 1.266.177 0 .438-.12 2.694-1.247a209.697 209.697 0 0 1 2.517-1.248c.01 0 .019 1.295.019 2.878 0 2.785-.003 2.886-.08 3.094-.176.47-.041.389-3.615 2.175L12.3 21.008h-.6l-3.245-1.621c-3.574-1.786-3.439-1.705-3.615-2.175-.077-.208-.08-.309-.08-3.094 0-1.583.009-2.878.019-2.878.011 0 1.144.561 2.517 1.248'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxArrowUp);
export default ForwardRef;
