import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGlobePhysics = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.481 2.064c-.334.09-.701.316-1.045.645-.957.914-1.734 2.773-2.138 5.115l-.07.404-.404.07c-2.342.404-4.201 1.181-5.115 2.138-.619.647-.836 1.341-.647 2.065.372 1.43 2.569 2.65 5.762 3.201l.404.07.07.404c.404 2.342 1.181 4.201 2.138 5.115.509.487 1 .709 1.564.709.59 0 1.076-.229 1.605-.756.952-.949 1.697-2.751 2.097-5.068l.07-.404.404-.07c2.342-.404 4.201-1.181 5.115-2.138 1.336-1.398.769-3.036-1.431-4.133-1.002-.501-2.261-.888-3.684-1.133l-.404-.07-.07-.404a19.88 19.88 0 0 0-.48-2.037c-.632-2.071-1.632-3.441-2.721-3.725a2.266 2.266 0 0 0-1.02.002m.863 1.32c.763.359 1.595 2.13 2.017 4.295.041.209.071.381.067.384a5.431 5.431 0 0 1-.368-.036c-.198-.022-1.125-.04-2.06-.04s-1.862.018-2.06.04a5.431 5.431 0 0 1-.368.036 4.746 4.746 0 0 1 .067-.384c.383-1.967 1.107-3.625 1.819-4.165.323-.245.566-.281.886-.13m1.034 5.899c.385.024.822.055.971.07l.271.027.054.52c.075.71.075 3.49 0 4.2l-.054.52-.271.027a25.778 25.778 0 0 1-4.698 0l-.271-.027-.054-.52c-.075-.71-.075-3.49 0-4.2l.054-.52.3-.031a26.371 26.371 0 0 1 3.698-.066m-5.313.347c-.012.038-.042.43-.069.87-.048.81-.024 2.992.039 3.62.017.165.029.303.027.308-.01.02-.84-.159-1.311-.283-1.576-.416-2.794-1.019-3.237-1.604-.198-.26-.26-.486-.196-.715.229-.817 1.926-1.681 4.262-2.169.541-.113.51-.111.485-.027m8.275.011c.132.025.492.109.8.187 2.332.593 3.767 1.543 3.542 2.346-.204.726-1.57 1.497-3.542 1.998-.308.078-.668.162-.8.187-.132.024-.277.052-.321.061-.08.017-.081.008-.043-.371.05-.505.05-3.593 0-4.098-.038-.379-.037-.388.043-.371.044.009.189.037.321.061m-5.84 6.363c.81.048 2.992.024 3.62-.039a5.45 5.45 0 0 1 .308-.027c.016.008-.146.781-.247 1.182-.591 2.343-1.547 3.788-2.355 3.562-.746-.209-1.516-1.59-2.02-3.622a16.719 16.719 0 0 1-.229-1.053c-.016-.075-.006-.089.051-.072.04.011.432.042.872.069'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobePhysics);
export default ForwardRef;
