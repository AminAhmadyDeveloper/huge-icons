import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgEyeLightDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.815 1.277a.8.8 0 0 0-.462.354c-.092.147-.093.162-.093 1.369s.001 1.222.093 1.369c.357.574 1.223.443 1.363-.207.056-.261.057-2.079.001-2.321a.747.747 0 0 0-.902-.564m-9 3a.802.802 0 0 0-.459.349c-.103.167-.123.529-.038.694.095.182 1.692 1.764 1.862 1.844a.761.761 0 0 0 .64.001.61.61 0 0 0 .358-.375.75.75 0 0 0-.014-.61c-.075-.16-1.659-1.767-1.824-1.85a.98.98 0 0 0-.525-.053M20.9 4.259a2.182 2.182 0 0 1-.159.041c-.161.035-1.799 1.653-1.905 1.88a.796.796 0 0 0 .116.834c.102.116.368.224.548.224.295 0 .445-.113 1.325-1.003.785-.794.848-.869.886-1.046.071-.341-.053-.659-.322-.822-.124-.075-.406-.138-.489-.108m-9.488 2.022c-2.196.151-4.466 1.171-6.741 3.031-.542.443-.848.798-1.064 1.232a3.258 3.258 0 0 0 0 2.912c.216.434.522.789 1.064 1.232 2.12 1.733 4.219 2.729 6.309 2.994.531.067 1.599.058 2.16-.019 2.027-.278 4.172-1.312 6.213-2.995.868-.717 1.261-1.383 1.364-2.318a3.203 3.203 0 0 0-.658-2.33c-.481-.634-2.139-1.847-3.473-2.54-1.784-.927-3.461-1.316-5.174-1.199m2.014 1.616c1.625.342 3.166 1.134 4.875 2.505.523.421.648.56.811.909.098.207.108.273.108.689 0 .416-.01.482-.108.689-.163.349-.288.488-.811.908-1.711 1.373-3.248 2.161-4.895 2.512-.464.099-.581.108-1.406.108s-.942-.009-1.406-.108c-1.655-.353-3.18-1.135-4.895-2.511-.523-.421-.648-.56-.811-.909-.098-.207-.108-.273-.108-.689 0-.416.01-.482.108-.689.163-.349.288-.488.811-.909 1.89-1.517 3.633-2.353 5.421-2.601.143-.02.611-.03 1.04-.021.644.012.865.032 1.266.117M11.66 9.278c-.884.107-1.633.623-2.092 1.442-.4.714-.4 1.846 0 2.56.526.939 1.385 1.451 2.432 1.451s1.906-.512 2.432-1.451c.4-.714.4-1.846 0-2.56-.575-1.026-1.636-1.578-2.772-1.442m.794 1.563c.29.109.596.415.705.705.176.471.068.975-.285 1.328a1.216 1.216 0 0 1-1.748 0c-.279-.278-.38-.549-.357-.954.021-.353.107-.547.355-.795.273-.272.473-.356.864-.362.16-.002.327.026.466.078M4.18 16.836c-.17.08-1.767 1.662-1.862 1.844a.926.926 0 0 0-.051.324c0 .495.415.813.922.707.177-.038.252-.101 1.046-.886.89-.88 1.003-1.03 1.003-1.325 0-.18-.108-.446-.224-.548a.794.794 0 0 0-.834-.116m15-.001a.61.61 0 0 0-.358.375.75.75 0 0 0 .014.61c.047.102.386.468.929 1.005.792.783.869.848 1.045.885.579.122 1.022-.321.9-.9-.037-.176-.102-.253-.885-1.045-.537-.543-.903-.882-1.005-.929a.761.761 0 0 0-.64-.001m-7.365 2.442a.8.8 0 0 0-.462.354c-.092.147-.093.162-.093 1.369s.001 1.222.093 1.369c.357.574 1.223.443 1.363-.207.056-.261.057-2.079.001-2.321a.747.747 0 0 0-.902-.564'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEyeLightDouble);
export default ForwardRef;
