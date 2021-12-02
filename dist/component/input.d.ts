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
    callback: (v: string) => void;
    removeOnEnter: boolean;
}
declare type PartialConfig = Partial<Config>;
/**
 * 类
 */
declare class Input extends Element {
    private config;
    private $input;
    /**
     * 构造方法
     * @param context 上下文
     */
    constructor(context: Context, config?: PartialConfig);
    /**
     * 处理键盘弹起
     * @param ev 事件
     */
    handle_keyup(ev: KeyboardEvent): void;
    /**
     * 挂载
     */
    mount(): void;
}
export default Input;
export { PartialConfig as Config };
