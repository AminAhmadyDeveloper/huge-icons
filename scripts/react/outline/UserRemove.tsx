import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUserRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.579 2.28C7.75 2.44 6.2 3.632 5.54 5.384c-.358.951-.358 2.281 0 3.232a4.799 4.799 0 0 0 2.836 2.841c.964.363 2.284.363 3.248 0a4.799 4.799 0 0 0 2.836-2.841c.359-.955.358-2.28-.003-3.24-.762-2.028-2.741-3.284-4.878-3.096m1.401 1.614c.528.174.874.392 1.304.822.428.427.644.769.824 1.304.101.296.109.369.109.98s-.008.684-.109.98c-.18.535-.396.877-.824 1.304-.427.428-.769.644-1.304.824-.296.101-.369.109-.98.109s-.684-.008-.98-.109c-.535-.18-.877-.396-1.304-.824-.428-.427-.644-.769-.824-1.304-.101-.296-.109-.369-.109-.98s.008-.684.109-.98c.18-.535.396-.877.824-1.304.717-.717 1.35-.966 2.384-.941.472.012.61.031.88.119m5.835 4.384a.792.792 0 0 0-.459.348c-.103.167-.123.53-.038.694.029.055.405.455.836.89l.783.79-.783.79c-.431.435-.807.835-.836.89a.926.926 0 0 0-.051.324c0 .495.416.813.922.707.177-.038.25-.1 1.001-.844l.81-.803.81.803c.749.742.824.806 1 .843.579.122 1.022-.321.9-.9-.037-.176-.101-.251-.843-1l-.803-.81.803-.81c.742-.749.806-.824.843-1 .089-.423-.133-.806-.524-.904-.171-.043-.254-.039-.486.023-.044.012-.444.383-.89.824l-.81.803-.81-.803c-.778-.771-.818-.805-1.022-.848a2.428 2.428 0 0 0-.22-.041 2.152 2.152 0 0 1-.133.034M9.24 13.281c-3.152.156-5.809 1.335-6.654 2.954-.235.45-.313.765-.313 1.265 0 .5.078.815.313 1.265.733 1.404 2.861 2.5 5.544 2.857a15.12 15.12 0 0 0 4.68-.16c2.219-.451 3.965-1.473 4.604-2.697.235-.45.313-.765.313-1.265 0-.5-.078-.815-.313-1.265-.733-1.404-2.862-2.501-5.544-2.857-.382-.05-1.886-.149-2.01-.131a34.11 34.11 0 0 1-.62.034m2.466 1.574c1.901.289 3.34.879 4.075 1.673.611.66.611 1.284 0 1.944-.752.812-2.262 1.418-4.221 1.694-.516.073-2.604.073-3.12 0-1.959-.276-3.469-.882-4.221-1.694-.644-.696-.615-1.335.093-2.031.842-.827 2.501-1.441 4.428-1.638.541-.056 2.48-.021 2.966.052'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserRemove);
export default ForwardRef;
