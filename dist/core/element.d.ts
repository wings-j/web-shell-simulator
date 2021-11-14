/**
 * @name 元素
 */
import Context from '../core/context';
/**
 * @name 元素
 */
declare abstract class Element {
    context: Context;
    dom: HTMLElement;
    /**
     * @name 元素
     */
    constructor(context: Context, dom: HTMLElement);
    /**
     * @name 删除
     */
    remove(): void;
}
export default Element;
