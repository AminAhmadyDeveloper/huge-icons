import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.579 1.278c-2.04.188-3.76 1.683-4.198 3.65l-.066.3-.948.025c-1.025.026-1.457.089-1.991.29-1.589.597-2.703 1.914-3.043 3.597-.068.335-.073.668-.073 4.86s.005 4.525.073 4.86c.39 1.929 1.78 3.352 3.703 3.788.381.086.423.087 5.138.102 3.451.01 4.815.001 4.974-.032.678-.141.803-1.075.184-1.382-.146-.073-.349-.077-5.072-.096l-4.92-.02-.32-.11c-.538-.184-.878-.4-1.304-.826-.428-.428-.645-.771-.824-1.304-.101-.303-.108-.369-.123-1.267l-.016-.946 1.853-.017c1.774-.016 1.867-.021 2.154-.106a2.79 2.79 0 0 0 1.883-1.904 3.062 3.062 0 0 0 0-1.48 2.79 2.79 0 0 0-1.883-1.904c-.287-.085-.38-.09-2.154-.106l-1.853-.017.016-.946c.015-.898.022-.964.123-1.267.179-.533.396-.876.824-1.304.426-.426.766-.642 1.304-.826l.32-.11 7.949-.011 7.949-.01.011 3.23.011 3.231.093.149c.362.583 1.228.441 1.366-.223.033-.159.041-1.256.03-3.973-.014-3.68-.016-3.761-.101-4.137-.426-1.884-1.803-3.26-3.684-3.683-.375-.084-.463-.087-3.724-.095-1.837-.005-3.484.004-3.661.02M18.98 2.89c.539.185.878.4 1.304.826.404.405.613.722.784 1.194.051.139.092.271.092.292 0 .024-2.276.038-6.16.038-3.884 0-6.16-.014-6.16-.038 0-.09.196-.568.338-.824.207-.372.825-.992 1.194-1.196.15-.083.366-.187.48-.231.489-.187.481-.186 4.248-.178l3.56.007.32.11M6.454 12.841c.29.109.596.415.705.705.176.471.068.975-.285 1.328-.367.367-.359.366-2.376.366H2.76v-2.48h1.738c1.649 0 1.75.004 1.956.081m13.361 2.436a.8.8 0 0 0-.462.354l-.093.149-.011 2.394-.012 2.393-.414-.399c-.454-.436-.591-.509-.906-.479a.71.71 0 0 0-.648.728c0 .112.028.258.063.324.087.166 1.569 1.627 1.783 1.758.252.156.532.227.885.227s.633-.071.885-.227c.214-.131 1.696-1.592 1.783-1.758a.844.844 0 0 0 .063-.324.71.71 0 0 0-.648-.728c-.315-.03-.452.042-.907.481l-.416.4-.001-2.275c-.001-1.418-.017-2.343-.042-2.454a.747.747 0 0 0-.902-.564'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletArrowDown);
export default ForwardRef;
