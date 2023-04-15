import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCallInShort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.7 2.316c-.101.047-.452.369-.949.872-.683.691-.806.835-.92 1.075-.124.263-.131.3-.131.737 0 .438.006.474.132.74.117.246.231.378.96 1.107.716.715.852.833 1.003.873a.75.75 0 0 0 .924-.925c-.04-.149-.159-.288-.803-.938-.552-.557-.756-.789-.756-.858 0-.069.199-.295.736-.837.404-.408.764-.8.8-.87.127-.254.048-.673-.162-.857a.766.766 0 0 0-.834-.119m3.94.042c-.077.041-.486.425-.909.852-.664.671-.787.814-.9 1.053-.124.263-.131.3-.131.737s.007.474.131.737c.114.24.237.384.92 1.075.497.503.848.825.949.872a.734.734 0 0 0 1.06-.664c0-.265-.079-.39-.533-.85l-.406-.41h1.12c.693 0 1.18-.017 1.278-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.2-.013-1.199-.012.382-.388c.211-.213.412-.445.447-.515.127-.254.048-.673-.162-.857-.23-.203-.599-.253-.854-.117m-14.06.689c-.541.103-1.129.564-1.37 1.073-.191.403-.226.667-.197 1.475.126 3.461 1.332 6.685 3.532 9.445.552.692 1.723 1.863 2.415 2.415 2.395 1.91 5.089 3.051 8.088 3.426.866.108 1.981.147 2.317.082a2.049 2.049 0 0 0 1.591-1.555c.072-.345.058-2.243-.019-2.539a2.03 2.03 0 0 0-.834-1.173c-.112-.075-.752-.357-1.423-.626l-1.22-.49h-1.006l-.342.17a1.999 1.999 0 0 0-.95.93c-.194.373-.104.363-.902.101-2.153-.709-3.974-2.137-5.097-3.997a11.776 11.776 0 0 1-.938-2.026c-.269-.819-.278-.726.091-.918.319-.166.627-.439.823-.727.246-.363.368-.916.298-1.356-.042-.266-.822-2.295-1.049-2.728-.242-.465-.828-.888-1.365-.986-.289-.052-2.162-.05-2.443.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallInShort);
export default ForwardRef;
