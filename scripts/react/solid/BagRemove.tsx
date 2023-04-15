import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBagRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.555 1.279a4.152 4.152 0 0 0-1.713.651c-.293.198-.809.745-1.014 1.074-.424.683-.548 1.152-.582 2.216l-.026.8-.14.011a4.323 4.323 0 0 0-.951.232 3.993 3.993 0 0 0-2.509 2.93c-.033.169-.296 2.188-.583 4.487-.466 3.723-.52 4.221-.497 4.556a4.006 4.006 0 0 0 3.335 3.705c.5.088 9.75.088 10.25 0a3.993 3.993 0 0 0 3.219-2.972c.194-.766.199-.696-.381-5.323-.288-2.296-.552-4.311-.587-4.478-.323-1.566-1.655-2.853-3.196-3.089a7.002 7.002 0 0 1-.37-.063c-.037-.01-.05-.167-.05-.612 0-.751-.05-1.121-.217-1.614a3.538 3.538 0 0 0-.863-1.391c-.382-.389-.559-.519-1.034-.758-.587-.297-1.436-.443-2.091-.362m1.21 1.613c.65.247 1.089.683 1.343 1.337.098.25.107.328.123 1.021l.018.75H9.751l.018-.75c.016-.688.025-.772.12-1.015.294-.754.889-1.272 1.651-1.437.301-.065.933-.016 1.225.094m-2.614 8.289c.096.04.451.363.999.91l.85.848.83-.825c.456-.455.888-.855.958-.89.254-.127.673-.048.857.162.196.223.253.582.131.826-.035.07-.435.502-.89.958l-.825.83.848.85c.547.548.87.903.91.999a.767.767 0 0 1-.134.805c-.184.21-.603.289-.857.162-.07-.035-.51-.444-.978-.91l-.85-.845-.85.848c-.548.547-.903.87-.999.91a.767.767 0 0 1-.805-.134c-.21-.184-.289-.603-.162-.857.035-.07.444-.51.91-.978l.845-.85-.848-.85c-.547-.548-.87-.903-.91-.999-.249-.604.366-1.219.97-.97'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBagRemove);
export default ForwardRef;
