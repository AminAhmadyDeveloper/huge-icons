import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClipboardFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.656 1.281c-.355.048-.56.11-.867.262a2.732 2.732 0 0 0-1.349 1.46l-.085.221-.607.046c-.769.059-1.217.177-1.848.489-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.444-.056 10.652 0 11.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.444.056 10.652.056 11.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.056-.444.056-10.652 0-11.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018-.631-.312-1.079-.43-1.848-.489l-.607-.046-.068-.182a2.797 2.797 0 0 0-1.375-1.504c-.551-.272-.535-.271-3.042-.281-1.243-.005-2.37.005-2.504.024m4.881 1.596c.251.123.463.335.586.586.14.284.139.791-.001 1.076a1.306 1.306 0 0 1-.665.619c-.213.079-.296.082-2.457.082s-2.244-.003-2.457-.082a1.301 1.301 0 0 1-.664-.619c-.115-.236-.152-.655-.079-.885.079-.248.277-.528.466-.658.346-.238.268-.232 2.774-.224l2.3.008.197.097M7.419 4.95c.257.697.877 1.333 1.565 1.604.494.194.668.206 3.016.206 2.375 0 2.535-.011 3.047-.22.661-.268 1.27-.891 1.517-1.551l.09-.24.483.021c.863.037 1.533.332 2.147.946.397.398.617.749.805 1.29l.131.374v11.24l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H6.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 3.912 19l-.132-.38V7.38L3.912 7c.173-.497.392-.861.738-1.226a3.167 3.167 0 0 1 1.197-.803c.419-.157.655-.2 1.138-.206l.364-.005.07.19m2.341 5.754c-1.176.316-1.96 1.33-1.96 2.537 0 .463.069.751.286 1.199.159.328.206.382 1.389 1.566 1.151 1.151 1.243 1.234 1.525 1.366.405.19.671.242 1.124.219.419-.02.72-.111 1.064-.32.133-.08.663-.581 1.387-1.31 1.125-1.132 1.18-1.195 1.339-1.521.217-.447.286-.735.286-1.199 0-.714-.252-1.333-.74-1.821-.507-.507-1.021-.739-1.71-.77-.636-.03-1.137.095-1.58.393l-.17.114-.15-.102a2.768 2.768 0 0 0-.83-.357c-.308-.073-.977-.07-1.26.006m.989 1.476c.152.046.284.134.517.346.347.316.492.394.734.394s.387-.078.734-.394c.248-.225.362-.3.537-.351a1.109 1.109 0 0 1 1.31.552c.1.183.116.256.116.513-.002.469-.058.547-1.244 1.729C12.41 16.007 12.268 16.12 12 16.12s-.41-.113-1.453-1.151c-1.056-1.052-1.189-1.218-1.245-1.556a1.128 1.128 0 0 1 .473-1.083c.322-.216.605-.259.974-.15'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClipboardFavourite);
export default ForwardRef;