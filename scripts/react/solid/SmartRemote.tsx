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
            d='M11.4 1.283a6.794 6.794 0 0 0-3.724 1.541c-.573.477-.671.639-.626 1.038.05.447.576.742 1.004.563.073-.03.247-.159.389-.285a5.49 5.49 0 0 1 2.517-1.287c.472-.101 1.604-.102 2.068-.002a5.468 5.468 0 0 1 2.548 1.308c.291.264.467.361.657.361.399 0 .767-.355.767-.74 0-.309-.141-.507-.68-.958a6.75 6.75 0 0 0-3.788-1.542c-.522-.043-.584-.043-1.132.003m.155 2.996a4.06 4.06 0 0 0-1.688.636c-.335.231-.619.521-.689.705-.212.555.314 1.138.889.983a1.27 1.27 0 0 0 .375-.228c.29-.248.475-.362.793-.487.235-.092.321-.104.765-.104s.53.012.765.104c.318.126.546.265.774.475.292.27.589.342.891.215a.643.643 0 0 0 .379-.355.777.777 0 0 0-.065-.761c-.32-.42-1.144-.916-1.796-1.081-.423-.106-1.009-.149-1.393-.102M9.433 8.042a4.331 4.331 0 0 0-1.702.67c-.775.527-1.335 1.322-1.602 2.277l-.109.391v7.24l.111.397c.347 1.242 1.226 2.235 2.389 2.698.165.066.487.158.715.204.4.081.502.084 2.9.072l2.485-.013.391-.107a4.002 4.002 0 0 0 2.908-3.103c.082-.404.083-.491.072-3.9l-.012-3.488-.106-.385c-.261-.948-.828-1.756-1.604-2.283a5.022 5.022 0 0 0-1.311-.598c-.33-.087-.397-.089-2.818-.098-1.364-.005-2.582.007-2.707.026m-.162 3.02c.303.127.46.36.46.681 0 .573-.598.93-1.091.652-.424-.238-.504-.856-.154-1.183a.734.734 0 0 1 .785-.15m3 0c.303.127.46.36.46.681 0 .573-.598.93-1.091.652-.424-.238-.504-.856-.154-1.183a.734.734 0 0 1 .785-.15m3 0c.303.127.46.36.46.681 0 .573-.598.93-1.091.652-.424-.238-.504-.856-.154-1.183a.734.734 0 0 1 .785-.15m-5.866 3.319c.223.144.328.345.328.626 0 .196-.019.264-.117.402-.163.233-.345.33-.616.33s-.453-.097-.616-.33c-.098-.138-.117-.206-.117-.402a.729.729 0 0 1 1.138-.626m3 0c.223.144.328.345.328.626 0 .196-.019.264-.117.402-.163.233-.345.33-.616.33s-.453-.097-.616-.33c-.098-.138-.117-.206-.117-.402a.729.729 0 0 1 1.138-.626m3 0c.223.144.328.345.328.626 0 .196-.019.264-.117.402-.163.233-.345.33-.616.33s-.453-.097-.616-.33c-.098-.138-.117-.206-.117-.402a.729.729 0 0 1 1.138-.626m-6.028 3.235c.41.24.481.85.136 1.172a.734.734 0 0 1-.784.15c-.303-.127-.46-.36-.46-.681a.734.734 0 0 1 1.108-.641m3 0c.41.24.481.85.136 1.172a.734.734 0 0 1-.784.15c-.303-.127-.46-.36-.46-.681a.734.734 0 0 1 1.108-.641m3 0c.41.24.481.85.136 1.172a.734.734 0 0 1-.784.15c-.303-.127-.46-.36-.46-.681a.734.734 0 0 1 1.108-.641'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartRemote);
export default ForwardRef;