import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFocus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.054.43-.053 2.124.002 2.321.06.216.301.443.533.502a.747.747 0 0 0 .848-.383c.068-.135.078-.283.098-1.332l.022-1.18.13-.38c.182-.533.4-.881.802-1.284.403-.402.751-.62 1.284-.802l.38-.13 1.18-.022c1.306-.024 1.383-.039 1.579-.298.324-.429.119-1.049-.39-1.178-.208-.052-1.728-.055-2.256-.003m10.732.006a.815.815 0 0 0-.304.19c-.347.347-.276.904.15 1.168.145.09.183.094 1.349.115l1.2.023.374.128c.538.184.89.404 1.29.803.399.4.619.752.803 1.29l.128.374.023 1.2c.021 1.166.025 1.204.115 1.349a.741.741 0 0 0 .476.348c.359.097.773-.139.882-.503.061-.204.067-1.853.008-2.322a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.515-.05-2.031-.045-2.231.008M11.34 7.046a4.934 4.934 0 0 0-1.52.471C8.374 8.226 7.39 9.51 7.075 11.1c-.073.368-.073 1.432 0 1.8a5.076 5.076 0 0 0 4.025 4.025c.368.073 1.432.073 1.8 0 1.823-.361 3.291-1.652 3.853-3.386.187-.578.227-.859.225-1.579-.002-.579-.015-.713-.109-1.091-.191-.765-.495-1.396-.943-1.957a5.04 5.04 0 0 0-4.586-1.866m-9.48 8.673a.774.774 0 0 0-.49.329l-.11.166-.013.963c-.018 1.344.057 1.882.371 2.652.237.581.511.978 1.043 1.51.532.532.929.806 1.51 1.043.745.304 1.241.378 2.523.378 1.035 0 1.169-.023 1.389-.243a.741.741 0 0 0-.191-1.181c-.135-.068-.283-.078-1.332-.098l-1.18-.022-.371-.124a3.069 3.069 0 0 1-1.293-.808A3.038 3.038 0 0 1 2.914 19l-.13-.38-.024-1.18c-.013-.649-.039-1.216-.058-1.26-.146-.335-.514-.537-.842-.461m20 0a.774.774 0 0 0-.49.329l-.11.166-.022 1.203-.023 1.203-.128.374a3.06 3.06 0 0 1-.803 1.29 3.075 3.075 0 0 1-1.293.808l-.371.124-1.18.022c-1.049.02-1.197.03-1.332.098a.747.747 0 0 0-.383.848c.059.232.286.473.502.533.197.055 1.891.056 2.321.002 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.057-.455.053-2.14-.005-2.312-.127-.374-.499-.599-.854-.517'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFocus);
export default ForwardRef;
