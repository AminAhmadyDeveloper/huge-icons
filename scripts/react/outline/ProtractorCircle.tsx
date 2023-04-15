import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgProtractorCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.56 1.266c-3.664.17-6.909 2.107-8.799 5.254-1.37 2.282-1.823 5.086-1.257 7.773.766 3.635 3.519 6.702 7.085 7.894 1.111.371 2.181.541 3.411.541 1.986 0 3.838-.504 5.48-1.489 2.894-1.738 4.763-4.601 5.182-7.939.087-.687.087-1.913 0-2.6-.522-4.155-3.346-7.598-7.302-8.902-1.17-.386-2.608-.587-3.8-.532m-.291 1.796c.074.435.329.667.731.667.404 0 .657-.232.732-.672l.046-.267.295.025c1.455.123 3.235.842 4.534 1.83.169.129.32.254.334.276.014.023-.031.106-.101.185-.16.182-.207.307-.206.544.003.401.315.71.717.71.252 0 .36-.04.543-.2.079-.07.162-.115.185-.101.062.039.484.602.72.962.319.486.778 1.456.98 2.068.196.597.367 1.37.407 1.841l.025.298-.238.027c-.44.05-.706.331-.706.745 0 .41.227.655.68.733l.263.045-.025.295c-.123 1.455-.842 3.235-1.83 4.534-.129.169-.254.32-.276.334-.023.014-.106-.031-.185-.101a.698.698 0 0 0-.547-.206.72.72 0 0 0-.713.716c-.001.237.046.362.206.544.07.079.115.162.101.185-.039.062-.602.484-.962.72-.486.319-1.456.778-2.068.98-.595.195-1.369.367-1.838.406l-.295.025-.046-.267c-.077-.449-.336-.681-.758-.676-.39.004-.67.279-.719.706l-.027.238-.298-.025c-1.458-.124-3.237-.842-4.537-1.831a3.448 3.448 0 0 1-.334-.276c-.014-.023.031-.106.101-.185.16-.182.2-.291.2-.541a.706.706 0 0 0-.707-.719.698.698 0 0 0-.547.206c-.079.07-.162.115-.185.101-.062-.039-.484-.602-.72-.962-.319-.486-.778-1.456-.98-2.068-.195-.595-.367-1.369-.406-1.838l-.025-.295.267-.046c.44-.075.672-.328.672-.732 0-.404-.232-.657-.672-.732l-.267-.046.025-.295c.073-.87.422-2.05.883-2.991.291-.594.788-1.382 1.095-1.735l.155-.178.136.115c.281.237.567.282.866.137a.745.745 0 0 0 .393-.812.985.985 0 0 0-.171-.33l-.144-.189.176-.153c.514-.448 1.61-1.084 2.419-1.405.711-.283 1.921-.574 2.419-.583l.182-.003.045.262m.311 2.205a6.987 6.987 0 0 0-2.79.803 6.546 6.546 0 0 0-1.55 1.17 6.591 6.591 0 0 0-1.499 2.25c-.151.375-.174.592-.087.802.073.174.309.375.502.427.107.029 1.973.039 5.93.032 5.692-.011 5.776-.012 5.91-.091a.764.764 0 0 0 .395-.59c.014-.173-.008-.273-.128-.57a6.585 6.585 0 0 0-1.503-2.26 6.661 6.661 0 0 0-4.2-1.959 4.885 4.885 0 0 0-.98-.014m1.303 1.558c1 .171 1.932.632 2.679 1.326.305.284.878.971.878 1.053 0 .021-1.829.036-4.44.036-2.442 0-4.44-.01-4.44-.022 0-.085.401-.584.737-.919.741-.737 1.568-1.196 2.546-1.414.487-.108.521-.112 1.14-.119.326-.004.665.018.9.059m-6.778 6.473a.748.748 0 0 0-.505.7c0 .322.44 1.248.919 1.932.33.472 1.072 1.213 1.561 1.558a6.77 6.77 0 0 0 7.84 0c.486-.343 1.227-1.083 1.56-1.558a7.22 7.22 0 0 0 .783-1.43c.12-.297.142-.397.128-.57a.764.764 0 0 0-.395-.59c-.134-.079-.216-.08-5.936-.089-4.854-.007-5.825.001-5.955.047m10.335 1.494c0 .083-.41.586-.756.928-.72.713-1.509 1.151-2.524 1.403-.334.083-.475.094-1.16.094-.685 0-.826-.011-1.16-.094-1.026-.254-1.809-.693-2.543-1.422-.336-.335-.737-.834-.737-.919 0-.012 1.998-.022 4.44-.022s4.44.014 4.44.032'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProtractorCircle);
export default ForwardRef;