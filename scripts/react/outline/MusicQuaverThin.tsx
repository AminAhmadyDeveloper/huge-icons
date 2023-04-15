import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMusicQuaverThin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.214 1.484c-.845.141-1.531.797-1.86 1.776l-.094.28-.02 4.773-.02 4.773-.1-.107c-.174-.187-.689-.602-.98-.789a5.94 5.94 0 0 0-2.16-.851 6.994 6.994 0 0 0-1.96 0A5.785 5.785 0 0 0 2.334 16c-.095.515-.095 1.485 0 2A5.815 5.815 0 0 0 7 22.666c.514.093 1.486.093 2 0a5.79 5.79 0 0 0 4.456-3.866c.298-.891.276-.304.301-8.14l.023-7.04.088-.164c.183-.342.506-.524.857-.483.278.033.863.239 1.389.49 1.662.791 2.923 2.143 3.631 3.892.6 1.48.65 3.364.132 4.931a7.798 7.798 0 0 1-1.296 2.334c-.288.348-.355.5-.331.748.04.414.389.699.814.663.266-.022.356-.084.687-.474.86-1.014 1.547-2.457 1.826-3.837.532-2.623-.188-5.364-1.95-7.425a8.759 8.759 0 0 0-3.892-2.599c-.748-.246-1.059-.289-1.521-.212M8.725 12.819A4.25 4.25 0 0 1 12.24 17 4.232 4.232 0 0 1 8 21.24a4.238 4.238 0 0 1-4.181-3.515c-.399-2.279 1.149-4.491 3.434-4.906a5.113 5.113 0 0 1 1.472 0'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicQuaverThin);
export default ForwardRef;
