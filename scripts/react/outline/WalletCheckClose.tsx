import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletCheckClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.579 2.279C3.458 2.47 1.763 4.011 1.333 6.14c-.068.338-.073.701-.073 5.86 0 5.159.005 5.522.073 5.86.39 1.929 1.783 3.354 3.703 3.787.376.085.461.087 4.136.102 2.726.012 3.813.003 3.974-.03.68-.141.806-1.075.186-1.383-.145-.073-.33-.077-4.072-.096l-3.92-.02-.32-.11c-.538-.184-.878-.4-1.304-.826-.428-.428-.645-.771-.824-1.304-.101-.303-.108-.369-.123-1.265l-.016-.946 1.373-.02c1.675-.025 1.915-.068 2.667-.472a3.727 3.727 0 0 0 1.888-2.597 4.995 4.995 0 0 0 0-1.36 3.73 3.73 0 0 0-1.884-2.595c-.756-.407-.994-.449-2.671-.474l-1.373-.02.016-.946c.015-.896.022-.962.123-1.265.179-.533.396-.876.824-1.304.426-.426.766-.642 1.304-.826l.32-.11h13.32l.32.11c.538.184.878.4 1.304.826.427.426.642.766.826 1.304l.11.32.02 3.44.02 3.44.093.149c.363.584 1.228.441 1.366-.225.034-.162.042-1.111.03-3.473-.015-3.154-.018-3.262-.102-3.635-.422-1.88-1.795-3.254-3.683-3.684l-.384-.088-6.34-.007c-3.487-.004-6.484.006-6.661.022m-.001 7.542c.371.097.696.291 1.003.598.46.46.659.937.659 1.581 0 .644-.199 1.121-.659 1.581a2.67 2.67 0 0 1-.524.409c-.445.233-.579.25-2.005.25H2.76V9.76h1.292c1.03 0 1.339.012 1.526.061m16.213 6.466a.893.893 0 0 0-.306.187c-.087.08-.789.87-1.562 1.755-1.384 1.587-1.522 1.723-1.654 1.622l-.849-.676c-.44-.351-.867-.689-.949-.751-.672-.506-1.524.259-1.098.987.071.121 2 1.654 2.217 1.762.319.158.542.201.912.175a1.726 1.726 0 0 0 1.02-.414c.189-.172 3.03-3.416 3.134-3.58.105-.166.105-.491-.001-.695a.763.763 0 0 0-.864-.372'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletCheckClose);
export default ForwardRef;
