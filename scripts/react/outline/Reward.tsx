import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgReward = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.64 1.281c-.338.04-.806.198-1.104.373-.13.077-.398.277-.596.445-.561.477-.805.649-1.01.717-.105.035-.496.09-.87.123-.771.068-1.041.127-1.44.317A2.814 2.814 0 0 0 5.278 4.58c-.212.431-.269.679-.339 1.48-.033.374-.088.765-.123.87-.068.205-.24.449-.717 1.01-.37.435-.551.735-.683 1.13a2.96 2.96 0 0 0 .238 2.394c.077.13.277.398.445.596.477.561.649.805.717 1.01.035.105.09.496.123.87s.087.788.122.92c.143.556.525 1.159.945 1.494l.233.186.001 2.045c0 1.204.017 2.131.04 2.257.13.683.7 1.257 1.391 1.4.46.096.593.059 2.496-.701.965-.386 1.79-.701 1.833-.701.043 0 .868.315 1.833.701 1.903.76 2.036.797 2.496.701a1.813 1.813 0 0 0 1.391-1.4c.023-.126.04-1.053.04-2.257l.001-2.045.233-.186c.42-.335.801-.937.946-1.494.034-.132.088-.549.121-.928.078-.919.103-.979.699-1.696.745-.895.971-1.416.971-2.236 0-.762-.239-1.363-.813-2.04-.764-.903-.775-.927-.857-1.891-.069-.807-.126-1.055-.339-1.489a2.814 2.814 0 0 0-1.342-1.324c-.4-.191-.669-.249-1.453-.319-.463-.04-.764-.087-.904-.139-.144-.054-.387-.226-.767-.542-.636-.528-.906-.699-1.326-.84-.25-.084-.851-.188-.99-.17l-.3.035m.96 1.608c.121.06.409.273.64.472.53.457.879.692 1.217.819.38.143.54.173 1.292.239.369.033.752.087.851.121.378.131.726.481.862.867.033.092.086.47.119.841.066.755.096.915.239 1.295.127.338.362.687.819 1.217.499.578.581.753.581 1.24s-.082.662-.581 1.24c-.457.53-.692.879-.819 1.217-.143.38-.173.54-.239 1.295-.033.371-.086.749-.119.841a1.484 1.484 0 0 1-.862.867c-.099.034-.482.088-.851.121-.752.066-.912.096-1.292.239-.338.127-.687.362-1.217.819-.578.499-.753.581-1.24.581s-.662-.082-1.24-.581c-.53-.457-.879-.692-1.217-.819-.38-.143-.54-.173-1.295-.239-.371-.033-.749-.086-.841-.119a1.484 1.484 0 0 1-.867-.862c-.034-.099-.088-.482-.121-.851-.066-.752-.096-.912-.239-1.292-.127-.338-.362-.687-.819-1.217-.468-.543-.577-.758-.594-1.18-.021-.485.065-.672.603-1.313.519-.618.68-.858.813-1.21.14-.373.17-.537.236-1.286.033-.369.087-.752.121-.851.131-.378.481-.726.867-.862.092-.033.47-.086.841-.119.752-.066.916-.096 1.289-.236.407-.154.632-.312 1.47-1.034.34-.293.613-.394 1.033-.38.276.009.382.032.56.12M8.658 17.122c.337.051.587.189 1.022.563.73.628 1.02.804 1.58.958.438.12 1.039.121 1.472.002.566-.156.908-.368 1.708-1.061.437-.378.686-.468 1.45-.523l.35-.025v1.789c0 1.608-.007 1.796-.066 1.862a.252.252 0 0 1-.16.073c-.051 0-.857-.305-1.79-.678-1.003-.402-1.803-.698-1.96-.727-.421-.078-.626-.018-2.488.727-.933.373-1.735.678-1.783.678a.281.281 0 0 1-.16-.066c-.069-.062-.073-.173-.073-1.863v-1.796l.33.026c.181.014.437.042.568.061'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReward);
export default ForwardRef;
