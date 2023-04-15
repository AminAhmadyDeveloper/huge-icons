import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudMoonFlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.46 1.283c-.809.07-1.724.375-2.473.827-.619.373-1.355 1.071-1.727 1.64-.061.093-.115.17-.12.17-.006 0-.109-.044-.23-.097-.609-.27-1.537-.482-2.364-.541A7.743 7.743 0 0 0 4.36 4.797c-.37.274-1.051.927-1.363 1.307C1.623 7.781 1 10.063 1.341 12.177c.241 1.504.909 2.913 1.891 3.992.368.405.912.893 1.241 1.114.265.177.316.197.517.197.314 0 .529-.131.666-.407.207-.416.105-.668-.456-1.117-1.228-.983-2.002-2.223-2.328-3.732-.128-.587-.128-1.86-.001-2.447.277-1.278.815-2.269 1.726-3.18s1.902-1.449 3.18-1.726c.586-.127 1.86-.127 2.446 0 1.207.262 2.232.801 3.087 1.624.403.388.821.897 1.003 1.222l.088.156-.257.143a6.3 6.3 0 0 0-1.09.811c-.302.294-.366.574-.204.892.126.247.329.398.576.427.264.031.45-.058.891-.425a4.263 4.263 0 0 1 4.03-.746 4.243 4.243 0 0 1 2.42 5.964 4.199 4.199 0 0 1-1.496 1.65 4.287 4.287 0 0 1-.446.253c-.241.107-.375.221-.466.4a.767.767 0 0 0-.017.628.61.61 0 0 0 .358.375c.259.119.441.097.854-.104 1.644-.8 2.8-2.373 3.132-4.261.075-.429.065-1.414-.02-1.88a6.474 6.474 0 0 0-.546-1.61l-.196-.39.196-.39A5.44 5.44 0 0 0 22.735 7c-.001-.724-.071-1.179-.279-1.8-.854-2.553-3.299-4.15-5.996-3.917m1.265 1.536c2.538.444 4.097 3.03 3.31 5.49-.065.202-.135.379-.157.392-.021.013-.133-.056-.248-.154-.621-.527-1.582-.989-2.428-1.166-.666-.141-1.592-.156-2.223-.038-.118.022-.13.01-.297-.27a8.547 8.547 0 0 0-1.872-2.144c-.182-.144-.33-.277-.33-.294 0-.088.539-.682.837-.923.557-.449 1.372-.815 2.023-.908a5.383 5.383 0 0 1 1.385.015m-4.905 8.457a1.016 1.016 0 0 0-.216.087c-.052.031-1.262 1.455-2.688 3.165-2.076 2.489-2.601 3.141-2.637 3.276a.748.748 0 0 0 .512.914c.087.024.631.042 1.299.042h1.15v1.65c0 1.08.016 1.705.045 1.809.121.439.661.655 1.085.436.062-.032 1.281-1.461 2.709-3.174 2.064-2.477 2.606-3.15 2.642-3.283.087-.325-.034-.633-.326-.826l-.169-.112-1.231-.013-1.232-.012-.011-1.728c-.012-1.657-.015-1.733-.094-1.866-.162-.277-.537-.44-.838-.365m-.494 5.064a.925.925 0 0 0 .354.345c.071.039.328.061.895.075l.795.02-1.295 1.554-1.295 1.555-.02-1.055c-.023-1.195-.03-1.225-.355-1.453l-.172-.121-.801-.02-.802-.02 1.295-1.554 1.295-1.555.02 1.055c.017.88.031 1.074.086 1.174'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonFlash);
export default ForwardRef;
