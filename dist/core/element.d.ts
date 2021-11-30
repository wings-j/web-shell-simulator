/**
 * 元素
 */
import Context from '../core/context';
/**
 * 元素
 */
declare abstract class Element {
    context: Context;
    dom: HTMLElement;
    /**
     * 构造方法
     * @param context 上下文
     */
    constructor(context: Context);
    /**
     * 挂载
     */
    mount(): void;
    /**
     * 删除
     */
    remove(): void;
}
export default Element;
