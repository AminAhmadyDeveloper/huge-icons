import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatting = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.2 3.045c-3.122.319-5.777 2.486-6.782 5.535-.38 1.152-.427 1.662-.411 4.4l.013 2.16.108.295c.131.361.336.675.607.936.241.231.456.364.82.506l.265.103 3.8.013c2.704.009 3.926-.001 4.237-.035 3.148-.337 5.661-2.836 6.081-6.05a7.159 7.159 0 0 0-1.25-5.027c-.346-.489-1.123-1.268-1.608-1.61a6.91 6.91 0 0 0-3.248-1.228c-.452-.05-2.137-.048-2.632.002m10.786 7.318c-.066 1.372-.343 2.495-.903 3.657-.33.684-.512.985-.958 1.58-1.297 1.732-3.156 2.881-5.319 3.288-.434.081-.611.088-2.6.102l-2.133.016.073.081c.132.146.666.575.975.781a7.37 7.37 0 0 0 2.361.988c.686.139 1.016.149 4.878.136l3.82-.012.265-.103c.365-.142.579-.275.823-.509.277-.266.499-.617.616-.975l.096-.293v-4.84l-.11-.57a9.184 9.184 0 0 0-.706-2.149c-.232-.476-.745-1.284-1.016-1.598l-.135-.157-.027.577'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatting);
export default ForwardRef;
