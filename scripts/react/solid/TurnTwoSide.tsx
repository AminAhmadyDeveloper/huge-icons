import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTurnTwoSide = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.313 2.062c-.602.094-1.154.313-1.733.689-.209.136-1.069.968-3.373 3.266C4.41 7.808 3.012 9.234 2.87 9.42a4.831 4.831 0 0 0-.738 1.527c-.094.35-.106.466-.106 1.053 0 .586.012.704.105 1.051.125.464.396 1.054.654 1.423.246.351 6.203 6.326 6.635 6.655a4.802 4.802 0 0 0 1.527.739c.35.094.466.106 1.053.106.586 0 .704-.012 1.051-.105a5.096 5.096 0 0 0 1.423-.654c.316-.222 6.203-6.075 6.592-6.555.325-.4.657-1.065.801-1.6.096-.357.107-.47.107-1.06 0-.586-.012-.704-.105-1.051a5.096 5.096 0 0 0-.654-1.423c-.221-.315-6.079-6.206-6.544-6.582a4.297 4.297 0 0 0-3.358-.882M8.986 8.384c.293.167.416.583.273.923-.033.08-.232.32-.442.534l-.382.389.992.021c1.105.024 1.313.057 1.768.287.151.076.393.229.538.34l.263.201.267-.201c.146-.111.39-.264.541-.34.456-.23.663-.263 1.769-.287l.992-.021-.377-.385c-.447-.457-.508-.562-.508-.877 0-.2.019-.262.122-.405a.791.791 0 0 1 .598-.321c.272 0 .439.127 1.264.963.636.645.826.862.909 1.042.213.454.213 1.052.001 1.506-.085.18-.276.399-.93 1.062-.453.459-.882.859-.953.89-.324.139-.741.009-.914-.286-.248-.424-.17-.671.399-1.251l.403-.412-.959.012c-.923.012-.968.016-1.157.109-.251.124-.487.36-.597.597-.083.179-.087.251-.106 1.973l-.02 1.786-.121.172c-.166.237-.346.334-.619.334s-.453-.097-.619-.334l-.121-.172-.02-1.786c-.019-1.722-.023-1.794-.106-1.973a1.356 1.356 0 0 0-.597-.597c-.189-.093-.235-.097-1.155-.109l-.958-.012.39.402c.405.418.506.581.506.822 0 .554-.593.926-1.08.678-.055-.028-.462-.417-.904-.865-.88-.891-.975-1.028-1.055-1.527a1.584 1.584 0 0 1 0-.532c.08-.499.175-.636 1.055-1.527.442-.448.84-.833.884-.857.233-.127.505-.115.766.034'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTurnTwoSide);
export default ForwardRef;
