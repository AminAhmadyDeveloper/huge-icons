import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMiniStoreCrooked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.716 1.282c-1.676.182-3.201 1.296-4.028 2.942-.186.371-1.113 2.943-1.245 3.456-.109.424-.152 1.162-.088 1.53.107.612.432 1.35.834 1.891.237.32.726.804.938.929l.113.067v3.063c0 3.127.013 3.444.16 4.02.219.858.584 1.482 1.261 2.159.82.82 1.667 1.239 2.791 1.38.442.056 8.654.056 9.096 0 1.124-.141 1.971-.56 2.791-1.38.677-.677 1.042-1.301 1.261-2.159.147-.576.16-.893.16-4.02v-3.063l.113-.067c.212-.125.701-.609.938-.929.402-.54.727-1.279.833-1.89.064-.367.025-1.071-.084-1.511-.127-.508-1.051-3.085-1.247-3.475a5.33 5.33 0 0 0-1.072-1.468c-.769-.772-1.48-1.167-2.561-1.422-.278-.065-.679-.071-5.48-.078-2.849-.004-5.317.007-5.484.025m10.716 1.541c.687.142 1.277.486 1.831 1.068.397.417.652.818.87 1.369.244.619.894 2.473.964 2.756.166.66.115 1.093-.206 1.744-.336.681-.999 1.243-1.673 1.419-.477.124-1.032.067-1.518-.157-.899-.415-1.534-1.412-1.604-2.522-.027-.413-.067-.572-.182-.719-.183-.233-.594-.329-.886-.207-.174.073-.379.314-.404.475-.012.072-.039.302-.062.511-.054.504-.131.785-.323 1.178-.45.92-1.317 1.502-2.239 1.502-.923 0-1.784-.577-2.239-1.5-.189-.384-.268-.672-.323-1.18-.064-.596-.074-.633-.209-.787a.694.694 0 0 0-.569-.253c-.448 0-.739.326-.741.829 0 .42-.138.955-.361 1.405a2.25 2.25 0 0 1-.538.748c-.508.507-1.044.738-1.714.738-.633 0-1.126-.221-1.651-.741-.312-.309-.391-.417-.549-.74-.342-.706-.379-1.178-.151-1.926.214-.702.923-2.639 1.085-2.962.425-.849 1.167-1.556 1.983-1.887.551-.224.367-.217 5.949-.221 4.553-.003 5.187.004 5.46.06m-8.423 8.481c.366.457.96.904 1.513 1.139a3.88 3.88 0 0 0 2.967-.004c.602-.256 1.33-.844 1.671-1.349.077-.115.152-.208.167-.209.014-.001.095.094.179.209.353.487.834.908 1.377 1.205.564.31 1.093.435 1.829.433l.531-.002-.011 2.947-.012 2.947-.131.374a3.104 3.104 0 0 1-.805 1.29c-.605.604-1.279.909-2.09.946l-.425.02-.02-1.395c-.017-1.258-.027-1.428-.105-1.731-.436-1.706-1.905-2.858-3.644-2.858-1.753 0-3.201 1.141-3.648 2.874-.073.284-.084.475-.101 1.715l-.02 1.395-.425-.02c-.811-.037-1.486-.342-2.09-.946A3.077 3.077 0 0 1 4.912 19l-.132-.38-.012-2.946-.011-2.947.551.001c.465 0 .614-.016.947-.103a4.023 4.023 0 0 0 2.274-1.59c.13-.192.131-.193.191-.105.033.048.163.217.289.374m3.479 5.5c.806.167 1.541.902 1.708 1.708.027.128.044.713.044 1.47v1.258H9.76v-1.258c0-.757.017-1.342.044-1.47.162-.785.861-1.504 1.647-1.695.264-.064.762-.07 1.037-.013'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMiniStoreCrooked);
export default ForwardRef;