import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPress = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.42 1.283c-2.592.202-4.898 1.98-5.779 4.457-.279.785-.471 2.068-.365 2.448a.742.742 0 0 0 1.248.337c.168-.168.235-.366.236-.692.001-.897.394-2.072.959-2.867a5.343 5.343 0 0 1 3.621-2.17c.435-.056 1.322-.025 1.72.062 1.571.342 2.881 1.341 3.596 2.742.366.716.52 1.283.579 2.131.037.535.084.674.285.843a.75.75 0 0 0 1.204-.386c.063-.226-.011-1.104-.141-1.668a6.734 6.734 0 0 0-6.075-5.24c-.536-.042-.517-.042-1.088.003m.16 3.764c-.721.138-1.381.801-1.536 1.545-.03.144-.044 1.199-.044 3.296v3.083l-.792-.775c-.851-.834-1.089-1.009-1.525-1.123-1.567-.409-2.962 1.023-2.468 2.535.053.161.709 1.64 1.46 3.287 1.47 3.228 1.575 3.425 2.091 3.935.484.478.993.788 1.615.982.584.183.79.194 3.439.179 2.445-.014 2.485-.015 2.814-.106.747-.207 1.373-.562 1.869-1.061.317-.319.497-.572.843-1.184.301-.533.421-.815.539-1.262.086-.322.095-.44.093-1.178-.002-.756-.01-.85-.106-1.205-.324-1.192-1.074-2.081-2.209-2.619-.667-.316-.856-.345-2.353-.365L14 12.993V9.898c0-2.104-.014-3.162-.044-3.306-.159-.762-.818-1.411-1.573-1.549a2.106 2.106 0 0 0-.803.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPress);
export default ForwardRef;
