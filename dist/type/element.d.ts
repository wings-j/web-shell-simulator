/**
 * 元素
 */
import Context from '../core/context';
/**
 * 元素
 */
declare abstract class Element {
    protected context: Context;
    dom: HTMLElement;
    active: boolean;
    name: string;
    /**
     * 构造方法
     * @param context 上下文
     */
    constructor(context: Context);
    /**
     * 销毁
     */
    protected destroy(): void;
    /**
     * 挂载
     */
    mount(): void;
    /**
     * 删除
     */
    remove(): void;
    /**
     * 聚焦
     * @description 重载
     */
    focus(): void;
    /**
     * 失焦
     * @description 重载
     */
    blur(): void;
}
export default Element;
