import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLinkedln = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.66 1.278c-.884.107-1.633.623-2.092 1.442-.4.714-.4 1.846 0 2.56.526.939 1.385 1.451 2.432 1.451s1.906-.512 2.432-1.451c.4-.714.4-1.846 0-2.56-.575-1.026-1.636-1.578-2.772-1.442m.794 1.563c.458.172.786.655.786 1.159s-.328.987-.786 1.159c-.644.241-1.379-.083-1.617-.714-.109-.288-.094-.741.033-.987.149-.289.479-.572.77-.661.198-.06.592-.039.814.044M1.699 7.816c-.149.065-.367.308-.408.455-.017.06-.031 3.226-.031 7.036v6.926l.12.17a.965.965 0 0 0 .28.253c.155.082.22.084 2.215.096 1.419.008 2.123-.003 2.274-.034a.701.701 0 0 0 .568-.564c.032-.153.041-2.169.034-7.034-.01-6.268-.016-6.83-.077-6.94-.088-.159-.267-.325-.407-.377-.178-.068-4.411-.056-4.568.013m7 0c-.149.065-.367.308-.408.455-.017.06-.031 3.226-.031 7.036v6.926l.12.17a.965.965 0 0 0 .28.253c.155.082.22.084 2.217.096 1.36.007 2.126-.003 2.258-.032a.73.73 0 0 0 .529-.388c.072-.145.077-.328.096-3.932l.02-3.78.087-.162c.112-.21.386-.482.591-.588.246-.126.699-.142.986-.033.268.101.572.383.692.643.083.178.084.232.104 3.967l.02 3.786.12.17a.965.965 0 0 0 .28.253c.155.082.22.084 2.215.096 1.419.008 2.123-.003 2.274-.034a.704.704 0 0 0 .567-.556c.055-.257.059-6.901.005-7.646a6.35 6.35 0 0 0-.702-2.536 6.16 6.16 0 0 0-1.258-1.74 6.441 6.441 0 0 0-1.684-1.237c-1.258-.653-2.76-.888-4.199-.658-.134.021-.15.014-.173-.08-.036-.144-.258-.386-.413-.451-.187-.078-4.414-.076-4.593.002M5.24 15.24v6H2.76v-12h2.48v6m7.017-5.832c.058.367.321.63.663.663.122.012.292-.016.521-.086.748-.226 1.689-.29 2.424-.164a5.518 5.518 0 0 1 2.166.884c.37.262 1.07.975 1.303 1.326.422.638.72 1.376.841 2.086.056.327.065.827.065 3.75v3.373h-2.476l-.014-3.35c-.014-3.346-.014-3.35-.104-3.65a2.853 2.853 0 0 0-1.366-1.672c-.714-.4-1.846-.4-2.56 0a2.853 2.853 0 0 0-1.366 1.672c-.09.3-.09.304-.104 3.65l-.014 3.35H9.76v-12h2.47l.027.168'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLinkedln);
export default ForwardRef;
