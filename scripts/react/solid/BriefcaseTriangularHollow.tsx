import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBriefcaseTriangularHollow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.44 1.666C8.977 1.927 7.86 2.89 7.429 4.26c-.13.413-.189.905-.189 1.586v.547l-.99.016c-.94.016-1.008.022-1.35.126a4 4 0 0 0-2.217 1.627c-.374.558-.566 1.089-.65 1.798-.086.718-.023.809.874 1.269a19.836 19.836 0 0 0 5.669 1.854c.42.068.804.132.854.141.086.017.09.035.09.413 0 .651.228 1.181.671 1.56.452.386.815.483 1.809.483s1.357-.097 1.809-.483c.443-.379.671-.909.671-1.56 0-.378.004-.396.09-.414.05-.011.342-.057.65-.104a19.584 19.584 0 0 0 5.652-1.785c1.122-.554 1.184-.631 1.095-1.374-.084-.709-.276-1.24-.65-1.798A4 4 0 0 0 19.1 6.535c-.342-.104-.41-.11-1.35-.126l-.99-.016v-.547c0-.3-.02-.708-.044-.906-.187-1.534-1.244-2.758-2.752-3.189-.286-.082-.396-.087-1.864-.095-.858-.004-1.605 0-1.66.01m3.285 1.578c.574.221.99.577 1.247 1.066.226.431.268.651.268 1.418V6.4H8.76v-.672c0-.767.042-.987.268-1.418a2.302 2.302 0 0 1 1.552-1.151c.088-.018.772-.029 1.52-.025 1.352.008 1.361.009 1.625.11m-.653 9.284c.073.073.066 1.261-.009 1.437a.89.89 0 0 1-.523.457c-.249.075-.83.074-1.083-.001-.217-.064-.463-.282-.535-.474-.06-.161-.056-1.357.006-1.419.068-.068 2.076-.068 2.144 0m-10.903.129-.149.137v3.093c0 3.048.001 3.098.087 3.418.325 1.217 1.093 2.16 2.178 2.673.495.234.876.335 1.435.382.611.051 11.949.051 12.56 0 .559-.047.94-.148 1.435-.382 1.085-.513 1.853-1.456 2.178-2.673.086-.32.087-.37.087-3.418v-3.093l-.149-.137c-.2-.183-.377-.182-.851.004-1.052.413-2.705.89-4.016 1.158-.518.106-.756.175-.934.27-.419.223-.753.607-1.149 1.321-.083.149-.286.398-.503.616-.312.313-.419.392-.741.546-.581.279-.816.325-1.637.325-.818 0-1.056-.046-1.626-.32-.447-.214-.946-.663-1.194-1.075-.382-.636-.561-.889-.763-1.083-.346-.333-.588-.438-1.381-.6-1.311-.268-2.964-.745-4.016-1.158-.474-.186-.651-.187-.851-.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseTriangularHollow);
export default ForwardRef;
