import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBoxFavorite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M5.579 1.279C3.458 1.47 1.763 3.011 1.333 5.14c-.069.339-.073.734-.073 6.86s.004 6.521.073 6.86c.39 1.929 1.783 3.354 3.703 3.787.376.085.461.087 4.136.102 2.726.012 3.813.003 3.974-.03.68-.141.806-1.075.186-1.383-.145-.073-.33-.077-4.072-.096l-3.92-.02-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V5.34l.11-.32c.184-.538.4-.878.826-1.304.428-.428.771-.645 1.304-.824.304-.101.369-.108 1.27-.123l.95-.016v3.413c0 2.18.016 3.508.042 3.674a1.727 1.727 0 0 0 1.174 1.399c.436.149 1.006.09 1.424-.149.099-.056.596-.514 1.103-1.016.677-.669.949-.914 1.018-.914.068 0 .34.244 1.016.914.508.503 1.004.961 1.103 1.017a1.808 1.808 0 0 0 1.866-.068c.398-.269.659-.699.732-1.204.025-.17.041-1.61.041-3.673l.001-3.393.95.016c.901.015.966.022 1.27.123.533.179.876.396 1.304.824.426.426.642.766.826 1.304l.11.32.02 3.94.02 3.94.093.149c.362.583 1.228.441 1.366-.223.033-.161.042-1.248.03-3.974-.015-3.675-.017-3.76-.102-4.136-.424-1.882-1.795-3.254-3.683-3.684l-.384-.088-6.34-.007c-3.487-.004-6.484.006-6.661.022m9.661 4.959v3.477l-.089.063a.36.36 0 0 1-.166.062c-.048 0-.435-.353-1.002-.913-.507-.502-.989-.952-1.069-1a1.816 1.816 0 0 0-1.828 0c-.08.048-.562.498-1.069 1-.567.56-.954.913-1.002.913a.36.36 0 0 1-.166-.062l-.089-.063V2.76h6.48v3.478m.683 9.243a2.696 2.696 0 0 0-1.839 1.362c-.364.655-.377 1.701-.028 2.389.168.333.531.743 1.53 1.733 1.303 1.29 1.561 1.444 2.414 1.444.506 0 .821-.087 1.203-.334.292-.188 2.028-1.886 2.402-2.349.424-.524.595-1.004.595-1.666 0-.708-.223-1.268-.709-1.783-.33-.35-.663-.57-1.071-.705-.276-.092-.389-.107-.82-.109-.59-.002-.898.076-1.33.337l-.27.163-.27-.163a2.93 2.93 0 0 0-.53-.244c-.298-.093-.998-.134-1.277-.075m.943 1.558c.091.04.302.199.469.353.238.221.341.289.484.32.32.068.502-.001.846-.32.376-.348.585-.447.936-.445.326.002.559.101.789.335.316.323.405.755.244 1.186-.078.209-.184.331-1.07 1.228-.541.547-1.064 1.047-1.162 1.11a.614.614 0 0 1-.402.114.614.614 0 0 1-.402-.114c-.098-.063-.621-.563-1.162-1.11-.886-.897-.992-1.019-1.07-1.228a1.05 1.05 0 0 1-.006-.798c.083-.224.334-.513.533-.617.276-.143.665-.148.973-.014'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxFavorite);
export default ForwardRef;
