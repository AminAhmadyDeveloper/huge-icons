import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPills = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.64 1.267c-1.959.107-3.686.864-5.075 2.226a7.621 7.621 0 0 0-2.024 3.449l-.122.444c-.008.025-.091.059-.186.074-.33.055-1.136.342-1.613.576a7.14 7.14 0 0 0-2.013 1.421 7.367 7.367 0 0 0-1.57 2.163 7.722 7.722 0 0 0 1.569 8.923 7.19 7.19 0 0 0 2.014 1.42c3.499 1.713 7.74.525 9.889-2.77a7.826 7.826 0 0 0 .984-2.238l.092-.366.477-.132c1.887-.522 3.471-1.711 4.528-3.4.483-.773.797-1.577 1.016-2.601.082-.389.092-.543.093-1.436.001-1.087-.025-1.301-.261-2.143a7.486 7.486 0 0 0-1.413-2.73c-1.342-1.676-3.227-2.665-5.465-2.866a6.906 6.906 0 0 0-.58-.033l-.34.019m1.68 1.626c.231.054.537.138.68.186.529.176 1.35.611 1.779.942.075.058-.035.175-2.386 2.526l-2.464 2.464-.235-.18c-.872-.67-2.05-1.202-3.167-1.43a10.427 10.427 0 0 0-.967-.132l-.554-.049.08-.24c.1-.3.438-1.015.605-1.28A6.763 6.763 0 0 1 11.7 3.691c.551-.348 1.455-.7 2.12-.827.511-.097.523-.098 1.32-.083.635.011.829.03 1.18.112m3.742 2.439c.328.451.7 1.184.876 1.725.224.689.277 1.058.28 1.943.002.883-.048 1.229-.283 1.952-.435 1.341-1.48 2.658-2.682 3.382a8.162 8.162 0 0 1-1.233.58l-.24.08-.049-.567c-.127-1.492-.634-2.864-1.478-4.006l-.261-.353 2.454-2.454c1.35-1.35 2.463-2.453 2.474-2.452.011 0 .075.077.142.17M10.22 8.881c2.109.444 3.829 1.885 4.584 3.839.151.39.32 1.017.37 1.37l.021.15h-12.4l.026-.19c.101-.724.417-1.582.851-2.31.458-.769 1.301-1.612 2.068-2.068.78-.465 1.52-.73 2.38-.854.541-.079 1.578-.047 2.1.063m4.958 7.029c-.256 1.484-.812 2.568-1.824 3.554-.543.529-.94.81-1.626 1.153-1.46.73-3.25.827-4.836.263-1.303-.464-2.532-1.463-3.22-2.62-.435-.73-.75-1.586-.851-2.31l-.026-.19h12.409l-.026.15'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPills);
export default ForwardRef;