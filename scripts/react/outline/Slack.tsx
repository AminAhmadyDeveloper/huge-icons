import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSlack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.18 3.281c-.843.113-1.555.72-1.824 1.559-.109.338-.117.918-.018 1.26A2.316 2.316 0 0 0 7.88 7.661c.292.09 1.901.134 2.254.06.325-.067.52-.262.587-.587.074-.353.03-1.962-.06-2.254-.23-.74-.832-1.339-1.541-1.533a2.513 2.513 0 0 0-.94-.066m5 0c-.852.114-1.557.722-1.831 1.579-.089.279-.089.29-.089 3.14 0 2.663.005 2.877.074 3.1a2.31 2.31 0 0 0 1.565 1.562c.316.091.886.091 1.202 0a2.31 2.31 0 0 0 1.565-1.562c.069-.223.074-.437.074-3.1 0-2.663-.005-2.877-.074-3.1-.231-.757-.829-1.357-1.546-1.553a2.513 2.513 0 0 0-.94-.066M8.944 4.903c.253.204.296.331.296.866v.471h-.471c-.536 0-.662-.043-.868-.298-.11-.136-.121-.176-.121-.442s.011-.306.121-.442c.187-.231.354-.305.648-.289.203.012.274.036.395.134m5 0c.314.254.296.067.296 3.097 0 3.032.018 2.843-.298 3.099-.136.11-.176.121-.442.121s-.306-.011-.442-.121c-.319-.258-.3-.059-.289-3.145l.011-2.747.121-.149c.187-.231.354-.305.648-.289.203.012.274.036.395.134M3.18 8.281A2.25 2.25 0 0 0 1.356 9.84c-.109.338-.117.918-.018 1.26A2.31 2.31 0 0 0 2.9 12.666c.223.069.437.074 3.1.074 2.663 0 2.877-.005 3.1-.074a2.31 2.31 0 0 0 1.562-1.565c.091-.316.091-.886 0-1.202-.213-.738-.782-1.314-1.542-1.564-.202-.066-.44-.072-2.96-.079-1.507-.005-2.848.007-2.98.025m15 0c-.852.114-1.557.722-1.831 1.579-.083.26-.089.354-.089 1.326v1.047l.12.17c.227.321.295.337 1.46.336.872 0 1.055-.011 1.26-.073.383-.117.7-.306.98-.586.443-.443.651-.948.651-1.58 0-.632-.208-1.137-.651-1.58a2.227 2.227 0 0 0-1.9-.639M8.84 9.834c.076.041.192.142.259.224.11.136.121.176.121.442s-.011.306-.121.442c-.256.316-.067.298-3.099.298s-2.843.018-3.099-.298c-.11-.136-.121-.176-.121-.442s.011-.306.121-.442c.256-.316.067-.298 3.099-.298 2.555 0 2.709.004 2.84.074m10.104.069c.229.185.303.352.287.646-.012.203-.036.274-.134.395-.204.253-.331.296-.87.296h-.473l.013-.516c.013-.507.015-.52.134-.666.187-.231.354-.305.648-.289.203.012.274.036.395.134M5.18 13.282a2.261 2.261 0 0 0-1.625 1.098 2.089 2.089 0 0 0-.285 1.1c-.003.649.2 1.15.65 1.6.443.443.948.651 1.58.651.632 0 1.137-.208 1.58-.651.273-.273.467-.593.581-.96.09-.292.134-1.901.06-2.254a.725.725 0 0 0-.532-.58c-.207-.052-1.623-.055-2.009-.004m5-.002c-.855.118-1.557.723-1.831 1.58-.089.279-.089.29-.089 3.14 0 2.663.005 2.877.074 3.1.117.384.307.701.586.98.443.443.948.651 1.58.651.632 0 1.137-.208 1.58-.651.279-.279.469-.596.586-.98.069-.223.074-.437.074-3.1 0-2.663-.005-2.877-.074-3.1-.231-.757-.827-1.355-1.546-1.554a2.476 2.476 0 0 0-.94-.066m5 .001a2.25 2.25 0 0 0-1.824 1.559c-.11.341-.119.921-.019 1.26.22.752.8 1.333 1.563 1.566.223.069.437.074 3.1.074 2.663 0 2.877-.005 3.1-.074a2.31 2.31 0 0 0 1.562-1.565c.091-.316.091-.886 0-1.202-.213-.738-.782-1.314-1.542-1.564-.202-.066-.44-.072-2.96-.079-1.507-.005-2.848.007-2.98.025m-8.94 1.95c0 .535-.043.662-.296.866-.121.098-.192.122-.395.134-.294.016-.461-.058-.648-.289-.11-.136-.121-.176-.121-.442s.011-.306.121-.442c.206-.255.332-.298.868-.298h.471v.471m4.704-.328c.314.254.296.067.296 3.097 0 3.032.018 2.843-.298 3.099-.136.11-.176.121-.442.121s-.306-.011-.442-.121c-.319-.258-.3-.059-.289-3.145l.011-2.747.121-.149c.187-.231.354-.305.648-.289.203.012.274.036.395.134m9.896-.069c.076.041.192.142.259.224.11.136.121.176.121.442s-.011.306-.121.442c-.256.316-.067.298-3.099.298s-2.843.018-3.099-.298c-.11-.136-.121-.176-.121-.442s.011-.306.121-.442c.256-.316.067-.298 3.099-.298 2.555 0 2.709.004 2.84.074m-7.025 3.442a.807.807 0 0 0-.462.355c-.091.146-.093.17-.093 1.189.001.892.011 1.074.074 1.28a2.31 2.31 0 0 0 1.565 1.562c.316.091.886.091 1.202 0a2.296 2.296 0 0 0 1.561-1.561c.091-.316.091-.886 0-1.202a2.316 2.316 0 0 0-1.542-1.56c-.176-.055-.414-.071-1.2-.082-.539-.008-1.036.001-1.105.019m2.025 1.558c.076.041.192.142.259.224.11.136.121.176.121.442s-.011.306-.121.442c-.187.231-.354.305-.648.289-.203-.012-.274-.036-.395-.134-.253-.204-.296-.331-.296-.866v-.471h.471c.382 0 .496.014.609.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSlack);
export default ForwardRef;
