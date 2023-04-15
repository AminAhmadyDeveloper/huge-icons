import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgListViewRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.687 5.285c-.461.076-.995.456-1.218.865-.199.365-.228.603-.228 1.85 0 1.505.051 1.727.504 2.202.471.493.728.557 2.255.557s1.784-.064 2.255-.557c.453-.475.504-.697.504-2.202 0-1.247-.029-1.485-.228-1.85-.137-.252-.507-.594-.783-.724a2.119 2.119 0 0 0-.471-.144c-.307-.05-2.287-.048-2.59.003m7.124-.007a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.143-.006c-1.729-.004-3.201.007-3.272.024M5.167 6.826c.067.061.073.152.073 1.167 0 .968-.008 1.11-.066 1.174-.061.067-.152.073-1.167.073-.968 0-1.11-.008-1.174-.066-.067-.061-.073-.152-.073-1.167 0-.968.008-1.11.066-1.174.061-.067.152-.073 1.167-.073.968 0 1.11.008 1.174.066m4.644 2.453a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 12.213.063 12.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-6.143-.006c-3.379-.004-6.201.008-6.272.025m-7.124 4.006c-.461.076-.995.456-1.218.865-.199.365-.228.603-.228 1.85 0 1.505.051 1.727.504 2.202.471.493.728.557 2.255.557s1.784-.064 2.255-.557c.453-.475.504-.697.504-2.202 0-1.247-.029-1.485-.228-1.85-.137-.252-.507-.594-.783-.724a2.119 2.119 0 0 0-.471-.144c-.307-.05-2.287-.048-2.59.003m7.124-.007a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.143-.006c-1.729-.004-3.201.007-3.272.024m-4.644 1.548c.067.061.073.152.073 1.167 0 .968-.008 1.11-.066 1.174-.061.067-.152.073-1.167.073-.968 0-1.11-.008-1.174-.066-.067-.061-.073-.152-.073-1.167 0-.968.008-1.11.066-1.174.061-.067.152-.073 1.167-.073.968 0 1.11.008 1.174.066m4.644 2.453a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 12.213.063 12.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-6.143-.006c-3.379-.004-6.201.008-6.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgListViewRectangle);
export default ForwardRef;