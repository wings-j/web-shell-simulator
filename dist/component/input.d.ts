/**
 * 输入
 */
import Element from '../core/element';
import Context from '../core/context';
interface Config {
    color: string;
    prefix: string;
    padding: number;
    value: string;
    fixOnBlur: boolean;
    callback: (v: string) => void;
}
declare type PartialConfig = Partial<Config>;
/**
 * 类
 */
declare class Input extends Element {
    private config;
    private input;
    active: boolean;
    /**
     * 构造方法
     * @param context 上下文
     */
    constructor(context: Context, config?: PartialConfig);
    /**
     * 挂载
     */
    mount(): void;
}
export default Input;
export { PartialConfig as Config };
