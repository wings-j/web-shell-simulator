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
    allowEmpty: boolean;
}
declare type PartialConfig = Partial<Config>;
/**
 * 类
 */
declare class Input extends Element {
    private _active;
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
    private handle_keyup;
    /**
     * 挂载
     */
    mount(): void;
    /**
     * 聚焦
     */
    focus(): void;
    /**
     * 失焦
     */
    blur(): void;
    /**
     * 回车
     */
    enter(): void;
}
export default Input;
export { PartialConfig as Config };
