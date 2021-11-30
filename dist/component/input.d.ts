/**
 * 输入
 */
import Element from '../core/element';
import Context from '../core/context';
interface Config {
    color: string;
    prefix: string;
}
/**
 * 类
 */
declare class Input extends Element {
    private config;
    private input;
    /**
     * 构造方法
     * @param context 上下文
     */
    constructor(context: Context, config?: Partial<Config>);
    /**
     * 挂载
     */
    mount(): void;
}
export default Input;
export { Config };
