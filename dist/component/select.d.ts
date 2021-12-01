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
    mulitNegative: string;
    padding: number;
    callback: (res: string | string[]) => void;
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
    active: boolean;
    /**
     * 构造方法
     * @param selections 选项
     */
    constructor(context: Context, selectons: string[], config?: PartialConfig);
    /**
     * 处理键盘弹起
     * @param ev 事件
     */
    private handle_window_keyUp;
    /**
     * 销毁
     */
    protected destroy(): void;
    /**
     * 选择
     * @param index 目标索引
     */
    select(index?: number): void;
}
export default Select;
export { PartialConfig as Config };
