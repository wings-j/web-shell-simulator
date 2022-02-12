/**
 * 空行
 */
import Element from '../type/element';
import Context from '../core/context';
/**
 * 类
 */
declare class Blank extends Element {
    name: string;
    /**
     * 构造方法
     * @param context 上下文
     */
    constructor(context: Context);
}
export default Blank;
