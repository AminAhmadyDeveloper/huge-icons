import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStoreSmile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018-.719.764-1.131 1.657-1.257 2.726-.027.229-.037.93-.025 1.881.015 1.237.031 1.571.087 1.816.152.667.392 1.245.719 1.731l.183.271v3.415c0 2.078.016 3.573.042 3.82.236 2.302 1.979 4.045 4.281 4.281.552.057 10.322.057 10.874 0a4.744 4.744 0 0 0 4.281-4.281c.026-.247.042-1.742.042-3.82v-3.414l.226-.347a4.91 4.91 0 0 0 .732-2.055c.054-.437.054-2.923.001-3.349a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.477-.047-12.482-.045-12.963.002m13.501 1.628c.541.188.892.408 1.29.805.398.398.617.75.805 1.29l.13.374.014 1.56c.015 1.717-.003 1.942-.203 2.495-.31.857-1.047 1.558-1.834 1.744-1.529.36-2.961-.888-3.097-2.701-.041-.545-.131-.731-.427-.882a.768.768 0 0 0-.879.149c-.153.164-.193.295-.236.79-.106 1.212-.775 2.175-1.789 2.576-.239.095-.321.106-.768.106s-.529-.011-.768-.106c-1.018-.403-1.682-1.361-1.789-2.582-.044-.491-.098-.657-.268-.816a.763.763 0 0 0-.847-.117c-.296.151-.386.337-.427.882-.074.988-.54 1.852-1.264 2.344-.392.266-.72.38-1.177.406-.706.04-1.265-.186-1.8-.727-.363-.368-.546-.652-.702-1.095-.187-.528-.206-.771-.191-2.466l.014-1.56.132-.38c.072-.209.204-.504.294-.655A3.826 3.826 0 0 1 4.214 3.29c.31-.205.861-.43 1.194-.486.119-.02 3.057-.033 6.712-.03l6.5.006.374.131m-9.948 8.435c.794.978 2.126 1.526 3.356 1.381.993-.116 1.942-.63 2.552-1.381l.307-.376.082-.098.206.277a3.984 3.984 0 0 0 2.675 1.574c.564.075 1.327-.025 1.826-.239l.19-.081v3.008c-.001 2.856-.005 3.026-.079 3.338a3.128 3.128 0 0 1-.926 1.593c-.462.439-.891.676-1.486.819-.319.076-.492.078-5.749.078s-5.43-.002-5.749-.078a3.267 3.267 0 0 1-2.412-2.412c-.074-.312-.078-.482-.079-3.338v-3.008l.19.081c.499.214 1.262.314 1.826.239a3.984 3.984 0 0 0 2.675-1.574l.206-.277.082.098.307.376m-.32 5.937a.755.755 0 0 0-.485.708c-.002.411.164.57 1.048 1.006 1.093.539 1.82.739 2.691.739.599.001 1.022-.071 1.657-.281.505-.167 1.675-.735 1.874-.91.49-.431.225-1.233-.429-1.296-.183-.017-.242.004-.873.321-.987.495-1.563.67-2.206.67-.667 0-1.167-.15-2.166-.649-.723-.361-.875-.403-1.111-.308'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStoreSmile);
export default ForwardRef;
