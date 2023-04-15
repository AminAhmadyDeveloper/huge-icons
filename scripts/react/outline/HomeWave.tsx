import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeWave = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.546 1.283a4.485 4.485 0 0 0-2.266.844c-.539.387-5.494 4.494-5.728 4.747A5.012 5.012 0 0 0 2.312 9.4c-.073.423-.076 8.882-.003 9.303.356 2.042 1.818 3.555 3.833 3.964.336.069.696.073 5.858.073s5.522-.004 5.858-.073c1.841-.374 3.243-1.685 3.724-3.483.17-.634.185-1.119.166-5.504-.018-4.466-.01-4.305-.252-5.038a4.974 4.974 0 0 0-1.054-1.775c-.23-.249-5.192-4.359-5.722-4.74a4.677 4.677 0 0 0-1.619-.745c-.221-.052-1.112-.154-1.181-.136-.011.003-.179.019-.374.037M12.68 2.82c.369.078.817.265 1.087.455.295.207 5.203 4.248 5.467 4.5.391.375.666.819.876 1.414l.11.311.011 4.42c.013 4.847.018 4.714-.225 5.313-.314.77-1.028 1.479-1.807 1.794-.541.218-.347.212-6.199.212s-5.658.006-6.199-.212c-.772-.312-1.482-1.013-1.803-1.78-.247-.589-.242-.471-.229-5.327L3.78 9.5l.11-.311c.21-.595.485-1.039.876-1.414.264-.252 5.172-4.293 5.467-4.5a3.395 3.395 0 0 1 1.057-.452c.341-.075 1.041-.076 1.39-.003m-2.5 7.461c-.843.113-1.554.72-1.825 1.559-.069.215-.088.405-.109 1.1-.024.79-.031.848-.118.968-.189.266-.294.307-.856.335-.459.023-.527.036-.667.129a.697.697 0 0 0-.338.635c0 .196.019.263.116.401.198.28.351.332.957.329.581-.003.84-.06 1.24-.271.308-.162.725-.579.886-.886.224-.426.258-.605.287-1.526l.027-.847.121-.149a.725.725 0 0 1 .599-.298c.244 0 .434.094.599.298l.121.149.023 1.847c.021 1.611.033 1.874.094 2.066a2.322 2.322 0 0 0 1.563 1.542c.339.098.921.09 1.26-.018.5-.16.915-.467 1.195-.886.223-.334.32-.622.383-1.128.046-.378.069-.456.169-.579.183-.227.342-.291.72-.291.491 0 .712-.059.893-.24a.738.738 0 0 0-.361-1.24c-.283-.068-.991-.025-1.327.08a2.225 2.225 0 0 0-1.187.882c-.223.334-.323.628-.385 1.133-.046.374-.07.454-.168.576a.723.723 0 0 1-.592.289.725.725 0 0 1-.599-.298l-.121-.149-.023-1.847c-.021-1.611-.033-1.874-.094-2.066-.24-.748-.835-1.339-1.543-1.533a2.513 2.513 0 0 0-.94-.066'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeWave);
export default ForwardRef;
