import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyBagCoins = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.585 2.061a2.162 2.162 0 0 0-1.522 1.525c-.122.475-.059.965.184 1.421l.124.233h7.258l.124-.233c.242-.453.302-.909.185-1.403a2.121 2.121 0 0 0-1.562-1.547c-.424-.1-.763-.059-1.518.185-.826.267-.89.267-1.718-.001-.736-.238-1.142-.285-1.555-.18m-1.52 4.966c-.921.618-1.715 1.567-2.145 2.564-.192.443-1.532 4.723-1.642 5.242a6.64 6.64 0 0 0-.105.967c-.041 1.039.145 1.891.628 2.86.665 1.338 1.736 2.341 3.079 2.886.83.337 1.586.466 2.607.446l.626-.012-.13-.221c-.317-.538-.463-1.093-.463-1.759 0-.67.145-1.216.468-1.768l.136-.232-.136-.232a3.667 3.667 0 0 1-.413-1.073c-.08-.387-.058-1.238.042-1.594.334-1.197 1.261-2.125 2.484-2.488.217-.065.496-.072 3.069-.083 2.502-.011 2.83-.02 2.83-.073 0-.118-.771-2.52-.916-2.857a6.107 6.107 0 0 0-2.154-2.575l-.398-.265-3.536.001-3.536.001-.395.265m5.515 7.02c-.721.138-1.381.801-1.536 1.545-.139.665.061 1.32.552 1.812.283.282.653.491.957.54.232.037.241.081.022.11-.676.093-1.376.796-1.531 1.538a2.021 2.021 0 0 0 1.548 2.364c.295.061 6.521.061 6.816 0a2.062 2.062 0 0 0 1.548-1.548 1.954 1.954 0 0 0-.552-1.812c-.291-.29-.669-.499-.979-.542-.219-.029-.21-.073.022-.11.672-.108 1.356-.804 1.509-1.536.224-1.075-.504-2.169-1.573-2.365-.302-.055-6.512-.051-6.803.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagCoins);
export default ForwardRef;
