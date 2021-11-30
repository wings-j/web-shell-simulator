/**
 * 输入
 */
import Element from '../core/element';
import Context from '../core/context';
/**
 * 类
 */
declare class Input extends Element {
    private input;
    /**
     * 构造方法
     * @param context 上下文
     */
    constructor(context: Context);
    /**
     * 挂载
     */
    mount(): void;
}
export default Input;
