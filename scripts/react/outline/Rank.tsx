import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRank = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.686 1.741c-.086.073-.151.195-.229.43-.123.371-.191.491-.313.559-.046.026-.288.057-.538.069-.45.023-.456.025-.569.152-.147.164-.179.297-.12.494.038.127.105.2.345.378.164.121.328.265.364.32.092.141.081.346-.04.726-.092.292-.099.347-.055.479a.512.512 0 0 0 .473.332c.119 0 .222-.049.484-.229.285-.197.358-.23.515-.23.159-.001.223.028.48.216.231.168.337.22.477.233a.475.475 0 0 0 .509-.322c.044-.132.037-.187-.055-.479-.121-.38-.132-.585-.04-.726.036-.055.2-.199.364-.32.24-.178.307-.251.345-.378.059-.197.027-.33-.12-.494-.113-.127-.119-.129-.569-.152-.25-.012-.492-.043-.538-.069-.122-.068-.19-.188-.313-.559-.137-.413-.258-.531-.543-.531-.149 0-.222.023-.314.101m-1.03 5.539c-.926.129-1.716.688-2.112 1.497-.249.509-.274.656-.293 1.772l-.018 1.009-.156-.079c-.38-.194-.606-.218-2.077-.218-1.543 0-1.674.016-2.204.278a2.799 2.799 0 0 0-1.463 1.781c-.068.242-.073.497-.073 3.68 0 3.183.005 3.438.073 3.68a2.823 2.823 0 0 0 1.987 1.987c.229.064.43.073 1.68.073 1.255 0 1.45-.009 1.68-.073a2.943 2.943 0 0 0 1.038-.531l.285-.223.248.204c.288.236.698.447 1.069.55.229.064.43.073 1.68.073 1.255 0 1.45-.009 1.68-.073a2.943 2.943 0 0 0 1.038-.531l.285-.223.248.204c.288.236.698.447 1.069.55.229.064.43.073 1.68.073 1.255 0 1.45-.009 1.68-.073a2.83 2.83 0 0 0 1.987-1.987c.067-.239.073-.456.073-2.68s-.006-2.441-.073-2.68a2.794 2.794 0 0 0-1.465-1.782c-.528-.26-.66-.277-2.202-.277-1.472 0-1.697.023-2.079.218l-.157.081-.014-2.01c-.013-1.779-.023-2.038-.086-2.25a2.812 2.812 0 0 0-1.462-1.762c-.5-.247-.642-.266-2.042-.28-.693-.006-1.37.003-1.504.022m2.881 1.597c.251.123.463.335.586.586l.097.197v10.68l-.098.199a1.306 1.306 0 0 1-.665.619c-.205.076-.306.082-1.457.082s-1.252-.006-1.457-.082c-.267-.1-.53-.345-.665-.619l-.098-.199-.012-5.26c-.008-3.835.001-5.303.034-5.42.069-.244.269-.53.464-.664.334-.23.358-.233 1.774-.224 1.287.008 1.302.009 1.497.105m-6 4c.251.123.463.335.586.586l.097.197v6.68l-.098.199a1.306 1.306 0 0 1-.665.619c-.205.076-.306.082-1.457.082s-1.252-.006-1.457-.082c-.267-.1-.53-.345-.665-.619l-.098-.199-.012-3.26c-.009-2.35.001-3.305.034-3.42.069-.244.269-.53.464-.664.334-.23.358-.233 1.774-.224 1.287.008 1.302.009 1.497.105m12 2c.251.123.463.335.586.586l.097.197v4.68l-.098.199a1.306 1.306 0 0 1-.665.619c-.205.076-.306.082-1.457.082s-1.252-.006-1.457-.082c-.267-.1-.53-.345-.665-.619l-.098-.199-.012-2.26c-.009-1.607.001-2.306.033-2.42.07-.244.27-.53.465-.664.334-.23.358-.233 1.774-.224 1.287.008 1.302.009 1.497.105'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRank);
export default ForwardRef;
