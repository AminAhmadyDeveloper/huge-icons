import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAlarmDelete = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.98 1.281c-.213.067-1.268.616-1.693.881-1.46.912-2.875 2.256-3.767 3.578-.181.269-.294.562-.26.675.007.025.024.094.037.154.03.137.236.375.396.458.274.141.699.044.888-.203l.452-.604a11.743 11.743 0 0 1 2.318-2.292 11.244 11.244 0 0 1 1.705-1.027c.749-.378.866-.487.895-.838.036-.426-.242-.766-.655-.803-.108-.009-.25 0-.316.021m9.478.071c-.389.245-.493.71-.243 1.087.083.126.187.195.573.381 1.874.9 3.193 2.034 4.582 3.94.15.206.42.36.628.359.445-.003.816-.443.742-.88-.05-.296-.802-1.293-1.579-2.094a12.519 12.519 0 0 0-3.46-2.542c-.534-.269-.628-.303-.86-.314-.204-.01-.288.004-.383.063m-5.318 2.69A9.08 9.08 0 0 0 5.631 6.65a8.76 8.76 0 0 0-1.712 2.41c-1.488 3.036-1.151 6.582.887 9.347l.197.267-.865 1.542c-.591 1.053-.872 1.593-.887 1.703-.057.423.326.843.765.84a.883.883 0 0 0 .529-.244c.046-.052.395-.653.776-1.335.381-.682.713-1.27.737-1.307.041-.06.076-.043.324.156C7.936 21.28 9.989 22 12 22s4.064-.72 5.619-1.971l.279-.225.066.108c.037.059.368.648.737 1.308.368.66.708 1.243.754 1.295a.871.871 0 0 0 .545.243c.427 0 .805-.424.749-.842-.014-.101-.319-.686-.886-1.698l-.866-1.544.197-.267C20.376 16.804 21 14.93 21 12.986c0-2.355-.96-4.66-2.642-6.341a9.008 9.008 0 0 0-5.078-2.544c-.558-.08-1.649-.109-2.14-.059m-.989 6.139c.096.04.451.363.999.91l.85.848.83-.825c.456-.455.888-.855.958-.89.158-.079.499-.083.644-.008.123.065.297.242.363.371.066.128.055.477-.019.625-.035.07-.435.501-.89.958l-.825.83.828.83c.532.533.85.883.89.979a.755.755 0 0 1-.243.896c-.186.143-.535.178-.74.075-.075-.037-.51-.439-.966-.894l-.83-.825-.85.848c-.548.547-.903.87-.999.91a.767.767 0 0 1-.805-.134c-.21-.184-.289-.603-.162-.857.035-.07.444-.51.91-.978l.845-.85-.845-.85c-.466-.467-.875-.908-.91-.978-.127-.254-.048-.674.162-.857a.768.768 0 0 1 .805-.134'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlarmDelete);
export default ForwardRef;