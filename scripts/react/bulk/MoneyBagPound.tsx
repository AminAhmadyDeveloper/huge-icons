import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyBagPound = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.88 6.024c-.551.064-1.366.253-1.456.337-.02.02.081.164.235.337L9.93 7h4.14l.271-.302c.151-.17.255-.317.235-.335-.059-.054-.416-.159-.839-.247-.337-.071-.572-.085-1.557-.095a29.165 29.165 0 0 0-1.3.003m1.16 3.8c-.46.124-.899.44-1.177.849-.306.45-.348.622-.385 1.587-.017.466-.06.983-.095 1.16-.035.176-.063.325-.063.33 0 .005-.344.01-.765.01-.871 0-.973.029-1.184.334-.092.132-.111.202-.111.406 0 .206.019.274.114.412.179.258.367.328.879.328.235 0 .427.01.427.023 0 .036-.237.373-.461.657-.414.524-.519.802-.514 1.36.003.282.027.442.091.62.164.456.482.844.89 1.088.407.244.49.252 2.59.252 1.828 0 1.905-.003 2.067-.081a.863.863 0 0 0 .283-.247c.095-.138.114-.206.114-.412s-.019-.274-.114-.412a.863.863 0 0 0-.283-.247c-.161-.078-.24-.081-1.937-.081-1.954 0-1.973-.002-2.127-.248-.132-.21-.088-.382.192-.744.315-.408.562-.795.764-1.198l.166-.33h.887c1.019 0 1.129-.027 1.338-.328.095-.138.114-.206.114-.412s-.019-.274-.114-.412c-.197-.284-.345-.328-1.104-.328h-.653l.027-.19a13.3 13.3 0 0 0 .103-1.474c.001-.352.013-.421.091-.538a.626.626 0 0 1 1.036-.029c.08.112.096.194.116.613.019.409.037.506.114.631.285.461 1.004.46 1.29-.003.077-.125.095-.217.108-.555.03-.826-.152-1.343-.645-1.834-.443-.441-.886-.622-1.509-.618a2.774 2.774 0 0 0-.56.061'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagPound);
export default ForwardRef;
