import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPhysics = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.019 2.28c-1.12.115-1.968.666-2.427 1.577-.163.322-.307.914-.337 1.379-.052.837.172 1.951.632 3.132.365.941 1.111 2.339 1.759 3.3.107.159.194.308.194.332 0 .024-.087.173-.194.332-1.563 2.317-2.492 4.818-2.391 6.432.143 2.267 1.884 3.384 4.45 2.854 1.402-.29 2.979-.994 4.708-2.103.305-.195.569-.355.587-.355.018 0 .282.16.587.355 2.034 1.305 3.798 2.026 5.397 2.209 1.05.119 2.078-.141 2.727-.691 1.722-1.46 1.28-4.585-1.196-8.446-.195-.305-.355-.569-.355-.587 0-.018.16-.282.355-.587.487-.759.765-1.249 1.112-1.953 1.297-2.64 1.471-4.751.498-6.06-.337-.454-.975-.872-1.554-1.019-1.756-.445-4.353.361-7.162 2.224l-.412.273-.408-.273c-1.516-1.012-3.141-1.786-4.453-2.121-.705-.18-1.553-.261-2.117-.204M6.18 3.819c1.199.196 2.735.853 4.248 1.819l.288.183-.608.506c-1.425 1.184-2.933 2.707-3.997 4.036l-.287.358-.185-.291c-.863-1.352-1.508-2.785-1.76-3.91-.104-.463-.145-1.212-.084-1.536.122-.648.517-1.06 1.132-1.181.278-.055.865-.047 1.253.016m13.135.054c.435.168.68.422.833.861.108.31.097 1.23-.021 1.765-.241 1.091-.932 2.627-1.778 3.953l-.174.272-.197-.252c-1.05-1.339-3.111-3.4-4.45-4.449l-.251-.197.291-.186c1.493-.952 3.016-1.608 4.232-1.824.448-.079 1.242-.049 1.515.057m-6.699 3.342a28.96 28.96 0 0 1 3.42 3.285c.584.668 1.204 1.44 1.204 1.5 0 .124-1.357 1.71-2.22 2.595-.955.979-2.857 2.645-3.02 2.645-.163 0-2.06-1.662-3.021-2.645-.847-.867-2.219-2.471-2.219-2.594 0-.062.506-.696 1.117-1.401 1.121-1.292 2.33-2.442 3.863-3.674.11-.089.225-.162.256-.163.031-.002.31.202.62.452m-1.036 2.832C10.707 10.214 10 11.087 10 12c0 .92.69 1.768 1.592 1.956C12.816 14.211 14 13.249 14 12c0-.523-.21-1.017-.596-1.404-.491-.49-1.127-.682-1.824-.549M6.163 13.7c1.1 1.359 2.868 3.122 4.2 4.189l.359.287-.331.213c-.812.522-1.985 1.115-2.782 1.407-.912.334-1.604.465-2.282.435-.811-.037-1.252-.326-1.475-.965-.108-.31-.097-1.23.021-1.765.239-1.083.834-2.425 1.679-3.79.146-.236.278-.416.293-.4.015.016.158.191.318.389m12.661.648c.606 1.057 1.109 2.275 1.303 3.153.118.535.129 1.455.021 1.765-.225.646-.665.929-1.495.965-.925.039-1.968-.241-3.333-.896a16.452 16.452 0 0 1-1.711-.946l-.331-.213.359-.287c1.352-1.082 3.17-2.9 4.252-4.252l.287-.359.173.271c.095.149.309.508.475.799'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPhysics);
export default ForwardRef;
