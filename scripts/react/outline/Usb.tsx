import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUsb = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.58 1.775c-.249.118-.288.161-.947 1.047-.586.786-.662.946-.62 1.303.06.505.496.875 1.032.875h.195v7.954l-2.17-.722c-1.193-.398-2.201-.75-2.24-.783-.063-.055-.07-.157-.07-1.031v-.969l.092-.024c.187-.046.418-.256.526-.477.106-.217.107-.223.094-.997l-.012-.778-.121-.195a1.042 1.042 0 0 0-.317-.317l-.196-.121H5.174l-.196.121a1.042 1.042 0 0 0-.317.317l-.121.195-.012.778c-.013.774-.012.78.094.997.108.221.339.431.526.477l.092.024.001.905c.001 1.044.037 1.363.189 1.679.142.295.526.681.81.813.121.056 1.295.46 2.61.898l2.39.795v2.815l-.15.047c-.571.181-1.179.708-1.522 1.319-.4.714-.4 1.846 0 2.56.526.939 1.385 1.451 2.432 1.451s1.906-.512 2.432-1.451c.4-.714.4-1.846 0-2.56-.343-.611-.951-1.138-1.522-1.319l-.15-.047v-4.815l2.39-.795c1.315-.438 2.489-.842 2.61-.898.284-.132.668-.518.81-.813.154-.32.188-.635.189-1.745l.001-.972.232-.215c.137-.127.28-.31.35-.448.108-.214.118-.267.118-.653 0-.385-.01-.439-.117-.651a1.793 1.793 0 0 0-.723-.711c-.174-.085-.255-.098-.62-.098-.384 0-.44.01-.648.116a1.624 1.624 0 0 0-.696.696c-.106.208-.116.264-.116.648 0 .386.01.439.118.653.07.138.213.321.35.448l.232.215v1.036c0 .936-.007 1.041-.07 1.097-.038.033-1.047.385-2.24.783l-2.17.722V5h.193c.718 0 1.217-.669.986-1.322-.058-.164-1.074-1.566-1.267-1.746-.272-.256-.741-.323-1.092-.157m.874 17.066c.29.109.596.415.705.705.176.471.068.975-.285 1.328a1.182 1.182 0 0 1-.874.366c-.508 0-.986-.327-1.163-.795-.109-.288-.094-.741.033-.987.149-.289.479-.572.77-.661.198-.06.592-.039.814.044'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUsb);
export default ForwardRef;
