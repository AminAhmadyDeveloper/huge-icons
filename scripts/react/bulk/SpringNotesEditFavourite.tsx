import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpringNotesEditFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.811 1.278a.883.883 0 0 0-.481.374c-.063.115-.071.297-.082 1.768-.009 1.101.001 1.689.031 1.788.089.304.412.55.721.55s.632-.246.721-.55c.03-.099.04-.687.031-1.788-.011-1.569-.016-1.646-.094-1.779a.807.807 0 0 0-.847-.363m8 0a.883.883 0 0 0-.481.374c-.063.115-.071.297-.082 1.768-.009 1.101.001 1.689.031 1.788.089.304.412.55.721.55s.632-.246.721-.55c.03-.099.04-.687.031-1.788-.011-1.569-.016-1.646-.094-1.779a.807.807 0 0 0-.847-.363m-5.658 8.781a2.02 2.02 0 0 0-1.111.811c-.372.562-.376 1.429-.008 2 .198.307 2.311 2.382 2.531 2.486.42.197.941.182 1.358-.041.326-.174 2.381-2.242 2.538-2.555.377-.749.268-1.558-.29-2.163a2.015 2.015 0 0 0-.963-.553c-.64-.134-1.233.043-1.746.521l-.242.225-.255-.232a2.995 2.995 0 0 0-.443-.333c-.39-.212-.954-.281-1.369-.166m9.947 1.968c-.2.028-.511.14-.68.244-.218.133-5.322 5.228-5.439 5.429-.123.211-.741 2.392-.741 2.615 0 .143.023.196.136.309.113.113.166.136.309.136.223 0 2.404-.618 2.615-.741.088-.051 1.332-1.269 2.765-2.706 3.041-3.051 2.875-2.842 2.875-3.612 0-.413-.008-.458-.128-.711-.201-.425-.636-.802-1.046-.906a2.211 2.211 0 0 0-.666-.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesEditFavourite);
export default ForwardRef;
