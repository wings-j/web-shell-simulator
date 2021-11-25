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
     * 元素
     */
    constructor(context: Context, dom: HTMLElement);
    /**
     * 删除
     */
    remove(): void;
}
export default Element;
