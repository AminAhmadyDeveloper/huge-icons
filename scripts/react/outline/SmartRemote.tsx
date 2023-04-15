import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSmartRemote = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.4 1.283a6.794 6.794 0 0 0-3.724 1.541c-.573.477-.671.639-.626 1.038.05.447.576.742 1.004.563.073-.03.247-.159.389-.285a5.49 5.49 0 0 1 2.517-1.287c.472-.101 1.604-.102 2.068-.002.965.208 1.81.642 2.559 1.316.18.162.349.277.454.309a.746.746 0 0 0 .941-.616c.051-.342-.089-.562-.658-1.036a6.734 6.734 0 0 0-3.792-1.544c-.522-.043-.584-.043-1.132.003m.155 2.996a4.06 4.06 0 0 0-1.688.636c-.335.231-.619.521-.689.705-.214.56.315 1.138.898.981.094-.025.252-.122.367-.224.266-.236.47-.362.792-.489.235-.092.321-.104.765-.104s.53.012.765.104c.308.122.536.259.751.453.397.358.897.339 1.19-.045.156-.205.177-.568.045-.794-.231-.398-1.114-.946-1.803-1.121-.423-.106-1.009-.149-1.393-.102M9.493 7.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.055.437-.055 6.659 0 7.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.429.054 4.667.054 5.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.055-.437.055-6.659 0-7.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.468-.046-4.489-.044-4.963.002m5.501 1.628c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374v7.24l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H9.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 6.912 19l-.132-.38v-7.24l.132-.38c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 8.214 9.29c.309-.205.859-.429 1.194-.486.117-.02 1.337-.034 2.712-.03l2.5.006.374.131m-6.296 2.164c-.33.15-.512.505-.425.83.066.248.15.362.354.481a.685.685 0 0 0 .373.103c.224 0 .505-.14.614-.305.12-.183.166-.439.112-.619-.095-.317-.412-.563-.726-.563a.897.897 0 0 0-.302.073m3 0c-.33.15-.512.505-.425.83.066.248.15.362.354.481a.685.685 0 0 0 .373.103c.224 0 .505-.14.614-.305.12-.183.166-.439.112-.619-.095-.317-.412-.563-.726-.563a.897.897 0 0 0-.302.073m3 0c-.33.15-.512.505-.425.83.066.248.15.362.354.481a.685.685 0 0 0 .373.103c.224 0 .505-.14.614-.305.12-.183.166-.439.112-.619-.095-.317-.412-.563-.726-.563a.897.897 0 0 0-.302.073m-5.887 3.203c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916m3 0c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916m3 0c-.553.135-.743.84-.336 1.247a.743.743 0 0 0 1.247-.331c.146-.544-.359-1.051-.911-.916m-6.216 3.357a.73.73 0 0 0 .103 1.29.689.689 0 0 0 .604 0c.734-.334.504-1.405-.302-1.405a.627.627 0 0 0-.405.115m3 0a.73.73 0 0 0 .103 1.29.689.689 0 0 0 .604 0c.734-.334.504-1.405-.302-1.405a.627.627 0 0 0-.405.115m3 0a.73.73 0 0 0 .103 1.29.689.689 0 0 0 .604 0c.734-.334.504-1.405-.302-1.405a.627.627 0 0 0-.405.115'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartRemote);
export default ForwardRef;
