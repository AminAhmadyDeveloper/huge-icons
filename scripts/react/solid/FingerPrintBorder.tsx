import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFingerPrintBorder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.281a4.719 4.719 0 0 0-1.593.478c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.054.428-.053 2.563.001 2.757.142.511.789.709 1.198.365.259-.218.258-.213.282-1.774l.021-1.42.131-.38c.183-.533.401-.882.802-1.284A3.052 3.052 0 0 1 5 2.914l.38-.131 1.42-.021c1.561-.024 1.556-.023 1.774-.282.292-.347.21-.85-.179-1.108l-.169-.112-1.203-.006c-.662-.003-1.35.009-1.53.027m10.318-.002c-.519.123-.732.788-.385 1.201.218.259.213.258 1.774.282l1.42.021.374.129c.538.186.891.405 1.29.804s.618.752.804 1.29l.129.374.021 1.42c.024 1.561.023 1.556.282 1.774.409.344 1.056.146 1.198-.365.054-.194.055-2.329.001-2.757a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.464-.046-2.457-.047-2.645-.002m-3.256 5a4.153 4.153 0 0 0-1.713.651c-.307.207-.847.791-1.057 1.142a4.286 4.286 0 0 0-.503 1.421c-.024.177-.042 1.019-.042 1.94 0 1.792-.025 2.069-.239 2.737-.24.744-.608 1.342-1.225 1.987-.459.48-.536.604-.536.863 0 .55.554.897 1.06.665.196-.09.837-.746 1.175-1.202.604-.814.99-1.707 1.189-2.753.054-.282.072-.728.093-2.29l.027-1.94.106-.271c.258-.654.687-1.082 1.345-1.341.235-.092.321-.104.765-.104s.53.012.765.104c.657.259 1.084.684 1.346 1.341l.108.271.013 1.758c.014 1.948-.007 2.215-.23 2.909-.241.747-.608 1.344-1.226 1.99-.459.48-.536.604-.536.863 0 .55.553.897 1.06.665.183-.084.859-.769 1.161-1.176a6.689 6.689 0 0 0 1.204-2.779c.086-.45.13-3.642.057-4.201a4.23 4.23 0 0 0-.507-1.457c-.21-.351-.75-.935-1.057-1.142-.75-.506-1.752-.756-2.603-.651m.256 2.999a.883.883 0 0 0-.481.374c-.063.115-.071.295-.082 1.757-.008 1.128.003 1.682.034 1.799.152.564.912.724 1.292.272.18-.214.19-.334.178-2.071-.011-1.558-.016-1.635-.094-1.768a.807.807 0 0 0-.847-.363m-11 6a.883.883 0 0 0-.481.374c-.061.112-.072.275-.083 1.308-.017 1.582.047 2.073.371 2.869.237.581.511.978 1.043 1.51.82.82 1.667 1.239 2.791 1.38.445.056 2.563.053 2.767-.004.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.423-.022-1.423-.021-.371-.125a3.072 3.072 0 0 1-1.293-.808A3.052 3.052 0 0 1 2.914 19l-.131-.38-.021-1.42c-.021-1.338-.027-1.428-.104-1.559a.807.807 0 0 0-.847-.363m20 0a.883.883 0 0 0-.481.374c-.062.113-.073.298-.092 1.548l-.021 1.42-.129.374a3.07 3.07 0 0 1-.804 1.29 3.062 3.062 0 0 1-1.293.808l-.371.125-1.423.021-1.423.022-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.204.057 2.322.06 2.767.004 1.124-.141 1.971-.56 2.791-1.38.532-.532.806-.929 1.043-1.51.324-.796.388-1.287.371-2.869-.012-1.104-.018-1.189-.095-1.319a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFingerPrintBorder);
export default ForwardRef;
