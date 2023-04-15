import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFacebookSquare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.579 1.279C3.458 1.47 1.763 3.011 1.333 5.14c-.069.339-.073.734-.073 6.86s.004 6.521.073 6.86c.397 1.966 1.843 3.412 3.807 3.807.325.065.61.072 2.92.073 1.408 0 2.609-.014 2.669-.031.152-.042.392-.262.457-.417.044-.106.054-.806.054-3.788 0-2.488-.014-3.695-.043-3.771-.052-.14-.218-.319-.377-.407-.104-.057-.31-.068-1.59-.078l-1.47-.013v-1.47l1.47-.013c1.293-.011 1.485-.02 1.594-.08.179-.098.369-.33.394-.481.011-.072.028-.716.036-1.431.016-1.476.032-1.58.324-2.18a3.377 3.377 0 0 1 2.042-1.723c.196-.057.457-.073 1.43-.086l1.19-.017V8.24l-.85.001c-.468 0-.976.019-1.13.041-.693.1-1.268.604-1.44 1.263-.074.284-.088 2.535-.017 2.722.052.14.218.319.377.407.104.057.31.068 1.59.078l1.47.013v1.47l-1.47.013c-1.28.01-1.486.021-1.59.078-.159.088-.325.267-.377.407-.029.076-.043 1.283-.043 3.771 0 2.982.01 3.682.054 3.788.065.155.305.375.457.417.06.017 1.261.031 2.669.031 2.31-.001 2.595-.008 2.92-.073 1.964-.395 3.41-1.841 3.807-3.807.069-.339.073-.734.073-6.86s-.004-6.521-.073-6.86c-.39-1.929-1.778-3.349-3.703-3.788l-.384-.088-6.34-.007c-3.487-.004-6.484.006-6.661.022M18.98 2.89c.538.184.878.4 1.304.826.426.426.642.766.826 1.304l.11.32v13.32l-.11.32c-.184.538-.4.878-.826 1.304-.426.427-.767.642-1.304.826l-.32.109-2.21.012-2.21.013V15.76h1.358c1.564 0 1.699-.017 1.922-.24.225-.225.24-.351.24-2.02 0-1.666-.015-1.795-.238-2.018-.228-.228-.337-.242-1.9-.242H14.24v-.651c0-.525.012-.668.062-.74.062-.089.065-.089 1.358-.089.796 0 1.376-.017 1.502-.044a.708.708 0 0 0 .554-.554c.06-.279.06-3.045 0-3.324a.732.732 0 0 0-.527-.552c-.232-.058-2.422-.062-3.065-.005-1.94.172-3.511 1.403-4.124 3.231-.183.547-.24 1.001-.24 1.916v.808l-1.493.012-1.493.012-.162.107a1.023 1.023 0 0 0-.257.26l-.095.153v3.453l.12.17a.965.965 0 0 0 .28.253c.152.08.23.085 1.63.096l1.47.013v5.479l-2.21-.013-2.21-.012-.32-.109c-.537-.184-.878-.399-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V5.34l.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.501-.191.28-.186 7.248-.178l6.56.007.32.11'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFacebookSquare);
export default ForwardRef;