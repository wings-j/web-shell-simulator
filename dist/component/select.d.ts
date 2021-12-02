/**
 * 单选
 */
import Context from '../core/context';
import Element from '../core/element';
interface Config {
    color: string;
    multi: boolean;
    singlePositive: string;
    singleNegative: string;
    multiPositive: string;
    multiNegative: string;
    padding: number;
    callback: (res: string | string[]) => void;
    removeOnEnter: boolean;
}
declare type PartialConfig = Partial<Config>;
/**
 * 类
 */
declare class Select extends Element {
    private config;
    private selections;
    private $selections;
    private length;
    private index;
    private indexes;
    /**
     * 构造方法
     * @param context 上下文
     * @param selections 选项
     * @param config 配置
     */
    constructor(context: Context, selections: string[], config?: PartialConfig);
    /**
     * 处理键盘弹起
     * @param ev 事件
     */
    private handle_keyUp;
    /**
     * 渲染
     */
    render(): void;
}
export default Select;
export { PartialConfig as Config };
