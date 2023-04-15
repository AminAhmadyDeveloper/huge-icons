import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpeakerMute = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.62 3.278c-.314.05-.537.12-.811.253-.141.069-1.245.867-2.511 1.815-1.242.931-2.335 1.733-2.428 1.783-.166.088-.21.091-1.71.115-.994.015-1.618.041-1.76.073-.318.072-.904.368-1.169.59-.428.36-.739.85-.898 1.413-.067.239-.073.456-.073 2.68 0 2.216.006 2.442.073 2.68.219.784.75 1.436 1.447 1.777.543.266.597.273 2.34.299l1.58.024.18.102c.099.056 1.191.86 2.426 1.786 1.36 1.02 2.349 1.733 2.505 1.808a2.46 2.46 0 0 0 1.189.261c.648 0 1.222-.205 1.748-.623.43-.343.736-.811.901-1.382l.091-.312V5.58l-.092-.319a2.767 2.767 0 0 0-1.968-1.915c-.29-.074-.81-.107-1.06-.068m.909 1.6c.248.118.474.34.594.585l.097.197v12.68l-.097.197c-.272.553-.938.837-1.513.646-.143-.047-.822-.534-2.493-1.786-1.434-1.075-2.402-1.773-2.577-1.859-.53-.259-.6-.268-2.32-.294-1.485-.023-1.569-.028-1.746-.11a1.356 1.356 0 0 1-.597-.597l-.097-.197V9.66l.097-.197c.123-.251.335-.463.586-.586.196-.096.208-.097 1.777-.12 1.509-.021 1.593-.026 1.86-.114.154-.051.379-.143.5-.204.121-.062 1.25-.885 2.51-1.83 1.574-1.18 2.349-1.738 2.48-1.783.261-.09.689-.067.939.052m4.131 4.429a.696.696 0 0 0-.344.341.807.807 0 0 0-.012.644c.035.07.417.483.85.918l.785.79-.785.79c-.433.435-.815.848-.85.918-.127.254-.048.673.162.857a.767.767 0 0 0 .805.134c.095-.04.435-.347.939-.85l.79-.788.79.788c.504.503.844.81.939.85a.735.735 0 0 0 1.031-.679.84.84 0 0 0-.064-.312c-.035-.07-.417-.483-.85-.918l-.785-.79.785-.79c.433-.435.815-.848.85-.918.122-.244.065-.603-.131-.826a.812.812 0 0 0-.525-.226c-.303 0-.429.092-1.25.911l-.79.788-.79-.788c-.504-.503-.844-.81-.939-.85-.189-.078-.457-.076-.611.006'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeakerMute);
export default ForwardRef;