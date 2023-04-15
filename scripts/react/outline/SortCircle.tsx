import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSortCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.555 3.279a4.153 4.153 0 0 0-1.713.651c-.307.207-.847.791-1.057 1.142a4.05 4.05 0 0 0-.512 1.52 3.811 3.811 0 0 0 .512 2.337c.262.442.844 1.024 1.286 1.286a3.749 3.749 0 0 0 3.138.33c.569-.195.978-.454 1.43-.906.452-.452.711-.861.906-1.43a3.684 3.684 0 0 0-.865-3.81c-.382-.389-.559-.519-1.034-.758-.587-.297-1.436-.443-2.091-.362M6.34 3.345c-.359.086-.85.342-1.117.582-.347.311-1.863 2.024-1.928 2.179a.734.734 0 0 0 .199.843c.261.229.604.259.877.075.071-.048.458-.455.86-.905.402-.451.793-.882.87-.958l.139-.14v13.958l-.139-.14a44.477 44.477 0 0 1-.87-.958c-.769-.862-.937-1-1.211-.999a.755.755 0 0 0-.707 1.041c.047.122 1.577 1.85 1.894 2.139.97.883 2.616.883 3.586 0 .317-.289 1.847-2.017 1.894-2.139a.755.755 0 0 0-.707-1.041c-.274-.001-.442.137-1.211.999-.402.451-.793.882-.87.958l-.139.14V5.028l.085.076c.047.042.418.449.825.906.406.456.756.83.778.83.021 0 .281-.218.578-.485l.54-.486-.137-.144c-.075-.08-.425-.471-.779-.869a17.285 17.285 0 0 0-.874-.929 3.015 3.015 0 0 0-1.136-.585c-.325-.076-.98-.075-1.3.003m11.425 1.547c.649.246 1.087.682 1.344 1.337.095.242.107.324.107.771s-.012.529-.107.771C18.752 8.68 17.948 9.24 17 9.24s-1.752-.56-2.109-1.469c-.095-.242-.107-.324-.107-.771 0-.444.012-.53.104-.765.298-.756.891-1.272 1.652-1.437.301-.065.933-.016 1.225.094m-1.21 8.387a4.153 4.153 0 0 0-1.713.651c-.307.207-.847.791-1.057 1.142a4.05 4.05 0 0 0-.512 1.52 3.811 3.811 0 0 0 .512 2.337c.262.442.844 1.024 1.286 1.286a3.749 3.749 0 0 0 3.138.33c.569-.195.978-.454 1.43-.906.452-.452.711-.861.906-1.43a3.684 3.684 0 0 0-.865-3.81c-.382-.389-.559-.519-1.034-.758-.587-.297-1.436-.443-2.091-.362m1.21 1.613c.649.246 1.087.682 1.344 1.337.095.242.107.324.107.771s-.012.529-.107.771c-.357.909-1.161 1.469-2.109 1.469s-1.752-.56-2.109-1.469c-.095-.242-.107-.324-.107-.771 0-.444.012-.53.104-.765.298-.756.891-1.272 1.652-1.437.301-.065.933-.016 1.225.094'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortCircle);
export default ForwardRef;
